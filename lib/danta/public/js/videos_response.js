var videosResponse = {
  execute: function(data) {
    var nodes = videoLibrary.videoTreeNodes(JSON.parse(data.data));
    videoTree.init(
      nodes,
      function(event, node) {
        if(!videoTree.isLeafNode(node.nodeId)) {
          playerActions.launch(node);
          playerModal.show();
        }
      }
    );
  }
};
