require 'yaml'
require_relative 'library/tree'

module Danta

  class VideoLibrary

    VIDEO_FORMATS = [ :mkv, :mov, :mp4 ]

    def videos
      video_libraries
        .map { |library| Library::Tree.new(paths: video_paths(library)) }
        .flat_map { |library| library.to_h }
    end

    private

    def video_paths(path)
      Dir.glob("#{path}/**/*.{#{extensions}}")
    end

    def extensions
      VIDEO_FORMATS.join(',')
    end

    def video_libraries
      YAML.load(video_library_file)['videos']
    end

    def video_library_file
      File.open(File.join(Dir.home, 'video_library.yml'))
    rescue Errno::ENOENT
      p "Cannot find video_library.yml in your home directory."
      p "Either create the file or set the env variable DANTA_VIDEO_LIBRARY pointing to the dir where the file exists."
      p "Create it with the following data:"
      p " ---"
      p " videos:"
      p "     - '/path/to/movies/'"
      raise Danta::UnexistingVideoLibraryFile
    end

    def video_library_dir
      ENV['DANTA_VIDEO_LIBRARY'] || Dir.home
    end

  end

  class UnexistingVideoLibraryFile < StandardError

    def message
      <<-EOF
        Cannot find video_library.yml in your home directory.
        Either create the file or set the env variable DANTA_VIDEO_LIBRARY pointing to the dir where the file exists.
        Create it with the following data:
          ---
          videos:
            - '/path/to/movies/'
      EOF
    end

  end

end
