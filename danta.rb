require 'json'
require_relative 'lib/video_library'

class Danta < Sinatra::Base

  helpers VideoLibrary

  get '/' do
    VideoLibrary.videos.to_json
  end

  get '/launch' do
    Pecari::Player.launch(params[:video])
  end

  get '/exec' do |command|
    Pecari::Player.send(params[:command])
  end

  run! if __FILE__ == $0

end
