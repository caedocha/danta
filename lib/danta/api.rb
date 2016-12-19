require 'json'
require 'sinatra-websocket'
require_relative 'request_handler'

module Danta

  class Api < Sinatra::Base

    get '/ws' do
      RequestHandler.new(request: request).process
    end

    run! if __FILE__ == $0

  end

end
