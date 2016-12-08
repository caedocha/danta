require 'json'
require 'sinatra-websocket'
require_relative 'lib/video_library'
require_relative 'lib/dummy_library'

class DantaAPI < Sinatra::Base

  helpers VideoLibrary
  helpers DummyLibrary

  set :sockets, []

  get '/ws' do
    if request.websocket?
      request.websocket do |ws|

        ws.onopen do
          ws.send('Connection opened')
          p "Connection opened"
          settings.sockets << ws
        end

        ws.onmessage do |msg|
          p "Received: #{msg}"
          #ws.send("Pong: #{msg}")
          ws.send(VideoLibrary.videos.to_json)
        end

        ws.onclose do
          ws.send('Connection closed')
          p "Connection closed"
        end

      end
    else
      p "Hello HTML"
    end
  end

  get '/videos' do
    #VideoLibrary.videos.to_json
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
