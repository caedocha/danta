$(document).ready(function() {
  $("#tree").treeview(
    {
      data: getTree(),
      onNodeSelected: function(event, data) { showModal();  }
    }
  );
  $("#player").on("hidden.bs.modal", function() { deselectTreeItem(); });
});

function play() {
  console.log('Playing video...');
}

function stop() {
  console.log('Stopping video...');
}

function fastForward() {
  console.log('Fast forwarding video...');
}

function fastBackward() {
  console.log('Fast backwarding video...');
}

function mute() {
  console.log('Muting video...');
}

function turnVolumeUp() {
  console.log('Turning volume up...');
}

function turnVolumeDown() {
  console.log('Turning volume down...');
}

function deselectTreeItem() {
  console.log('Player has been closed...');
  selectedItem = $("#tree").treeview('getSelected')[0];
  $("#tree").treeview('unselectNode', selectedItem.nodeId);
}

function showModal() {
  console.log('Node clicked...');
  $("#player").modal();
}

function getTree() {
  return [
    { text: "Into the wild", icon: "glyphicon glyphicon-chevron-right", extra: { path: 'path/to/movie'}},
    { text: "Total Recall", icon: "glyphicon glyphicon-chevron-right", extra: { path: 'path/to/movie'}},
    { text: "Alien", icon: "glyphicon glyphicon-chevron-right", extra: { path: 'path/to/movie'}},
    { text: "Blade Runner", icon: "glyphicon glyphicon-chevron-right", extra: { path: 'path/to/movie'}},
    { text: "Jaws", icon: "glyphicon glyphicon-chevron-right", extra: { path: 'path/to/movie'}},
    { text: "Clockwork Orange", icon: "glyphicon glyphicon-chevron-right", extra: { path: 'path/to/movie'}},
  ];
}
