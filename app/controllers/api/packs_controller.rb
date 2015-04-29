class Api::PacksController < ApplicationController
  def create
    @pack = Pack.new(pack_params)
  end

  def index
    @packs = Pack.all

    render :index
  end

  def show
    @pack = Pack.find(params[:id])
    render :show
  end

  private
  def pack_params
    params.require(:pack).permit(:title, :description, :url)
  end
end
