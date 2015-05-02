# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!({email: 'doku', username:'doku', password:'password'})

Pack.create!({author_id: 1, title: 'Dokucraft', description: 'Dokucraft is a Minecraft texture pack which will heighten your playing experience to a whole new level. This is the brightest version of the Saga which will really lighten up every single one of your worlds. This texture pack is perfect for all you Minecraft desires whether it be for survival single player worlds or mass multiplayer constructions.', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-High-1.8.1.zip'})

Subpack.create!({author_id: 1, pack_id: 1, title: 'Dark', description: "dokucraft's dark theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-Dark-1.8.3.zip'})
Subpack.create!({author_id: 1, pack_id: 1, title: 'Light', description: "dokucraft's light theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-Light-1.8.3.zip'})
Subpack.create!({author_id: 1, pack_id: 1, title: 'High', description: "dokucraft's high theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-High-1.8.1.zip'})

Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1117/new_80_36104_screenshot.jpg', imageable_id: 1, imageable_type: 'Subpack'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1252/2012-12-27_162158_4507017.jpg', imageable_id: 2, imageable_type: 'Subpack'})
Image.create!({url: 'http://i53.tinypic.com/25ajfaw.png', imageable_id: 1, imageable_type: 'Subpack'})
Image.create!({url: 'http://www.minecrafttexturepacks.com/wp-content/uploads/2012/07/minidoku_1.jpg', imageable_id: 2, imageable_type: 'Subpack'})
Image.create!({url: 'http://www.minecraftyard.com/wp-content/uploads/2014/07/DokuCraft-Resource-Pack-4.jpg', imageable_id: 1, imageable_type: 'Subpack'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1222/2012-05-28_012359_2384033.jpg', imageable_id: 2, imageable_type: 'Subpack'})
Image.create!({url: 'http://i238.photobucket.com/albums/ff232/LikaLaruku/Minecraft%20New/DokucraftTSC02High01.png', imageable_id: 3, imageable_type: 'Subpack'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1144/4G5QU_534926_779965.jpg', imageable_id: 3, imageable_type: 'Subpack'})
Image.create!({url: 'http://i.imgur.com/QAFwR.png', imageable_id: 1, imageable_type: 'Subpack'})
 
