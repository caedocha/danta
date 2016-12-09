require 'json'

class Dispatcher

  attr_reader :raw_data

  def initialize(raw_data:)
    @raw_data = raw_data
  end

  def dispatch
    case action
    when 'videos'
      videos_response
    when 'launch'
      launch_action
    when 'exec'
      exec_action
    else
      unrecognized_response
    end
  rescue StandardError => e
    invalid_response(e)
  end

  def videos_response
    {
      action: action,
      status: 'success',
      data: VideoLibrary.videos.to_json
    }.to_json
  end

  def launch_action
    Pecari::Player.launch(params[:video])
    launch_response
  end

  def launch_response
    {
      action: action,
      status: 'success',
      data: "playing #{params['video']}"
    }.to_json
  end

  def exec_action
    Pecari::Player.send(params[:command])
    exec_response
  end

  def exec_response
    {
      action: action,
      status: 'success',
      data: "executing #{params['param']}"
    }.to_json
  end

  def unrecognized_response
    {
      action: unrecognized_action,
      status: 'fail',
      data: ''
    }.to_json
  end

  def invalid_response(exception)
    {
      action: 'invalid_action',
      status: 'fail',
      data: exception.message
    }.to_json
  end

  def data
    @data ||= JSON.parse(raw_data)
  end

  def action
    @action ||= data['action']
  end

  def params
    @params ||=data['params']
  end

end
