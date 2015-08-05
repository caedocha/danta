require 'rubygems'
require 'bundler'

Bundler.require

require './danta_app'
require './danta_api'

#run Danta

run Rack::URLMap.new('/api' => DantaAPI.new, '/' => DantaApp.new)
