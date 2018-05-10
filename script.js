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
  Object.keys(data.comments).forEach(function(key) {
    totalCom += '<p class="comment">' + data.comments[key].body + '</p>' + '<br>';
    console.log(counter);
    //console.log(data.comments.length);
    if (counter > 3 ) {
      $('.comment').addClass("asd");
    }
    counter++;
    console.log(counter);
  })
  btn = '<button class="btn btn-primary btnCom">' + "Show more comments" + '</button>';
  //console.log(com);
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
