module Danta

  class App < Sinatra::Base

    set :status, true
    set :public_folder, public_dir

    get '/' do
      send_file(File.join(public_dir, 'index.html'))
    end

    def public_dir
      File.join(File.dirname(__FILE__), 'public')
    end

    run! if __FILE__ == $0

  end

end
