require_relative 'dispatcher'

class RequestHandler

  attr_reader :request

  def initialize(request:)
    @request = request
  end

  def process
    if request.websocket?
      process_web_socket_request
    else
      process_http_request
    end
  end

  private

  def process_web_socket_request
    request.websocket do |ws|

      ws.onopen do
        ws.send({ action: 'open_connection', status: 'success', data: {} }.to_json)
        p "Connection opened"
      end

      ws.onmessage do |msg|
        dispatcher = Dispatcher.new(raw_data: msg)
        ws.send(dispatcher.dispatch)
      end

      ws.onclose do
        ws.send({ action: 'close_connection', status: 'success', data: {} }.to_json)
        p "Connection closed"
      end

    end
  end

  def process_http_request
    p "HTTP requests are not supported"
  end

  def dispatcher
    @dispatcher ||= Dispatcher.new
  end

end
