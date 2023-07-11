$(window).on('scroll', () => {
  // project side-menu 보이게 하기
  const vH = document.documentElement.clientHeight;
  const headerHt = document.querySelector('header').offsetHeight;
  const sideMenuTop = document.querySelector('main .side-menu').offsetTop
  if( scrollY > (headerHt - sideMenuTop)){
    $('main .side-menu').css({
      opacity: 1
    })
  } else {
    $('main .side-menu').css({
      opacity: 0
    })
  }

  // 테두리 sticky 효과내기
  // ---윗줄
  const overlines = document.querySelectorAll('.project .overline');
  overlines.forEach((line, idx) => {
    let projectTop = $(line).parent().offset().top;
    let projectHt = $(line).parent().height();
    if(projectTop <= scrollY && scrollY < (projectTop + projectHt - vH)){
      // console.log(scrollY ,projectTop, projectHt);
      $(line).css({
        transform: `translateY(${scrollY - projectTop}px)`
      })
    } else if (scrollY < projectTop) {
      $(line).css({
        transform: `translateY(0px)`
      })
    } else {
      $(line).css({
        transform: `translateY(${projectHt - vH}px)`
      })
    }
  })
  // ---아랫줄
  const underlines = document.querySelectorAll('.project .underline');
  underlines.forEach((line, idx) => {
    let projectTop = $(line).parent().offset().top;
    let projectHt = $(line).parent().height();
    // console.log($(line).parent().height());
    if(projectTop <= scrollY && scrollY < (projectTop + projectHt - vH)){
      $(line).css({
        transform: `translateY(${scrollY - projectTop}px)`
      })
    } else if (scrollY < projectTop) {
      $(line).css({
        transform: `translateY(0px)`
      })
    } else {
      // console.log(projectHt);
      $(line).css({
        transform: `translateY(${projectHt - vH}px)`
      })
    }
  })

  // title opacity값 주기
  const soloTeam = document.querySelectorAll('.project .title')
  soloTeam.forEach((title, idx) => {
    let projectTop = $(title).parent().offset().top;
    let projectHt = $(title).parent().height();
    let titleHt = $(title).height();
    // console.log($(title).parent().height());
    if(projectTop <= scrollY && scrollY < (projectTop + projectHt - vH)){
      $(title).css({
        transform: `translateY(${scrollY - projectTop}px)`
      })
    } else if (scrollY < projectTop) {
      $(title).css({
        transform: `translateY(0px)`
      })
    } else {
      // console.log(projectHt);
      $(title).css({
        transform: `translateY(${projectHt - vH}px)`
      })
    }
    if((projectTop - vH / 2) < scrollY && scrollY < (projectTop + projectHt - vH)) {
      $(title).children().css({
        opacity: 1,
        transform : `translateY(0px)`
      })
    } else {
      $(title).children().css({
        opacity: 0,
        transform : `translateY(2.604vw)`
      })
    }
  })
  
});