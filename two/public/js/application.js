$(document).ready(function() {
  postFormListener();
  postLikeListener();

});//End of Document Ready


var postFormListener = function(){
  $('#post_form').on('submit', function(event) {
    event.preventDefault();

    var $targetPostForm = $(this)

    var url = $targetPostForm.attr('action');
    var type = $targetPostForm.attr('method');
    var formData = $targetPostForm.serialize()

    var request = $.ajax({
      url: url,
      type: type,
      data: formData
    });//end AJAX request

    request.done(function(response) {
      // console.log(response);
      $("#posts").append(response);
      $targetPostForm[0].reset();
    }); //end request.done

    request.fail(function(error) {
      alert("Something did not go right.");
    }); //end request.fail
  });
}; //End of postFormListener


var postLikeListener = function() {
  $targetLikeForm = $('.post_like')
  $targetLikeForm.on('click', '.post_like_button', function(event) {
    event.preventDefault();
    // console.log("WERK IT");

    $targetLikeButton = $(this);
    // console.log($targetLikeButton);


    var url = $targetLikeForm.attr('action')
    var type = $targetLikeForm.attr('method')
    // console.log(url)
    // console.log(type)


    var request = $.ajax({
      url: url,
      type: "PUT",
    }) //end of Ajax Request

    request.done(function(response) {
      // console.log(response);
      $targetLikeForm.closest('#posts').find('.like_count').text(response);
    })// end Ajax done

    request.fail(function() {
      calert("Something did not go right.");
    })// end Ajax Fail


  });
}



 // +var likeButtonEventListener = function(){
 // +  $("#posts").on("submit", ".post_like", function(event){
 // +    event.preventDefault();
 // +    var clickedButtonForm = $(this)
 // +
 // +      var request = $.ajax({
 // +        type: "PUT",
 // +        url: clickedButtonForm.attr("action")
 // +      });
 // +
 // +      request.done(function(response){
 // +        clickedButtonForm.closest(".post").find(".like_count").text(response);
 // +      });
 // +  });
 // +
 // +}





// $.ajax({
//   url: '/path/to/file',
//   type: 'default GET (Other values: POST)',
//   dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
//   data: {param1: 'value1'},
// })
// .done(function() {
//   console.log("success");
// })
// .fail(function() {
//   console.log("error");
// })
// .always(function() {
//   console.log("complete");
// });
