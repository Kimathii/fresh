// data/companies.js
// Only 3 brands: Ekunaba Pet Food, Pure Encapsulations, Bacardi Ocho

const companies = [
  {
    name: "Ekunaba Pet Food",
    store: "Tractor Supply Co",
    slogan: "Nutrition That Performs",
    phone: "(502) 874-8000",
    locations: [
      { address: "4331 Bardstown Rd, Louisville, KY 40218", state: "KY" },
      { address: "4000 Shelbyville Rd, Louisville, KY 40207", state: "KY" },
      { address: "1025 Veterans Pkwy, Clarksville, IN 47129", state: "KY" }
    ],
    products: [
      { name: "Adult Dry Dog Food 30lb", price: 49.99 },
      { name: "Puppy Formula 15lb", price: 34.99 },
      { name: "Lamb & Rice Recipe 25lb", price: 44.99 },
      { name: "Senior Dog Food 20lb", price: 39.99 },
      { name: "Grain-Free Formula 30lb", price: 54.99 }
    ]
  },

  {
    name: "Pure Encapsulations",
    store: "The Vitamin Shoppe",
    slogan: "Science-Based Nutrition",
    phone: "(203) 877-4281",
    locations: [
      { address: "150 E 42nd St, New York, NY 10017", state: "NY" },
      { address: "250 Summer St, Boston, MA 02210", state: "MA" },
      { address: "600 N Michigan Ave, Chicago, IL 60611", state: "IL" }
    ],
    products: [
      { name: "Magnesium Glycinate Capsules", price: 39.95 },
      { name: "Vitamin D3 5000 IU", price: 29.95 },
      { name: "O.N.E Multivitamin", price: 49.95 },
      { name: "B-Complex Plus", price: 36.95 },
      { name: "Probiotic 5", price: 42.95 }
    ]
  },

  {
    name: "Bacardi Ocho",
    stores: ["Liquor Store", "Bar & Lounge", "Grocery Store"],
    slogan: "Aged Eight Years",
    phone: "(305) 378-3000",
    locations: [
      { address: "Total Wine & More, Orlando, FL 32819", state: "FL" },
      { address: "Spec's Wine, Houston, TX 77057", state: "TX" },
      { address: "Ralphs Grocery, Los Angeles, CA 90036", state: "CA" },
      { address: "The Broken Shaker, Miami Beach, FL 33139", state: "FL" }
    ],
    products: [
      { name: "Bacardi Ocho Rum 750ml", price: 29.99 },
      { name: "Bacardi Ocho Rum 1L", price: 34.99 },
      { name: "Bacardi Ocho – Glass Pour", price: 11.99 }
    ]
  }
];

export default companies;
