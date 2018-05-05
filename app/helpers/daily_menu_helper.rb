# frozen_string_literal: true

module DailyMenuHelper
  def menu_reader
    dishes = ::MenuBuilder::MASTER_MENU
    dishes.each(&:to_s)
  end
end
