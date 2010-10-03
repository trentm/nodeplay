var sys   = require('sys'),
    spawn = require('child_process').spawn,
    ls    = spawn(process.argv[2], process.argv.slice(3));

ls.stdout.on('data', function (data) {
  sys.print('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  sys.print('stderr: ' + data);
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});