$(document).ready(function() {
  danta.init();
});

var danta = {
  init: function() {
    this.connectWebSocketClient();
    this.initTree();
    this.initPlayer();
  },
  connectWebSocketClient: function() {
    webSocketClient.connect();
  },
  initTree: function() {
    videoLibrary.get();
  },
  initPlayer: function() {
    playerModal.init(
      function() { videoTree.deselectAllNodes(); }
    );
  }
};
