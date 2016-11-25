var apiClient = {
  get: function(url, data) {
    this.call(
      {
        method: 'GET',
        url: url,
        data: data
      }
    );
  },

  // private

  call: function(options) {
    $.ajax({
      method: options['method'],
      url: options['url'],
      data: options['data'],
      type: 'json'
    });
  }
};
