const start = document.querySelector('.startPage');
const startContent = document.querySelector('.startPage .content-box');
const startBtn = document.querySelector('.startPage .startBtn');
const startImg = document.querySelector(' .startPage img');
const firstText = document.querySelector('.firstScreen h2');
const startGage = document.querySelectorAll('.startPage svg circle');
const percent = document.querySelector('.startPage .percent');
let totalLeng = startGage[0].getTotalLength();
startGage[0].style.strokeDasharray = totalLeng;
startGage[0].style.strokeDashoffset = totalLeng;
startGage[1].style.strokeDasharray = totalLeng;
startGage[1].style.strokeDashoffset = totalLeng;
let i = 0;
const percentEvent = () => {
  if (i <= 100) {
    percent.textContent = `${i}%`;
    i++;
  }
};
window.addEventListener('load', () => {
  const draw1 = () => {
    setInterval(percentEvent, 10);
    startGage[0].style.transition = `1s`;
    startGage[0].style.strokeDashoffset = 0;
  };
  setTimeout(draw1, 1000);
  const draw2 = () => {
    startGage[1].style.transition = `1s`;
    startGage[1].style.strokeDashoffset = 0;
  };
  setTimeout(draw2, 2000);
  const buttonAppear = () => {
    startGage[0].style.display = 'none';
    startGage[1].style.display = 'none';
    percent.style.opacity = '0';
    percent.style.transform = 'translateY(-100%)';
    startBtn.style.opacity = '1';
    startBtn.style.transform = 'translateY(-100%)';
    startImg.style.transform = 'translateY(-100%)';
  };
  setTimeout(buttonAppear, 3000);
});
startBtn.addEventListener('click', () => {
  scrollTo({
    top: 0,
  });
  startContent.style.opacity = `0`;

  function fixStart() {
    console.log(start);
    start.style.backgroundColor = `transparent`;
    const none = () => {
      start.style.display = `none`;
    };
    const pageEvent = () => {
      firstText.classList.add('active');
    };
    setTimeout(none, 500);
    setTimeout(pageEvent, 800);
  }
  setTimeout(fixStart, 1000);
});

