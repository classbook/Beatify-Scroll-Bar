/* 
 * Beautify Scroll Bar JS
 * Created on : Jun 21, 2014, 12:05:39 AM
 * Author     : kishore
 */


(function($){
	$.fn.beautifyScrollBar = function(options){
		var settings = $.extend({
			autoHide	:	false,
			width		:	null,
			height		:	null
		}, options);
		return this.each(function(){
			/*Beautify CSS Functinality goes here!!!*/
			var elem=this;
			$(".scrollBar .ref").height(
					$(elem).height() * $(elem).height() / $(".scrollArea",elem).prop("scrollHeight")
			);
			$(".scrollBar .ref",elem).draggable(
				{
					axis : "y" ,
					opacity : 0.5 ,
					containment : $(".scrollBar",this),
					drag : function(){
						var SP=Math.ceil(
							$(this).position().top * $(".scrollArea",elem).prop("scrollHeight") / $(elem).height()
						);
						$(".scrollArea",elem).scrollTop(SP)
					}
			});
			$(".scrollArea",elem).scroll(function(){
				//$(".scrollBar .ref",elem).css("top",$(this).scrollTop()+"px");
				var SP=$(".scrollArea",elem).scrollTop() / $(".scrollArea",elem).prop("scrollHeight") * $(elem).height();
				$(".scrollBar .ref").css({"top":SP},100);
			});
		});
	};
}(jQuery));