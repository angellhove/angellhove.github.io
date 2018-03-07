$(function(){


        	checkSize();

        	$(window).resize(checkSize);

        });

        function checkSize(){

        	var windowwidth = $(window).width();
        	// alert(windowwidth);
        	if(windowwidth >= 641 && windowwidth !=991 )
        	{              
                $('.mobile_view').removeClass('container');
        		$('.mobileView1').addClass('col-md-12').css('text-align','center',"margin-top","10px");
        		$('.mobileView').removeClass('col-md-3').addClass('col-md-6').css('display','inline-block');
                        $('.mobileView12').addClass('col-md-12').css('text-align','center',"margin-top","10px");
                        $('.mobilerow').addClass('row');
                        $('.mobileView2').removeClass('col-md-3').addClass('col-md-6').css('display','inline-block').css('float','left').css('width','50%');

                        $('.arrow').hide();
        	             $('.mobilebox').removeClass('col-md-12');
                         $('.mobileboxtext').removeAttr('style');
                         $('.mobileboximg').removeAttr('style');  


                         $('.box1').removeAttr('style');
                         $('.box').removeAttr('style');

            }
                
        	else
        	{       
                    $('.mobileView1').removeClass('col-md-12').removeAttr('style');
        		    $('.mobileView').removeClass('col-md-6').addClass('col-md-3').removeAttr('style');

                        			
        	}


                if(windowwidth >= 991){
                $('.cntr').addClass('container')
                $('.mobileView1').removeClass('col-md-12').removeAttr('style');
                $('.mobileView').removeClass('col-md-6').addClass('col-md-3').removeAttr('style');
                $('.mobileView12').removeClass('col-md-12');
                $('.mobileView2').removeClass('col-md-6').addClass('col-md-3').removeAttr('style');
                $('.mobilerow').removeClass('row');
                $('.arrow').show();
                
                }
			
                if(windowwidth <= 641 && windowwidth!=641)
             {

                $('.cttr').addClass('container');
                $('.cntr').addClass('container')
                $('.mobileView1').removeClass('col-md-12').removeAttr('style');
                $('.mobileView').removeClass('col-md-6').addClass('col-md-3').removeAttr('style');
                $('.mobileView12').removeClass('col-md-12');
                $('.mobileView2').removeClass('col-md-6').addClass('col-md-3').removeAttr('style');
                $('.mobilerow').removeClass('row');
                $('.arrow').show();
                // $('.box1:first-child').css('width','125%').css('height','60px');
                $('.box').css('height','145px');
                $('.mobileboximg').css('float','right').css('width','25%').css('margin-left','-50px').css('text-align','center');
                $('.mobilebox').addClass('col-md-12');
                $('.mobileboxtext').css('font-size','9px').css('float','left').css('width','65%').css('overflow','hidden');
               
                $('.mobilerow').addClass('row');
            }

            if (windowwidth <= 640) {

                $('.cttr').removeClass('container');
                $('.polytext').removeClass('blck');
                $('.polytext').css('text-align','center');
                $('.plytxt').removeClass('blck');
                $('.plytxt').css('text-align','center').css('padding-bottom','0px').css('margin-top','11px');

            }

            if(windowwidth > 640){
                $('.cttr').addClass('container');
                $('.polytext').removeAttr('style').addClass('blck');
                $('.polytext').addClass('blck');
                $('.plytxt').removeAttr('style');
                $('.plytxt').addClass('blck');
            }

        }