$(document).ready(function() {
  var finalData = [];
  $('#getPost').on('click', function() {
    //var finalData = [];
    var commentData = [];
    $.getJSON('https://jsonplaceholder.typicode.com/posts?userId=1', function(data) {
      var postData = data;
      //console.log(postData);
      var output = '';
      var title, body, comments;
      for (var i = 1; i <= data.length; i++) {
        $.getJSON('https://jsonplaceholder.typicode.com/comments?postId=' + i, function(data) {
          var commentData = data;
          console.log(commentData);
          for(var p in postData){
            for (var c in commentData){
              if (commentData[c].postId == postData[p].id) {
                //finalData = $.extend(postData[p], commentData[c]);
                //break;
                finalData = postData.concat(commentData);
              }
            }
          }
          console.log(finalData);

        });
      }
      //console.log(postData);

    });
    // display to html
    //console.log(finalData);
    /*var output = '';
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

    $('#update').append(output);*/

  });
});

// callback to process post data
/*function processPostData(data) {
  postData = data;
  //console.log(postData);
  var output = '';
  var title, body, id, userId, comments = '';
  postData.forEach(function(postData) {
    title = "<h1>" + postData.title + "</h1>" + "<br>";
    body = '<h3 id="posted">' + postData.body + "</h3>" + "<br>";
    userId = "<p>" + postData.userId + "</p>";
    id = "<p>" + postData.id + "</p>";
    output += title + body + "<hr>";
  });
  $('#update').append(output);
}*/

//callback to process comment data
/*
function processCommentData(data) {
  commentData = data;
  //console.log(postData);
  //console.log(commentData);
  var comments, outputComment = '';
  postData.forEach(function(postData) {
    commentData.forEach(function(commentData) {
      if (postData.id == commentData.postId) {
        comments += "<p>" + commentData.id + "</p>" + "<br>";
      }
    });
  });
  outputComment += comments + "<hr>";
  var output = '';
  var title, body, id, userId, comments = '';
  postData.forEach(function(postData) {
    title = "<h1>" + postData.title + "</h1>" + "<br>";
    body = '<h3 id="posted">' + postData.body + "</h3>" + "<br>";
    userId = "<p>" + postData.userId + "</p>";
    id = "<p>" + postData.id + "</p>";
    output += title + body + "<hr>";
  });
  $('#update').append(output);

  //console.log(output);

  /*postData.forEach(function(postData) {
    commentData.forEach(function(commentData) {
      if (postData.id == commentData.postId) {
        comments += "<p>" + commentData.id + "</p>" + "<br>";
      }
    });
    console.log(comments);

  });*/
  //$('#update').append(i);

  /*for(var p in postData){
    for (var c in commentData){
      if (commentData[c].postId == postData[p].id) {
        //finalData = $.extend(postData[p], commentData[c]);
        //break;
        finalData = postData.concat(commentData);
      }
    }
  }*/
  //console.log(finalData);
  /*var output = '';
  var title, body, id = '';
  finalData.forEach(function(finalData) {
    title = "<h2>" + finalData.title + "</h2>" + "<br>";
    body = "<p>" + finalData.body + "</hp>" + "<br>";
    button = '<button class="btn btn-primary" id="showComment">' + "Show Comment" + "</button>";
    output += title + body + button + "<hr>";
  });
  //console.log(output);
  $('#update').append(output);
}*/
