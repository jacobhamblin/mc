class Api::SubpackingsController < ApplicationController
  def create
    @subpacking = Subpacking.new({pack_id: params[:pack].id, subpack_id: params[:subpack].id})

    if @subpacking.save
      render json: @subpacking
    else
      render json: @subpacking.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @subpacking = Subpacking.where('pack_id = ?', params[:pack_id]).where('subpack_id = ?', params[:subpack_id])

    if @subpacking
      @subpacking.destroy(@subpacking.first.id)
      render json: @subpacking
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private
  def subpacking_params
    params.require(:subpacking).permit(:recipient_id)
  end
end
