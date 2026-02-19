// utils/generateReceipt.js
import companies from "../data/companies";

// State tax rates
const STATE_TAX = {
  KY: 0.06,
  IL: 0.0625,
  NY: 0.04,
  WA: 0.065,
  FL: 0.06,
  CT: 0.0635,
  TX: 0.0625,
  MI: 0.06,
  CA: 0.0725,
  OH: 0.0575,
  GA: 0.04,
  MA: 0.0625
};

// ---------------- HELPERS ----------------
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const priceWithVariance = (price) => +(price + (Math.random() * 4 - 2)).toFixed(2);

const generateOrderNumber = () => `#${getRandomInt(10000, 99999)}`;
const formatDate = () => {
  const d = new Date();

  // move clock back 2 hours
  d.setHours(d.getHours() - 2);

  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");

  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
};




// ---------------- GENERATE ITEMS ----------------
const generateItems = (products, brandName) => {
  // Check if this is the "One Touch" Walmart by looking for a characteristic product
  // "One Touch Verio Reflect" is the first item in the One Touch list.
  const isVitalProteinsWalmart = brandName === "Walmart" && products.some(p => p.name.includes("OneTouch"));

  // Check if this is the "Quilted Northern/PetArmor" Walmart
  const isQuiltedPetArmorWalmart = brandName === "Walmart" && products.some(p => p.name.includes("Quilted Northern"));

  // Check if this is Sam's Club (has VetIQ and Liquid IV products)
  const isSamsClub = brandName === "Sam's Club";

  // WALMART SPECIFIC LOGIC (Only for the first Walmart type)
  if (isVitalProteinsWalmart) {
    // Top 4 products (indices 0-3)
    const topGroup = products.slice(0, 4);
    // Bottom 5 products (indices 4+)
    const bottomGroup = products.slice(4);

    const items = [];

    // 1. Select 3 random distinct items from topGroup with FIXED quantity of 3
    const topSelection = [];
    const topCopy = [...topGroup];
    for (let i = 0; i < 3; i++) {
      if (topCopy.length === 0) break;
      const rndIndex = getRandomInt(0, topCopy.length - 1);
      topSelection.push(topCopy[rndIndex]);
      topCopy.splice(rndIndex, 1);
    }

    topSelection.forEach(product => {
      const itemNumber = getRandomInt(10000000, 99999999);
      const quantity = 3; // Fixed quantity
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber,
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    });

    // 2. Select 2 random distinct items from bottomGroup with RANDOM quantity (1-3)
    const bottomSelection = [];
    const bottomCopy = [...bottomGroup];
    for (let i = 0; i < 2; i++) {
      if (bottomCopy.length === 0) break;
      const rndIndex = getRandomInt(0, bottomCopy.length - 1);
      bottomSelection.push(bottomCopy[rndIndex]);
      bottomCopy.splice(rndIndex, 1);
    }

    bottomSelection.forEach(product => {
      const itemNumber = getRandomInt(10000000, 99999999);
      const quantity = getRandomInt(1, 3); // Random quantity
      const price = priceWithVariance(product.price);
      items.push({
        itemNumber,
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    });

    return items;
  }

  // QUILTED NORTHERN/PETARMOR WALMART LOGIC
  if (isQuiltedPetArmorWalmart) {
    const items = [];

    // Quilted Northern is always index 0; others are the rest
    const quiltedNorthern = products[0];
    const otherProducts = products.slice(1);

    // Quilted Northern always gets quantity 3
    const qnItemNumber = getRandomInt(10000000, 99999999);
    const qnPrice = priceWithVariance(quiltedNorthern.price);
    items.push({
      itemNumber: qnItemNumber,
      name: quiltedNorthern.name,
      quantity: 3,
      price: qnPrice,
      total: +(qnPrice * 3).toFixed(2)
    });

    // Randomly pick one "other" product to also get quantity 3
    const otherCopy = [...otherProducts];
    const tripleIndex = getRandomInt(0, otherCopy.length - 1);
    const tripleProduct = otherCopy[tripleIndex];

    const tripleItemNumber = getRandomInt(10000000, 99999999);
    const triplePrice = priceWithVariance(tripleProduct.price);
    items.push({
      itemNumber: tripleItemNumber,
      name: tripleProduct.name,
      quantity: 3,
      price: triplePrice,
      total: +(triplePrice * 3).toFixed(2)
    });

    return items;
  }

  // SAM'S CLUB SPECIFIC LOGIC (VetIQ x3, Liquid IV x5)
  if (isSamsClub) {
    const itemCount = getRandomInt(4, 8);
    const items = [];
    const availableProducts = [...products]; // Create a copy to track available products
    let hasVetIQ = false; // Track if we've already added a VetIQ product
    let hasLiquidIV = false; // Track if we've already added a Liquid IV product

    for (let i = 0; i < itemCount; i++) {
      if (availableProducts.length === 0) break; // No more products available

      const randomIndex = getRandomInt(0, availableProducts.length - 1);
      const product = availableProducts[randomIndex];

      // Check if this product is VetIQ or Liquid IV
      const isVetIQ = product.name.includes("VET-IQ") || product.name.includes("VetIQ");
      const isLiquidIV = product.name.includes("Liquid I.V");

      // Skip if we already have a product from this category
      if ((isVetIQ && hasVetIQ) || (isLiquidIV && hasLiquidIV)) {
        availableProducts.splice(randomIndex, 1); // Remove from pool but don't add to receipt
        i--; // Don't count this iteration
        continue;
      }

      availableProducts.splice(randomIndex, 1); // Remove selected product from available pool

      const itemNumber = getRandomInt(10000000, 99999999);

      // Set specific quantities for VetIQ and Liquid IV products
      let quantity;
      if (isVetIQ) {
        quantity = 3; // VetIQ always x3
        hasVetIQ = true; // Mark that we've added a VetIQ product
      } else if (isLiquidIV) {
        quantity = 5; // Liquid IV always x5
        hasLiquidIV = true; // Mark that we've added a Liquid IV product
      } else {
        quantity = getRandomInt(1, 3); // Random for other products
      }

      const price = priceWithVariance(product.price);

      items.push({
        itemNumber,
        name: product.name,
        quantity,
        price,
        total: +(price * quantity).toFixed(2)
      });
    }

    return items;
  }

  // DEFAULT LOGIC (for other companies AND the C4/Xtend Walmart)
  const itemCount = getRandomInt(4, 8);
  const items = [];
  const availableProducts = [...products]; // Create a copy to track available products

  for (let i = 0; i < itemCount; i++) {
    if (availableProducts.length === 0) break; // No more products available

    const randomIndex = getRandomInt(0, availableProducts.length - 1);
    const product = availableProducts[randomIndex];
    availableProducts.splice(randomIndex, 1); // Remove selected product from available pool

    const quantity = getRandomInt(1, 3);
    const price = priceWithVariance(product.price);

    const itemNumber = getRandomInt(10000000, 99999999);

    items.push({
      itemNumber,
      name: product.name,
      quantity,
      price,
      total: +(price * quantity).toFixed(2)
    });
  }

  return items;
};

// ---------------- GENERATE RECEIPT ----------------
const generateReceipt = () => {
  const brand = getRandomItem(companies);

  const store = brand.store || getRandomItem(brand.stores || []);
  const location = getRandomItem(brand.locations || []);

  const items = generateItems(brand.products || [], brand.name);

  const subtotal = +items.reduce((sum, item) => sum + item.total, 0).toFixed(2);

  const taxRate = STATE_TAX[location.state] || 0.06;
  const tax = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  // Always digital card payment
  const card = total;

  // Random card details
  const cardBrands = ["VISA", "MASTERCARD", "AMERICAN EXPRESS", "DISCOVER"];
  const cardType = getRandomItem(cardBrands);
  const cardLast4 = getRandomInt(1000, 9999);

  // Random approval text
  const approvalPhrases = [
    "EMV Chip | Approved",
    "Chip | Approved",
    "EMV Contact | Approved",
    "Contactless | Approved",
    "EMV Chip-Offline | Approved",
    "Approved - EMV",
  ];
  const approvalText = getRandomItem(approvalPhrases);

  // Random authorization code
  const authCode = (() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const prefix = getRandomItem(["A", "T", "X", "P", ""]);
    return prefix + getRandomInt(10000, 99999) + getRandomItem(letters);
  })();

  return {
    company: brand.name,
    slogan: brand.slogan,
    store,
    phone: brand.phone || "",
    address: location.address,
    orderNumber: generateOrderNumber(),
    date: formatDate(),
    items,
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total,
    payments: {
      card,
      cash: 0,
      other: 0
    },
    cardType,
    cardLast4,
    approvalText,
    authCode
  };
};

export default generateReceipt;