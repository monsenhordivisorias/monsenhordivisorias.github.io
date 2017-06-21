// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
$( document ).ready(function() {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    $.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts"
})
  .done(function( resp ) {
    console.log(resp);
  });
    
});
