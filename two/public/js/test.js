$(document).ready(function() {
  submitPostEventListener();
  likeButtonEventListener();
});

var submitPostEventListener = function(){
$("#post_form").on("submit", function(event){
    event.preventDefault();
    var postForm = $(this)
    var formData = $(postForm).serialize();


      var request = $.ajax({
        type: postForm.attr("method"),
        url: postForm.attr("action"),
        data: formData
      });

      request.done(function(response){
        $("#posts").append(response);
        postForm[0].reset();
      });

    request.fail(function(response){
      alert("Panic something went horribly wrong! JK just contact us and we'll fix it")
    });

  });
}

var likeButtonEventListener = function(){
  $("#posts").on("submit", ".post_like", function(event){
    event.preventDefault();
    var clickedButtonForm = $(this)

      var request = $.ajax({
        type: "PUT",
        url: clickedButtonForm.attr("action")
      });

      request.done(function(response){
        clickedButtonForm.closest(".post").find(".like_count").text(response);
      });
  });

}
