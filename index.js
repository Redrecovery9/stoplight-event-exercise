(function() {
  'use strict';
  var stopButton = document.getElementById('stopButton')
  var stopLight = document.getElementById('stopLight')
  var slowButton = document.getElementById('slowButton')
  var slowLight = document.getElementById('slowLight')
  var goButton = document.getElementById('goButton')
  var goLight = document.getElementById('goLight')

  stopButton.addEventListener('click', function() {
    if (stopLight.style.backgroundColor === 'black'){
      stopLight.style.backgroundColor = 'red';
    }
    else {
      stopLight.style.backgroundColor = 'black';
    }
  });

  slowButton.addEventListener('click', function() {
    if (slowLight.style.backgroundColor === 'black') {
      slowLight.style.backgroundColor = 'yellow'
    }
    else {
      slowLight.style.backgroundColor = 'black'
    }
  });

  goButton.addEventListener('click', function() {
    if (goLight.style.backgroundColor === 'black') {
      goLight.style.backgroundColor = 'green';
    }
    else {
      goLight.style.backgroundColor = 'black';
    }
  });
  stopButton.addEventListener('mouseover', function(){
    console.log('Entered Stop Button');
  })
  stopButton.addEventListener('mouseleave', function(){
    console.log('Left Stop Button');
  })
  slowButton.addEventListener('mouseover', function(){
    console.log('Entered Slow Button');
  })
  slowButton.addEventListener('mouseleave', function(){
    console.log('Left Slow Button');
  })
  goButton.addEventListener('mouseover', function(){
    console.log('Entered Go Button');
  })
  goButton.addEventListener('mouseleave', function(){
    console.log('Left Go Button');
  })
})();
