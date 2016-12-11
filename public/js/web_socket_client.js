var ws;

var webSocketClient = {

  retryLimit: function() {
    return 10;
  },

  retryInterval: function() {
    return 50;
  },

  webServiceURL: function() {
    return 'ws://' + window.document.location.host + '/api/ws';
  },

  connect: function() {
    ws = new WebSocket(this.webServiceURL());
    ws.onmessage = function(response) {
      console.log("Received response");
      console.log(response);
      responseDispatcher.dispatch(response);
    };
    ws.onopen = function() {
      console.log('WS Connnection opened');
    };
    ws.onclose = function() {
      console.log('WS Connnection closed');
    };
  },

  push: function(request) {
    console.log('Pushing request');
    console.log(request);
    if(ws.readyState === 1) {
      ws.send(JSON.stringify(request));
    } else {
      console.log('WS connection is close');
      console.log('Retrying push for the first time');
      webSocketClient.retryPush(request, 0);
    }
  },

  retryPush: function(request, retryIteration) {
    if(retryIteration >= webSocketClient.retryLimit()) {
      console.log('Retry limit reached. Check the app logs');
    } else {
      setTimeout(function() {
        if(ws.readyState === 1) {
          console.log('Pushing request');
          console.log(request);
          ws.send(JSON.stringify(request));
        } else {
          retryIteration++;
          console.log('Retry number: ' + retryIteration);
          webSocketClient.retryPush(request, retryIteration);
        }
      }, this.retryInterval());
    }
  }

};
