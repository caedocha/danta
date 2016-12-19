require_relative 'lib/danta/version'
Gem::Specification.new do |s|
  s.name = 'danta'
  s.version = Danta::VERSION
  s.date = '2016-12-16'
  s.authors = ['Carlos Chacon']
  s.email = 'caedo.00@gmail.com'
  s.summary = 'Danta is a video webplayer for the Raspberry Pi.'
  s.description = 'Danta is a web app for easy video playing in your Raspberry Pi using Sinatra and Omxplayer.'
  s.homepage = "http://github.com/caedocha/danta"
  s.files        = Dir["{lib}/**/*.{rb,html,js,css}", "bin/*", "LICENSE", "*.md"]
  s.require_path = 'lib'
  s.executables << 'danta'
end
