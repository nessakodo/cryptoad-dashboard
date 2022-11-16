class CreateAddedCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :added_coins do |t|
      t.integer :coin_id
      t.boolean :added
      # t.belongs_to :user, null: false, foreign_key: true
      # t.belongs_to :coin, null: false, foreign_key: true
      t.timestamps
    end
  end
end