addEventListener('scroll', () => {
  // console.log(scrollY);
  const firstVideoPoint = document.querySelector('.firstScreen video');
  const vH = document.documentElement.clientHeight;
  // firstScreen 비디오 움직이기
  if (scrollY >= 0) {
    firstVideoPoint.style.transform = `translateY(${-scrollY / 2}px)`;
  }
  // aboutline Event
  const aboutLines = document.querySelectorAll('.aboutMe .textLine');
  let parentTop = aboutLines[0].offsetParent.offsetTop;
  let lineTop = aboutLines[0].offsetTop;
  let lineHt = aboutLines[0].clientHeight;
  let fill = aboutLines[0].firstElementChild;
  let aboutStart = ((scrollY - (parentTop + lineTop - vH)) / (vH / 5.5)) * 100;
  aboutLines.forEach((line, idx) => {
    if (aboutStart > idx * 100) {
      line.firstElementChild.style.width = `${aboutStart - idx * 100}%`;
    } else {
      line.firstElementChild.style.width = `0%`;
    }
  });

  // what I do Event
  const idoLines = document.querySelectorAll('.whatIDo .textLine');
  parentTop = idoLines[0].offsetParent.offsetTop;
  lineTop = idoLines[0].offsetTop;
  lineHt = idoLines[0].clientHeight;
  fill = idoLines[0].firstElementChild;
  aboutStart = ((scrollY - (parentTop + lineTop - vH)) / (vH / 2)) * 100;
  idoLines.forEach((line, idx) => {
    line.firstElementChild.style.width = `${aboutStart - idx * 30}%`;
  });

  // experience Event
  const experLines = document.querySelectorAll('.experience .textLine');
  parentTop = experLines[0].offsetParent.offsetTop;
  lineTop = experLines[0].offsetTop;
  lineHt = experLines[0].clientHeight;
  fill = experLines[0].firstElementChild;
  aboutStart = ((scrollY - (parentTop + lineTop - vH)) / (vH / 5.5)) * 100;
  experLines.forEach((line, idx) => {
    if (aboutStart > idx * 100) {
      line.firstElementChild.style.width = `${aboutStart - idx * 100}%`;
    } else {
      line.firstElementChild.style.width = `0%`;
    }
  });
  // 배경 따라가기
  const experience = document.querySelector('.experience');
  const experHt = experience.clientHeight;
  if (scrollY >= experience.offsetTop - vH) {
    experience.style.backgroundPositionY = `${
      (scrollY - experience.offsetTop) / 2
    }px`;
  }

  // clients Event
  const clientLines = document.querySelectorAll('.clients .textLine');
  parentTop = clientLines[0].offsetParent.offsetTop;
  lineTop = clientLines[0].offsetTop;
  lineHt = clientLines[0].clientHeight;
  fill = clientLines[0].firstElementChild;
  aboutStart = ((scrollY - (parentTop + lineTop - vH)) / (vH / 5.5)) * 100;
  clientLines.forEach((line, idx) => {
    if (aboutStart > idx * 100) {
      line.firstElementChild.style.width = `${aboutStart - idx * 100}%`;
    } else {
      line.firstElementChild.style.width = `0%`;
    }
  });

  //planet Event
  const planetLines = document.querySelectorAll('.planetList .textLine');
  parentTop = planetLines[0].offsetParent.offsetTop;
  lineTop = planetLines[0].offsetTop;
  lineHt = planetLines[0].clientHeight;
  fill = planetLines[0].firstElementChild;
  aboutStart = ((scrollY - (parentTop + lineTop - vH)) / (vH / 2)) * 100;
  planetLines.forEach((line, idx) => {
    line.firstElementChild.style.width = `${aboutStart - idx * 30}%`;
  });

  // rasingVideo Event
  const raisingTop = document.querySelector('.raisingVideo').offsetTop;
  const videowrap = document.querySelector('.raisingVideo .video-wrapper');
  const videoMaxHt = Math.trunc(((scrollY - (raisingTop - vH)) / vH) * 100);
  if (scrollY > raisingTop - vH) {
    if (videoMaxHt <= 100) {
      videowrap.style.height = `${videoMaxHt}vh`;
    }
  }
  // what they1 Event
  const theyList = document.querySelectorAll('.whatThey .content-box > li');
  theyList.forEach((list) => {
    // const theyLines = document.querySelectorAll('.whatThey .textLine');
    const theyLines = list.querySelectorAll('.whatThey .textLine');
    parentTop = theyLines[0].offsetParent.offsetParent.offsetTop;
    lineTop = theyLines[0].offsetTop;
    lineHt = theyLines[0].clientHeight;
    fill = theyLines[0].firstElementChild;
    aboutStart = ((scrollY - (parentTop + lineTop - vH)) / (vH / 4)) * 100;
    theyLines.forEach((line, idx) => {
      if (aboutStart > idx * 100) {
        line.firstElementChild.style.width = `${aboutStart - idx * 100}%`;
      } else {
        line.firstElementChild.style.width = `0%`;
      }
    });
  });
  // 인물 움직이기
  const theyTop = document.querySelector('.whatThey').offsetTop;
  const theyListTop = document.querySelector(
    '.whatThey .content-box > li'
  ).clientHeight;
  const theyHt = document.querySelector('.whatThey').clientHeight;
  const personList = document.querySelector('.whatThey .personList');
  const personListTop = document.querySelector(
    '.whatThey .personList'
  ).offsetTop;
  const personLi = document.querySelector('.whatThey .personList li');
  const personLis = document.querySelectorAll('.whatThey .personList li');
  const theyListHt = document.querySelector(
    '.whatThey .content-box > li'
  ).clientHeight;
  const personSVG = document.querySelector('.whatThey .personList svg');
  const personGap = (personList.clientHeight - personLi.clientHeight * 3) / 2;
  // console.log(personGap);
  // console.log(personSVG);
  if (theyTop > scrollY) {
    personList.style.transform = `translateY(0px)`;
  } else if (theyTop <= scrollY && scrollY < theyTop + theyListTop * 2) {
    personList.style.transform = `translateY(${scrollY - theyTop}px)`;
    // console.log((theyHt / 3) * 1);
    // 인물리스트 이동 효과
    if (scrollY - theyTop > (theyListHt / 2) * 3) {
      personLis[0].lastElementChild.classList.remove('look');
      personLis[1].lastElementChild.classList.remove('look');
      personLis[2].lastElementChild.classList.add('look');

      personSVG.style.transform = `translateY(${
        (personLi.clientHeight + personGap) * 2
      }px) rotate(-135deg)`;
    } else if (scrollY - theyTop > theyListHt / 2) {
      personLis[0].lastElementChild.classList.remove('look');
      personLis[1].lastElementChild.classList.add('look');
      personLis[2].lastElementChild.classList.remove('look');
      personSVG.style.transform = `translateY(${
        personLi.clientHeight + personGap
      }px) rotate(-135deg)`;
    } else {
      personLis[0].lastElementChild.classList.add('look');
      personLis[1].lastElementChild.classList.remove('look');
      personLis[2].lastElementChild.classList.remove('look');
      personSVG.style.transform = `translateY(0px) rotate(-135deg)`;
    }
  }

  // motto 배경 따라가기
  const motto = document.querySelector('.myMotto');
  const mottoHt = motto.clientHeight;
  if (scrollY >= motto.offsetTop - vH) {
    motto.style.backgroundPositionY = `${(scrollY - motto.offsetTop) / 2}px`;
  }

  // aboutLines.forEach((line, idx) => {
  //   const parentTop = line.offsetParent.offsetTop;
  //   const lineTop = line.offsetTop;
  //   const lineHt = line.clientHeight;
  //   const fill = line.firstElementChild;
  //   let aboutStart =
  //     ((scrollY - (parentTop + lineTop - vH + lineHt / 2)) / lineHt) * 100;
  //   if (aboutStart > idx * 100) {
  //     fill.style.width = `${aboutStart - idx * 100}%`;
  //   } else {
  //     fill.style.width = `0%`;
  //   }
  // });

  const menuOrange = document.querySelectorAll('.container.orange .menu a');
  const menuDark = document.querySelectorAll('.container.dark .menu a');
  if (scrollY > motto.offsetTop) {
    menuDark[2].classList.add('active');
    menuDark[1].classList.remove('active');
    menuDark[0].classList.remove('active');
  } else if (scrollY > experience.offsetTop) {
    menuDark[2].classList.remove('active');
    menuDark[1].classList.add('active');
    menuDark[0].classList.remove('active');
  } else {
    menuDark[2].classList.remove('active');
    menuDark[1].classList.remove('active');
    menuDark[0].classList.add('active');
  }
});

