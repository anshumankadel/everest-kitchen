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

import masalaFriesImg from "@/assets/Masala Fries.jpg";
import sekuwaLoadedFriesImg from "@/assets/Chicken Sekuwa Fries.jpg";
import crispyPaneerPopsImg from "@/assets/Crispy Paneer Pops.jpg";
import chiliChickenStreetBitesImg from "@/assets/Chili Chicken Street Bites.jpg";

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
import butterChickenImg from "@/assets/Butter Chicken.jpg";
import coconutCurryImg from "@/assets/Coconut Curry.jpg";
import tandooriGrillLambImg from "@/assets/Tandoori Grill Lamb.jpg";
import lambChopImg from "@/assets/Lamb Chop.jpg";
import jholMoMoImg from "@/assets/Jhol Mo;Mo.jpg";
import tandooriMoMoImg from "@/assets/Tandoori Mo;Mo.jpg";
import chickenBiryaniImg from "@/assets/Chicken Biryani.jpg";
import saagCurryImg from "@/assets/Saag Curry.jpg";
import vegChowmeinImg from "@/assets/Veg Chowmein.jpg";
import vegFriedRiceImg from "@/assets/Veg Fried Rice.jpg";
import choleBhatureImg from "@/assets/chole bhature.jpg";

import aamasMasalaChaiImg from "@/assets/Aama's Masala Chai.jpg";
import himalayanIcedChaiImg from "@/assets/Himalayan Iced Chai.jpg";
import mangoLassiImg from "@/assets/Mango Lassi.webp";
import plainSweetLassiImg from "@/assets/Plain Sweet Lassi.jpg";
import kathmanduLemonSodaImg from "@/assets/Kathmandu Lemon Soda.jpg";
import freshSugarcaneLemonadeImg from "@/assets/Fresh Sugarcane Lemonade.jpg";

import gulabJamunSkilletImg from "@/assets/Gulab Jamun Skillet.jpg";
import everestKulfiPopImg from "@/assets/Everest Kulfi Pop.jpg";
import ricePuddingImg from "@/assets/Rice Pudding.jpg";

