# == Schema Information
#
# Table name: imagings
#
#  id         :integer          not null, primary key
#  image_id   :integer
#  pack_id    :integer
#  subpack_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Imaging < ActiveRecord::Base
  belongs_to :subpack
  belongs_to :pack
  belongs_to :image
end
