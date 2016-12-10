require 'yaml'
require_relative 'library/tree'

module VideoLibrary

  VIDEO_FORMATS = [ :mkv, :mov, :mp4 ]

  def self.videos
    video_libraries
      .map { |library| Library::Tree.new(paths: video_paths(library)) }
      .flat_map { |library| library.to_h }
  end

  private

  def self.video_paths(path)
    Dir.glob("#{path}/**/*.{#{extensions}}")
  end

  def self.extensions
    VIDEO_FORMATS.join(',')
  end

  def self.video_libraries
    YAML.load(video_library_file)['videos']
  end

  def self.video_library_file
    File.open(File.join(Dir.pwd, 'config', 'video_library.yml'))
  rescue Errno::ENOENT
    p 'ERROR: video_library.yml not found in config directory. Make a copy of video_library.yml.sample'
    raise Errno::ENOENT
  end

end