//mask cursor
const maskContainer = document.querySelector('.container.orange');

const body = document.querySelector('body');
let cursorX = 0;
let cursorY = 0;
let cursorSize = 2.4;
document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  maskContainer.style.webkitMaskPosition = `calc(${cursorX}px - ${
    cursorSize / 2
  }vw) calc(${cursorY + scrollY}px - ${cursorSize / 2}vw)`;
  // console.log(maskContainer.style.webkitMaskSize);
});
function bigger(a) {
  a.addEventListener('mouseover', () => {
    maskContainer.style.webkitMaskSize = `25vw`;
    cursorSize = 25;
  });
  a.addEventListener('mouseout', () => {
    maskContainer.style.webkitMaskSize = `2.4vw`;
    cursorSize = 2.4;
  });
}
const firstH2 = document.querySelector('.container.orange .firstScreen h2');
const aboutContent = document.querySelector(
  '.container.orange .aboutMe .content-box'
);
const experContent = document.querySelector(
  '.container.orange .experience .content-box'
);
const clientContent = document.querySelector(
  '.container.orange .clients .text-box'
);
const theycontent = document.querySelectorAll(
  '.container.orange .whatThey .text-wrapper'
);
const mottocontent = document.querySelector('.container.orange .myMotto h2');
bigger(firstH2);
bigger(aboutContent);
bigger(experContent);
bigger(clientContent);
theycontent.forEach((a) => {
  bigger(a);
});
bigger(mottocontent);

//hover 영역조정
const whatHoverLook = document.querySelectorAll(
  '.container.dark .whatIDo .hover-look'
);
const whatText = document.querySelectorAll(
  '.container.dark .whatIDo .textLine'
);
const whatorangeText = document.querySelectorAll(
  '.container.orange .whatIDo .textLine'
);

//whatIDo 호버효과
whatText.forEach((a) => {
  const aHt = a.clientHeight;
  a.nextElementSibling.style.top = `${a.offsetTop + aHt / 2}px`;
});
whatorangeText.forEach((w, idx) => {
  w.addEventListener('mouseover', () => {
    whatHoverLook[idx].style.top = `${whatText[idx].offsetTop}px`;
    whatHoverLook[idx].style.height = `${whatText[idx].clientHeight}px`;

    maskContainer.style.webkitMaskSize = `0vw`;
    cursorSize = 0;
  });
  w.addEventListener('mouseout', () => {
    whatHoverLook[idx].style.top = `${
      whatText[idx].offsetTop + whatText[idx].clientHeight / 2
    }px`;
    whatHoverLook[idx].style.height = `0px`;

    maskContainer.style.webkitMaskSize = `2.4vw`;
    cursorSize = 2.4;
  });
});

