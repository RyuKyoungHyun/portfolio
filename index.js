$(window).on('scroll', () => {
  // project side-menu 보이게 하기
  const vH = document.documentElement.clientHeight;
  const headerHt = document.querySelector('header').offsetHeight;
  const sideMenuTop = document.querySelector('main .side-menu').offsetTop;
  const skillTop = document.querySelector('#skill').offsetTop;
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

// 메인 이미지 애니메이션
let imgs = document.querySelectorAll('header img');
imgs.forEach((img, idx) => {
  const move = function () {
    for (i = 0; i < 3; i++) {
      setTimeout(function () {
        $(img).addClass('active');
      }, i * 2000 + 0);
      setTimeout(function () {
        $(img).removeClass('active');
      }, i * 2000 + 1000);
    }
  };
  img.addEventListener('mouseout', () => {
    setTimeout(move);
  });
});

// $('header .deco1').on('mouseover', function (a) {
//   a.target
//     .animate({ transform: `rotate(45deg)` }, 1000, 'easeOutElastic')
//     .animate({ transform: `rotate(0deg)` }, 2000, 'easeOutElastic')
//     .animate({ transform: `rotate(45deg)` }, 3000, 'easeOutElastic');
// });
