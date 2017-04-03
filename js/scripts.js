// user-interface logic
function Places(location,landmark,year){
  this.mylocation = location;
  this.landmark= landmark;
  this.year = year;
}

Places.prototype.destination = function(){
  return this.mylocation;
}

//Business-logic
$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedYear = $("input#new-year").val();

    var myPlaces = new Places(inputtedLocation,inputtedLandmark,inputtedYear);

    $("ul#places").append("<li><span class='places'>" + myPlaces.destination() + "</span></li>");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-year").val("");

    $("#places").last().click(function(){
      $("#show-places").show();
      $("#show-places h2").text(myPlaces.mylocation);
      $(".location").text(myPlaces.mylocation);
      $(".landmark").text(myPlaces.landmark);
      $(".timeofyear").text(myPlaces.year);

  });
});
});
