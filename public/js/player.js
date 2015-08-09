var player = {
  init: function () {
    this.hide();
    this.initPlayer();
    this.initPlayerToggle();
  },
  initPlayerToggle: function() {
  },
  initPlayer: function() {
    var that = this;
    $('.row a').on('tap', function() {
      var control = $(this);
      var command = control.attr('id');
      var url = '/api/exec?command=' + command;
      that._call(url);
      that.hover(control);
      if(that._isQuit(control)) {
        setTimeout(that.hide(), 500);
      }
    });
  },
  hover: function(control) {
    control.addClass('icon_hover');
    setTimeout(function() {
      control.removeClass('icon_hover');
    }, 500);
  },
  hide: function() {
    $('#controls').hide();
  },
  show: function() {
    $('#controls').show();
  },
  _call: function(url) {
    $.ajax({
      method: 'GET',
      url: url,
      type: 'json'
    });
  },
  _isQuit: function(control) {
    return (control.attr('id') == 'quit');
  },
  _call: function(url) {
    $.ajax({
      method: 'GET',
      url: url,
      type: 'json'
    });
  }
};
