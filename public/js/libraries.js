var libraries = {
  init: function () {
    this.loadVideos();
    this.initEvents();
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
      var li = $('<li>').html(value);
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
    $('.videos li').click(function() {
      var video = $(this);
      var library = video.parent().parent().find('.title').html();
      video.click(function() {
        var video_path = library + video.html();
        var url = '/api/launch?video=' + encodeURIComponent(video_path);
        that._call(url)
      });
    });
  },
  _call: function(url) {
    $.ajax({
      method: 'GET',
      url: url,
      type: 'json'
    });
  },
  initLibraryRoll: function() {

  },
};
