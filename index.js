$(window).on('scroll', () => {
  const vH = document.documentElement.clientHeight;
  const headerHt = document.querySelector('header').offsetHeight;
  const sideMenuTop = document.querySelector('main .side-menu').offsetTop;
  const skillTop = document.querySelector('#skill').offsetTop;
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
// 헤더 버튼 이동
pro.forEach((ject, proIdx) => {
  $(`.main-menu ol li:nth-child(${proIdx + 1}) a`).on('click', (p) => {
    p.preventDefault();
    scrollTo({
      top: ject.offsetTop,
      behavior: 'smooth',
    });
  });
  // 사이드 버튼이동 프로젝트만
  $(`.side-menu li:nth-child(${proIdx + 1}) a`).on('click', (p) => {
    p.preventDefault();
    scrollTo({
      top: ject.offsetTop,
      behavior: 'smooth',
    });
  });
  const proImg = ject.querySelectorAll('img');
  $(ject)
    .find('img')
    .on('mousemove', (a) => {
      // console.log(a);
      if (clientWt / 2 < a.offsetX) {
        $(a.target).css({
          cursor: `url("./images/nextCursor${proIdx + 1}.png") 20 25 , auto`,
        });
      } else {
        $(a.target).css({
          cursor: `url("./images/prevCursor${proIdx + 1}.png") 20 25 , auto`,
        });
      }
    });

  // 이미지 슬라이드
  // 페이지 넘버
  proImg.forEach((a, idx) => {
    $(a).parent().siblings('figcaption').find('.total').text(proImg.length);
    const nowText = $(a).parent().siblings('figcaption').find('.now');

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

// 위로버튼
$('.up-button').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
const clientHeight = document.documentElement.clientHeight;
const headHeight = document.querySelector('header').offsetHeight;
console.log(headHeight);
$(window).on('scroll', () => {
  const skillTop = document.querySelector('#skill').offsetTop;
  if (scrollY < headHeight - clientHeight) {
    $('.up-button').css({
      pointerEvents: 'none',
    });
  } else {
    $('.up-button').css({
      pointerEvents: 'auto',
    });
    if (skillTop - clientHeight < scrollY) {
      $('.up-button svg').css({
        fill: `#fff`,
      });
    } else {
      $('.up-button svg').css({
        fill: `#003295`,
      });
    }
  }
});

// top-menu 리스트 보기
$('.top-menu li:nth-child(1)').on('click', (li) => {
  $(li.currentTarget).toggleClass('listOn');
  $(li.currentTarget).siblings().removeClass('listOn');
  $('.team-fixed').hide();
  $('.solo-fixed').toggle();
});
$('.top-menu li:nth-child(2)').on('click', (li) => {
  $(li.currentTarget).toggleClass('listOn');
  $(li.currentTarget).siblings().removeClass('listOn');
  $('.solo-fixed').hide();
  $('.team-fixed').toggle();
});

// 버튼 프로젝트 이동
const topList = document.querySelectorAll('.fixed li');
// console.log(topList);
pro.forEach((ject, proIdx) => {
  topList.forEach((list, liN) => {
    if (proIdx == liN) {
      $(list).on('click', (p) => {
        // console.log(list);
        p.preventDefault();
        $('.top-menu li').removeClass('listOn');
        $('.list-fix').hide();
        scrollTo({
          top: ject.offsetTop,
          behavior: 'smooth',
        });
      });
    }
  });
});

// const title = document.querySelector('#skill .title').offsetHeight;
// skill about 이동
$('.top-menu li:nth-child(3)').on('click', (p) => {
  p.preventDefault();
  scrollTo({
    top: $('#skill').offset().top,
    behavior: 'smooth',
  });
});
const aboutTop = document.querySelector('#about').offsetTop;
$('.top-menu li:nth-child(4)').on('click', (p) => {
  p.preventDefault();
  scrollTo({
    top: aboutTop,
    behavior: 'smooth',
  });
});
$('.side-menu li:last-child a:first-child').on('click', (p) => {
  p.preventDefault();
  scrollTo({
    top: $('#skill').offset().top,
    behavior: 'smooth',
  });
});
$('.side-menu li:last-child a:last-child').on('click', (p) => {
  p.preventDefault();
  scrollTo({
    top: aboutTop,
    behavior: 'smooth',
  });
});

/*
const articles = document.querySelectorAll('article');
articles.forEach((elem, idx) => {
  const height = elem.offsetHeight;
  const top = elem.offsetTop;
  console.log(`article${idx + 1} - height: ${height}, top: ${top}`);
});
*/

// 스크롤에 따른 탑메뉴 없애기 나타내기
let nowY = 0;
addEventListener('scroll', () => {
  if (nowY < scrollY) {
    $('.top-menu').addClass('show');
  } else {
    $('.top-menu').removeClass('show');
  }
  nowY = scrollY;
});
