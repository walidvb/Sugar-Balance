$(document).ready(function(){

    var $avatars = $('.item-list a');
    var $list = $(".list");
    var $all = $('.avatars-page');
    
    //fill with images
    $avatars.each(function(){
    	var src = "url('img/avatars/" + $(this).data("avatar")+".png')";
    	$(this).css({
    		"background-image": src,
    	})
    });
    
    
    //toggle list
    var $trigger = $('.tab, .tab-close');
    
    $trigger.click(function(){
    	$all.toggleClass('show-list');
    });

	$avatars.click(function(){
		var img = $(this).css('background-image');
		var text = $(this).children('.avatar-text');
		var target = $(this).data('target');
		
		console.log(target);
		change(img, text, target);
	});
	
	var $avatarMain = $('#avatar');
	var $bubble = $('.bubble .text');
	
	function change(img, text, target){
		$avatarMain.css({
			'background-image': img,
		});
		$bubble.html(text);
		$list.removeClass('show-list')

		if(target != null)
		{
			window.location=target;
		}
	}
	
	
	
	
	
});
