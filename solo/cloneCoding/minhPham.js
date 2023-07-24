addEventListener('scroll', () => {
  const firstVideoPoint = document.querySelector('.firstScreen video');
  const vH = document.documentElement.clientHeight;
  // console.log(firstVideoPoint);
  if (scrollY >= 0) {
    firstVideoPoint.style.transform = `translateY(${-scrollY / 2}px)`;
  }
  const textLineParentTop =
    document.querySelector('.textLine').offsetParent.offsetTop;
  const textLineTop = document.querySelector('.textLine').offsetTop;
  const textL = document.querySelector('.textLine');
  const fill = document.querySelector('.textLine .fill');
  console.log(vH);
  if (scrollY > textLineParentTop + textLineTop - vH) {
    fill.style.width = `${scrollY - (textLineParentTop + textLineTop - vH)}%`;
  }
});
