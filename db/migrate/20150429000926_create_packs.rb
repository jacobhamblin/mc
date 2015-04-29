class CreatePacks < ActiveRecord::Migration
  def change
    create_table :packs do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :description, default: "crazy cool custom content"
      t.string :url, null: false

      t.timestamps null: false
    end
  end
end
