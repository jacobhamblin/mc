class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :pack_id, index: true
      t.integer :subpack_id, index: true
      t.integer :tag_id, null: false

      t.timestamps null: false
    end
  end
end
