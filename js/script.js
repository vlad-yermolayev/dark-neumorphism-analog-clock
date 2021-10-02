document.addEventListener('DOMContentLoaded', () => {
  function analogClock() {
    const CLOCK = document.querySelector('.clock');
    const HOURS_ARROW = document.querySelector('.clock__hours span');
    const MINUTES_ARROW = document.querySelector('.clock__minutes span');
    const SECONDS_ARROW = document.querySelector('.clock__seconds span');
    const DEG = 6;
      
    setInterval(() => {
      const DATE = new Date();
      const HOURS = DATE.getHours() * 30;
      const MINUTES = DATE.getMinutes() * DEG;
      const SECONDS = DATE.getSeconds() * DEG;

      HOURS_ARROW.style.transform = `rotateZ(${HOURS + (MINUTES / 12)}deg)`;
      MINUTES_ARROW.style.transform = `rotateZ(${MINUTES}deg)`;
      SECONDS_ARROW.style.transform = `rotateZ(${SECONDS}deg)`;
      CLOCK.style.opacity = 1;
    }, 1000);
  }

  analogClock();
});