init = function(){
	alert('here!');

	var jarallax = new Jarallax();
	jarallax.addAnimation('#header', 
						   [{progress:'0%', top: '100%'},
						   {progress:'100%', top: '0%'}]);
}

init();