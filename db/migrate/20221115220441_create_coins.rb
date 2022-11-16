class CreateCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :coins do |t|
      t.string :name
      t.string :symbol
      t.bigint :current_price
      t.integer :price_change_percentage_24h
      t.bigint :total_volume
      t.bigint :market_cap
      t.timestamps
    end
  end
end
