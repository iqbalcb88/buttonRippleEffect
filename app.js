const ripples = document.querySelectorAll('.ripple');
console.log(ripples);
ripples.forEach((element) => {
  element.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;
    console.log(btnTop, btnLeft);

    const top = y - btnTop;
    const left = x - btnLeft;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = top + 'px';
    circle.style.left = left + 'px';

    this.append(circle);
    setTimeout(() => {
      // circle.remove();
      this.removeChild(circle);
    }, 500);
  });
});
