function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  timerId = null;


const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]')
}
refs.stop.setAttribute("disabled", "disabled")


refs.start.addEventListener('click', () => {
  timerId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor(); 
        }, 1000);
        refs.start.disabled = true;
        refs.stop.disabled = false;
});

refs.stop.addEventListener('click', () => {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(timerId);
})

