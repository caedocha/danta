var responseDispatcher = {

  dispatch: function(response) {
    var data = JSON.parse(response.data);
    var action = this.getAction(data);
    action.execute(data);
  },

  getAction: function(data) {
    switch(data.action) {
      case 'videos':
        return videosResponse;
      default:
        return this.defaultResponse(data);
    }
  },

  defaultResponse: function(data) {
    return {
      execute: function execute(data) {
        console.log(data);
      }
    };
  }

};
