$(document).ready(function() {
  $("form#characterQuiz").submit(function(event) {
    var name = $("input#name").val();
    var mind = parseInt($("select#mind").val());
    var care = parseInt($("select#care").val());
    var company = parseInt($("select#company").val());
    var subject = parseInt($("select#subject").val());
    var problem = parseInt($("select#problem").val());
    var score = mind + care + company + subject + problem;

    $(".name").text(name);
    $(".form-group").removeClass("has-error");
    $(".help-block").hide();
    $(".results").children().hide();
    if (!name) {
      $(".name").addClass("has-error");
      $("#help-block").show();
    }
    if(score <= 14){
      $(".css").show();
    }
    else if(score > 14 && score <= 21){
      $(".java").show();
    }
    else if(score > 21 && score <= 28){
      $(".php").show();
    }
    else if(score > 28 && score <= 35){
      $(".csharp").show();
    }
    event.preventDefault();
  });
});
