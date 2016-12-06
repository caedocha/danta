require_relative 'node'
require_relative 'null_node'

class Tree

  attr_reader :nodes
  attr_accessor :paths

  def initialize(paths:)
    @paths = paths
  end

  def nodes
    @nodes ||= root_nodes
  end

  def to_h
    nodes.map(&:to_h)
  end

  def to_json
    to_h.to_json
  end

  private

  def splitted_paths
    paths.map { |path| path.split('/').reject { |path| path.empty? } }
  end

  def unlinked_nodes
    @unlinked_nodes ||= splitted_paths
      .map do |paths|
        paths.map do |path|
          Node.new(name: path)
        end
    end
  end

  def linked_nodes
    @linked_nodes ||= unlinked_nodes.map do |unlinked_nodes|
      root_nodes = []
      unlinked_nodes.each_cons(2).each_with_index do |(parent, child), index|
        if(index == 0)
          root_nodes << parent
        end
        child.parent = parent
        parent.nodes << child
      end
      root_nodes
    end
  end

  def root_nodes
    backup_nodes = linked_nodes.dup
    temp_nodes = backup_nodes.first.dup
    backup_nodes.shift
    backup_nodes.each_with_object(temp_nodes) do |nod, tmp|
      rewire_nodes(node: nod.first, base_node: tmp.first)
    end
    temp_nodes
  end

  def rewire_nodes(node:, base_node:, backup_parent: nil)
    if(node.name == base_node.name)
      x = base_node.nodes.detect { |n| n.name == node.nodes.first.name } || base_node.nodes.first || NullNode.new
      if x.name == "nodeless"
        rewire_nodes(node: node.nodes.first, base_node: x, backup_parent: base_node)
      else
        rewire_nodes(node: node.nodes.first, base_node: x)
      end
    elsif(base_node.name == "nodeless")
      node.parent = backup_parent
      backup_parent.nodes << node
    else
      node.parent = base_node.parent
      base_node.parent.nodes << node
    end
  end

end
