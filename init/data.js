const vegetables = [
    {
        name: "Tomato",
        description: "Fresh and juicy tomatoes.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40130385_5-fresho-tomato-local-organically-grown.jpg?tr=w-1920,q=80",
        price: "₹30",
        discount: "10% OFF",
        quantity: "1 kg"
    },
    {
        name: "Potato",
        description: "Starchy and versatile potatoes.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40047637_4-fresho-potato-chandramukhi-organically-grown.jpg?tr=w-1920,q=80",
        price: "₹40",
        discount: "5% OFF",
        quantity: "1 kg"
    },
    {
        name: "Onion",
        description: "Flavorful onions for cooking.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000331_13-fresho-onion-sambhar.jpg?tr=w-1920,q=80",
        price: "₹25",
        discount: "15% OFF",
        quantity: "1 kg"
    },
    {
        name: "Carrot",
        description: "Sweet and crunchy carrots.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000846_5-fresho-carrot-red-halwa.jpg?tr=w-1920,q=80",
        price: "₹35",
        discount: "8% OFF",
        quantity: "500 g"
    },
    {
        name: "Broccoli",
        description: "Fresh broccoli for healthy meals.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000063_20-fresho-broccoli.jpg?tr=w-1920,q=80",
        price: "₹60",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Spinach",
        description: "Nutrient-rich spinach leaves.",
        image_url: "https://www.bigbasket.com/media/uploads/p/l/10000187_14-fresho-palak-cleaned-without-roots.jpg",
        price: "₹50",
        discount: "12% OFF",
        quantity: "300 g"
    },
    {
        name: "Capsicum",
        description: "Colorful capsicum for added flavor.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40287310_2-fresho-coloured-capsicum-mix.jpg?tr=w-1920,q=80",
        price: "₹70",
        discount: "5% OFF",
        quantity: "250 g"
    },
    {
        name: "Cauliflower",
        description: "Versatile cauliflower for various dishes.",
        image_url: "https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg",
        price: "₹55",
        discount: "10% OFF",
        quantity: "1 kg"
    },
    {
        name: "Beans",
        description: "Fresh green beans for a crunchy bite.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40089743_2-fresho-beans-haricot.jpg?tr=w-1920,q=80",
        price: "₹45",
        discount: "15% OFF",
        quantity: "500 g"
    },
    {
        name: "Cucumber",
        description: "Cool and refreshing cucumbers.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/30007400_4-fresho-cucumber.jpg?tr=w-1920,q=80",
        price: "₹30",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Beetroot",
        description: "Sweet and earthy beetroot.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40145209_4-fresho-ooty-beetroot.jpg?tr=w-1920,q=80",
        price: "₹40",
        discount: "5% OFF",
        quantity: "500 g"
    },
    {
        name: "Pumpkin",
        description: "Nutritious pumpkin for soups and stews.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40050087_4-fresho-pumpkin-green-cut.jpg?tr=w-1920,q=80",
        price: "₹50",
        discount: "8% OFF",
        quantity: "1 kg"
    },
    {
        name: "Sweet Corn",
        description: "Sweet and tender corn kernels.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40004992_14-fresho-sweet-corn.jpg?tr=w-1920,q=80",
        price: "₹60",
        discount: "12% OFF",
        quantity: "500 g"
    },
    {
        name: "Brinjal",
        description: "Tender and versatile brinjals.",
        image_url: "Brinjal",
        price: "₹45",
        discount: "10% OFF",
        quantity: "1 kg"
    },
    {
        name: "Radish",
        description: "Crunchy and spicy radishes.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000164_14-fresho-radish-white.jpg?tr=w-1920,q=80",
        price: "₹35",
        discount: "15% OFF",
        quantity: "500 g"
    },
    {
        name: "Mushroom",
        description: "Fresh mushrooms for savory dishes.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40021066_4-fresho-cut-mushroom.jpg?tr=w-1920,q=80",
        price: "₹80",
        discount: "8% OFF",
        quantity: "250 g"
    },
    {
        name: "Zucchini",
        description: "Tender and mild zucchini.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40211818_1-fresho-zucchini-yellow.jpg?tr=w-1920,q=80",
        price: "₹55",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Celery",
        description: "Crisp and fresh celery stalks.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40198833_1-fresho-celery-hydroponically-grown.jpg?tr=w-1920,q=80",
        price: "₹70",
        discount: "5% OFF",
        quantity: "300 g"
    },
    {
        name: "Artichoke",
        description: "Tender artichoke hearts.",
        image_url: "https://www.bigbasket.com/media/uploads/p/l/10000009_10-fresho-artichoke.jpg",
        price: "₹100",
        discount: "10% OFF",
        quantity: "250 g"
    }
];

