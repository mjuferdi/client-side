$(document).ready(function() {
  $('#getPost').on('click', function() {
    $.getJSON('https://jsonplaceholder.typicode.com/posts?userId=1', function(data) {
      var postData = data;
      var commentData = [];
      for (var i = 1; i <= postData.length; i++) {
        $.getJSON('https://jsonplaceholder.typicode.com/comments?postId=' + i, function(data) {
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
          })
          prosesData(postData);
        });
      };
    });
  });
});

function prosesData(data) {
  console.log(data);
  /*var title, body, output, com, totalCom = '';
  for (var i in data) {
    title = "<h2>" + data[i].title + "</h2>" + "<br>";
    body = "<p>" + data[i].body + "</p>" + "<br>";
    var comments = data[i].comments;
    for (var j in comments) {
      com = "<p>" + comments[j].id + "</p>" + "<br>";
    }
    console.log(com);
    output += title + body + totalCom + "<hr>";
  }
  console.log(data[0].comments[0].id);
  $('#update').append(output);*/
}
