var libraries = {
  init: function () {
    this.loadVideos();
  },
  loadVideos: function () {
    var that = this;
    $.ajax({
      method: 'GET',
      url: '/api/',
      type: 'json'
    }).done(function (data) {
      that.populate(jQuery.parseJSON(data));
    });
  },
  populate: function (data) {
    var that = this;
    var libraries = $('#libraries');
    $.each(data, function(index, value) {
      var library = $('<div>', { class: 'library' });
      var videos = value['videos'];
      var title = $('<b>', { class: 'title' }).html(value['library']);
      library.append(title);
      library.append(that.createList(videos));
      libraries.append(library);
    });
    // Workaround: Wait for dynamic components to be generated
    setTimeout(this.initEvents(), 1000);
  },
  createList: function(collection) {
    var that = this;
    var ol = $('<ol>', { class: 'videos' } );
    $.each(collection, function(index, value) {
      var basename = that._basename(value);
      var link = $('<a>').data('full_path', value).html(basename);
      var li = $('<li>').html(link);
      ol.append(li);
    });
    return ol;
  },
  initEvents: function () {
    this.initLaunchVideo();
    this.initLibraryRoll();
  },
  initLaunchVideo: function() {
    var that = this;
    $('.videos li a').on('tap', function(event) {
      event.preventDefault();
      var video = $(this);
      var url = '/api/launch?video=' + encodeURIComponent(video.data('full_path'));
      player.show();
      that._call(url);
      that.hover(video);
    });
  },
  _call: function(url) {
    $.ajax({
      method: 'GET',
      url: url,
      type: 'json'
    });
  },
  _basename: function(path) {
    return path.split('/').reverse()[0];
  },
  initLibraryRoll: function() {
  },
  hover: function(video) {
    video.addClass('hover');
    setTimeout(function() {
      video.removeClass('hover');
    }, 500);
  }
};
