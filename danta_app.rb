class DantaApp < Sinatra::Base
  set :bind, '0.0.0.0'

  get '/' do
    send_file(File.join('public', 'index.html'))
  end

  run! if __FILE__ == $0

end
