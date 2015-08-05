var player = {
  init: function () {
    this.initPlayer();
    this.initPlayerToggle();
  },
  initPlayer: function() {
    var that = this;
    $('.icon').each(function() {
      var control = $(this);
      control.click(function() {
        var command = control.attr('id');
        var url = '/api/exec?command=' + command;
        that._call(url);
      });
    });
  },
  initPlayerToggle: function() {

  },
  _call: function(url) {
    $.ajax({
      method: 'GET',
      url: url,
      type: 'json'
    });
  },
};
