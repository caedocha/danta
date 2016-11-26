require 'json'
require_relative 'lib/video_library'
require_relative 'lib/dummy_library'

class DantaAPI < Sinatra::Base

  helpers VideoLibrary
  helpers DummyLibrary

  get '/videos' do
    #VideoLibrary.videos.to_json
    DummyLibrary.videos.to_json
  end

  get '/launch' do
    Pecari::Player.launch(params[:video])
  end

  get '/exec' do
    Pecari::Player.send(params[:command])
  end

  run! if __FILE__ == $0

end
