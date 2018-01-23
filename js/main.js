$(document).ready(function(){
	/////////////////////////////////////////////////////////////////////////////////////
    
  // Óñòàíîâêà çíà÷åíèÿ êîìáî
    $(".combo ul li").click(function () {
        $(this).parents(".combo").find(".current").html($(this).html());
        $(this).parents(".combo").find("input").val($(this).data('id')).trigger('change');
        $(this).parents(".combo").find('ul').css('display', 'none');
	$('.scrollbar2').tinyscrollbar();
    }); 
    $(".combo > .current, .combo > .arrow").click(function () {
		$(".combo").find('ul').css('display', 'none');///////////////////////////
		$(".combo").find('ul').parent().removeClass('active');
        var ul = $(this).parent().find('ul');
        if(ul.is(':visible')) {
            ul.hide().parent().removeClass('active');
        } else {
            ul.show().parent().addClass('active');
        }
	$('.scrollbar2').tinyscrollbar();
    });
    
    
    $('html').click(function(e){
       var currentCombo = $('.combo.active');
       if(currentCombo.length && undefined != e.pageX) {
            var offset= currentCombo.offset();
            if(!(e.pageX >= offset.left && e.pageX <= offset.left+currentCombo.width() && e.pageY>=offset.top && e.pageY<=offset.top+currentCombo.height())) {
                currentCombo.find('ul').hide().parent().removeClass('active');
            }
       } 
    });
    /////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////
    $.fn.equivalent = function (){
        var $blocks = $(this),
            maxH    = $blocks.eq(0).height(); 
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        $blocks.height(maxH);
    };
    
    ///////////////////////////////////////////////////////////////////////////////////////
	// Modal
	$(function() {
            $('.modal_button').bind('click', function(e) {
				var modal= $(this).attr("href");
                e.preventDefault();
                $(modal).bPopup({
				closeClass:'close',
				modalClose: true,

			});
        });
    });
	////////////////////////////////////////////////////////////////////////////////////////////
	$('.sidebar').each(function(i) {
		if($(".point").eq(i).hasClass("active")){
				$(".point").eq(i).children(".downlist").css("display","block");
		}
	});
	$(".mark").click(function(){
		$(this).parent(".point").toggleClass("active");
		if($(this).parent(".point").hasClass("active")){
			$(this).next(".downlist").slideDown("slow");
		}
		else{
			$(this).next(".downlist").slideUp("slow");
		}
	});
	////////////////////////////////////////////////////////////////////////////////////////
	$(".more_button").click(function(){

		if($(this).hasClass("active")){
			$(".more_button").removeClass("active");
			$(".map_button").removeClass("active");
			$(".down_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".down_block").removeClass("active");
			$(".map_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".map_block").removeClass("active");
		}
		else{
			$(".more_button").removeClass("active");
			$(".map_button").removeClass("active");
			$(".down_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".down_block").removeClass("active");
			$(".map_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".map_block").removeClass("active");
			$(this).addClass("active");
			if($(this).is("#parametr")){
				$("#dop_block").slideDown("slow");
				$("#dop_block").addClass("active");
			}
			if($(this).is("#prof")){
				$("#profil").slideDown("slow");
				$("#profil").addClass("active");
				
			}
			
		}
	});
	$(".map_button").click(function(){
		if($(this).hasClass("active")){
			$(".more_button").removeClass("active");
			$(".map_button").removeClass("active");
			$(".down_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".down_block").removeClass("active");
			$(".map_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".map_block").removeClass("active");
		}
		else{
			$(".more_button").removeClass("active");
			$(".map_button").removeClass("active");
			$(".down_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".down_block").removeClass("active");
			$(".map_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".map_block").removeClass("active");
			$(this).addClass("active");
			if($(this).is("#show_map")){
				$(".map_block").slideDown("slow");
				$(".map_block").addClass("active");
				
			}
		}
	});
	$(".close").click(function(){
		$(".more_button").removeClass("active");
			$(".map_button").removeClass("active");
			$(".down_block").slideUp("slow",  function(){$(this).stop(true);});
			$(".down_block").removeClass("active");
	});
	
	//*
	$(".map_button").click(function(){
			$(".more_button").removeClass("active");
			$(this).toggleClass("active");
	});
	//////////////////////////////////////////////////
	$(function() {
		$('ul.tabs__caption').each(function() {
			$(this).find('li').each(function(i) {
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active')
					.closest('div.modal').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
				});
			});
		});
    });
	
	///////////////////////////
	$('.bxslider').bxSlider({
		nextText:'',
		prevText:'',
		auto: true,
		pause: 3000,
	});
	$('.bxslider2').bxSlider({
		pagerCustom: '#bx-pager'
	});
	$('#bx-pager').bxSlider({
		mode:'vertical',
		slideWidth: 83,
		minSlides: 4,
		maxSlides: 4,
		pager:false,
		nextText:'',
		prevText:'',
	});
	
});

$(window).load(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
	$('.nav').equivalent();
	$(".bx-controls-direction").css("width",$(".limit").width());
	$(".bx-controls-direction").css("margin-left",$(".limit").width()/-2);
	
	$("#dop_block").children(".check_container").children('.checkbox').each(function(j) {
		var ob = $(".check_container").children('.checkbox').eq(j).find(".ico");
		var adres =ob.children("img").attr("src");
		console.log(adres);
		ob.css('backgroundImage', 'url(../'+ adres +')');
	});
});
$(window).resize(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
	$('.bxslider').children("li").css("width", $(window).width());
	$(".bx-controls-direction").css("width",$(".limit").width());
	$(".bx-controls-direction").css("margin-left",$(".limit").width()/-2);
});

/////////////////////////////////////

jQuery(document).ready(function(){


/* слайдер цен */

jQuery("#slider").slider({
	min: 0,
	max: 35000,
	values: [0,35000],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val("от "+jQuery("#slider").slider("values",0)+" p.");
		jQuery("input#maxCost").val("до "+jQuery("#slider").slider("values",1)+" p.");
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val("от "+jQuery("#slider").slider("values",0)+" p.");
		jQuery("input#maxCost").val("до "+jQuery("#slider").slider("values",1)+" p.");
    }
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});
jQuery("input#minCost").val("от "+jQuery("#slider").slider("option","min")+" p.");
jQuery("input#maxCost").val("до "+jQuery("#slider").slider("option","max")+" p.");
	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});



// фильтрация ввода в поля     НЕ РАБОТАЕТ
/*
	jQuery('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});

*/
});
