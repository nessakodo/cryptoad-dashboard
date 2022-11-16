class CreateActiveBots < ActiveRecord::Migration[6.1]
  def change
    create_table :active_bots do |t|
      t.boolean :active
      t.references :bot, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
