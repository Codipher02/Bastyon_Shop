//Enable sidenav functionality 
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  // ***NOTE***: Optional options, are passed as the 2nd argument as an object
  var instances = M.Sidenav.init(elems, { inDuration: 800 });
});

      