//planet
const planetHoverLook = document.querySelectorAll(
  '.container.dark .planetList .hover-look'
);
const planetText = document.querySelectorAll(
  '.container.dark .planetList .textLine'
);
const planetOrangeText = document.querySelectorAll(
  '.container.orange .planetList .textLine'
);
const planetImg = document.querySelector('.container.dark .planetList img');
planetText.forEach((a) => {
  const aHt = a.clientHeight;
  a.nextElementSibling.style.top = `${a.offsetTop + aHt / 2}px`;
});
planetOrangeText.forEach((w, idx) => {
  w.addEventListener('mouseover', () => {
    planetHoverLook[idx].style.top = `${planetText[idx].offsetTop}px`;
    planetHoverLook[idx].style.height = `${planetText[idx].clientHeight}px`;

    maskContainer.style.webkitMaskSize = `0vw`;
    cursorSize = 0;
  });
  w.addEventListener('mouseout', () => {
    planetHoverLook[idx].style.top = `${
      planetText[idx].offsetTop + planetText[idx].clientHeight / 2
    }px`;
    planetHoverLook[idx].style.height = `0px`;

    maskContainer.style.webkitMaskSize = `2.4vw`;
    cursorSize = 2.4;
  });
});
document.addEventListener('scroll', () => {
  planetImg.style.transform = `translateX(-50%) rotate(${scrollY / 12}deg)`;
});

//history
const historyHoverLook = document.querySelectorAll(
  '.container.dark .history .hover-look'
);
const historyText = document.querySelectorAll(
  '.container.dark .history .textLine'
);
const historyOrangeText = document.querySelectorAll(
  '.container.orange .history-text'
);
const historyH3 = document.querySelectorAll(
  '.container.dark .history .hover-look h3'
);

historyText.forEach((a) => {
  const aHt = a.clientHeight;
  a.nextElementSibling.style.top = `${a.offsetTop + aHt / 2}px`;
  historyH3.forEach((h) => {
    h.style.height = `${aHt}px`;
  });
});
historyOrangeText.forEach((w, idx) => {
  w.addEventListener('mouseover', () => {
    historyHoverLook[idx].style.top = `${historyText[idx].offsetTop}px`;
    historyHoverLook[idx].style.height = `${historyText[idx].clientHeight}px`;

    maskContainer.style.webkitMaskSize = `0vw`;
    cursorSize = 0;
  });
  w.addEventListener('mouseout', () => {
    historyHoverLook[idx].style.top = `${
      historyText[idx].offsetTop + historyText[idx].clientHeight / 2
    }px`;
    historyHoverLook[idx].style.height = `0px`;

    maskContainer.style.webkitMaskSize = `2.4vw`;
    cursorSize = 2.4;
  });
});

// fixed icon Event
const logo = document.querySelectorAll('.container .logo');
const vW = document.documentElement.clientWidth;
// console.log(vW);
document.addEventListener('mouseover', (e) => {
  logo[1].addEventListener('mousemove', (lo) => {
    logo[0].style.transform = `translate(${e.clientX - (vW * 6.083) / 100}px, ${
      e.clientY - (vW * 6.083) / 100
    }px)`;
    logo[0].style.fill = `rgb(235, 89, 57)`;
    logo[1].style.fill = `#0d0d0d`;
    logo[1].style.transform = `translate(${e.clientX - (vW * 6.083) / 100}px, ${
      e.clientY - (vW * 6.083) / 100
    }px)`;
  });
});
logo[1].addEventListener('mouseout', () => {
  // console.log(logo[0]);
  logo[0].style.transform = `translate(0px, 0px)`;
  logo[0].style.fill = `rgb(183, 171, 152)`;
  logo[1].style.transform = `translate(0px, 0px)`;
});

// footer hover 효과

const footerOrangeLinks = document.querySelectorAll(
  '.container.orange footer .content-box a'
);
const footerDarkLinks = document.querySelectorAll(
  '.container.dark footer .content-box a .block'
);
footerOrangeLinks.forEach((a, idx) => {
  a.addEventListener('mouseover', () => {
    footerDarkLinks[idx].style.top = `0px`;
    footerDarkLinks[idx].style.height = `${a.clientHeight}px`;

    maskContainer.style.webkitMaskSize = `0vw`;
    cursorSize = 0;
  });
  a.addEventListener('mouseout', () => {
    footerDarkLinks[idx].style.top = `50%`;
    footerDarkLinks[idx].style.height = `0px`;

    maskContainer.style.webkitMaskSize = `2.4vw`;
    cursorSize = 2.4;
  });
});

