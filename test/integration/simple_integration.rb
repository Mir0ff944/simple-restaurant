# frozen_string_literal: true

require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'be able to visit home page' do
    get '/'
    assert_response :success
  end
end
