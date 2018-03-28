(function($){
  $(window).load(function(){
    $("#navigation a").mPageScroll2id({
      offset:"#navigation"
    });

    $("#scrolldown a").mPageScroll2id({
      offset:"#scrolldown"
    });


    $("#toTop").mPageScroll2id({
      offset:"#toTop"
    });

  });
})(jQuery);