var combinestuff = [];

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

var arrCom;

function ajaxCallComment() {
  var url2 = 'https://jsonplaceholder.typicode.com/comments';
  $.ajax(url2).done(function(dataCom) {
    arrCom = dataCom;
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



$(document).ready(function() {
  $('#getPost').on('click', function() {
    ajaxCallPost();
    ajaxCallComment();
  });
});

/*
var arrPost = [];
var arrCom = [];
$.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
  for (var i = 0; i < 10; i++) {
    var object = {};
    object = data[i];
    arrPost.push(object);
  }
});

$.getJSON('https://jsonplaceholder.typicode.com/comments', function(data) {
  for (var i = 0; i < data.length; i++) {
    var object = {};
    object = data[i];
    arrCom.push(object)
  }
});


console.log(arrCom[2]);
console.log(arrPost);
*/
