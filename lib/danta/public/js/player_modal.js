var playerModal = {
  init: function(onHideCallback) {
    this.get().on("hidden.bs.modal", onHideCallback);
  },
  get: function() {
    return $("#player");
  },
  show: function() {
    console.log('Showing player modal...');
    playerModal.get().modal();
  },
  hide: function() {
    console.log('Hiding player modal...');
    playerModal.get().modal('hide');
  }
};