const fruits = [
    {
        name: "Apple",
        description: "Fresh and crisp apples.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/1203781_1-fresho-apple-red-delicious-washington-regular.jpg?tr=w-1920,q=80",
        price: "₹150",
        discount: "10% OFF",
        quantity: "1 kg"
    },
    {
        name: "Banana",
        description: "Sweet and soft bananas.",
        image_url: "https://www.bigbasket.com/media/uploads/p/l/10000027_28-fresho-banana-robusta.jpg",
        price: "₹50",
        discount: "5% OFF",
        quantity: "1 dozen"
    },
    {
        name: "Orange",
        description: "Juicy and tangy oranges.",
        image_url: "https://example.com/orange.jpg",
        price: "₹120",
        discount: "10% OFF",
        quantity: "1 kg"
    },
    {
        name: "Mango",
        description: "Ripe and juicy mangoes.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000306_4-fresho-lalbagh-mango-sindhura.jpg?tr=w-1920,q=80",
        price: "₹200",
        discount: "15% OFF",
        quantity: "1 kg"
    },
    {
        name: "Pineapple",
        description: "Sweet and tropical pineapples.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000156_24-fresho-pineapple.jpg?tr=w-1920,q=80",
        price: "₹90",
        discount: "12% OFF",
        quantity: "1 piece"
    },
    {
        name: "Strawberry",
        description: "Fresh and juicy strawberries.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-1920,q=80",
        price: "₹250",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Grapes",
        description: "Sweet and seedless grapes.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40122445_4-fresho-grapes-green-residue-free.jpg?tr=w-1920,q=80",
        price: "₹180",
        discount: "5% OFF",
        quantity: "500 g"
    },
    {
        name: "Kiwi",
        description: "Tangy and juicy kiwis.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/20000911_35-fresho-kiwi-green.jpg?tr=w-1920,q=80",
        price: "₹200",
        discount: "10% OFF",
        quantity: "6 pieces"
    },
    {
        name: "Pomegranate",
        description: "Sweet and juicy pomegranates.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40120006_6-fresho-pomegranate-small.jpg?tr=w-1920,q=80",
        price: "₹300",
        discount: "12% OFF",
        quantity: "1 piece"
    },
    {
        name: "Blueberry",
        description: "Fresh and tangy blueberries.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/30009286_9-fresho-blueberry.jpg?tr=w-1920,q=80",
        price: "₹350",
        discount: "15% OFF",
        quantity: "250 g"
    },
    {
        name: "Peach",
        description: "Sweet and juicy peaches.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40218330_2-fresho-peach-indian.jpg?tr=w-1920,q=80",
        price: "₹180",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Cherry",
        description: "Sweet and delicious cherries.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/30001779_4-fresho-cherry-imported.jpg?tr=w-1920,q=80",
        price: "₹400",
        discount: "8% OFF",
        quantity: "250 g"
    },
    {
        name: "Apricot",
        description: "Sweet and tender apricots.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/20001095_14-fresho-apricot-dried.jpg?tr=w-1920,q=80",
        price: "₹200",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Papaya",
        description: "Sweet and ripe papayas.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40115912_3-fresho-papaya.jpg?tr=w-1920,q=80",
        price: "₹150",
        discount: "5% OFF",
        quantity: "1 piece"
    },
    {
        name: "Watermelon",
        description: "Refreshing and juicy watermelon.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40103540_5-fresho-watermelon-medium.jpg?tr=w-1920,q=80",
        price: "₹70",
        discount: "12% OFF",
        quantity: "1 piece"
    },
    {
        name: "Guava",
        description: "Sweet and aromatic guavas.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/10000369_13-fresho-guava.jpg?tr=w-1920,q=80",
        price: "₹80",
        discount: "10% OFF",
        quantity: "1 kg"
    },
    {
        name: "Dragon Fruit",
        description: "Exotic and colorful dragon fruit.",
        image_url: "https://www.bigbasket.com/media/uploads/p/l/40008982_16-fresho-dragon-fruit.jpg",
        price: "₹350",
        discount: "10% OFF",
        quantity: "1 piece"
    },
    {
        name: "Cantaloupe",
        description: "Sweet and juicy cantaloupe.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40073761_8-fresho-muskmelon-striped.jpg?tr=w-1920,q=80",
        price: "₹90",
        discount: "5% OFF",
        quantity: "1 piece"
    },
    {
        name: "Lychee",
        description: "Sweet and aromatic lychees.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/40218335_2-fresho-litchi.jpg?tr=w-1920,q=80",
        price: "₹250",
        discount: "10% OFF",
        quantity: "500 g"
    }
];


