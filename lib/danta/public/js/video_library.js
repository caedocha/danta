var videoLibrary = {

  get: function() {
   webSocketClient.push(this.videosRequest());
  },

  videosRequest: function() {
    return { action: "videos", params: {} };
  },

  // private

  videoTreeNodes: function(data) {
    return videoLibrary.traverse(data);
  },

  traverse: function(nodes) {
    return _.map(nodes, function(node) {
      if(node.nodes.length > 0) {
        return videoLibrary.videoTreeNode(node);
      } else {
        return videoLibrary.videoLeafNode(node);
      }
    });
  },

  videoTreeNode: function(node) {
    return {
      text: node.name,
      icon: "glyphicon glyphicon-chevron-right",
      extra: { path: node.path },
      nodes: videoLibrary.traverse(node.nodes)
    };
  },

  videoLeafNode: function(node) {
    return {
      text: node.name,
      icon: "glyphicon glyphicon-film",
      extra: { path: node.path },
      nodes: videoLibrary.traverse(node.nodes)
    };
  }

};
