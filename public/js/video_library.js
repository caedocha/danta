var videoLibrary = {

  get: function(onVideosLoadedCallback) {
    var that = this;
    // TODO: Find out why apiClient is not working with this request.
    $.ajax( {
      method: 'GET',
      url: this.videoLibraryUrl(),
      type: 'json'
    }).done(function(data) {
      var parsedData = JSON.parse(data)
      onVideosLoadedCallback(that.videoTreeNodes(parsedData));
    });
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
  fetchVideoLibrary: function() {
    return apiClient.get(this.videoLibraryUrl(), {});
  },
  videoLibraryUrl: function() {
    return '/api/videos';
  }
};
