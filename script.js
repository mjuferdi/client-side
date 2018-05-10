$(document).ready(function() {
  $('#getPost').on('click', function() {
    $.getJSON('https://jsonplaceholder.typicode.com/posts?userId=1', function(data) {
      var postData = data;
      var commentData = [];
      var counter = 0;
      for (var i = 0; i <= postData.length; i++) {
        $.getJSON('https://jsonplaceholder.typicode.com/comments?postId=' + postData[i].id, function(data) {
          $.each(data, function(index, value) {
            commentData.push(value);
          });
          for (var p in postData) {
            postData[p].comments = [];
            for (var c in commentData) {
              if (postData[p].id == commentData[c].postId) {
                postData[p].comments.push(commentData[c]);
              }
            }
          }
          prosesData(postData[counter]);
          counter++;
        });
      }
    });
  });
});

function prosesData(data) {
  //console.log(data);
  var counter = 0;
  var title, body, output, btn, textComment, comments = '';
  title = '<h2 class="title">' + data.title + '</h2>' + "<br>";
  body = '<p class="post">' + data.body + "</p>" + "<br>";
  textComment = "<h4>" + "Comments: " + "</h4>" + "<br>";

  for (var i = 0; i < data.comments.length; i++) {
    if (i > 2) {
      comments += '<p class="comment hide">' + data.comments[i].body + '</p>' + '<br>';
    } else {
      comments += '<p class="comment">' + data.comments[i].body + '</p>' + '<br>';
    }
    counter++;
  }

  btn = '<button class="btn btn-primary btnCom">' + "Show more comments" + '</button>';

  output = '<div>' + title + body + textComment + comments + btn + '<hr style="margin-top:50px">' + '</div>';
  $('.btnCom').on('click', function() {
    $(this).parent("div").find(".comment").removeClass("hide")
  });
  $('#update').append(output);
}

/*function showResult() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("update").style.display = "block";
}*/
