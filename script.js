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
  var title, body, output, btn, totalCom = '';
  title = '<h2 class="title">' + data.title + '</h2>' + "<br>";
  body = '<p class="post">' + data.body + "</p>" + "<br>";
  for (var i = 0; i < data.comments.length; i++) {
    console.log(data.comments[i]);
    if (i > 2) {
      //totalCom += '<p class="comment hide" id=\'c' + i + '\'>' + data.comments[i].body + '</p>';
      totalCom += '<p class="comment hide">' + data.comments[i].body + '</p>' + '<br>';
      $('.comment').add;
    } else {
      //totalCom += '<p class="comment" id=\'c' + i + '\'>' + data.comments[i].body + '</p>';
      totalCom += '<p class="comment">' + data.comments[i].body + '</p>' + '<br>';
    }
    $('.btnCom').on('click', function() {
      $('.comment').removeClass('hide');
    });
    btn = '<button class="btn btn-primary btnCom">' + "Show more comments" + '</button>';
    counter++;
  }
  output = title + body + totalCom + btn + '<hr style="margin-top:50px">';

  $('#update').append(output);
  $('.title').css({
    "font-weight": "bold",
    "font-size": "40px !important"
  });
  $('.post').css("font-size", "20px");
  $('.comment').css({
    "margin-left": "60px",

  });
  $('.btnCom').css("float","right");
}
