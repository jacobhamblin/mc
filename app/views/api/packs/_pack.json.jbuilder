json.extract! pack, :id, :author_id, :title, :description, :url, :created_at, :updated_at

json.author do
  json.extract! pack.author, :id, :username, :email, :avatar
end

json.subpack do
  json.extract! pack.subpacks, :id, :author_id, :title, :description, :url
end

json.pack do
  json.extract! pack.images, :id, :url, :description
end
