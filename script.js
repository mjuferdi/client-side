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
            //console.log(commentData);
            var title, body, output = '';
            for (var i in postData) {
              title = "<h2>" + postData[i].title + "</h2>" + "<br>";
              body = "<p>" + postData[i].body + "</p>" + "<br>";
              var comments = postData[i].comments;
              for (var j in comments) {
                var com = comments[j].id;
                console.log(com);
              }
              output += title + body + "<hr>";
            }
            $('#update').append(output);
          })
        });
      };

    });
  });
});
