require 'json'
require 'sinatra-websocket'
require_relative 'lib/video_library'
require_relative 'lib/request_handler'

class DantaAPI < Sinatra::Base

  helpers VideoLibrary

  set :sockets, []

  get '/ws' do
    RequestHandler.new(request: request).process
  end

  run! if __FILE__ == $0

end
