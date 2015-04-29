# == Schema Information
#
# Table name: images
#
#  id          :integer          not null, primary key
#  url         :string           not null
#  description :string           default("")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Image < ActiveRecord::Base
  validates :url, presence: true
  has_many :imagings
  has_one :subpack, through: :imagings, source: :subpack
  has_one :pack, through: :imagings, source: :pack
  has_one :subpack_author, through: :subpack, source: :author
  has_one :pack_author, through: :pack, source: :author

  def author
    self.pack_author || self.subpack_author
  end
end
