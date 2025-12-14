const companies = [
  {
    name: "KFC",
    slogan: "Finger-Lickin' Good",
    phone: "(502) 874-8000",
    addresses: [
      "1441 Gardiner Lane, Louisville, KY 40213",
      "790 Eastern Pkwy, Louisville, KY 40217",
      "3520 Bardstown Rd, Louisville, KY 40218"
    ],
    menu: [
      { name: "Fried Chicken", price: 12.99 },
      { name: "Fries", price: 6.49 },
      { name: "Coleslaw", price: 4.99 },
      { name: "Mashed Potatoes", price: 5.99 },
      { name: "Coffee", price: 3.99 }
    ]
  },

  {
    name: "McDonald's",
    slogan: "I'm Lovin' It",
    phone: "(312) 555-0199",
    addresses: [
      "600 N Clark St, Chicago, IL 60654",
      "233 S Wacker Dr, Chicago, IL 60606",
      "105 E 42nd St, New York, NY 10017"
    ],
    menu: [
      { name: "Big Mac", price: 10.99 },
      { name: "Cheeseburger", price: 4.99 },
      { name: "Fries", price: 5.49 },
      { name: "McFlurry", price: 6.99 },
      { name: "Coffee", price: 3.49 }
    ]
  },

  {
    name: "Starbucks",
    slogan: "Brewed for Those Who Love Coffee",
    phone: "(206) 555-0123",
    addresses: [
      "1912 Pike Pl, Seattle, WA 98101",
      "102 Pike St, Seattle, WA 98101",
      "1200 5th Ave, Seattle, WA 98101"
    ],
    menu: [
      { name: "Caffè Latte", price: 6.99 },
      { name: "Cappuccino", price: 6.49 },
      { name: "Espresso", price: 4.99 },
      { name: "Blueberry Muffin", price: 5.49 },
      { name: "Croissant", price: 4.99 }
    ]
  },
  {
    name: "Burger King",
    slogan: "Have It Your Way",
    phone: "(305) 378-3000",
    addresses: [
      "5505 Blue Lagoon Dr, Miami, FL 33126",
      "1101 Brickell Ave, Miami, FL 33131",
      "8200 NW 36th St, Doral, FL 33166"
    ],
    menu: [
      { name: "Whopper", price: 11.49 },
      { name: "Chicken Fries", price: 6.99 },
      { name: "Onion Rings", price: 5.49 },
      { name: "Milkshake", price: 6.49 },
      { name: "Coffee", price: 3.29 }
    ]
  },

  {
    name: "Subway",
    slogan: "Eat Fresh",
    phone: "(203) 877-4281",
    addresses: [
      "325 Bic Dr, Milford, CT 06461",
      "88 Broadway, New York, NY 10005",
      "120 Wall St, New York, NY 10005"
    ],
    menu: [
      { name: "Italian BMT", price: 9.99 },
      { name: "Turkey Sub", price: 8.99 },
      { name: "Veggie Delight", price: 7.99 },
      { name: "Chips", price: 2.99 },
      { name: "Cookie", price: 1.99 }
    ]
  },

  {
    name: "Pizza Hut",
    slogan: "No One OutPizzas the Hut",
    phone: "(972) 580-7000",
    addresses: [
      "7100 Corporate Dr, Plano, TX 75024",
      "1201 Main St, Dallas, TX 75202",
      "400 N Olive St, Dallas, TX 75201"
    ],
    menu: [
      { name: "Pepperoni Pizza", price: 14.99 },
      { name: "Cheese Pizza", price: 13.49 },
      { name: "Breadsticks", price: 6.99 },
      { name: "Wings", price: 11.99 },
      { name: "Soda", price: 2.99 }
    ]
  },

  {
    name: "Domino's",
    slogan: "It's What We Do",
    phone: "(734) 930-3030",
    addresses: [
      "30 Frank Lloyd Wright Dr, Ann Arbor, MI 48106",
      "123 Main St, Ann Arbor, MI 48104",
      "200 S State St, Ann Arbor, MI 48104"
    ],
    menu: [
      { name: "Margherita Pizza", price: 13.99 },
      { name: "BBQ Chicken Pizza", price: 15.49 },
      { name: "Garlic Bread", price: 6.49 },
      { name: "Chicken Wings", price: 12.99 },
      { name: "Brownies", price: 7.49 }
    ]
  },

  {
    name: "Taco Bell",
    slogan: "Live Más",
    phone: "(949) 863-4500",
    addresses: [
      "1 Glen Bell Way, Irvine, CA 92618",
      "200 Spectrum Center Dr, Irvine, CA 92618",
      "3500 Barranca Pkwy, Irvine, CA 92606"
    ],
    menu: [
      { name: "Crunchy Taco", price: 3.99 },
      { name: "Burrito Supreme", price: 6.99 },
      { name: "Quesadilla", price: 7.49 },
      { name: "Nachos", price: 5.99 },
      { name: "Freeze Drink", price: 4.49 }
    ]
  },

  {
    name: "Wendy's",
    slogan: "Quality Is Our Recipe",
    phone: "(614) 764-3100",
    addresses: [
      "1 Dave Thomas Blvd, Dublin, OH 43017",
      "200 High St, Columbus, OH 43215",
      "150 N Front St, Columbus, OH 43215"
    ],
    menu: [
      { name: "Dave's Single", price: 9.49 },
      { name: "Spicy Chicken Sandwich", price: 8.99 },
      { name: "Fries", price: 4.99 },
      { name: "Frosty", price: 3.99 },
      { name: "Coffee", price: 2.99 }
    ]
  },

  {
    name: "Chick-fil-A",
    slogan: "Eat Mor Chikin",
    phone: "(404) 765-8038",
    addresses: [
      "5200 Buffington Rd, Atlanta, GA 30349",
      "75 5th St NW, Atlanta, GA 30308",
      "100 Peachtree St, Atlanta, GA 30303"
    ],
    menu: [
      { name: "Chicken Sandwich", price: 8.49 },
      { name: "Chicken Nuggets", price: 7.99 },
      { name: "Waffle Fries", price: 4.99 },
      { name: "Lemonade", price: 3.99 },
      { name: "Milkshake", price: 5.49 }
    ]
  },

  {
    name: "Popeyes",
    slogan: "Love That Chicken",
    phone: "(305) 378-3000",
    addresses: [
      "400 NW 26th St, Miami, FL 33127",
      "500 Brickell Ave, Miami, FL 33131",
      "1200 Collins Ave, Miami Beach, FL 33139"
    ],
    menu: [
      { name: "Chicken Sandwich", price: 8.99 },
      { name: "Spicy Tenders", price: 9.49 },
      { name: "Biscuits", price: 3.99 },
      { name: "Red Beans and Rice", price: 4.99 },
      { name: "Iced Tea", price: 2.99 }
    ]
  },

  {
    name: "Panera Bread",
    slogan: "Food as It Should Be",
    phone: "(314) 984-1000",
    addresses: [
      "3630 S Geyer Rd, St. Louis, MO 63127",
      "100 N Broadway, St. Louis, MO 63102",
      "200 Market St, St. Louis, MO 63101"
    ],
    menu: [
      { name: "Broccoli Cheddar Soup", price: 7.99 },
      { name: "Caesar Salad", price: 8.99 },
      { name: "Turkey Sandwich", price: 9.49 },
      { name: "Bagel", price: 2.99 },
      { name: "Coffee", price: 3.49 }
    ]
  },

  {
    name: "Dunkin'",
    slogan: "America Runs on Dunkin'",
    phone: "(781) 961-8300",
    addresses: [
      "130 Royall St, Canton, MA 02021",
      "250 Summer St, Boston, MA 02210",
      "1 Federal St, Boston, MA 02110"
    ],
    menu: [
      { name: "Donut", price: 1.99 },
      { name: "Munchkins", price: 4.99 },
      { name: "Iced Coffee", price: 3.99 },
      { name: "Latte", price: 4.99 },
      { name: "Bagel", price: 2.49 }
    ]
  },

  {
    name: "Chipotle",
    slogan: "Food with Integrity",
    phone: "(303) 595-4000",
    addresses: [
      "610 Newport Center Dr, Newport Beach, CA 92660",
      "200 Broadway, Denver, CO 80203",
      "1701 Wynkoop St, Denver, CO 80202"
    ],
    menu: [
      { name: "Chicken Burrito", price: 10.99 },
      { name: "Steak Bowl", price: 12.49 },
      { name: "Veggie Bowl", price: 9.99 },
      { name: "Chips and Guac", price: 5.99 },
      { name: "Soda", price: 2.99 }
    ]
  },

  {
    name: "Five Guys",
    slogan: "Burgers and Fries",
    phone: "(703) 339-9500",
    addresses: [
      "10718 Richmond Hwy, Lorton, VA 22079",
      "1500 Wilson Blvd, Arlington, VA 22209",
      "1201 F St NW, Washington, DC 20004"
    ],
    menu: [
      { name: "Cheeseburger", price: 11.99 },
      { name: "Bacon Burger", price: 12.99 },
      { name: "Cajun Fries", price: 5.99 },
      { name: "Milkshake", price: 6.49 },
      { name: "Hot Dog", price: 6.99 }
    ]
  },

  {
    name: "IHOP",
    slogan: "Come Hungry. Leave Happy.",
    phone: "(818) 240-6055",
    addresses: [
      "10 W Walnut St, Pasadena, CA 91103",
      "700 S Flower St, Los Angeles, CA 90017",
      "300 N Brand Blvd, Glendale, CA 91203"
    ],
    menu: [
      { name: "Pancake Stack", price: 9.99 },
      { name: "Omelette", price: 11.49 },
      { name: "French Toast", price: 10.99 },
      { name: "Coffee", price: 3.49 },
      { name: "Hash Browns", price: 4.99 }
    ]
  },

  {
    name: "Olive Garden",
    slogan: "When You're Here, You're Family",
    phone: "(407) 245-4000",
    addresses: [
      "4500 W Vine St, Kissimmee, FL 34746",
      "8001 S Orange Blossom Trl, Orlando, FL 32809",
      "9101 International Dr, Orlando, FL 32819"
    ],
    menu: [
      { name: "Lasagna", price: 14.99 },
      { name: "Fettuccine Alfredo", price: 13.49 },
      { name: "Breadsticks", price: 5.99 },
      { name: "Caesar Salad", price: 6.99 },
      { name: "Iced Tea", price: 3.49 }
    ]
  },

  {
    name: "Red Lobster",
    slogan: "For the Seafood Lover in You",
    phone: "(407) 734-7200",
    addresses: [
      "450 S Orange Ave, Orlando, FL 32801",
      "800 N Magnolia Ave, Orlando, FL 32803",
      "9100 International Dr, Orlando, FL 32819"
    ],
    menu: [
      { name: "Lobster Tail", price: 24.99 },
      { name: "Shrimp Scampi", price: 18.49 },
      { name: "Cheddar Biscuits", price: 6.99 },
      { name: "Grilled Salmon", price: 19.99 },
      { name: "Lemonade", price: 3.99 }
    ]
  }

];

export default companies;
