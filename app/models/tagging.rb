class Tagging < ActiveRecord::Base
  belongs_to :tag
  belongs_to :pack
  belongs_to :subpack
end
