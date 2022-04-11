var typeOut = (function($){

  function typeOut(el, msg, speed, cb) {
    var letterCount = msg.length;
    var lettersCounted = 0;
    var typeInterval = setInterval(function(){
      if(lettersCounted === letterCount) {
        clearInterval(typeInterval);
        cb.call();
      } else {
        $(el).append(msg[lettersCounted]);
        lettersCounted++;
      }
    }, speed);
  }

  return typeOut;

})(jQuery);

var wordOut = (function($){

  function wordOut(el, msg, speed, cb) {
    var wordCount = msg.split(' ').length;
    var wordsCounted = 0;
    var wordInterval = setInterval(function(){
      if(wordsCounted === wordCount) {
        clearInterval(wordInterval);
        cb.call();
      } else {
        $(el).append(msg.split(' ')[wordsCounted] + ' ');
        wordsCounted++;
      }
    }, speed);
  }

  return wordOut;

})(jQuery);

var captionToon = (function($){

  function captionToon() {
    var toon = $('.caption-toon');
    var caption = $('.caption-toon .caption')
    caption.html($(this).attr('data-caption'));
    toon.addClass('show');
  }

  return captionToon;

})(jQuery);

$(document).ready(function(){
    wordOut('.main-title', 'Whats up mothaforkas?', 200, function(){
      typeOut('.sub-title', 'I write code and give it away. So lets party.', 30, function(){
        $('.hero-unit').addClass('animReady');
      });
    });
    $('.uk-panel').on('click', captionToon);
    $('.uk-panel').on('mouseleave', function(){
      $('.caption-toon').removeClass('show');
    });
});