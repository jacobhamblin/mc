json.extract! pack, :id, :author_id, :title, :description, :url, :created_at, :updated_at

json.author do
  json.author pack.author, :id, :username, :email, :avatar
end

json.subpacks do
  json.subpacks pack.subpacks, :id, :author_id, :title, :description, :url
end

json.images do
  json.images pack.images, :id, :url, :description
end
