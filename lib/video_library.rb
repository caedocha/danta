require 'yaml'
require_relative 'tree'

module VideoLibrary

  VIDEO_FORMATS = [ :mkv, :mov, :mp4 ]
  VIDEO_LIBRARIES = YAML::load(File.open(File.join(Dir.pwd, 'config', 'video_library.yml')))['videos']

  def self.videos
    VIDEO_LIBRARIES
      .map { |library| Tree.new(paths: video_paths(library)) }
      .flat_map { |library| library.to_h }
  end

  private

  def self.video_paths(path)
    Dir.glob("#{path}/**/*.{#{extensions}}")
  end

  def self.extensions
    VIDEO_FORMATS.join(',')
  end

end
