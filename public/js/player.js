var player = {
  init: function () {
    this.initPlayer();
    this.initPlayerToggle();
  },
  initPlayerToggle: function() {
  },
  initPlayer: function() {
    var that = this;
    console.log('init player');
    $('.row a').on('tap', function() {
      var command = $(this).attr('id');
      var url = '/api/exec?command=' + command;
      that._call(url);
      that.hover($(this));
    });
  },
  _call: function(url) {
    $.ajax({
      method: 'GET',
      url: url,
      type: 'json'
    });
  },
  hover: function(control) {
    setTimeout(function() {
      control.removeClass('icon_hover');
    }, 500);
  }
};
