var playerActions = {
  launch: function(video) {
    console.log('Launching ' + video.text);
    this.launchVideo({ video: this.encodeVideoPath(video.extra.path) });
  },
  play: function() {
    console.log('Playing video');
    this.execCommand({ command: 'play_pause'});
  },
  stop: function() {
    console.log('Stopping video');
    this.execCommand({ command: 'play_pause'});
  },
  quit: function() {
    console.log('Quitting video');
    this.execCommand({ command: 'quit'});
  },
  fastForward: function() {
    console.log('Fast forwarding video');
    this.execCommand({ command: 'seek_forward'});
  },
  fastBackward: function() {
    console.log('Fast backwarding video');
    this.execCommand({ command: 'seek_backward'});
  },
  mute: function() {
    console.log('Muting video');
    this.execCommand({ command: 'mute'});
  },
  turnVolumeUp: function() {
    console.log('Turning volume up');
    this.execCommand({ command: 'volume_up'});
  },
  turnVolumeDown: function() {
    console.log('Turning volume down');
    this.execCommand({ command: 'volume_down'});
  },

  // private

  execCommand: function(data) {
    apiClient.get(this.execUrl(), data);
  },
  execUrl: function() {
    return '/api/exec';
  },
  launchVideo: function(videoPath) {
    apiClient.get(this.launchUrl(), videoPath);
  },
  launchUrl: function() {
    return '/api/launch';
  },
  encodeVideoPath(videoPath) {
    return encodeURIComponent(videoPath);
  }
};
