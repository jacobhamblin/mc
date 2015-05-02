json.extract! user, :id, :username, :email, :avatar

json.images do
  json.images user.images, :id, :url, :description
end

json.packs do
  json.packs user.packs, :id, :author_id, :title, :description, :url
end

json.subpacks do
  json.subpacks user.subpacks,:id, :author_id, :title, :description, :url
end
