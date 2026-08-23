// ── existing kebab-case assets ──────────────────────────────────────────────
import dishTandooriChicken from "@/assets/dish-tandoori-chicken.jpg";
import dishBbqPlatter from "@/assets/dish-bbq-platter.jpg";
import dishMalaiKabab from "@/assets/dish-malai-kabab.jpg";
import dishTandooriShrimp from "@/assets/dish-tandoori-shrimp.jpg";
import dishLambSeekh from "@/assets/dish-lamb-seekh.jpg";
import dishNaanWrap from "@/assets/dish-naan-wrap.jpg";
import naan from "@/assets/naan.jpg";
import chickenSekuwaImg from "@/assets/chicken-sekuwa.jpg";
import chickenTikkaKababImg from "@/assets/chicken-tikka-kabab.jpg";
import tandooriFishTikkaImg from "@/assets/tandoori-fish-tikka.jpg";
import mixedGrillComboImg from "@/assets/mixed-grill-combo.jpg";
import familyBbqFeastImg from "@/assets/family-bbq-feast.jpg";
import sekuwaNaanBoardImg from "@/assets/sekuwa-naan-board.jpg";
import lambSeekhNaanWrapImg from "@/assets/lamb-seekh-naan-wrap.jpg";
import tandooriShrimpNaanWrapImg from "@/assets/tandoori-shrimp-naan-wrap.jpg";
import tandooriLoadedFriesImg from "@/assets/tandoori-loaded-fries.jpg";

// ── new Title-case assets added by user ─────────────────────────────────────
import paneerTikkaSkewersImg from "@/assets/paneer tikka skewers.jpg";

import chickenKormaImg from "@/assets/Chicken Korma.jpg";
import indianChickenCurryImg from "@/assets/Indian Chicken Curry.jpg";
import chickenTikkaMasalaImg from "@/assets/Chicken Tikka Masala.jpg";
import chickenMakhaniImg from "@/assets/Chicken Makhani (Butter Chicken).jpg";
import dalMakhaniImg from "@/assets/Dal Makhani.jpg";

import chickenGrillBoxImg from "@/assets/Chicken Grill Box.jpg";
import lambGrillBoxImg from "@/assets/Lamb Grill Box.jpg";
import seafoodGrillBoxImg from "@/assets/Seafood Grill Box.webp";
import paneerGrillBoxImg from "@/assets/Paneer Grill Box.jpg";

import masalaFriesImg from "@/assets/Masala Fries.jpg";
import sekuwaLoadedFriesImg from "@/assets/Chicken Sekuwa Fries.jpg";
import crispyPaneerPopsImg from "@/assets/Crispy Paneer Pops.jpg";
import chiliChickenStreetBitesImg from "@/assets/Chili Chicken Street Bites.jpg";
import charredCornChaatImg from "@/assets/Charred Corn Chaat.jpg";

import paniPuriPartyImg from "@/assets/Pani Puri Party.jpg";
import bhelPuriImg from "@/assets/Bhel Puri.jpg";
import sekuwaBhelImg from "@/assets/Sekuwa Bhel.jpg";
import tandooriChickenChaatImg from "@/assets/Tandoori Chicken Chaat.jpg";
import samosaChaatImg from "@/assets/Samosa Chaat.jpg";

import steamedChickenMomoImg from "@/assets/Steamed Chicken Momo.jpg";
import friedChickenMomoImg from "@/assets/Fried Chicken Momo.jpg";
import chiliChickenMomoImg from "@/assets/Chili Chicken Momo.jpg";

import paneerTikkaNaanWrapImg from "@/assets/Paneer Tikka Naan Wrap.jpg";
import chickenSekuwaNaanWrapImg from "@/assets/Chicken Sekuwa Naan Wrap.jpg";
import veggieGrillBoardImg from "@/assets/Veggie Grill Board.jpg";
import butterChickenImg from "@/assets/Butter Chicken.jpg";
import coconutCurryImg from "@/assets/Coconut Curry.jpg";
import tandooriGrillLambImg from "@/assets/Tandoori Grill Lamb.jpg";
import lambChopImg from "@/assets/Lamb Chop.jpg";
import jholMoMoImg from "@/assets/Jhol Mo;Mo.jpg";
import tandooriMoMoImg from "@/assets/Tandoori Mo;Mo.jpg";
import chickenBiryaniImg from "@/assets/Chicken Biryani.jpg";
import lambBiryaniImg from "@/assets/Lamb Biryani.jpg";
import goatBiryaniImg from "@/assets/Goat Biryani.jpg";
import shrimpBiryaniImg from "@/assets/Shrimp Biryani.jpg";
import vegBiryaniImg from "@/assets/Veg Biryani.jpg";
import saagCurryImg from "@/assets/Saag Curry.jpg";
import vegChowmeinImg from "@/assets/Veg Chowmein.jpg";
import vegFriedRiceImg from "@/assets/Veg Fried Rice.jpg";
import choleBhatureImg from "@/assets/chole bhature.jpg";

