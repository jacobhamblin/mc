json.extract! subpack, :id, :author_id, :title, :description, :url, :created_at, :updated_at

json.author do
  json.author subpack.author, :id, :username, :email, :avatar
end

json.pack do
  json.pack subpack.pack, :id, :author_id, :title, :description, :url
end

json.images do
  json.images subpack.images, :id, :url, :description
end
