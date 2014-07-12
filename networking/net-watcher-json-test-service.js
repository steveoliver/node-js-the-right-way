"use strict";
const
  net = require('net'),
  server = net.createServer(function(connection) {
    console.log('Subscriber connected.');

    // Send first chunk immediately.
    connection.write(
      '{"type":"changed","file":"targ'
    );

    // after a one second delay, send the other chunk.
    let timer = setTimeout(function() {
      connection.write('et.txt","timestamp":13512312312323123}' + "\n");
      connection.end();
    }, 1000);

    // clear timer when connection ends.
    connection.on('end', function() {
      clearTimeout(timer);
      console.log('Subscriber disconnected.');
    });

  });

server.listen(5432, function() {
  console.log('Test server listening for subscribers...');
});

