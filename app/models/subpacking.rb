# == Schema Information
#
# Table name: subpackings
#
#  id         :integer          not null, primary key
#  subpack_id :integer
#  pack_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subpacking < ActiveRecord::Base
  belongs_to :subpack
  belongs_to :pack
end
