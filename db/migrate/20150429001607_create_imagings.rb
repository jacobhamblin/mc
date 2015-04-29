class CreateImagings < ActiveRecord::Migration
  def change
    create_table :imagings do |t|
      t.integer :image_id, index: true
      t.integer :pack_id, index: true
      t.integer :subpack_id, index: true

      t.timestamps null: false
    end
  end
end
