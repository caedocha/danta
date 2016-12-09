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

  get '/videos' do
    VideoLibrary.videos.to_json
  end

  get '/launch' do
    Pecari::Player.launch(params[:video])
  end

  get '/exec' do
    Pecari::Player.send(params[:command])
  end

  run! if __FILE__ == $0

end
