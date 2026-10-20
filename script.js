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
const GUIDE_PATH = './files/Autumn%20vocabulary%20pack.pdf';

button.addEventListener('click', () => {
  status.textContent = '';

  const link = document.createElement('a');
  link.href = GUIDE_PATH;
  link.download = 'Autumn vocabulary pack.pdf';

  document.body.appendChild(link);
  link.click();
  link.remove();

  status.textContent = 'Завантаження розпочато. Затишного вечора!';
});
