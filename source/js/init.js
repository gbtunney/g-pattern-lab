$( document ).ready(function() {
    console.log( "ready!" );
    //alert();
    
    $('.g-CSS-toggler').change(function() {
        console.log( "Handler for .change() called." + $(this).val() );
  var componentid =   $(this).attr('data-css-toggle-id');
        $('#'+ componentid).removeClass();
    
      
        for ( var i = 0 ; i<$(this).val().length ; i++){
            console.log($(this).val()[i]);
    
            $('#'+ componentid).addClass($(this).val()[i]);
    
        }
        
    });
    
});

(function(w){
	var sw = document.body.clientWidth,
		sh = document.body.clientHeight;

	$(w).resize(function(){ //Update dimensions on resize
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;
		
		//updateAds();
	});
    
    
 
    

	//Navigation toggle
	$('.nav-toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});
	
	//Navigation toggle
	$('.nav-toggle-search').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header .search-form').toggleClass('active');
	});
})(this);

