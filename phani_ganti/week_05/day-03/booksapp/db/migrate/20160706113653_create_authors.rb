class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.date :dob
      t.text :publications
      t.text :awards
      t.text :bestsellers
      t.text :image
      t.timestamp
    end
  end
end
