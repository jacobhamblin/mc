json.extract! subpack, :id, :author_id, :title, :description, :url, :created_at, :updated_at

json.author do
  json.extract! subpack.author, :id, :username, :email, :avatar
end

json.pack do
  json.extract! subpack.pack, :id, :author_id, :title, :description, :url
end

json.images do
  json.extract! pack.images, :id, :url, :description
end
