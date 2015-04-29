class CreateSubpacks < ActiveRecord::Migration
  def change
    create_table :subpacks do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :description, default: "sweet supplemental super supply"
      t.string :url, null: false

      t.timestamps null: false
    end
  end
end
