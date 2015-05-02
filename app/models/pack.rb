# == Schema Information
#
# Table name: packs
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :text             default("crazy cool custom content")
#  url         :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pack < ActiveRecord::Base
  belongs_to :author, class_name: :User

  has_many :images, as: :imageable
  has_many :subpacks

end
