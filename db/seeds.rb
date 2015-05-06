# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!({email: 'doku', username:'doku', password:'password'})
User.create!({email: 'ofFaith', username: 'ofFaith', password: 'password'})
User.create!({email: 'demonkleenr', username: 'demonkleenr', password: 'password'})
User.create!({email: 'mid', username: 'mid', password: 'password'})
User.create!({email: 'flow', username: 'flow', password:'password'})
User.create!({email: 'xdcobra', username: 'xdcobra', password:'password'})
User.create!({email: 'slender', username: 'slender', password:'password'})
User.create!({email: 'pleb', username: 'pleb', password:'password'})
User.create!({email: 'retro', username: 'retro', password:'password'})
User.create!({email: 'qtpie', username: 'qtpie', password:'password'})

Pack.create!({author_id: 1, title: 'Dokucraft', description: 'Dokucraft is a Minecraft texture pack which will heighten your playing experience to a whole new level. This is the brightest version of the Saga which will really lighten up every single one of your worlds. This texture pack is perfect for all you Minecraft desires whether it be for survival single player worlds or mass multiplayer constructions.', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-High-1.8.1.zip', prev: 'https://s3-us-west-1.amazonaws.com/afcojor/images/ydo4H.png'})
Pack.create!({author_id: 2, title: 'Faithful', description: 'A double resolution texture pack that stays faithful to the original Minecraft textures.', url: 'http://goo.gl/kzNkX', prev: 'http://i.imgur.com/c2Xin.png'})
Pack.create!({author_id: 3, title: 'DEM Resource Pack', description: 'high-quality textures', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/DemTextures_1.8-v1.1.1.zip', prev: 'http://cdn.resourcepack.net/images/2015/04/DEM-Resource-Pack-for-minecraft-5.jpg'})
Pack.create!({author_id: 4, title: 'Middle Earth', description: 'Created by TheAwesomeKielbasa, this pack was made for the fans of popular movie Hobbit and LOTR. You will enjoy a medieval and RPG feel.', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/Middle+Earth+A+Lord+of+the+Rings+and+The+Hobbit+Resource+Pack+64.zip', prev: 'http://cdn.resourcepack.net/images/2015/05/Middle-Earth-The-Hobbit-Resource-Pack-for-minecraft-3.jpg'})
Pack.create!({author_id: 5, title: 'Flows HD', description: 'Flows HD takes home design to the next level.', url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/%5B1.7.9%5DFlows+HD+V.3.rar', prev:'http://i.ytimg.com/vi/Srnp_MQirQo/maxresdefault.jpg'})
Pack.create!({author_id: 6, title: 'XDCobra', description: 'dat farm feel', url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/XDcobras+3D+Recourcepack+v0.731.zip', prev:'http://cdn.resourcepack.net/images/2015/01/XDcobra-3D-Resource-Pack-hd-resource-pack-minecraft-3.jpg'})
Pack.create!({author_id: 7, title: 'Slendercraft', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/SlenderCraft-Resource-Pack-Official-17.zip', prev:'http://cdn.resourcepack.net/images/2013/09/Slendercraft-Resource-Pack-for-Minecraft-2.jpg'})
Pack.create!({author_id: 8, title: 'Pebbles', description: 'cavernous red textures... oh baby', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/Pebbles+32x32+v.1.80.zip', prev:'http://cdn.resourcepack.net/images/2015/01/Pebbles-Resource-Pack-for-minecraft-5.jpg'})
Pack.create!({author_id: 9, title: 'Retrovive', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/Retrovive+%5B16x16%5D.zip', prev:'http://cdn.resourcepack.net/images/2015/04/Retrovive-Resource-Pack-for-minecraft-2.jpg'})
Pack.create!({author_id: 10, title: 'Cheerful', description: 'cheerful pack by a cheerful couple', url: 'https://s3-us-west-1.amazonaws.com/afcojor/packs/Cheerful+Pack+v1.8h.zip', prev:'http://cdn.resourcepack.net/images/2015/01/Qtpies-Cheerful-Resource-Pack-for-minecraft-5.jpg'})

Subpack.create!({author_id: 1, pack_id: 1, title: 'Dark', description: "dokucraft's dark theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-Dark-1.8.3.zip', prev: 'https://s3-us-west-1.amazonaws.com/afcojor/images/maxresdefault.jpg'})
Subpack.create!({author_id: 1, pack_id: 1, title: 'Light', description: "dokucraft's light theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-Light-1.8.3.zip', prev:'https://s3-us-west-1.amazonaws.com/afcojor/images/hqdefault.jpg'})
Subpack.create!({author_id: 1, pack_id: 1, title: 'High', description: "dokucraft's high theme!", url:'https://s3-us-west-1.amazonaws.com/afcojor/packs/subpacks/Dokucraft-TSC-High-1.8.1.zip', prev: 'https://s3-us-west-1.amazonaws.com/afcojor/images/dokucrafthigh.jpg'})

Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1117/new_80_36104_screenshot.jpg', imageable_id: 1, imageable_type: 'Subpack'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1252/2012-12-27_162158_4507017.jpg', imageable_id: 2, imageable_type: 'Subpack'})
Image.create!({url: 'http://i53.tinypic.com/25ajfaw.png', imageable_id: 1, imageable_type: 'Subpack'})
Image.create!({url: 'http://www.minecrafttexturepacks.com/wp-content/uploads/2012/07/minidoku_1.jpg', imageable_id: 2, imageable_type: 'Subpack'})
Image.create!({url: 'http://www.minecraftyard.com/wp-content/uploads/2014/07/DokuCraft-Resource-Pack-4.jpg', imageable_id: 1, imageable_type: 'Subpack'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1222/2012-05-28_012359_2384033.jpg', imageable_id: 2, imageable_type: 'Subpack'})
Image.create!({url: 'http://i238.photobucket.com/albums/ff232/LikaLaruku/Minecraft%20New/DokucraftTSC02High01.png', imageable_id: 3, imageable_type: 'Subpack'})
Image.create!({url: 'http://static.planetminecraft.com/files/resource_media/screenshot/1144/4G5QU_534926_779965.jpg', imageable_id: 3, imageable_type: 'Subpack'})
Image.create!({url: 'http://i.imgur.com/QAFwR.png', imageable_id: 1, imageable_type: 'Subpack'})
Image.create!({url: 'http://i.imgur.com/Gditq.png', imageable_id: 2, imageable_type: 'Pack'})
Image.create!({url: 'http://www.minecrafttexturepacks.com/wp-content/uploads/2013/03/faithful_1.jpg', imageable_id: 2, imageable_type: 'Pack'})
Image.create!({url: 'http://i.imgur.com/YnYY7cJ.png', imageable_id: 2, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/04/DEM-Resource-Pack-for-minecraft-6.jpg', imageable_id: 3, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/04/DEM-Resource-Pack-for-minecraft-5.jpg', imageable_id: 3, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/04/DEM-Resource-Pack-for-minecraft-4.jpg', imageable_id: 3, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/05/Middle-Earth-The-Hobbit-Resource-Pack-for-minecraft-1.jpg', imageable_id: 4, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/05/Middle-Earth-The-Hobbit-Resource-Pack-for-minecraft-5.jpg', imageable_id: 4, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/05/Middle-Earth-The-Hobbit-Resource-Pack-for-minecraft-6.jpg', imageable_id: 4, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2013/10/Flows-HD-Resource-Pack-for-minecraft-2.jpg', imageable_id: 5, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2013/10/Flows-HD-Resource-Pack-for-minecraft-1.jpg', imageable_id: 5, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2013/10/Flows-HD-Resource-Pack-for-minecraft-9.jpg', imageable_id: 5, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/XDcobra-3D-Resource-Pack-hd-resource-pack-minecraft-2.jpg', imageable_id: 6, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/XDcobra-3D-Resource-Pack-hd-resource-pack-minecraft-1.jpg', imageable_id: 6, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/XDcobra-3D-Resource-Pack-hd-resource-pack-minecraft-5.jpg', imageable_id: 6, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2014/03/Slendercraft-Resource-Pack-1.jpg', imageable_id: 7, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2013/09/Slendercraft-Resource-Pack-for-Minecraft-4.jpg', imageable_id: 7, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2014/03/Slendercraft-Resource-Pack-2.jpg', imageable_id: 7, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/Pebbles-Resource-Pack-for-minecraft-1.jpg', imageable_id: 8, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/Pebbles-Resource-Pack-for-minecraft-8.jpg', imageable_id: 8, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/Pebbles-Resource-Pack-for-minecraft-6.jpg', imageable_id: 8, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/04/Retrovive-Resource-Pack-for-minecraft-1.jpg', imageable_id: 9, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/04/Retrovive-Resource-Pack-for-minecraft-3.jpg', imageable_id: 9, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/04/Retrovive-Resource-Pack-for-minecraft-4.jpg', imageable_id: 9, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/Qtpies-Cheerful-Resource-Pack-for-minecraft-1.jpg', imageable_id: 10, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/Qtpies-Cheerful-Resource-Pack-for-minecraft-9.jpg', imageable_id: 10, imageable_type: 'Pack'})
Image.create!({url:'http://cdn.resourcepack.net/images/2015/01/Qtpies-Cheerful-Resource-Pack-for-minecraft-2.jpg', imageable_id: 10, imageable_type: 'Pack'})
