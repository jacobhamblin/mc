class CreateSubpackings < ActiveRecord::Migration
  def change
    create_table :subpackings do |t|
      t.integer :subpack_id, index: true
      t.integer :pack_id, index: true

      t.timestamps null: false
    end
  end
end
