const button=document.getElementById('download'),status=document.getElementById('status');
const defaultLabel=button.textContent;
// Keep the complete sentence on one line without overflowing narrow screens.
const ritual=document.querySelector('.ritual'),ritualLine=ritual.querySelector('.ritual-line');
function fitRitual(){
  const base=window.matchMedia('(max-width:760px)').matches?16:17;
  ritualLine.style.fontSize=base+'px';
  const available=ritual.clientWidth,required=ritualLine.getBoundingClientRect().width;
  if(required>available && available>0)ritualLine.style.fontSize=(base*(available-1)/required)+'px';
}
new ResizeObserver(fitRitual).observe(ritual);
document.fonts.ready.then(fitRitual);
fitRitual();
// Relative to this page, including /autumn-vocabulary-guide/ on GitHub Pages.
const GUIDE_PATH='files/vocabulary-guide.pdf';
async function getGuide(){
  const response=await fetch(GUIDE_PATH);
  if(!response.ok)throw new Error('Guide unavailable');
  if(!response.body || !response.body.getReader)return await response.blob();
  const total=Number(response.headers.get('content-length')) || 0;
  const reader=response.body.getReader(),parts=[];let size=0;
  while(true){
    const {done,value}=await reader.read();
    if(done)break;
    parts.push(value);size+=value.byteLength;
    button.textContent=total>0
      ? 'Завантаження… '+Math.min(100,Math.round(size/total*100))+'%'
      : 'Завантаження…';
  }
  if(!size)throw new Error('Empty file');
  return new Blob(parts,{type:'application/pdf'});
}
button.addEventListener('click',async()=>{
  if(button.disabled)return;
  button.disabled=true;button.setAttribute('aria-busy','true');button.textContent='Готуємо твій файл…';status.textContent='';
  try{
    const blob=await getGuide(),url=URL.createObjectURL(blob),link=document.createElement('a');
    link.href=url;link.download='vocabulary-guide.pdf';document.body.append(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),60000);
    status.textContent='Файл передано браузеру для збереження. Затишного вечора!';
  }catch(error){status.textContent='Не вдалося завантажити файл. Перевір з’єднання та спробуй ще раз.';}
  finally{button.disabled=false;button.removeAttribute('aria-busy');button.textContent=defaultLabel;}
});
