require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Air Purifying', products: [] },
        { name: 'Low Maintenance', products: [] },
        { name: 'Low Light', products: [] },
        { name: 'Pet Friendly', products: [] },
    ]);

    await Product.deleteMany({});
    const products = await Product.create([

        { name: 'Snake Plant', categories: [categories[0]._id, categories[1]._id], size: 6, description: `Snake Plants are one of the easiest plants to take care of. They do well in shady or bright areas, but be careful not to move them from one extreme to the other too quickly. Lucky for owners, these plants are quite resilient as owners only need to watch out for overwatering and freezing temperatures.`, price: 7.95 },
        { name: 'Monstera', categories: [categories[1]._id], size: 10, description: `Monstera Plants are well know for their fun "Swiss Cheese" appearance. They enjoy bright, indirect sunlight and plenty of water. Their foliage can grow quite large, offering different height dimensions and a nice sense of shade.`, price: 11.95 },
        { name: 'Prayer Plant', categories: [categories[2]._id, categories[3]._id], size: 4, description: `With their beautiful pattern, the Prayer Plant has always been a welcome addition to any home.They get their name from the way their leaves open up in the sun and close again at dusk, coming together like hands praying.Owners will need to be a bit more attentive for these plants as they like their soil to be just damp, light levels low, and humidity at a high.`, price: 5.95 },
        { name: 'Asparagus Fern', categories: [categories[1]._id, categories[2]._id], size: 8, description: `Asparagus ferns offer a unique style of foliage that will add a new texture to your collection.But watch out! Their frilly, feathery look can be deceiving, thorns are hiding under their delicate appearance.Be careful as well, do not let any family member(furry or not) eat any part of this plant, they are quite toxic.Look, don't touch!`, price: 9.95 },
        { name: 'Pothos', categories: [categories[1]._id], size: 6, description: `Pothos can be found in homes all over. They are also known as "devil's Ivy" as they are so hard to kill! The beauty of Pothos plants are their lovely trailing leaves. Hanging them from the ceiling or wall can help accentuate their vines reaching far and wide. They can adjust well to different levels of light, water, and humidity, making them perfect for beginner plant-owners.`, price: 7.95 },
        { name: 'Guiana Chestnut', categories: [categories[1]._id, categories[2]._id], size: 10, description: `The Guiana Chestnut can grow tall, showcasing the braided trunk leading to its full foliage.As they originate in wetlands, owners can sleep without the worry of overwatering.With low light and plenty of water, these plants will grow into happy little trees fit for any beginner.`, price: 11.95 },
        { name: 'Chinese Money Plant', categories: [categories[1]._id, categories[3]._id], size: 4, description: `The Chinese Money Plant grows quick and plenty, just as one would hope money comes! Their leaves resemble little coins, hence their name. Other fun nicknames include the "Pancake Plant" and "UFO Plant" due to their signature look! They have become quite popular over the years due to their fun appearance and ease of care.`, price: 5.95 },
        { name: 'English Ivy', categories: [categories[0]._id, categories[1]._id], size: 6, description: `Starting from full shade, this trailing plant grows and grows until it's ready for the bright lights! Best as an indoor plant due to their abundant growth, they offer beautiful vines for any hanging or windowsill display.They can easily adjust to varying water and light, but prefer moderate humidity.An easy- to - grow and keep - on - growing type of plant but watch out as they are not pet friendly.`, price: 7.95 },
        { name: 'Spider Plant', categories: [categories[0]._id, categories[1]._id, categories[3]._id], size: 4, description: `Arachnophobes, rest easy! Spider is only the name of this plant, no eight-legged creatures to be found. It is quite the fitting name as their long, thin leaves resemble the legs of a spider and their plantlets look like little spiders hanging off the mother plant. The plantlets allow for easy propagation as they are ready to grow their own roots once removed and planted.`, price: 5.95 },
        { name: 'Aloe Vera', categories: [categories[0]._id], size: 8, description: `Aloe Vera plants are a well-known type of succulent. They provide many benefits health benefits from their air purification to treating burns! Like other succulents, aloe vera do not need a lot of water or humidity, but do need lots of sunlight. Keep your aloe collection growing by taking the little cuttings and planting them directly in a new pot or in a bigger pot alongside your main plant.`, price: 9.95 },
        { name: 'Chinese Evergreen', categories: [categories[0]._id, categories[2]._id], size: 6, description: `The Chinese Evergreen is a type of jungle floor plant so direct sunlight is not needed. The vibrant shades of yellows and greens in their leaves will still keep their colour despite the lack of sun. They even have other unique features depending on the variety which can include pink veins or silver zebra stripes. Water is not as needed and humidity will be fine at normal home levels.`, price: 7.95 },
        { name: 'ZZ Plant', categories: [categories[0]._id, categories[1]._id, categories[2]._id], size: 4, description: `The “Zamioculcas Zamifolia” Plant, or ZZ for short is becoming a well-known house plant. Not only Is the name fun, but it sounds like the care level for this plant - EZ! It does well in low light and will survive if watering slips your mind here and there. Although it is a type of air-purifying plant, it is not safe to consume, so keep an eye out for any kids or pets!`, price: 5.95 },
        { name: 'African Violet', categories: [categories[3]._id], size: 4, description: `Add some colour into your home with this beautiful, vibrant flowering plant! They can be found in purple, blue, white, pink, and red. Their leaves are hardy and offer a deep green that lets the contrasting flower colour pop even more. The flowers usually stay pretty and healthy for the first few weeks before clocking out for the cycle. During this time, they are easy to maintain, but afterwards it is a bit trickier to get them blooming again.`, price: 5.95 },
        { name: 'Venus Flytrap', categories: [categories[1]._id, categories[3]._id], size: 6, description: `Famous for being a carnivorous plant, Venus Flytraps are actually pet-friendly! They will also help catch any pesky flies or insects that come nearby. Because they can munch on a bug here and there, they only needed to be supplemented with some water and direct sunlight to stay happy. These plants are a unique and handy addition to any plant collection!`, price: 7.95 },
        { name: 'Orchid', categories: [categories[3]._id], size: 8, description: `Orchids have become a symbol of elegance and sophistication. Their blooms come in a variety of colours and variations allowing owners to find the one that best fits their space and personalities. Care can be a bit tricky as they do like sufficient indirect light, water, and circulating air. Their blooms will fall eventually and depending on the type, they can re-bloom every few months or only once or twice a year.`, price: 9.95 }
    ]);

    await Category.updateOne({ _id: categories[0]._id }, { products: [products[0]._id, products[7]._id, products[8]._id, products[9]._id, products[10]._id, products[11]._id] })
    await Category.updateOne({ _id: categories[1]._id }, { products: [products[0]._id, products[1]._id, products[3]._id, products[4]._id, products[5]._id, products[6]._id, products[7]._id, products[8]._id, products[11]._id, products[13]._id] })
    await Category.updateOne({ _id: categories[2]._id }, { products: [products[2]._id, products[3]._id, products[5]._id, products[10]._id, products[11]._id] })
    await Category.updateOne({ _id: categories[3]._id }, { products: [products[2]._id, products[6]._id, products[8]._id, products[12]._id, products[13]._id, products[14]._id] })

    process.exit();

})();