import aamasMasalaChaiImg from "@/assets/Aama's Masala Chai.jpg";
import himalayanIcedChaiImg from "@/assets/Himalayan Iced Chai.jpg";
import mangoLassiImg from "@/assets/Mango Lassi.webp";
import plainSweetLassiImg from "@/assets/Plain Sweet Lassi.jpg";
import kathmanduLemonSodaImg from "@/assets/Kathmandu Lemon Soda.jpg";
import spicedCokeFloatImg from "@/assets/Spiced Coke Float.jpg";
import freshSugarcaneLemonadeImg from "@/assets/Fresh Sugarcane Lemonade.jpg";

import gulabJamunSkilletImg from "@/assets/Gulab Jamun Skillet.jpg";
import everestKulfiPopImg from "@/assets/Everest Kulfi Pop.jpg";
import ricePuddingImg from "@/assets/Rice Pudding.jpg";

export const dishImages = {
  tandooriChicken: dishTandooriChicken,
  bbqPlatter: dishBbqPlatter,
  malaiKabab: dishMalaiKabab,
  tandooriShrimp: dishTandooriShrimp,
  lambSeekh: dishLambSeekh,
  naanWrap: dishNaanWrap,
  naan,
};

export interface Dish {
  name: string;
  desc: string;
  price: string;
  badge?: "Chef's Pick" | "Most Popular" | "House Special";
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  tagline?: string;
  icon: string;
  dishes: Dish[];
}

