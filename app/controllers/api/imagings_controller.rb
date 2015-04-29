class Api::ImagingsController < ApplicationController
  def create
    @imaging = Imaging.new({image_id: params[:image].id, subpack_id: params[:subpack].id, pack_id: params[:pack].id})

    if @imaging.save
      render json: @imaging
    else
      render json: @imaging.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @imaging = Imaging.where('pack_id = ?', params[:pack_id]).where('image_id = ?', params[:image_id]) + Imaging.where('subpack_id = ?', params[:subpack_id]).where('image_id = ?', params[:image_id])

    if @imaging
      @imaging.destroy(@imaging.first.id)
      render json: @imaging
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private
  def imaging_params
    params.require(:imaging).permit(:image_id, :subpack_id, :pack_id)
  end
end
