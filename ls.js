var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn(process.argv[2], process.argv.slice(3));

ls.stdout.on('data', function (data) {
  util.print('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  util.print('stderr: ' + data);
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});
