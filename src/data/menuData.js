// Everything shown in the Menu section lives here. Edit this file to change names, prices, items or logos.
//
// logo:   "paniPuri" | "biteSip" | "friedChicken"   (see src/assets/images/index.js)
// color:  "yellow" | "pink" | "teal" | "orange"      (card background)
// price:  number in rupees, or null to show "Ask for price"
// items:  list shown inside the card. Use { title, list } groups, or a plain string list.

export const menuIntro = {
  eyebrow: "Our menu",
  title: "Four ways to own a Bubble Bites cart",
  subtitle: "Pick the setup that fits your budget. Full training and support included.",
};

export const menuItems = [
  {
    id: "pani-puri",
    name: "Pani puri cart",
    tagline: "Crisp puris with a flavour for every mood.",
    logo: "paniPuri",
    color: "yellow",
    price: 45000,
    badges: ["No royalty", "Battery 3 year warranty", "Charger 6 months warranty"],
    groups: [
      {
        title: "Initial Masala list (1 kg each)",
        list: [
          "Mint Masala",
          "Tamarind Masala",
          "Jaljeera Masala",
          "Khatta meetha Masala",
          "Lemon Masala",
          "Garlic Masala"
        ]
      },
      {
        title: "Things included",
        list: [
          "4 x 2 Cart",
          "Water Jar (2pcs)",
          "Cutting Board (1pcs)",
          "Cooking spoon (2pcs)",
          "5 Liters Jar (5pcs)",
          "Sauce Bottle (2pcs)",
          "Plate (10pcs)",
          "Bowl (2pcs)",
          "Masala 6 flavour(6kg)",
          "Knife (2pcs)",
          "Puri",
          "Thatu Vadai 1kg",
          "Puri Storage box",
          "20 Lts Box",
          "Storage Box(3pcs)",
          "Box for storage (2pcs)",
          "Menu Card",
          "Potato Crusher",
          "Stickers",
          "Lightings",
          "Battery",
          "Charger"
        ]

      }
    ],

    contacts: ["8098679608", "8526729305", "8610828970"],

  },
  {
    id: "waffle",
    name: "Waffle cart",
    tagline: "Hot golden waffles with loaded toppings.",
    logo: "waffleLogo", // TODO: replace with the waffle logo when you have one
    color: "pink",
    price: 90000,
    badges: ["No royalty", "Battery 3 year warranty", "5 × 3 Cart with Full Closed", "Charger 6 month warranty", "Gas Waffle Machine 1 year warranty"],
    groups: [
      {
        title: "Items with Warranty",
        list: [
          "Battery",
          "Charger",
          "Gas Waffle Machine",
        ]
      },
      {
        title: "Things included",
        list: [
          "5×3 Cart (Full Closed)",
          "Initial Waffle Mix Stock",
          "Spreads For Waffle",
          "Cutting Board",
          "Knife Set",
          "Storage Box",
          "Timer",
          "Plates (10 pcs)",
          "Tong",
          "Bowl",
          "Measuring Jar",
          "Silicon Brush",
          "Weight Machine",
          "Fan",
          "Menu Card",
          "Beater",
          "Spatula For Spreading"
        ]
      }
    ],
    contacts: ["8098679608", "8526729305", "8610828970"],
  },
  {
    id: "fried-chicken",
    name: "Fried chicken cart",
    tagline: "Crunchy, juicy and sauced your way. 5 x 3 cart, fully closed.",
    logo: "chickenLogo",
    color: "orange",
    price: 80000,
    badges: ["No royalty", "Battery 3 year warranty", "Charger 6 month warranty", "Oil fryer 1 year warranty"],
    groups: [
      {
        title: "Initial stock (1 kg each)",
        list: ["Marinade masala", "Breading mix", "Nasvillae powder", "Peri peri masala"],
      },
      {
        title: "Things included",
        list: [
          "Sauce bottle (3)",
          "Cutting board",
          "Knife set",
          "Storage box",
          "Masala sprinkler",
          "Timer",
          "Cutting board silver",
          "Plate (10pcs)",
          "Tong",
          "Bowl",
          "Measuring jar",
          "Silicon brush",
          "Box (5 pieces)",
          "Chicken dip basket",
          "Weight machine",
        ],
      },
    ],
    contacts: ["8098679608", "8526729305", "8610828970"],
  },
  {
    id: "combo-shop",
    name: "Fried chicken, burger and bubble tea shop",
    tagline: "Three best sellers under one roof.",
    logo: "biteSip",
    color: "teal",
    price: 299999,
    // featured: true,
    badges: ["Full training and support included"],
    // Poster lists some items twice (e.g. plates), shown here as "x2"
    groups: [
      {
        title: "Equipments provided",
        list: [
          "Fryer",
          "Freezer",
          "Breading table",
          "Tawa",
          "Visi cooler",
          "Computer",
          "Mixer",
          "SS table",
          "Knife set",
          "Plate (10pcs)",
          "Silicon brush (x2)",
          "Marinate trays (x2)",
          "Dustbin (x2)",
          "Tongs (x2)",
          "Tawa turner (x2)",
          "Chopping board (x2)",
          "GN pan",
          "Timer",
        ],
      },
    ],
    contacts: ["8098679608", "8526729305", "8610828970"],

  },
];
