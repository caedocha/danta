module Library

  class NullNode

    def name
      "nodeless"
    end

    def root?
      false
    end

    def leaf?
      true
    end

    def to_h
      {}
    end

    def to_json
      to_h.to_json
    end

  end

end
