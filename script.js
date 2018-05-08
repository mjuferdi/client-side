/*var combinestuff = [];

function ajaxCallPost() {
  var postData = '';

  // Call get post
  var url1 = 'https://jsonplaceholder.typicode.com/posts';

  $.ajax(url1).done(function(data) {
    //console.log(data);
    var output = '';
    data.slice(0,10).forEach(function(data) {
      var title = "<h2>" + data.title + "</h2>" + "<br>";
      var body = "<p>" + data.body + "</hp>" + "<br>";
      var button = '<button class="btn btn-primary" id="showComment">' + "Show Comment" + "</button>";
      output += title + body + button + "<hr>";
    });
    $('#update').append(output);

  });
}


function ajaxCallComment() {
  var url2 = 'https://jsonplaceholder.typicode.com/comments';
  $.ajax(url2).done(function(dataCom) {
    var output = '';
    dataCom.forEach(function(dataCom){
      var postId = dataCom.postId;
      var id = dataCom.id;
      var body = dataCom.body;
      output += "<p>" + id + " " + body + "</p>"
    });
    //console.log(output);
  });
}
*/


$(document).ready(function() {
  $('#getPost').on('click', function() {
    $.getJSON('https://jsonplaceholder.typicode.com/posts?userId=1', function(data) {
      var postData = data;
      console.log(postData);
      for (var i = 1; i <= postData.length; i++) {
        $.getJSON('https://jsonplaceholder.typicode.com/comments?postId=' + i, function(data) {
          var commentData = data;
          console.log(commentData);
          var output = '';
          var title, body, postId, button, comId, comment;
          postData.forEach(function(itemPost) {
            postId = itemPost.id;
            title = "<h2>" + itemPost.title + "</h2>" + "<br>";
            body = "<h3>" + itemPost.body + "</h3>" + "<br>";
            button = '<button class="btn btn-primary" id="showComment">' + "Show Comment" + "</button>";
            commentData.forEach(function(itemComment){
              comId = "<p>" + itemComment.id + "</p>" + "<br>";
              comment = "<p>" + itemComment.body + "</p>" + "<br>";
            });
          });
          output += title + body + comId + comment + button + "<hr>";

          $('#update').append(output);
        });
      }

    });

  });
});
