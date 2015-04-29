# == Schema Information
#
# Table name: subpacks
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :text             default("sweet supplemental super supply")
#  url         :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Subpack < ActiveRecord::Base
  belongs_to :author, class_name: :User

  has_many :subpackings
  has_many :imagings
  hsa_one :pack, through: :subpackings, source: :pack
  has_many :images, through: :imagings, source: :image
end
