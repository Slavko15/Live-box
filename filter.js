$("iframe").each(
     function(index, elem) {
         elem.setAttribute("scrolling","no");
         elem.setAttribute("frameBorder","0");
         elem.setAttribute("width","100%");
         elem.setAttribute("height","100%");
        elem.setAttribute("margin", "0 auto");
     }
 );  


$('.grid').isotope({
  transitionDuration: 0
});

$(document).ready(function(){
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.item'
  });

  // store filter for each group
  var filters = {};

  $('.filters').on('change', '.filters-select', function(){
    var $this = $(this);
    //var selectGroup = $this.parents('.button-group');
    var filterGroup = $this.attr('data-filter-group');

    filters[ filterGroup ] = $this.val();

    var filterValue = concatValues( filters );

    $grid.isotope({ filter: filterValue });

    console.log(filterGroup, filterValue);
  });
  
  // call function to set default val
  setDefault();
    //----------------------------------------------------------------------
  // HELP FROM a USER who is not registered at CSS-TRICKS.COM
  // use this function, or use the code in the function where uyou need it
  //----------------------------------------------------------------------
 
  function setDefault() {
  	$('option[value=".blue"]').attr('selected', true); 
    $('option[value=".large"]').attr('selected', true); // select yellow
		$('.filters-select').trigger("change");							 // trigger change
	}
  //----------------------------------------------------------------------

  // flatten object by concatting values
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
});
