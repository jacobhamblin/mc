json.extract! user, :id, :username, :email, :avatar

json.images do
  json.extract! user.images, :id, :url, :description
end

json.packs do
  json.extract! user.packs, :id, :author_id, :title, :description, :url
end

json.subpacks do
  json.extract! user.subpacks,:id, :author_id, :title, :description, :url
end
