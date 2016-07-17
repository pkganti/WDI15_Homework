class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.text :image
      t.text :classification
      t.string :pubyear
      t.text :awards
      t.timestamp
    end
  end
end
