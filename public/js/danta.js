$(document).ready(function() {
  danta.init();
});

var danta = {
  init: function() {
    this.initTree();
    this.initPlayer();
  },
  initTree: function() {
    videoLibrary.get(function(videoNodes) {
      videoTree.init(
        videoNodes,
        function(event, node) {
          if(!videoTree.isLeafNode(node.nodeId)) {
            playerActions.launch(node);
            playerModal.show();
          }
        }
      );
    });
  },
  initPlayer: function() {
    playerModal.init(
      function() { videoTree.deselectAllNodes(); }
    );
  }
};
