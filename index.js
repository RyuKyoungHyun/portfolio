const vH = document.documentElement.clientHeight;
const headerHt = document.querySelector('header').offsetHeight;
const sideMenuTop = document.querySelector('main .side-menu').offsetTop;
const skillTop = document.querySelector('#skill').offsetTop;
$(window).on('scroll', () => {
  // project side-menu 보이게 하기
  if (headerHt - sideMenuTop < scrollY && scrollY < skillTop - sideMenuTop) {
    $('main .side-menu').css({
      opacity: 1,
      pointerEvents: `auto`,
    });
  } else {
    $('main .side-menu').css({
      opacity: 0,
      pointerEvents: `none`,
    });
  }

  // 테두리 sticky 효과내기
  // ---윗줄
  const overlines = document.querySelectorAll('.project .overline');
  overlines.forEach((line, idx) => {
    let projectTop = $(line).parent().offset().top;
    let projectHt = $(line).parent().height();
    if (projectTop <= scrollY && scrollY < projectTop + projectHt - vH) {
      // console.log(scrollY ,projectTop, projectHt);
      $(line).css({
        transform: `translateY(${scrollY - projectTop}px)`,
      });
    } else if (scrollY < projectTop) {
      $(line).css({
        transform: `translateY(0px)`,
      });
    } else {
      $(line).css({
        transform: `translateY(${projectHt - vH}px)`,
      });
    }
  });
  // ---아랫줄
  const underlines = document.querySelectorAll('.project .underline');
  underlines.forEach((line, idx) => {
    let projectTop = $(line).parent().offset().top;
    let projectHt = $(line).parent().height();
    // console.log($(line).parent().height());
    if (projectTop <= scrollY && scrollY < projectTop + projectHt - vH) {
      $(line).css({
        transform: `translateY(${scrollY - projectTop}px)`,
      });
    } else if (scrollY < projectTop) {
      $(line).css({
        transform: `translateY(0px)`,
      });
    } else {
      // console.log(projectHt);
      $(line).css({
        transform: `translateY(${projectHt - vH}px)`,
      });
    }
  });

  // title opacity값 주기
  const soloTeam = document.querySelectorAll('.project .title');
  soloTeam.forEach((title, idx) => {
    let projectTop = $(title).parent().offset().top;
    let projectHt = $(title).parent().height();
    let titleHt = $(title).height();
    // console.log($(title).parent().height());
    if (projectTop <= scrollY && scrollY < projectTop + projectHt - vH) {
      $(title).css({
        transform: `translateY(${scrollY - projectTop}px)`,
      });
    } else if (scrollY < projectTop) {
      $(title).css({
        transform: `translateY(0px)`,
      });
    } else {
      // console.log(projectHt);
      $(title).css({
        transform: `translateY(${projectHt - vH}px)`,
      });
    }
    if (
      projectTop - vH / 2 < scrollY &&
      scrollY < projectTop + projectHt - vH
    ) {
      $(title).children().css({
        opacity: 1,
        transform: `translateY(0px)`,
      });
    } else {
      $(title).children().css({
        opacity: 0,
        transform: `translateY(2.604vw)`,
      });
    }
  });

  // skill about 타이틀 나타나게 하기
  // const skillTop = document.querySelector('#skill').offsetTop;
  if (scrollY > skillTop - vH / 2) {
    $('#skill .title').css({
      opacity: 0.5,
      transform: `translateY(0vw)`,
    });
  } else {
    $('#skill .title').css({
      opacity: 0,
      transform: `translateY(2.604vw)`,
    });
  }
  const footerTop = document.querySelector('footer').offsetTop;
  if (scrollY > footerTop - vH / 2) {
    $('footer .title').css({
      opacity: 0.5,
      transform: `translateY(0vw)`,
    });
  } else {
    $('footer .title').css({
      opacity: 0,
      transform: `translateY(2.604vw)`,
    });
  }
});

// header 이미지 애니메이션
let imgs = document.querySelectorAll('header img');
imgs.forEach((img, idx) => {
  img.addEventListener('mouseover', (a) => {
    // console.log(a.target);
    a.target.classList.add('active');
  });
  img.addEventListener('mouseout', (a) => {
    const remove = function () {
      a.target.classList.remove('active');
    };
    setTimeout(remove, 2000);
  });
});

let h1s = document.querySelectorAll('header h1 span');
h1s.forEach((h1, idx) => {
  h1.addEventListener('mouseover', (a) => {
    // console.log(a.target);
    a.target.classList.add('active');
  });
  h1.addEventListener('mouseout', (a) => {
    const remove = function () {
      a.target.classList.remove('active');
    };
    setTimeout(remove, 2000);
  });
});

// 커서 이미지 바꾸기
const clientWt = document.querySelector('#project1 .img-box').offsetWidth;
const pro = document.querySelectorAll('.project');
// console.log(clientWt);
pro.forEach((ject, idx) => {
  const proImg = ject.querySelectorAll('img');
  $(ject)
    .find('img')
    .on('mousemove', (a) => {
      // console.log(a.offsetX, clientWt / 2);
      if (clientWt / 2 < a.offsetX) {
        $(a.target).css({
          cursor: `url("./images/nextCursor${idx + 1}.png") 20 25 , auto`,
        });
      } else {
        $(a.target).css({
          cursor: `url("./images/prevCursor${idx + 1}.png") 20 25 , auto`,
        });
      }
    });
  // $(a).on('mousemove', (a) => {});

  // 이미지 슬라이드
  // 페이지 넘버
  proImg.forEach((a, idx) => {
    $(a).parent().siblings('figcaption').find('.total').text(proImg.length);
    const nowText = $(a).parent().siblings('figcaption').find('.now');
    // console.log(nowText);
    $(a).on('click', (a) => {
      if (clientWt / 2 < a.offsetX) {
        if (idx < proImg.length - 1) {
          $(a.target).css({
            transform: `translateX(${-clientWt * (idx + 1)}px)`,
          });
          $(a.target)
            .siblings()
            .css({
              transform: `translateX(${-clientWt * (idx + 1)}px)`,
            });
          nowText.text(`${idx + 2}`);
        }
      } else {
        if (idx > 0) {
          $(a.target).css({
            transform: `translateX(${-clientWt * (idx - 1)}px)`,
          });
          $(a.target)
            .siblings()
            .css({
              transform: `translateX(${-clientWt * (idx - 1)}px)`,
            });
          nowText.text(`${idx}`);
        }
      }
    });
  });
});
