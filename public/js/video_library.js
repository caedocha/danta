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
    return _.map(data['videos'], this.videoTreeNode);
  },
  videoTreeNode: function(video) {
    return {
      text: video,
      icon: "glyphicon glyphicon-chevron-right",
      extra: { path: video }
    }
  },
  fetchVideoLibrary: function() {
    return apiClient.get(this.videoLibraryUrl(), {});
  },
  videoLibraryUrl: function() {
    return '/api/videos';
  }
};
