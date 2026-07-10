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
      { name: "Chicken Sekuwa", desc: "Nepali-style charcoal-grilled chicken with garlic, ginger, cumin, chili, mustard oil, house spices.", price: "$21", badge: "Most Popular", image: chickenSekuwaImg },
      { name: "Tandoori Chicken", desc: "Yogurt-marinated half chicken, tandoor-charred, mint chutney, lemon.", price: "$21", image: dishTandooriChicken },
      { name: "Chicken Tikka Kebab", desc: "Boneless chicken with roasted peppers and onion, mint chutney, cucumber salad.", price: "$22", image: chickenTikkaKababImg },
      { name: "Malai Chicken Kebab", desc: "Creamy, mildly spiced chicken with cheese, cardamom, garlic, herbs.", price: "$22", badge: "Chef's Pick", image: dishMalaiKabab },
      { name: "Lamb Seekh Kebab", desc: "Charcoal-grilled minced lamb skewers with herbs, green chili, garlic, warm spices.", price: "$25", image: dishLambSeekh },
      { name: "Tandoori Shrimp", desc: "Spiced shrimp grilled over high heat with lemon-garlic sauce and charred vegetables.", price: "$27", image: dishTandooriShrimp },
      { name: "Tandoori Fish Tikka", desc: "Seasonal white fish with turmeric, yogurt, ginger, lemon, mint chutney.", price: "$25", image: tandooriFishTikkaImg },
      { name: "Paneer Tikka Skewers", desc: "Paneer, peppers, onions, tomato, tikka masala, lime.", price: "$20", image: paneerTikkaSkewersImg },
    ],
  },

  // ─── menu[1] — Everest Grill Platters ───────────────────────────────────
  {
    id: "platters",
    title: "Everest Grill Platters",
    tagline: "For the table · for the hungry · for people who cannot decide.",
    icon: "utensils",
    dishes: [
      { name: "Kathmandu Mixed Grill", desc: "Tandoori chicken, chicken tikka, malai chicken kebab, lamb seekh kebab, garlic naan, masala fries, cucumber salad, pickled onions, three sauces.", price: "$38", image: mixedGrillComboImg },
      { name: "Himalayan Grill Feast", desc: "Tandoori chicken, chicken tikka, malai chicken kebab, lamb seekh kebab, tandoori shrimp, naan basket, masala fries, side salad, achar, three sauces.", price: "$66", badge: "House Special", image: familyBbqFeastImg },
      { name: "Sekuwa & Naan Board", desc: "Charcoal chicken sekuwa, garlic naan, Nepali achar, pickled onions, mint chutney, cucumber salad, chili-garlic sauce.", price: "$29", badge: "Chef's Pick", image: sekuwaNaanBoardImg },
      { name: "Veggie Grill Board", desc: "Paneer tikka, tandoori cauliflower, masala fries, naan basket, achar, chutneys, cucumber salad.", price: "$27", image: dishBbqPlatter },
    ],
  },

  // ─── menu[2] — Naan Wraps ────────────────────────────────────────────────
  {
    id: "naan-wraps",
    title: "Naan Wraps",
    tagline: "Street-food handhelds — served with masala fries or side salad.",
    icon: "sandwich",
    dishes: [
      { name: "Tandoori Tikka Naan Wrap", desc: "Tandoori chicken tikka, lettuce, pickled onions, mint chutney, tandoori mayo, cilantro in warm naan.", price: "$18", badge: "Most Popular", image: dishNaanWrap },
      { name: "Chicken Sekuwa Naan Wrap", desc: "Smoky chicken sekuwa, Nepali achar, cucumber, pickled onions, mint chutney, chili-garlic sauce, crispy sev.", price: "$18" },
      { name: "Lamb Seekh Naan Wrap", desc: "Lamb seekh kebab, charred onions, pickled onion, garlic sauce, mint chutney, chili-lime slaw.", price: "$20", image: lambSeekhNaanWrapImg },
      { name: "Tandoori Shrimp Naan Wrap", desc: "Charred shrimp, crunchy cabbage, pickled onion, lemon-garlic sauce, mint chutney, cilantro.", price: "$20", image: tandooriShrimpNaanWrapImg },
      { name: "Paneer Tikka Naan Wrap", desc: "Grilled paneer, peppers, onion, mint chutney, tamarind, crunchy slaw, cilantro.", price: "$17", image: paneerTikkaNaanWrapImg },
    ],
  },

  // ─── Grill Boxes ─────────────────────────────────────────────────────────
  {
    id: "grill-boxes",
    title: "Grill Boxes",
    tagline: "A complete meal, street-food style. Each box includes garlic naan, masala fries, pickled onions, cucumber salad, and one sauce.",
    icon: "utensils",
    dishes: [
      { name: "Chicken Grill Box", desc: "Choose tandoori chicken, chicken tikka, chicken sekuwa, or malai chicken kebab.", price: "$23", badge: "Most Popular", image: chickenGrillBoxImg },
      { name: "Lamb Grill Box", desc: "Lamb seekh kebab with garlic naan, masala fries, pickled onions, mint chutney.", price: "$26", image: lambGrillBoxImg },
      { name: "Seafood Grill Box", desc: "Choose tandoor shrimp or fish tikka.", price: "$27", image: seafoodGrillBoxImg },
      { name: "Paneer Grill Box", desc: "Paneer tikka, grilled vegetables, garlic naan, masala fries, pickled onions, mint chutney.", price: "$22", image: paneerGrillBoxImg },
    ],
  },

  // ─── Street Bites ────────────────────────────────────────────────────────
  {
    id: "street-bites",
    title: "Street Bites",
    tagline: "Small plates, crispy things, and snackable favorites.",
    icon: "drumstick",
    dishes: [
      { name: "Masala Street Fries", desc: "Crispy fries, chaat masala, chili, lime, cilantro, tamarind ketchup, garlic sauce.", price: "$11", image: masalaFriesImg },
      { name: "Everest Loaded Tandoori Fries", desc: "Masala fries, chopped tandoori chicken, pickled onions, cilantro, tandoori mayo, garlic sauce.", price: "$16", badge: "Most Popular", image: tandooriLoadedFriesImg },
      { name: "Sekuwa Loaded Fries", desc: "Smoky chicken sekuwa, Nepali achar, pickled onions, mint chutney, chili-garlic sauce.", price: "$17", image: sekuwaLoadedFriesImg },
      { name: "Crispy Paneer Pops", desc: "Crispy paneer tossed with sweet chili, garlic, curry leaves, sesame.", price: "$14", image: crispyPaneerPopsImg },
      { name: "Chili Chicken Street Bites", desc: "Crispy chicken, bell peppers, onions, ginger, garlic, curry leaves, Indo-Chinese sauce.", price: "$17", badge: "Chef's Pick", image: chiliChickenStreetBitesImg },
      { name: "Charred Corn Chaat", desc: "Fire-roasted corn, lime, chili, cheese, cilantro, chaat masala, tamarind.", price: "$13", image: charredCornChaatImg },
    ],
  },

  // ─── Chaat & Crunch ──────────────────────────────────────────────────────
  {
    id: "chaat-crunch",
    title: "Chaat & Crunch",
    tagline: "Tangy, sweet, spicy, crunchy.",
    icon: "sparkles",
    dishes: [
      { name: "Pani Puri Party", desc: "Crispy puris, potato, chickpeas, tamarind, mint water, spicy pani.", price: "$14", badge: "Chef's Pick", image: paniPuriPartyImg },
      { name: "Bhel Puri", desc: "Puffed rice, sev, potato, onion, cilantro, pomegranate, peanuts, chutneys, lime.", price: "$13", image: bhelPuriImg },
      { name: "Sekuwa Bhel", desc: "Puffed rice, crispy noodles, smoky chicken sekuwa, achar, pickled onion, chili, lime.", price: "$17", badge: "Most Popular", image: sekuwaBhelImg },
      { name: "Tandoori Chicken Chaat", desc: "Tandoori chicken, crispy papdi, yogurt, tamarind, mint chutney, pickled onions, sev.", price: "$17", image: tandooriChickenChaatImg },
      { name: "Samosa Chaat", desc: "Crushed vegetable samosas, chickpeas, yogurt, tamarind, mint chutney, onion, cilantro, sev.", price: "$14", image: samosaChaatImg },
    ],
  },

  // ─── Momo ────────────────────────────────────────────────────────────────
  {
    id: "momo",
    title: "Momo",
    tagline: "The heart of Nepali street food — served with Everest tomato-sesame achar.",
    icon: "drumstick",
    dishes: [
      { name: "Steamed Chicken Momo", desc: "Eight handmade chicken dumplings, steamed to order.", price: "$15", badge: "Most Popular", image: steamedChickenMomoImg },
      { name: "Fried Chicken Momo", desc: "Eight crisp fried chicken dumplings with achar and chili oil.", price: "$16", image: friedChickenMomoImg },
      { name: "Chili Chicken Momo", desc: "Fried dumplings tossed with onions, peppers, curry leaves, ginger, garlic, spicy Indo-Chinese sauce.", price: "$17", badge: "Chef's Pick", image: chiliChickenMomoImg },
    ],
  },

  // ─── Curries ─────────────────────────────────────────────────────────────
  {
    id: "curries",
    title: "Curries",
    tagline: "Each curry includes steamed basmati rice. Substitute paneer +$0, lamb +$3, or shrimp +$5.",
    icon: "soup",
    dishes: [
      { name: "Chicken Korma", desc: "Gentle aromatic cashew-yogurt sauce with warm spices.", price: "$21", image: chickenKormaImg },
      { name: "Chicken Curry", desc: "Home-style chicken curry with tomato, onion, ginger, garlic, toasted spices.", price: "$20", image: indianChickenCurryImg },
      { name: "Chicken Tikka Masala", desc: "Tandoor-charred chicken tikka in a bold tomato-cream masala sauce.", price: "$22", badge: "Most Popular", image: chickenTikkaMasalaImg },
      { name: "Chicken Makhani", desc: "Tandoor-charred chicken in a velvety butter-tomato sauce.", price: "$22", badge: "Chef's Pick", image: chickenMakhaniImg },
      { name: "Dal Makhani", desc: "Slow-simmered black lentils, kidney beans, tomato, butter, warming spices.", price: "$18", image: dalMakhaniImg },
    ],
  },

  // ─── Chai, Coolers & Fizz ────────────────────────────────────────────────
  {
    id: "drinks",
    title: "Chai, Coolers & Fizz",
    tagline: "A bright, spice-forward nonalcoholic drinks list.",
    icon: "sparkles",
    dishes: [
      { name: "Aama's Masala Chai", desc: "Black tea simmered with cardamom, ginger, cinnamon, cloves, milk.", price: "$5", badge: "Chef's Pick", image: aamasMasalaChaiImg },
      { name: "Himalayan Iced Chai", desc: "Cold-brewed spiced tea with milk, vanilla, cardamom, cinnamon.", price: "$6", image: himalayanIcedChaiImg },
      { name: "Mango Lassi", desc: "Mango, yogurt, cardamom, saffron.", price: "$6", badge: "Most Popular", image: mangoLassiImg },
      { name: "Plain Sweet Lassi", desc: "Classic lightly sweetened yogurt drink.", price: "$5", image: plainSweetLassiImg },
      { name: "Kathmandu Lemon Soda", desc: "Fresh lemon, black salt, cumin, mint, soda.", price: "$6", image: kathmanduLemonSodaImg },
      { name: "Spiced Coke Float", desc: "Mexican Coke, vanilla ice cream, chili salt, cardamom.", price: "$7", image: spicedCokeFloatImg },
      { name: "Fresh Sugarcane Lemonade", desc: "Sugarcane juice, ginger, lemon, mint, black salt.", price: "$7", image: freshSugarcaneLemonadeImg },
    ],
  },

  // ─── Desserts ────────────────────────────────────────────────────────────
  {
    id: "desserts",
    title: "Desserts",
    tagline: "A sweet finish with Himalayan comfort.",
    icon: "sparkles",
    dishes: [
      { name: "Gulab Jamun Skillet", desc: "Warm milk dumplings in rose-cardamom syrup with pistachio and cool yogurt.", price: "$10", badge: "Chef's Pick", image: gulabJamunSkilletImg },
      { name: "Everest Kulfi Pop", desc: "Frozen mango-cardamom kulfi with a pistachio crumble.", price: "$7", badge: "Most Popular", image: everestKulfiPopImg },
      { name: "Rice Pudding", desc: "Slow-cooked basmati rice pudding with cardamom, saffron, pistachio.", price: "$9", image: ricePuddingImg },
    ],
  },
];

