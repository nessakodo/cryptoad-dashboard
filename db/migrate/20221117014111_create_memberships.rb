class CreateMemberships < ActiveRecord::Migration[6.1]
  def change
    create_table :memberships do |t|
        t.string :membership, :default => "free"
        t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