import gfCucumberSaladImg from "@/assets/GF cucumber salad.jpg";
import gfPlainYogurtImg from "@/assets/GF Plain Yogurt.jpg";
import gfNepaliAcharImg from "@/assets/GF Nepali Achar.jpg";

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
  badge?: "Chef's Pick" | "Most Popular" | "House Special" | "Out of Stock";
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
  // ─── Street Bites ────────────────────────────────────────────────────────
  {
    id: "street-bites",
    title: "Street Bites",
    tagline: "Small plates, crispy things, and snackable favorites.",
    icon: "drumstick",
    dishes: [
      { name: "Everest Loaded Tandoori Fries", desc: "Masala fries, chopped tandoori chicken, pickled onions, cilantro, tandoori mayo, and garlic sauce.", price: "$15.99", badge: "Most Popular", image: tandooriLoadedFriesImg },
      { name: "Sekuwa Loaded Fries", desc: "Smoky chicken sekuwa, Nepali achar, pickled onions, mint chutney, and chili-garlic sauce.", price: "$16.99", image: sekuwaLoadedFriesImg },
      { name: "Crispy Paneer Pops", desc: "Crispy paneer tossed with sweet chili, garlic, curry leaves, and sesame.", price: "$13.99", image: crispyPaneerPopsImg },
      { name: "Chili Chicken Street Bites", desc: "Crispy chicken, bell peppers, onions, ginger, garlic, curry leaves, and Indo-Chinese sauce.", price: "$16.99", badge: "Chef's Pick", image: chiliChickenStreetBitesImg },
      { name: "Chole Bhature", desc: "Fluffy bhature, spiced chickpeas, pickled onions, achar, and cilantro.", price: "$16.99", image: choleBhatureImg },
      { name: "Chowmein", desc: "Stir-fried noodles with vegetables, onion, cabbage, peppers, soy, and house spices. Choice of protein: chicken, shrimp +$4.99.", price: "$14.99", image: vegChowmeinImg },
      { name: "Fried Rice", desc: "Wok-tossed rice with vegetables, soy, scallions, chili, and Everest seasoning. Choice of protein: chicken, shrimp +$4.99.", price: "$14.99", image: vegFriedRiceImg },
      { name: "Lamb Chops (3 pcs)", desc: "Tandoori-spiced lamb chops grilled over high heat and finished with fresh lemon.", price: "$23.99", image: lambChopImg },
    ],
  },

  // ─── Chaat & Crunch ──────────────────────────────────────────────────────
  {
    id: "chaat-crunch",
    title: "Chaat & Crunch",
    tagline: "Tangy, sweet, spicy, crunchy.",
    icon: "sparkles",
    dishes: [
      { name: "Pani Puri", desc: "Crispy puris, potato, chickpeas, tamarind, mint water, and spicy pani.", price: "$13.99", badge: "Chef's Pick", image: paniPuriPartyImg },
      { name: "Bhel Puri", desc: "Puffed rice, sev, potato, onion, cilantro, pomegranate, peanuts, chutneys, and lime.", price: "$12.99", image: bhelPuriImg },
      { name: "Sekuwa Bhel", desc: "Puffed rice, crispy noodles, smoky chicken sekuwa, achar, pickled onion, chili, and lime.", price: "$16.99", badge: "Most Popular", image: sekuwaBhelImg },
      { name: "Tandoori Chicken Chaat", desc: "Tandoori chicken, crispy rice, yogurt, tamarind, mint chutney, pickled onions, and sev.", price: "$16.99", image: tandooriChickenChaatImg },
      { name: "Samosa Chaat", desc: "Crushed vegetable samosas, chickpeas, yogurt, tamarind, mint chutney, onion, cilantro, and sev.", price: "$13.99", image: samosaChaatImg },
      { name: "Samosa", desc: "", price: "$9.99" },
    ],
  },

  // ─── MoMo ────────────────────────────────────────────────────────────────
  {
    id: "momo",
    title: "MoMo",
    tagline: "The heart of Nepali street food — served with home-made tomato chutney.",
    icon: "drumstick",
    dishes: [
      { name: "Steamed MoMo", desc: "Eight handmade dumplings, steamed to order.", price: "$12.99", badge: "Most Popular", image: steamedChickenMomoImg },
      { name: "Fried MoMo", desc: "Eight crisp fried dumplings with achar.", price: "$14.99", image: friedChickenMomoImg },
      { name: "Chilli MoMo", desc: "Fried dumplings tossed with onions, peppers, curry leaves, ginger, garlic, and spicy Indo-Chinese sauce.", price: "$15.99", badge: "Chef's Pick", image: chiliChickenMomoImg },
      { name: "Tandoori Momo", desc: "Juicy dumplings stuffed with seasoned chicken or vegetables, marinated in a rich tandoori-spiced yogurt blend and grilled until smoky, charred, and irresistibly flavorful.", price: "$17.99", image: tandooriMoMoImg },
      { name: "Jhol Momo", desc: "Steamed dumplings filled with savory, seasoned chicken or vegetables, served in a rich, tangy, and aromatic sesame-tomato broth. Finished with fresh cilantro, chili, and Nepali spices for a warm, flavorful, and comforting bite.", price: "$15.99", image: jholMoMoImg },
    ],
  },

  // ─── Grill & Charcoal ────────────────────────────────────────────────────
  {
    id: "grill-charcoal",
    title: "Grill & Charcoal",
    tagline: "Takes 18-22 min to prepare!",
    icon: "flame",
    dishes: [
      { name: "Chicken Sekuwa", desc: "Nepali-style charcoal-grilled chicken with garlic, ginger, cumin, chili, mustard oil, and house spices. (20-22 min prep time)", price: "$18.99", badge: "Most Popular", image: chickenSekuwaImg },
      { name: "Tandoori Chicken", desc: "Yogurt-marinated half chicken, tandoor-charred with mint chutney and lemon. (20-22 min prep time)", price: "$18.99", image: dishTandooriChicken },
      { name: "Chicken Tikka Kebab", desc: "Tender pieces of boneless chicken marinated in aromatic yogurt and traditional spices, char-grilled to perfection with a smoky, lightly charred finish. Served with fresh onions, cilantro, lemon, and mint chutney. (20-22 min prep time)", price: "$19.99", image: chickenTikkaKababImg },
      { name: "Malai Chicken Kebab", desc: "Creamy, mildly spiced chicken with cheese, cardamom, garlic, and herbs. (20-22 min prep time)", price: "$19.99", badge: "Chef's Pick", image: dishMalaiKabab },
      { name: "Lamb Seekh Kebab", desc: "4-5 pcs Charcoal-grilled minced lamb skewers with herbs, green chili, garlic, and warm spices. (20-22 min prep time)", price: "$22.99", image: dishLambSeekh },
      { name: "Tandoori Shrimp", desc: "Spiced shrimp grilled over high heat with lemon-garlic sauce and charred vegetables. (20-22 min prep time)", price: "$24.99", image: dishTandooriShrimp },
      { name: "Paneer Tikka Skewers", desc: "Paneer (Indian Cheese), peppers, onions, and tomato, grilled with tikka masala and finished with lime. (18-20 min prep time)", price: "$17.99", image: paneerTikkaSkewersImg },
      { name: "Lamb Chop", desc: "5 pcs Tandoor-charred lamb chops marinated with garlic, ginger, yogurt, and house spices. (20-22 min prep time)", price: "$32.99", image: tandooriGrillLambImg },
    ],
  },

  // ─── Biryani ─────────────────────────────────────────────────────────────
  {
    id: "biryani",
    title: "Biryani",
    tagline: "Fragrant basmati rice layered with tender, spiced meat or veggie, aromatic herbs, and traditional Indian spices, slow-cooked to perfection for a rich and flavorful dish.",
    icon: "utensils",
    dishes: [
      { name: "Biryani", desc: "Fragrant basmati rice layered with tender, marinated meat or veggies, aromatic spices, caramelized onions, and fresh herbs, slow-cooked to perfection for a rich, flavorful, and beautifully fragrant dish.", price: "$16.99", badge: "Most Popular", image: chickenBiryaniImg },
    ],
  },

  // ─── Everest Grill Platters ───────────────────────────────────────────────
  {
    id: "platters",
    title: "Everest Grill Platters",
    tagline: "For the table · for the hungry · for people who cannot decide.",
    icon: "utensils",
    dishes: [
      { name: "Kathmandu Mixed Grill", desc: "Mixed platter of Tandoori chicken, chicken tikka, malai chicken kebab, lamb seekh kebab, cucumber, pickled onions. Served in Garlic Naan.", price: "$39.98", image: mixedGrillComboImg },
      { name: "Everest Family Feast", desc: "Mixed meat-platter of tandoori chicken, chicken tikka, malai chicken kebab, and lamb seekh kebab. Includes chicken biriyani and mint chutney, achar and tandoori mayo. Served with Garlic Naan.", price: "$51.98", image: familyBbqFeastImg },
      { name: "Sekuwa & Naan Board", desc: "Charcoal chicken sekuwa, Nepali achar, pickled onions, mint chutney, cucumber. Served with Garlic Naan.", price: "$30.98", badge: "Chef's Pick", image: sekuwaNaanBoardImg },
    ],
  },

  // ─── Naan Wraps ──────────────────────────────────────────────────────────
  {
    id: "naan-wraps",
    title: "Naan Wraps",
    tagline: "Street-food handhelds — served with masala fries.",
    icon: "sandwich",
    dishes: [
      { name: "Tandoori Tikka Naan Wrap", desc: "Tandoori chicken tikka, pickled onions, mint chutney, tandoori mayo, and cilantro in warm naan.", price: "$15.99", badge: "Most Popular", image: dishNaanWrap },
      { name: "Chicken Sekuwa Naan Wrap", desc: "Smoky chicken sekuwa, Nepali achar, pickled onions, mint chutney, chili-garlic sauce, and crispy sev.", price: "$15.99", image: chickenSekuwaNaanWrapImg },
      { name: "Lamb Seekh Naan Wrap", desc: "Lamb seekh kebab, charred onions, pickled onion, garlic sauce, mint chutney, and chili-lime slaw.", price: "$17.99", image: lambSeekhNaanWrapImg },
      { name: "Tandoori Shrimp Naan Wrap", desc: "Charred shrimp, pickled onion, lemon-garlic sauce, mint chutney, and cilantro in warm naan.", price: "$18.99", image: tandooriShrimpNaanWrapImg },
      { name: "Paneer Tikka Naan Wrap", desc: "Grilled paneer, peppers, onion, mint chutney, tamarind, and cilantro in warm naan.", price: "$15.99", image: paneerTikkaNaanWrapImg },
    ],
  },

  // ─── Curries ─────────────────────────────────────────────────────────────
  {
    id: "curries",
    title: "Curries",
    tagline: "Most curries served with basmati rice. Protein choices: vegetable, paneer +$0 · lamb +$3.99 · shrimp +$3.99 · goat +$4.99.",
    icon: "soup",
    dishes: [
      { name: "Butter Chicken", desc: "Soft butter chicken curry with tender chicken and a rich, creamy tomato sauce. (Served with 16 oz of basmati rice)", price: "$21.99", image: butterChickenImg },
      { name: "Coconut Curry", desc: "A coconut-based curry with ginger, garlic, toasted spices, and herbs. (Served with 16 oz of basmati rice)", price: "$20.99", image: coconutCurryImg },
      { name: "Curry", desc: "Comforting home-style curry with tomato, onion, ginger, garlic, and toasted spices. (Served with 16 oz of basmati rice)", price: "$19.99", image: indianChickenCurryImg },
      { name: "Dal Makhani", desc: "Slow-simmered black lentils, kidney beans, tomato, butter, and warming spices. (Served with 16 oz of basmati rice)", price: "$17.99", image: dalMakhaniImg },
      { name: "Korma", desc: "A gentle, aromatic cashew-yogurt sauce with warm spices. (Served with 16 oz of basmati rice)", price: "$20.99", image: chickenKormaImg },
      { name: "Makhani", desc: "A velvety butter-tomato sauce with warm spices. (Served with 16 oz of basmati rice)", price: "$21.99", badge: "Chef's Pick", image: chickenMakhaniImg },
      { name: "Saag Curry", desc: "A creamy spinach-based curry with garlic, ginger, spices, and herbs. (Served with 16 oz of basmati rice)", price: "$20.99", image: saagCurryImg },
      { name: "Tikka Masala", desc: "A bold tomato-cream masala sauce with tandoor-charred flavor. (Served with 16 oz of basmati rice)", price: "$21.99", badge: "Most Popular", image: chickenTikkaMasalaImg },
    ],
  },

  // ─── Naan & Breads ───────────────────────────────────────────────────────
  {
    id: "naan-breads",
    title: "Naan & Breads",
    tagline: "Hand-stretched and baked fresh in the tandoor.",
    icon: "wheat",
    dishes: [
      { name: "Plain Naan", desc: "Classic tandoor-baked flatbread.", price: "$2.99" },
      { name: "Butter Naan", desc: "Brushed with melted butter.", price: "$3.99" },
      { name: "Garlic Naan", desc: "Roasted garlic, cilantro, and butter.", price: "$4.99" },
      { name: "Cheese Naan", desc: "Stuffed with melted cheese.", price: "$6.99" },
      { name: "Keema Naan", desc: "Naan stuffed with spiced minced lamb.", price: "$7.99" },
      { name: "Naan Basket", desc: "Plain, butter, and garlic naan.", price: "$11.99" },
      { name: "Tandoori Roti", desc: "Whole-wheat tandoor-baked flatbread.", price: "$3.99" },
      { name: "Lacha Paratha", desc: "Flaky layered paratha.", price: "$5.99" },
      { name: "Aloo Paratha", desc: "Paratha stuffed with seasoned potato.", price: "$6.99" },
      { name: "Kashmiri Naan", desc: "Naan stuffed with sweet coconut, nuts, and raisins.", price: "$7.99" },
    ],
  },

  // ─── Sides & Sauces ──────────────────────────────────────────────────────
  {
    id: "sides-sauces",
    title: "Sides & Sauces",
    tagline: "Round out the table.",
    icon: "soup",
    dishes: [
      { name: "Chips Chilli", desc: "", price: "$10.99" },
      { name: "Masala Fries", desc: "Crispy fries with chaat masala, chili, and cilantro.", price: "$6.99", image: masalaFriesImg },
      { name: "Cucumber Salad", desc: "Cooling cucumber, herbs, onion, and lemon.", price: "$5.99", badge: "Out of Stock" },
      { name: "Plain Yogurt", desc: "Cooling house yogurt, lightly seasoned.", price: "$4.99" },
      { name: "Nepali Achar", desc: "Everest house pickle.", price: "$3.99" },
      { name: "Chutney Trio", desc: "Mint, tamarind, and garlic sauce.", price: "$5.99" },
      { name: "Extra Sauce", desc: "Mint chutney, garlic sauce, tandoori mayo, lemon-garlic sauce, achar, tamarind, or chili-garlic.", price: "$0.99" },
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
      { name: "Himalayan Iced Chai", desc: "Cold-brewed spiced tea with milk, vanilla, cardamom, and cinnamon.", price: "$6.99", image: himalayanIcedChaiImg },
      { name: "Mango Lassi", desc: "Mango, yogurt, cardamom, and a touch of saffron.", price: "$6.99", badge: "Most Popular", image: mangoLassiImg },
      { name: "Banana Lassi", desc: "Banana, mango-yogurt, and a light touch of sweetness.", price: "$6.99", image: plainSweetLassiImg },
      { name: "Kathmandu Lemon Soda", desc: "Fresh lemon, black salt, cumin, mint, and soda.", price: "$6.99", image: kathmanduLemonSodaImg },
      { name: "Fresh Lemonade", desc: "Fresh lemon, ginger, mint, and black salt.", price: "$6.99", image: freshSugarcaneLemonadeImg },
      { name: "Can Soda", desc: "", price: "$2.45" },
      { name: "Water", desc: "", price: "$2.00" },
    ],
  },

  // ─── Desserts ────────────────────────────────────────────────────────────
  {
    id: "desserts",
    title: "Desserts",
    tagline: "A sweet finish with Himalayan comfort.",
    icon: "sparkles",
    dishes: [
      { name: "Everest Kulfi Pop", desc: "Frozen mango-cardamom kulfi with a pistachio crumble.", price: "$6.99", badge: "Most Popular", image: everestKulfiPopImg },
      { name: "Gulab Jamun Skillet (3 pc)", desc: "Warm milk dumplings in rose-cardamom syrup with pistachio.", price: "$7.99", badge: "Chef's Pick", image: gulabJamunSkilletImg },
      { name: "Rice Pudding", desc: "Slow-cooked basmati rice pudding with cardamom, saffron, and pistachio.", price: "$8.99", image: ricePuddingImg },
    ],
  },

  // ─── Specials ────────────────────────────────────────────────────────────
  {
    id: "specials",
    title: "Specials",
    tagline: "Limited-time favorites from the kitchen.",
    icon: "sparkles",
    dishes: [
      { name: "Lamb Momo", desc: "", price: "$19.99", badge: "Chef's Pick" },
    ],
  },

  // ─── Gluten Free ─────────────────────────────────────────────────────────
  {
    id: "gluten-free",
    title: "Gluten Free",
    tagline: "All the fire, none of the gluten.",
    icon: "leaf",
    dishes: [
      { name: "GF Chicken Tikka Kebab", desc: "Tender pieces of boneless chicken marinated in aromatic yogurt and traditional spices, char-grilled to perfection with a smoky, lightly charred finish. Served with fresh onions, cilantro, lemon, and mint chutney. (20-22 min prep time)", price: "$19.99", image: chickenTikkaKababImg },
      { name: "GF Malai Chicken Kebab", desc: "Creamy, mildly spiced chicken with cheese, cardamom, garlic, and herbs. (20-22 min prep time)", price: "$19.99", image: dishMalaiKabab },
      { name: "GF Lamb Seekh Kebab", desc: "4-5 pcs Charcoal-grilled minced lamb skewers with herbs, green chili, garlic, and warm spices. (20-22 min prep time)", price: "$22.99", image: dishLambSeekh },
      { name: "GF Tandoori Shrimp", desc: "Spiced shrimp grilled over high heat with lemon-garlic sauce and charred vegetables. (20-22 min prep time)", price: "$24.99", image: dishTandooriShrimp },
      { name: "GF Paneer Tikka Skewers", desc: "Paneer (Indian Cheese), peppers, onions, and tomato, grilled with tikka masala and finished with lime. (18-20 min prep time)", price: "$17.99", image: paneerTikkaSkewersImg },
      { name: "GF Lamb Chop", desc: "5 pcs Tandoor-charred lamb chops marinated with garlic, ginger, yogurt, and house spices. (20-22 min prep time)", price: "$32.99", image: tandooriGrillLambImg },
      { name: "GF Biryani", desc: "Fragrant basmati rice layered with tender, marinated meat or veggies, aromatic spices, caramelized onions, and fresh herbs, slow-cooked to perfection for a rich, flavorful, and beautifully fragrant dish.", price: "$16.99", image: chickenBiryaniImg },
      { name: "GF Coconut Curry", desc: "A coconut-based curry with ginger, garlic, toasted spices, and herbs. (Served with 16 oz of basmati rice)", price: "$20.99", image: coconutCurryImg },
      { name: "GF Curry", desc: "Comforting home-style curry with tomato, onion, ginger, garlic, and toasted spices. (Served with 16 oz of basmati rice)", price: "$19.99", image: indianChickenCurryImg },
      { name: "GF Tikka Masala", desc: "A bold tomato-cream masala sauce with tandoor-charred flavor. (Served with 16 oz of basmati rice)", price: "$21.99", image: chickenTikkaMasalaImg },
      { name: "GF Makhani", desc: "A velvety butter-tomato sauce with warm spices. (Served with 16 oz of basmati rice)", price: "$21.99", image: chickenMakhaniImg },
      { name: "GF Korma", desc: "A gentle, aromatic cashew-yogurt sauce with warm spices. (Served with 16 oz of basmati rice)", price: "$20.99", image: chickenKormaImg },
      { name: "GF Dal Makhani", desc: "Slow-simmered black lentils, kidney beans, tomato, butter, and warming spices. (Served with 16 oz of basmati rice)", price: "$17.99", image: dalMakhaniImg },
      { name: "GF Saag Curry", desc: "A creamy spinach-based curry with garlic, ginger, spices, and herbs. (Served with 16 oz of basmati rice)", price: "$20.99", image: saagCurryImg },
      { name: "GF Cucumber Salad", desc: "Cooling cucumber, herbs, onion, and lemon.", price: "$5.99", image: gfCucumberSaladImg },
      { name: "GF Plain Yogurt", desc: "Cooling house yogurt, lightly seasoned.", price: "$4.99", image: gfPlainYogurtImg },
      { name: "GF Nepali Achar", desc: "Everest house pickle.", price: "$3.99", image: gfNepaliAcharImg },
      { name: "GF Ama's Masala Chai", desc: "Black tea simmered with cardamom, ginger, cinnamon, cloves, and milk.", price: "$4.99", image: aamasMasalaChaiImg },
      { name: "GF Himalayan Iced Chai", desc: "Cold-brewed spiced tea with milk, vanilla, cardamom, and cinnamon.", price: "$6.99", image: himalayanIcedChaiImg },
      { name: "GF Mango Lassi", desc: "Mango, yogurt, cardamom, and a touch of saffron.", price: "$6.99", image: mangoLassiImg },
      { name: "GF Banana Lassi", desc: "Banana, mango-yogurt, and a light touch of sweetness.", price: "$6.99", image: plainSweetLassiImg },
      { name: "GF Kathmandu Lemon Soda", desc: "Fresh lemon, black salt, cumin, mint, and soda.", price: "$6.99", image: kathmanduLemonSodaImg },
      { name: "GF Tandoori Chicken", desc: "Yogurt-marinated half chicken, tandoor-charred with mint chutney and lemon. (20-22 min prep time)", price: "$18.99", image: dishTandooriChicken },
      { name: "GF Chicken Sekuwa", desc: "Nepali-style charcoal-grilled chicken with garlic, ginger, cumin, chili, mustard oil, and house spices. (20-22 min prep time)", price: "$18.99", image: chickenSekuwaImg },
    ],
  },
];