export interface AddOn {
  name: string;
  price: string;
}

export const addOns: { naan: AddOn[]; sides: AddOn[]; sauces: AddOn[] } = {
  naan: [
    { name: "Plain Naan", price: "$3" },
    { name: "Butter Naan", price: "$4" },
    { name: "Garlic Naan", price: "$5" },
    { name: "Chili Garlic Naan", price: "$6" },
    { name: "Cheese Naan", price: "$7" },
    { name: "Keema Naan", price: "$8" },
    { name: "Naan Basket (Plain, Butter, Garlic & Chili-Garlic)", price: "$12" },
  ],
  sides: [
    { name: "Masala Fries", price: "$7" },
    { name: "Garlic Fries", price: "$8" },
    { name: "Cucumber Salad", price: "$6" },
    { name: "Plain Yogurt", price: "$5" },
    { name: "Pickled Onions", price: "$4" },
    { name: "Nepali Achar", price: "$4" },
    { name: "Chutney Trio", price: "$6" },
  ],
  sauces: [
    { name: "Mint Chutney", price: "$2" },
    { name: "Garlic Sauce", price: "$2" },
    { name: "Tandoori Mayo", price: "$2" },
    { name: "Lemon-Garlic Sauce", price: "$2" },
    { name: "Tamarind Chutney", price: "$2" },
    { name: "Chili-Garlic Sauce", price: "$2" },
    { name: "Extra Sauce", price: "$2" },
  ],
};