// footer sms hover 효과
const footerOrangeSms = document.querySelectorAll(
  '.container.orange footer .email-tel .sms'
);
const footerDarkSms = document.querySelectorAll(
  '.container.dark footer .email-tel .sms .hover-look'
);
footerOrangeSms.forEach((f, idx) => {
  f.addEventListener('mouseover', () => {
    footerDarkSms[idx].style.top = `0px`;
    footerDarkSms[idx].style.height = `${f.clientHeight}px`;

    maskContainer.style.webkitMaskSize = `0vw`;
    cursorSize = 0;
  });
  f.addEventListener('mouseout', () => {
    footerDarkSms[idx].style.top = `50%`;
    footerDarkSms[idx].style.height = `0px`;

    maskContainer.style.webkitMaskSize = `2.4vw`;
    cursorSize = 2.4;
  });
});
const menuOrange = document.querySelectorAll('.container.orange .menu a');
const menuDark = document.querySelectorAll('.container.dark .menu a');
const motto = document.querySelector('.myMotto');
const experience = document.querySelector('.experience');
menuOrange.forEach((m, idx) => {
  m.addEventListener('mouseover', () => {
    menuDark[idx].classList.add('active');

    maskContainer.style.webkitMaskSize = `0vw`;
    cursorSize = 0;
  });
  m.addEventListener('mouseout', () => {
    if (scrollY > motto.offsetTop) {
      menuDark[0].classList.remove('active');
      menuDark[1].classList.remove('active');
    } else if (scrollY > experience.offsetTop) {
      menuDark[0].classList.remove('active');
      menuDark[2].classList.remove('active');
    } else {
      menuDark[1].classList.remove('active');
      menuDark[2].classList.remove('active');
    }

    maskContainer.style.webkitMaskSize = `2.4vw`;
    cursorSize = 2.4;
  });
});
// 스크롤 이동
const experTop = document.querySelector(
  '.container.orange .experience'
).offsetTop;
const mottoTop = document.querySelector('.container.orange .myMotto').offsetTop;
menuOrange.forEach((m) => {
  m.addEventListener('click', (a) => {
    a.preventDefault();
  });
});
menuOrange[0].addEventListener('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
menuOrange[1].addEventListener('click', () => {
  scrollTo({
    top: experTop,
    behavior: 'smooth',
  });
});
menuOrange[2].addEventListener('click', () => {
  scrollTo({
    top: mottoTop,
    behavior: 'smooth',
  });
});

const fixedOrangeLists = document.querySelectorAll(
  '.container.orange .fixed-footer a'
);
const fixedDarkLists = document.querySelectorAll(
  '.container.dark .fixed-footer a'
);
const fixedListTop = document.querySelector(
  '.container .fixed-footer ul'
).offsetTop;

// console.log(fixedListTop);
fixedOrangeLists.forEach((li, idx) => {
  li.addEventListener('mousemove', (e) => {
    e.target.style.transform = `translate(${cursorX - (vW * 5.483) / 100}px,${
      cursorY - (fixedListTop + e.target.offsetTop)
    }px)`;
    fixedDarkLists[idx].style.transform = `translate(${
      cursorX - (vW * 5.483) / 100
    }px,${cursorY - (fixedListTop + e.target.offsetTop)}px)`;
  });
  li.addEventListener('mouseout', (e) => {
    e.target.style.transform = `translate(0px,0px)`;
    fixedDarkLists[idx].style.transform = `translate(0px,0px)`;
  });
});

//sound hover 효과
const fixedOrangeSound = document.querySelector(
  '.container.orange footer .sound'
);
const fixedDarkSound = document.querySelector(
  '.container.dark footer .sound .opacity'
);
fixedOrangeSound.addEventListener('mouseover', () => {
  fixedDarkSound.style.opacity = '1';

  maskContainer.style.webkitMaskSize = `0vw`;
  cursorSize = 0;
});
fixedOrangeSound.addEventListener('mouseout', () => {
  fixedDarkSound.style.opacity = '0.5';

  maskContainer.style.webkitMaskSize = `2.4vw`;
  cursorSize = 2.4;
});
