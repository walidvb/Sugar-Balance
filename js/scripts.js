$(document).ready(function(){
	$('body').height(window.innerHeight);
	var arrow = $('.arrow');
	var listContainer = $('#item-container');
	var list = $('.item-list');
	arrow.click(function(){
		console.log('arrow');
		var contWidth = listContainer.width();
		var itemWidth = list.children().outerWidth(true);
		var pageCount = contWidth/itemWidth;
		
		var totalCount = listContainer.children('current').length();
		console.log(totalCount);
		var maxDistance = ceil(totalCount/pageCount);
		var dir = $(this).data("dir");
		var currentOffset = list.css("left")
		var distance = totalCount*itemWidth;
		
		 
		newPos = dir ? distance : -distance;
		var newPos = currentOffset + distance;
		if(newPos >= maxDistance)
		{
			newPos = maxDistance;
		}
		else ifif(newPos <= 0)
		{
			newPos = 0;
		}
		console.log(newPos);
		list.css({"left":newPos});
	});
});