require 'json'

module Library

  class Node

    attr_accessor :name
    attr_accessor :nodes
    attr_accessor :path
    attr_accessor :parent

    def initialize(name:, parent: nil, nodes: [])
      @name = name
      @nodes = nodes
      @parent = parent
    end

    def root?
      parent.empty?
    end

    def leaf?
      nodes.empty?
    end

    def to_h
      {
        name: name,
        path: path,
        nodes: nodes.map(&:to_h)
      }
    end

    def to_json
      to_h.to_json
    end

    def path
      @path ||= build_path
    end

    private

    def build_path
      next_parent = parent
      parent_paths = [name]
      while next_parent
        parent_paths << next_parent.name
        next_parent = next_parent.parent
      end
      parent_paths.reverse.join('/')
      File.join(['/', parent_paths.reverse].flatten)
    end

  end

end
