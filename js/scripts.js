$(document).ready(function() {
  $("input[type='button']").click(function() {
    var end = parseInt($("input:radio[name=end]:checked").val());
    var genre = parseInt($("select#genre").val());
    var magic = parseInt($("select#magic").val());
    var score = end + genre + magic ;

    $(".results").children().hide();
    if(score <= 7 ){
      $(".ruby").show();
    }
    else if(score > 7 && score <= 11){
      $(".php").show();
    }
    else if(score > 11 && score <= 15){
      $(".java").show();
    }
    else if(score === end){
      $(".css").show();
    }
    else if(score > 19 && score <= 23){
      $(".csharp").show();
    }
    event.preventDefault();
  });
});

$(document).ready(function(){
       $("input[type='button']").click(function(){
           var radioValue = $("input[name='gender']:checked").val();
           if(radioValue){
               alert("Your are a - " + radioValue);
           }
       });

   });
