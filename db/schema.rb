# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_17_014111) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_bots", force: :cascade do |t|
    t.boolean "active"
    t.bigint "bot_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bot_id"], name: "index_active_bots_on_bot_id"
    t.index ["user_id"], name: "index_active_bots_on_user_id"
  end

  create_table "bots", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "coins", force: :cascade do |t|
    t.string "name"
    t.string "symbol"
    t.string "api_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "memberships", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "positions", force: :cascade do |t|
    t.integer "shares"
    t.money "purchase_price", scale: 2
    t.date "purchase_date"
    t.bigint "user_id"
    t.bigint "coin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coin_id"], name: "index_positions_on_coin_id"
    t.index ["user_id"], name: "index_positions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.boolean "membership"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_bots", "bots"
  add_foreign_key "active_bots", "users"
  add_foreign_key "memberships", "users"
  add_foreign_key "positions", "coins"
  add_foreign_key "positions", "users"
end
