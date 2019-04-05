class StaticPagesController < ApplicationController
  def show
    render "static_pages/root"
  end
end