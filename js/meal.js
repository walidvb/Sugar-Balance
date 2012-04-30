$(document).ready(function(){

    var $foodItem = $('.item-list li');
    var $listContainer = $("#item-container");
    var $plate = $('#plate');
    //set image to each food item
    
    $foodItem.each(function(){
    	var src = "url('img/food/" + $(this).data("food")+".png')";
    	$(this).css({
    		"background-image": src,
    	})
    });
    
    //change meal
    /*
    $plate.children("img").click(function(){
    	$(this).toggleClass("meal");
    	$listContainer.toggleClass("more");
	});
	*/
	
	var $title = $(".title");
	var $titleMeal = $(".title-meal");
	var $titleBreak = $(".title-breakfast");
	
	$title.click(function(){
		$(this).toggleClass('rotated');
    	$listContainer.toggleClass("rotated");
	});
	
	
	
	
	//				update plate
	function addToPlate(foodItem, category){					
				$plate.children("."+category).append(foodItem);
				foodItem.addClass("served");
	};
	
	function removePlate(foodItem){
				var meal = foodItem.data("meal");
				foodItem.removeClass('served');
				$('.'+meal).append(foodItem);
				
	};
	
	var proteinProgress = $("#protein");
	var lipidsProgress = $("#lipids");
	var carboProgress = $("#carbo");
	
	var proteinMax = 50;
	var carboMax = 42;
	var lipidsMax = 6;
	
	function changeProgress(foodItem, dir){
	
		//Get food values
		var lipids = foodItem.data("lipids");
		var carbo = foodItem.data("carbo");
		var protein = foodItem.data("protein");
		//substract if being removed
		if(dir==0)
		{
			lipids = -lipids;
			carbo = -carbo;
			protein = -protein;
		}
		//Get current values
		var currentLipids = lipidsProgress.width();
		var currentCarbo = carboProgress.width();
		var currentProtein = proteinProgress.width();
		//Compute new values
		var newLipids = currentLipids+lipids;
		var newCarbo = currentCarbo+carbo;
		var newProtein = currentProtein+protein;
		//Check if new colors //set new background image maybe?
		var tooMuch = 'red';
		var stillGood = 'green';
		var state = "color";
		
		var lipidsCol = (newLipids > lipidsMax) ? tooMuch : stillGood;
		var carboCol = (newCarbo > carboMax) ? tooMuch : stillGood;
		var proteinCol = (newProtein > proteinMax) ? tooMuch : stillGood;	
		
		console.log(lipidsCol);
		//Set changes!
		lipidsProgress.css({
			width: newLipids,
			background: lipidsCol,
		});
		carboProgress.css({
			width: newCarbo,
			background: carboCol,
		});
		proteinProgress.css({
			width: newProtein,
			background: proteinCol,
		});
	
	};
	
	
	$foodItem.click(function(){
		var category = $(this).data("category");
		if($(this).hasClass("served"))
		{
			removePlate($(this));
			changeProgress($(this), 0);
		}
		else 
		{
			addToPlate($(this), category);
			changeProgress($(this), 1);
		}
	});
	
});
