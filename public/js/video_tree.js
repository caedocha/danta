var videoTree = {
  init: function(data, onSelectCallback) {
    this.get().treeview(
      {
        data: data,
        onNodeSelected: onSelectCallback
      }
    );
  },
  isLeafNode: function(id) {
    return this.get().treeview('getNode', id).nodes.length > 0;
  },
  deselectAllNodes: function() {
    this.get().treeview('unselectNode', this.selectedNode().nodeId);
  },
  selectedNode: function() {
    return this.get().treeview('getSelected')[0];
  },
  get: function() {
    return $("#tree");
  }
};
