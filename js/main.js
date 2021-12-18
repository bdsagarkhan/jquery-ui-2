$(document).ready( function() {
	// draggable
	$( "#accordion" ).accordion();
    $( "#datepicker" ).datepicker();
    $( "#dialog" ).dialog();
    $( "#menu" ).menu();
    $( "#progressbar" ).progressbar({
      value: 37
    });
	var availableTags = [
      "HTML",
      "CSS",
      "Asp",
      "C",
      "C++",
      "JQUERY",
      "Java",
      "JavaScript",
      "PHP",
      "Python",
      "Ruby"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
});