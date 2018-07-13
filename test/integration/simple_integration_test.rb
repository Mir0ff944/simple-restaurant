# frozen_string_literal: true

require 'test_helper'

class SimpleIntegrationTest < ActionDispatch::IntegrationTest
  test 'be able to visit home page' do
    get '/'
    assert_response :success

    assert_select 'a.navbar-brand', 'Бистро Аги'
    assert_select 'a.nav-link', 'Меню'
    assert_select 'a.nav-link', 'Галерия'
    assert_select 'a.nav-link', 'Карта'
    assert_select 'a.nav-link', 'Информация и контакти'
  end
end
