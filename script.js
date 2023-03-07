$(window).scroll(function(){
    var windowScroll = $(this).scrollTop();
  
    $('.logo').css({
      'transform': 'translate(0px, '+ windowScroll +'%)'
    });
  
    $('#matahari').css({
      'transform': 'translate(0px, '+ windowScroll*0.05 +'%)'
    });
  
    $('#piramid').css({
      'transform': 'translate(0px, '+ windowScroll*0.15 +'px)'
    });
  
    $('#burung').css({
      'transform': 'translate('+ windowScroll*2.8 +'px, '+ -windowScroll*0.55 +'px)',
      
    });
  
    $('#unta').css({
      'transform': 'translate('+ windowScroll*0.5 +'px, '+ windowScroll*0.055 +'px)'
    });
  
    $('#mountains_front').css({
      'transform': 'translate(0px, 0px)'
    });
  
    $('#text').css({
      'transform': 'translate('+ -windowScroll*4 +'px, 0px)'
    });
  
    $('.btn').css({
      'transform': 'translate(0px, '+ windowScroll*1.5 +'px)'
    });
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
     