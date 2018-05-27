# frozen_string_literal: true

module DailyMenuHelper
  def menu_reader
    ::MenuBuilder::MASTER_MENU
  end

  def drinks_reader
    ::MenuBuilder::DRINKS_MENU
  end
end
