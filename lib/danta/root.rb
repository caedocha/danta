require 'sinatra'
require_relative 'app'
require_relative 'api'

module Danta

  class Root

    def rack_builder
      rack = Rack::Builder.new

      rack.map '/' do
        run Danta::App.new
      end

      rack.map '/api' do
        run Danta::Api.new
      end

      rack
    end

    def start
      rack = rack_builder
      danta_host = ENV['DANTA_HOST'] || '0.0.0.0'
      danta_port = ENV['DANTA_PORT'] || 9292
      startup_msg(danta_host, danta_port)
      Rack::Server.start app: rack, Host: danta_host, Port: danta_port
      exit
    end

    def startup_msg(danta_host, danta_port)
      p
      p '====================================================='
      p 'Danta app is starting up with the following settings:'
      p "Host: #{danta_host} # Set DANTA_HOST env var for custom host, defaults on 0.0.0.0"
      p "Port: #{danta_port} # Set DANTA_PORT env var for custom port, defaults on 9292"
      p '====================================================='
      p
    end

  end

end
