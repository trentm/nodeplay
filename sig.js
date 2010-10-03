var stdin = process.openStdin();

process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
});

process.nextTick(function () {
  console.log('nextTick callback');
});