export const menu: MenuCategory[] = [
  // ─── menu[0] — Grill & Charcoal ─────────────────────────────────────────
  {
    id: "grill-charcoal",
    title: "Grill & Charcoal",
    tagline: "Hot from the tandoor • smoky from the grill. Served with pickled onions, cucumber salad, mint chutney, and your choice of plain, butter, or garlic naan.",
    icon: "flame",
    dishes: [
      { name: "Chicken Sekuwa", desc: "Nepali-style charcoal-grilled chicken with garlic, ginger, cumin, chili, mustard oil, house spices.", price: "$19.99", badge: "Most Popular", image: chickenSekuwaImg },
      { name: "Tandoori Chicken", desc: "Yogurt-marinated half chicken, tandoor-charred, mint chutney, lemon.", price: "$19.99", image: dishTandooriChicken },
      { name: "Chicken Tikka Kebab", desc: "Boneless chicken with roasted peppers and onion, mint chutney, cucumber salad.", price: "$20.99", image: chickenTikkaKababImg },
      { name: "Malai Chicken Kebab", desc: "Creamy, mildly spiced chicken with cheese, cardamom, garlic, herbs.", price: "$20.99", badge: "Chef's Pick", image: dishMalaiKabab },
      { name: "Lamb Seekh Kebab", desc: "Charcoal-grilled minced lamb skewers with herbs, green chili, garlic, warm spices.", price: "$23.99", image: dishLambSeekh },
      { name: "Tandoori Grilled Lamb (4 pc)", desc: "Tandoor-spiced lamb chops marinated with garlic, ginger, yogurt, and house spices.", price: "$32.99", image: tandooriGrillLambImg },
      { name: "Tandoori Shrimp", desc: "Spiced shrimp grilled over high heat with lemon-garlic sauce and charred vegetables.", price: "$25.99", image: dishTandooriShrimp },
      { name: "Paneer Tikka Skewers", desc: "Paneer, peppers, onions, tomato, tikka masala, lime.", price: "$18.99", image: paneerTikkaSkewersImg },
    ],
  },

  // ─── menu[1] — Everest Grill Platters ───────────────────────────────────
  {
    id: "platters",
    title: "Everest Grill Platters",
    tagline: "For the table · for the hungry · for people who cannot decide.",
    icon: "utensils",
    dishes: [
      { name: "Tandoori Mixed Grill", desc: "4 skewers: chicken tikka, chili chicken, seekh, lamb seekh, chicken tandoori. Served with naan, salad & achar.", price: "$37.99", image: mixedGrillComboImg },
      { name: "Everest Family Feast", desc: "Feast for 4: full tandoori chicken, chicken tikka, seekh kebab, lamb kebabs, biryani, sekuwa, naan, raita, and salad.", price: "$49.99", image: familyBbqFeastImg },
      { name: "Sekuwa & Naan Board", desc: "Smoky chicken sekuwa, paneer tikka, yogurt achar, pickled onions, mint chutney, and crispy sev.", price: "$28.99", badge: "Chef's Pick", image: sekuwaNaanBoardImg },
      { name: "Veggie Grill Board", desc: "Paneer tikka, mushrooms, tandoori broccoli, grilled veggies, naan, chutney, and cucumber salad.", price: "$26.99", image: veggieGrillBoardImg },
    ],
  },

  // ─── menu[2] — Naan Wraps ────────────────────────────────────────────────
  {
    id: "naan-wraps",
    title: "Naan Wraps",
    tagline: "Street-food handhelds — served with masala fries.",
    icon: "sandwich",
    dishes: [
      { name: "Tandoori Tikka Naan Wrap", desc: "Tandoori chicken tikka, lettuce, pickled onions, mint chutney, tandoori mayo, cilantro in warm naan.", price: "$15.99", badge: "Most Popular", image: dishNaanWrap },
      { name: "Chicken Sekuwa Naan Wrap", desc: "Smoky chicken sekuwa, Nepali achar, pickled onions, mint chutney, chili-garlic sauce, and crispy sev.", price: "$15.99", image: chickenSekuwaNaanWrapImg },
      { name: "Paneer Tikka Naan Wrap", desc: "Grilled paneer, peppers, onion, mint chutney, tamarind, crunchy slaw, cilantro.", price: "$14.99", image: paneerTikkaNaanWrapImg },
      { name: "Lamb Seekh Naan Wrap", desc: "Lamb seekh kebab, charred onions, pickled onion, garlic sauce, mint chutney, chili-lime slaw.", price: "$17.99", image: lambSeekhNaanWrapImg },
      { name: "Tandoori Shrimp Naan Wrap", desc: "Charred shrimp, pickled onion, lemongrass sauce, mint chutney, and cilantro.", price: "$18.99", image: tandooriShrimpNaanWrapImg },
    ],
  },

  // ─── Street Bites ────────────────────────────────────────────────────────
  {
    id: "street-bites",
    title: "Street Bites",
    tagline: "Small plates, crispy things, and snackable favorites.",
    icon: "drumstick",
    dishes: [
      { name: "Everest Loaded Tandoori Fries", desc: "Masala fries, chopped tandoori chicken, pickled onions, cilantro, tandoori mayo, garlic sauce.", price: "$15.99", badge: "Most Popular", image: tandooriLoadedFriesImg },
      { name: "Sekuwa Loaded Fries", desc: "Smoky chicken sekuwa, Nepali achar, pickled onions, mint chutney, chili-garlic sauce.", price: "$16.99", image: sekuwaLoadedFriesImg },
      { name: "Crispy Paneer Pops", desc: "Crispy paneer tossed with sweet chili, garlic, curry leaves, sesame.", price: "$13.99", image: crispyPaneerPopsImg },
      { name: "Chili Chicken Street Bites", desc: "Crispy chicken, bell peppers, onions, ginger, garlic, curry leaves, Indo-Chinese sauce.", price: "$16.99", badge: "Chef's Pick", image: chiliChickenStreetBitesImg },
      { name: "Chole Bhature", desc: "Fluffy bhature, spiced chickpeas, pickled onions, achar, cilantro.", price: "$13.99", image: choleBhatureImg },
      { name: "Veg Fried Rice", desc: "Wok-tossed rice with vegetables, soy, scallions, chili, and Everest seasoning. Choice of protein: chicken, shrimp +$4.99.", price: "$14.99", image: vegFriedRiceImg },
      { name: "Veg Chowmein", desc: "Stir-fried noodles with vegetables, onion, cabbage, peppers, soy, and house spices. Choice of protein: chicken, shrimp +$4.99.", price: "$14.99", image: vegChowmeinImg },
      { name: "Lamb Chop (3 pc)", desc: "Tandoori-spiced lamb chops grilled over high heat and finished with fresh lemon.", price: "$23.99", image: lambChopImg },
    ],
  },

  // ─── Chaat & Crunch ──────────────────────────────────────────────────────
  {
    id: "chaat-crunch",
    title: "Chaat & Crunch",
    tagline: "Tangy, sweet, spicy, crunchy.",
    icon: "sparkles",
    dishes: [
      { name: "Pani Puri Party", desc: "Crispy puris, potato, chickpeas, tamarind, mint water, and spicy pani.", price: "$10.99", badge: "Chef's Pick", image: paniPuriPartyImg },
      { name: "Bhel Puri", desc: "Puffed rice, sev, potato, onion, cilantro, pomegranate, peanuts, chutneys, lime.", price: "$11.99", image: bhelPuriImg },
      { name: "Sekuwa Bhel", desc: "Puffed rice, crispy noodles, smoky chicken sekuwa, achar, pickled onion, chili, lime.", price: "$13.99", badge: "Most Popular", image: sekuwaBhelImg },
      { name: "Tandoori Chicken Chaat", desc: "Chicken, crispy papdi, yogurt, tamarind, mint chutney, pickled onions, and sev.", price: "$12.99", image: tandooriChickenChaatImg },
      { name: "Samosa Chaat", desc: "Crushed vegetable samosas, chickpeas, yogurt, tamarind, mint chutney, onion, cilantro, and sev.", price: "$10.99", image: samosaChaatImg },
    ],
  },

  // ─── Momo ────────────────────────────────────────────────────────────────
  {
    id: "momo",
    title: "Mo;Mo",
    tagline: "The heart of Nepali street food — served with home-made tomato chutney.",
    icon: "drumstick",
    dishes: [
      { name: "Steamed Mo;Mo", desc: "Soft Himalayan dumplings stuffed with savory filling, delicately steamed to order.", price: "$12.99", badge: "Most Popular", image: steamedChickenMomoImg },
      { name: "Fried Mo;Mo", desc: "Dumplings pan-fried until crisp outside with sizzling spicy insides.", price: "$14.99", image: friedChickenMomoImg },
      { name: "Chili Mo;Mo", desc: "Fried dumplings tossed with onion, bell pepper, garlic, ginger, and bold spicy chili sauce.", price: "$15.99", badge: "Chef's Pick", image: chiliChickenMomoImg },
      { name: "Jhol Mo;Mo", desc: "Dumplings served in warm roasted tomato-sekuwa jhol with Himalayan spices and herbs.", price: "$14.99", image: jholMoMoImg },
      { name: "Tandoori Mo;Mo", desc: "Dumplings marinated in tandoori spices and lightly charred, served with house chutney.", price: "$15.99", image: tandooriMoMoImg },
    ],
  },

  // ─── Curries ─────────────────────────────────────────────────────────────
  {
    id: "curries",
    title: "Curries",
    tagline: "Most curries served with basmati rice. Protein choices: vegetable, paneer +$0 · lamb +$3.99 · shrimp +$3.99 · goat +$4.99.",
    icon: "soup",
    dishes: [
      { name: "Korma", desc: "A creamy, aromatic cashew-yogurt sauce with warm spices.", price: "$20.99", image: chickenKormaImg },
      { name: "Curry", desc: "Comforting homestyle curry with tomato, onion, ginger, garlic, and roasted spices.", price: "$19.99", image: indianChickenCurryImg },
      { name: "Tikka Masala", desc: "A bold tomato-cream masala sauce with tandoor-charred flavor.", price: "$21.99", badge: "Most Popular", image: chickenTikkaMasalaImg },
      { name: "Makhan", desc: "Velvety butter-tomato sauce with warm spices.", price: "$21.99", badge: "Chef's Pick", image: chickenMakhaniImg },
      { name: "Butter Chicken", desc: "Soft butter chicken curry with tender chicken and a rich, creamy tomato sauce.", price: "$21.99", image: butterChickenImg },
      { name: "Coconut Curry", desc: "A coconut-based curry with ginger, garlic, roasted spices, and herbs.", price: "$20.99", image: coconutCurryImg },
      { name: "Saag Curry", desc: "A green, spinach-based curry with garlic, ginger, and spices.", price: "$20.99", image: saagCurryImg },
      { name: "Dal Makhan", desc: "Slow-simmered black lentils, kidney beans, tomato, butter, and warm spices.", price: "$17.99", image: dalMakhaniImg },
    ],
  },

  // ─── Biryani ─────────────────────────────────────────────────────────────
  {
    id: "biryani",
    title: "Biryani",
    tagline: "Slow-cooked aromatic rice, $16.99 base. Choice of protein: Veg +$0 · Chicken +$1.00 · Shrimp +$3.00 · Lamb +$4.00 · Goat +$5.00.",
    icon: "utensils",
    dishes: [
      { name: "Chicken Biryani", desc: "", price: "$17.99", badge: "Most Popular", image: chickenBiryaniImg },
      { name: "Lamb Biryani", desc: "", price: "$20.99", image: lambBiryaniImg },
      { name: "Goat Biryani", desc: "", price: "$21.99", image: goatBiryaniImg },
      { name: "Shrimp Biryani", desc: "", price: "$19.99", image: shrimpBiryaniImg },
      { name: "Veg Biryani", desc: "", price: "$16.99", image: vegBiryaniImg },
    ],
  },

  // ─── Chai, Coolers & Fizz ────────────────────────────────────────────────
  {
    id: "drinks",
    title: "Chai, Coolers & Fizz",
    tagline: "A bright, spice-forward nonalcoholic drinks list.",
    icon: "sparkles",
    dishes: [
      { name: "Ama's Masala Chai", desc: "Black tea simmered with cardamom, ginger, cinnamon, cloves, and milk.", price: "$4.99", badge: "Chef's Pick", image: aamasMasalaChaiImg },
      { name: "Himalayan Iced Chai", desc: "Cold-brewed spiced tea with milk, vanilla, cardamom, and cinnamon.", price: "$5.99", image: himalayanIcedChaiImg },
      { name: "Mango Lassi", desc: "Mango, yogurt, cardamom, and a touch of saffron.", price: "$5.99", badge: "Most Popular", image: mangoLassiImg },
      { name: "Banana Lassi", desc: "Banana, yogurt, cardamom, and a light touch of sweetness.", price: "$4.99", image: plainSweetLassiImg },
      { name: "Kathmandu Lemon Soda", desc: "Fresh lemon, black salt, cumin, mint, and soda.", price: "$5.99", image: kathmanduLemonSodaImg },
      { name: "Fresh Lemonade", desc: "Fresh lemon, ginger, mint, and black salt.", price: "$6.99", image: freshSugarcaneLemonadeImg },
    ],
  },

  // ─── Desserts ────────────────────────────────────────────────────────────
  {
    id: "desserts",
    title: "Desserts",
    tagline: "A sweet finish with Himalayan comfort.",
    icon: "sparkles",
    dishes: [
      { name: "Gulab Jamun (2 pc)", desc: "Warm milk dumplings in rose-cardamom syrup with pistachios.", price: "$7.99", badge: "Chef's Pick", image: gulabJamunSkilletImg },
      { name: "Everest Kulfi Pop", desc: "Frozen mango-cardamom kulfi with a pistachio crunch.", price: "$6.99", badge: "Most Popular", image: everestKulfiPopImg },
      { name: "Rice Pudding", desc: "Slow-cooked basmati rice pudding with cardamom, saffron, and pistachio.", price: "$6.99", image: ricePuddingImg },
    ],
  },
];

