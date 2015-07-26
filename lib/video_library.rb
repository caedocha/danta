require 'yaml'

module VideoLibrary

  VIDEO_FORMATS = [ :mkv, :mov, :mp4 ]
  VIDEO_LIBRARIES = YAML::load(File.open(File.join(Dir.pwd, 'config', 'video_library.yml')))['videos']

  def self.videos
    VIDEO_LIBRARIES.map do |library|
      { library: library, videos: load_videos(library) }
    end
  end

  private

  def self.load_videos(path)
    Dir.glob("#{path}/**/*.{#{extensions}}").map{ |full_path| File.basename(full_path) }
  end

  def self.extensions
    VIDEO_FORMATS.join(',')
  end

end
