# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Pack.create!({author_id: 1, title: 'Dokucraft', description: 'Dokucraft is a Minecraft texture pack which will heighten your playing experience to a whole new level. This is the brightest version of the Saga which will really lighten up every single one of your worlds. This texture pack is perfect for all you Minecraft desires whether it be for survival single player worlds or mass multiplayer constructions.', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-High-1.8.1.zip'})
Subpack.create!({author_id: 1, title: 'Dark', description: "dokucraft's dark theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-Dark-1.8.3.zip'})
Subpack.create!({author_id: 1, title: 'Light', description: "dokucraft's light theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-Light-1.8.3.zip'})
Subpack.create!({author_id: 1, title: 'High', description: "dokucraft's high theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-High-1.8.1.zip'})

Subpacking.create!({subpack_id: 1, pack_id: 1})
Subpacking.create!({subpack_id: 2, pack_id: 1})
Subpacking.create!({subpack_id: 3, pack_id: 1})


Imaging.create!({subpack_id: 1, image_id: 1})
Imaging.create!({subpack_id: 1, image_id: 3})
Imaging.create!({subpack_id: 2, image_id: 2})
Imaging.create!({subpack_id: 2, image_id: 4})
Imaging.create!({subpack_id: 1, image_id: 5})
Imaging.create!({subpack_id: 2, image_id: 6})
Imaging.create!({subpack_id: 3, image_id: 7})
Imaging.create!({subpack_id: 3, image_id: 8})
Imaging.create!({subpack_id: 3, image_id: 9})

Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1117/new_80_36104_screenshot.jpg'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1252/2012-12-27_162158_4507017.jpg'})
Image.create!({url: 'http://i53.tinypic.com/25ajfaw.png'})
Image.create!({url: 'http://www.minecrafttexturepacks.com/wp-content/uploads/2012/07/minidoku_1.jpg'})
Image.create!({url: 'http://www.minecraftyard.com/wp-content/uploads/2014/07/DokuCraft-Resource-Pack-4.jpg'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1222/2012-05-28_012359_2384033.jpg'})
Image.create!({url: 'http://i238.photobucket.com/albums/ff232/LikaLaruku/Minecraft%20New/DokucraftTSC02High01.png'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1144/4G5QU_534926_779965.jpg'})
Image.create!({url: 'http://i.imgur.com/QAFwR.png'})