export interface AddOn {
  name: string;
  price: string;
}

export const addOns: { naan: AddOn[]; sides: AddOn[]; sauces: AddOn[] } = {
  naan: [
    { name: "Plain Naan", price: "$3.49" },
    { name: "Butter Naan", price: "$3.99" },
    { name: "Garlic Naan", price: "$4.49" },
    { name: "Cheese Naan", price: "$4.99" },
    { name: "Chilli Cheese Naan", price: "$5.49" },
    { name: "Kulcha (Aloo/Onion)", price: "$4.49" },
    { name: "Lacha Paratha", price: "$4.49" },
    { name: "Tandoori Roti", price: "$3.49" },
  ],
  sides: [
    { name: "Masala Fries", price: "$6.99" },
    { name: "Cucumber Salad", price: "$5.99" },
    { name: "Plain Yogurt", price: "$4.99" },
    { name: "Pickled Onions", price: "$3.99" },
    { name: "Nepali Achar", price: "$3.99" },
    { name: "Chutney Trio", price: "$3.99" },
    { name: "Extra Sauce", price: "$0.99" },
    { name: "Extra Chips", price: "$19.99" },
  ],
  sauces: [
    { name: "Mint Chutney", price: "$2" },
    { name: "Garlic Sauce", price: "$2" },
    { name: "Tandoori Mayo", price: "$2" },
    { name: "Lemon-Garlic Sauce", price: "$2" },
    { name: "Tamarind Chutney", price: "$2" },
    { name: "Chili-Garlic Sauce", price: "$2" },
  ],
};
