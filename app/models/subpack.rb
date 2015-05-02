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
  belongs_to :pack
  has_many :images, as: :imageable
end
