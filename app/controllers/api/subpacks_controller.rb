class Api::SubpacksController < ApplicationController
  def create
    @subpack = Pack.new(subpack_params)
  end

  def index
    @packs = Pack.all

    render :index
  end

  def show
    @subpack = Pack.find(params[:id])
    render :show
  end

  private
  def subpack_params
    params.require(:subpack).permit(:title, :description, :url)
  end
end