const foodgrainsOilMasala = [
    {
        name: "Bakery Snacks",
        description: "Delicious bakery snacks.",
        image_url: "https://www.brandsynario.com/wp-content/uploads/2020/09/travel-snacks.jpg",
        price: "₹150",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Breads & Buns",
        description: "Fresh breads and buns.",
        image_url: "https://www.bigbasket.com/media/uploads/p/m/70001658_7-english-oven-bun-burger.jpg?tr=w-1920,q=80",
        price: "₹100",
        discount: "5% OFF",
        quantity: "Pack of 6"
    },
    {
        name: "Cakes & Pastries",
        description: "Tasty cakes and pastries.",
        image_url: "https://www.freshdirect.com/media/images/product/catering3/cat_pid_39_j.jpg?lastModify=2021-06-08T16:01:47&publishId=3348",
        price: "₹300",
        discount: "15% OFF",
        quantity: "1 piece"
    },
    {
        name: "Cookies, Rusk & Khari",
        description: "Crunchy cookies, rusk, and khari.",
        image_url: "https://www.freshdirect.com/media/images/product/pastry/cookies_brownies/ckibni_chocchip_z.jpg?lastModify=2005-05-19T15:45:03&publishId=3348",
        price: "₹200",
        discount: "10% OFF",
        quantity: "500 g"
    },
    {
        name: "Dairy",
        description: "Fresh dairy products.",
        image_url: "https://www.freshdirect.com/media/images/product/dairy_15/dai_pid_2003533_j.jpg?lastModify=2017-01-10T11:11:38&publishId=3348",
        price: "₹120",
        discount: "8% OFF",
        quantity: "1 liter"
    },
    {
        name: "Gourmet Breads",
        description: "Artisan gourmet breads.",
        image_url: "https://static.cordonbleu.edu/Files/MediaFile/63822.jpg",
        price: "₹180",
        discount: "10% OFF",
        quantity: "1 loaf"
    },
    {
        name: "Ice Creams & Desserts",
        description: "Variety of ice creams and desserts.",
        image_url: "https://media.licdn.com/dms/image/C5112AQE4iVfPeM9njA/article-cover_image-shrink_600_2000/0/1569751454473?e=2147483647&v=beta&t=vvREMthQ1vFWoBGJHzd3AhfcJ58MjVAl69q8D9gUBuA",
        price: "₹250",
        discount: "12% OFF",
        quantity: "500 ml"
    },
    {
        name: "Non Dairy",
        description: "Non-dairy alternatives.",
        image_url: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/10/non-dairy-opions.jpg?quality=82&strip=1",
        price: "₹150",
        discount: "5% OFF",
        quantity: "1 liter"
    }
];

