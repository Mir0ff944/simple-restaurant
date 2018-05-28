# frozen_string_literal: true

require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test 'be able to visit home page' do
    get '/'
    assert_response :success

    assert_select 'a.navbar-brand', 'Restaurant'
    assert_select 'a.nav-link', 'Меню'
    assert_select 'a.nav-link', 'Галерия'
    assert_select 'a.nav-link', 'Карта'
    assert_select 'a.nav-link', 'Информация и контакти'
  end
end
