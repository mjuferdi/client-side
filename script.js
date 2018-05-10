$(document).ready(function() {
  $('#getPost').on('click', function() {
    $.getJSON('https://jsonplaceholder.typicode.com/posts?userId=1', function(data) {
      var postData = data;
      var commentData = [];

      for (var i = 0; i <= postData.length; i++) {
        $.getJSON('https://jsonplaceholder.typicode.com/comments?postId=' + postData[i].id, function(data) {
          $.each(data, function(index, value) {
            commentData.push(value);
            for (var p in postData) {
              postData[p].comments = [];
              for (var c in commentData) {
                if (postData[p].id == commentData[c].postId) {
                  postData[p].comments.push(commentData[c]);
                }
              }
            }
          });
        });
        prosesData(postData[i]);
      }
    });
  });
});

function prosesData(data) {
  console.log(data);
  var title, body, output, com, totalCom = '';
  title = "<h2>" + data.title + "</h2>" + "<br>";
  body = "<p>" + data.body + "</p>" + "<br>";
  var comments = data.comments;
  for (var c in comments) {
    com = "<p>" + comments.id + "</p>" + "<br>";
  }
  //console.log(com);
  output = title + body + com + "<hr>";

  $('#update').append(output);
}
