import { db } from './connection.js';
import { collection, addDoc } from 'firebase/firestore';

const products = [
//champus
{
    category: "champus",
    brand: "PureGlow",
    title: "Deep Cleanse",
    price: 4900,
    stock: 50,
    description: "Shampoo limpiador profundo para cabello graso.",
    ingredients: "Agua, sulfato de sodio, extracto de limón, glicerina, fragancia",
  },
  {
    category: "champus",
    brand: "VitaHair",
    title: "Volume Boost",
    price: 5200,
    stock: 35,
    description: "Shampoo voluminizador para cabello fino y sin cuerpo.",
    ingredients: "Agua, proteína de trigo, pantenol, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "CapillusCare",
    title: "HydraSoft",
    price: 6500,
    stock: 20,
    description: "Shampoo hidratante para cabello seco y opaco.",
    ingredients: "Agua, glicerina, extracto de miel, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "HairNourish",
    title: "NutriRepair",
    price: 5700,
    stock: 25,
    description: "Shampoo nutritivo que repara puntas abiertas y cabello dañado.",
    ingredients: "Agua, keratina hidrolizada, aceite de argán, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "EverStyle",
    title: "Shine Perfect",
    price: 5300,
    stock: 40,
    description: "Shampoo que aporta brillo y suavidad al cabello opaco.",
    ingredients: "Agua, extracto de aloe vera, proteína de seda, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "SilkWave",
    title: "Curl Care",
    price: 6200,
    stock: 30,
    description: "Shampoo diseñado para limpiar y definir rizos.",
    ingredients: "Agua, elastina hidrolizada, extracto de coco, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "NatureStyle",
    title: "Herbal Essence",
    price: 5800,
    stock: 18,
    description: "Shampoo herbal con extractos naturales para cabello saludable.",
    ingredients: "Agua, extracto de romero, sulfato de sodio, aceite de jojoba, fragancia",
  },
  {
    category: "champus",
    brand: "BioPure",
    title: "Anti-Pollution",
    price: 6700,
    stock: 15,
    description: "Shampoo que elimina residuos de contaminación y fortalece el cabello.",
    ingredients: "Agua, extracto de té verde, pantenol, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "SoftLocks",
    title: "Frizz Control",
    price: 4900,
    stock: 22,
    description: "Shampoo anti-frizz que suaviza y controla el encrespamiento.",
    ingredients: "Agua, aceite de karité, proteína de trigo, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "HairFusion",
    title: "Color Protect",
    price: 5900,
    stock: 35,
    description: "Shampoo protector de color para cabello teñido.",
    ingredients: "Agua, proteína de seda, sulfato de sodio, filtro UV, fragancia",
  },
  {
    category: "champus",
    brand: "LumaLocks",
    title: "Extra Moisture",
    price: 6200,
    stock: 20,
    description: "Shampoo hidratante intensivo para cabello seco y dañado.",
    ingredients: "Agua, aceite de oliva, extracto de almendra, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "FreshRoots",
    title: "Green Tea Energy",
    price: 5500,
    stock: 25,
    description: "Shampoo revitalizante con té verde y menta.",
    ingredients: "Agua, extracto de té verde, mentol, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "VitalTress",
    title: "Detox Balance",
    price: 7200,
    stock: 12,
    description: "Shampoo detoxificante para equilibrar el cuero cabelludo.",
    ingredients: "Agua, carbón activado, extracto de aloe vera, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "AquaHair",
    title: "Ocean Fresh",
    price: 6800,
    stock: 18,
    description: "Shampoo refrescante inspirado en el océano, ideal para uso diario.",
    ingredients: "Agua, extracto de algas marinas, mentol, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "PureRoots",
    title: "Citrus Shine",
    price: 4800,
    stock: 40,
    description: "Shampoo con extracto de cítricos que proporciona brillo y frescura.",
    ingredients: "Agua, extracto de limón, glicerina, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "VitaCare",
    title: "Repair Boost",
    price: 6500,
    stock: 25,
    description: "Shampoo reparador intensivo para cabello extremadamente dañado.",
    ingredients: "Agua, proteína de soja, aceite de coco, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "FreshLuxe",
    title: "Gentle Clean",
    price: 5100,
    stock: 30,
    description: "Shampoo suave para uso frecuente y cabello sensible.",
    ingredients: "Agua, extracto de manzanilla, sulfato de sodio, glicerina, fragancia",
  },
  {
    category: "champus",
    brand: "BioTress",
    title: "Aloe & Honey",
    price: 5700,
    stock: 35,
    description: "Shampoo hidratante con aloe y miel para un cabello sedoso.",
    ingredients: "Agua, extracto de aloe vera, miel, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "NaturaWave",
    title: "Herbal Detox",
    price: 6900,
    stock: 20,
    description: "Shampoo detoxificante con extractos herbales y antioxidantes.",
    ingredients: "Agua, extracto de romero, carbón activado, sulfato de sodio, fragancia",
  },
  {
    category: "champus",
    brand: "AquaLuxe",
    title: "Deep Sea Moisture",
    price: 7300,
    stock: 15,
    description: "Shampoo hidratante inspirado en minerales del mar profundo.",
    ingredients: "Agua, extracto de algas marinas, glicerina, sulfato de sodio, fragancia",
  },
];

const uploadChampus = async () => {
    try {
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const name = `${product.category}${i + 1}`;
        const image = `../../public/images/${product.category}${i + 1}.png`;
        const productData = {
          ...product,
          image,
          name,
        };
        await addDoc(collection(db, "products"), productData);
      }
    } catch (error) {
    }
  };
  
  uploadChampus();