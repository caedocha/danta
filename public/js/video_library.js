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
      return {
        text: node.name,
        icon: "glyphicon glyphicon-chevron-right",
        extra: { path: node.path },
        nodes: videoLibrary.traverse(node.nodes)
      }
    });
  },

  videoTreeNode: function(video) {
    return {
      text: video.name,
      icon: "glyphicon glyphicon-chevron-right",
      extra: { path: video.name }
    }
  },

};
