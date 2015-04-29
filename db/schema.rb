# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150429001607) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.string   "url",                      null: false
    t.string   "description", default: ""
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "imagings", force: :cascade do |t|
    t.integer  "image_id"
    t.integer  "pack_id"
    t.integer  "subpack_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "imagings", ["image_id"], name: "index_imagings_on_image_id", using: :btree
  add_index "imagings", ["pack_id"], name: "index_imagings_on_pack_id", using: :btree
  add_index "imagings", ["subpack_id"], name: "index_imagings_on_subpack_id", using: :btree

  create_table "packs", force: :cascade do |t|
    t.integer  "author_id",                                         null: false
    t.string   "title",                                             null: false
    t.text     "description", default: "crazy cool custom content"
    t.string   "url",                                               null: false
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
  end

  create_table "subpackings", force: :cascade do |t|
    t.integer  "subpack_id"
    t.integer  "pack_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "subpackings", ["pack_id"], name: "index_subpackings_on_pack_id", using: :btree
  add_index "subpackings", ["subpack_id"], name: "index_subpackings_on_subpack_id", using: :btree

  create_table "subpacks", force: :cascade do |t|
    t.integer  "author_id",                                               null: false
    t.string   "title",                                                   null: false
    t.text     "description", default: "sweet supplemental super supply"
    t.string   "url",                                                     null: false
    t.datetime "created_at",                                              null: false
    t.datetime "updated_at",                                              null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                   null: false
    t.string   "email",                                                                                      null: false
    t.string   "password_digest",                                                                            null: false
    t.string   "session_token",                                                                              null: false
    t.string   "avatar",          default: "https://s3-us-west-1.amazonaws.com/asco-jkh/layout/defavie.jpg"
    t.datetime "created_at",                                                                                 null: false
    t.datetime "updated_at",                                                                                 null: false
  end

end
