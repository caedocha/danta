var playerActions = {
  launch: function(video) {
    console.log('Launching ' + video.text);
    this.launchVideo({ video: this.encodeVideoPath(video.extra.path) });
  },
  play: function() {
    console.log('Playing video');
    this.execCommand('play_pause');
  },
  pause: function() {
    console.log('Stopping video');
    this.execCommand('play_pause');
  },
  quit: function() {
    console.log('Quitting video');
    this.execCommand('quit');
  },
  fastForward: function() {
    console.log('Fast forwarding video');
    this.execCommand('seek_forward');
  },
  fastBackward: function() {
    console.log('Fast backwarding video');
    this.execCommand('seek_backward');
  },
  mute: function() {
    console.log('Muting video');
    this.execCommand('mute');
  },
  turnVolumeUp: function() {
    console.log('Turning volume up');
    this.execCommand('volume_up');
  },
  turnVolumeDown: function() {
    console.log('Turning volume down');
    this.execCommand('volume_down');
  },

  // private

  execCommand: function(command) {
    webSocketClient.push(this.execRequest(command));
  },

  execRequest: function(command) {
    return { action: "exec", params: { command: command} };
  },

  launchVideo: function(data) {
    webSocketClient.push(this.launchRequest(data.video));
  },

  launchRequest: function(video) {
    return { action: "launch", params: { video: video } };
  },

  encodeVideoPath(videoPath) {
    return encodeURIComponent(videoPath);
  }

};