const fruitJuices = [
    {
        name: "Coconut Water",
        description: "Refreshing coconut water.",
        image_url: "https://m.media-amazon.com/images/I/81R-aAwCKWL.jpg",
        price: "₹360",
        discount: "10% OFF",
        quantity: "200 ml (Pack of 6)"
    },
    {
        name: "Pineapple Refreshers",
        description: "Tropical pineapple refresher.",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcAT_E8kdNTNZwZe1wJLFbiFu7d6OzAdFoKBYnpoylkFWuLnHS2IVZDHLG0nXu4cC2fg&usqp=CAU",
        price: "₹240",
        discount: "10% OFF",
        quantity: "200 ml (Pack of 6)"
    },
    {
        name: "Pink Guava Chilli",
        description: "Unique pink guava with a hint of chili.",
        image_url: "https://my-test-11.slatic.net/p/3b5686667e05df35f0d5429f19404c28.png",
        price: "₹40",
        discount: "10% OFF",
        quantity: "200 ml (Pack of 1)"
    },
    {
        name: "Sugarcane Refreshers",
        description: "Sweet and refreshing sugarcane juice.",
        image_url: "https://cdn.shopify.com/s/files/1/0753/4349/5462/files/1-banner-mobile-new-n.jpg?v=1684314069&width=3840",
        price: "₹240",
        discount: "10% OFF",
        quantity: "200 ml (Pack of 6)"
    },
    {
        name: "Aam Mango",
        description: "Rich mango refresher.",
        image_url: "https://mishry.com/wp-content/uploads/2019/06/paperboat-mango-drinks-1.jpeg",
        price: "₹40",
        discount: "20% OFF",
        quantity: "200 ml (Pack of 1)"
    },
    {
        name: "Cold Coffee Protein Milkshake",
        description: "Cold coffee milkshake with protein.",
        image_url: "https://www.bigbasket.com/media/uploads/p/l/1209219_3-raw-pressery-protein-milkshake-cold-coffee.jpg",
        price: "₹110",
        discount: "10% OFF",
        quantity: "200 ml (Pack of 1)"
    },
    {
        name: "Classic Lemon",
        description: "Tangy classic lemon juice.",
        image_url: "https://m.media-amazon.com/images/I/51GAXQlZceL.jpg",
        price: "₹900",
        discount: "10% OFF",
        quantity: "750 ml (Pack of 6)"
    },
    {
        name: "Aam Panna",
        description: "Traditional aam panna drink.",
        image_url: "https://m.media-amazon.com/images/I/61fIEazcCLL.AC_UF1000,1000_QL80.jpg",
        price: "₹900",
        discount: "10% OFF",
        quantity: "750 ml (Pack of 6)"
    },
    {
        name: "Pineapple Refreshers",
        description: "Refreshing pineapple refresher.",
        image_url: "https://www.thetastybiteblog.com/wp-content/uploads/2022/06/starbucks-copycat-pineapple-passionfruit-refresher-06-scaled.jpg",
        price: "₹900",
        discount: "10% OFF",
        quantity: "750 ml (Pack of 6)"
    },
    {
        name: "Pink Guava Chilli",
        description: "Tangy pink guava with chili.",
        image_url: "https://i0.wp.com/zheelicious.com/wp-content/uploads/2020/06/9dad4c_537a879cc0674085bad75a73495e8407mv2-2.jpg?fit=1480%2C2220&ssl=1",
        price: "₹150",
        discount: "10% OFF",
        quantity: "750 ml (Pack of 1)"
    },
    {
        name: "Sugarcane Refreshers",
        description: "Sweet sugarcane refresher.",
        image_url: "https://juicernet.com//wp-content/uploads/2022/09/XuAPRb1lfE8rgquN1x2nRjuKGKb9av9J1663676401.jpg",
        price: "₹900",
        discount: "10% OFF",
        quantity: "750 ml (Pack of 6)"
    },
    {
        name: "Aam Mango",
        description: "Mango refresher for a tropical flavor.",
        image_url: "https://3.imimg.com/data3/XR/YE/MY-2677091/mango-juice-500x500.jpg",
        price: "₹900",
        discount: "20% OFF",
        quantity: "750 ml (Pack of 6)"
    },
    {
        name: "RAW Hydration Combo",
        description: "Combo pack of hydration juices.",
        image_url: "https://wingreensworld.com/cdn/shop/files/Rakhi_BestsellerBuyoutCombo.jpg?v=1692278078",
        price: "₹1,080",
        discount: "10% OFF",
        quantity: "Various"
    },
    {
        name: "Valencia Orange Juice",
        description: "Refreshing Valencia orange juice.",
        image_url: "https://www.twistedalchemy.com/cdn/shop/products/Orange-upright_1445x.jpg?v=1664320549",
        price: "₹720",
        discount: "10% OFF",
        quantity: "250 ml (Pack of 6)"
    },
    {
        name: "RAW Mixer Kit",
        description: "Kit for mixing various juices.",
        image_url: "https://wingreensworld.com/cdn/shop/files/AlphonsoandValencia-front.jpg?v=1684151282",
        price: "₹600",
        discount: "10% OFF",
        quantity: "Various"
    },
    {
        name: "Pomegranate Juice",
        description: "Rich and healthy pomegranate juice.",
        image_url: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/07/24231655/29.jpg",
        price: "₹900",
        discount: "10% OFF",
        quantity: "250 ml (Pack of 6)"
    },
    {
        name: "Masala Lemon",
        description: "Spiced masala lemon juice for a unique flavor.",
        image_url: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Janani_/Masala_Lemonade.jpg",
        price: "₹900",
        discount: "10% OFF",
        quantity: "750 ml (Pack of 6)"
    },
    {
        name: "Grapefruit Juice",
        description: "Zesty grapefruit juice for a refreshing taste.",
        image_url: "https://www.alphafoodie.com/wp-content/uploads/2022/12/Grapefruit-Juice-square.jpeg",
        price: "₹200",
        discount: "10% OFF",
        quantity: "250 ml (Pack of 1)"
    }
];


module.exports = { data: fruitJuices};