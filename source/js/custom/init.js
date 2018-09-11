$( document ).ready(function() {
    console.log( "ready!" );
    
    $('.g-CSS-toggler').each(function(index) {
        console.log(index + ": " + $(this).text());
        var componentid = $(this).attr('data-css-toggle-id');
        var color = getRandomColor();
        
        // $(this).css("border", "4px solid " + color) ;
        //$('.toggler-wrap-' + componentid).css("border", "4px solid " + color) ;
    });
    
    $('.g-CSS-toggler').change(function() {
        console.log("Handler for .change() called." + $(this).val());
        var componentid = $(this).attr('data-css-toggle-id');
        $('#' + componentid).removeClass();
        
        for (var i = 0; i < $(this).val().length; i++) {
            $('#' + componentid).addClass($(this).val()[i]);
        }
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
