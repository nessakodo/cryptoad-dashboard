class CreateAddedCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :added_coins do |t|

      t.timestamps
    end
  end
end
