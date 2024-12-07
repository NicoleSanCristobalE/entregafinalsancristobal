import { db } from './connection.js';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  //mascarillas
  {
    category: "mascarillas",
    brand: "BioCare",
    title: "Deep Repair Mask",
    price: 7500,
    stock: 15,
    description: "Mascarilla reparadora para cabello extremadamente dañado.",
    ingredients: "Keratina hidrolizada, aceite de argán, extracto de miel, fragancia",
  },
  {
    category: "mascarillas",
    brand: "VitaLocks",
    title: "Ultra Moist Mask",
    price: 6800,
    stock: 20,
    description: "Mascarilla hidratante intensiva para cabello seco.",
    ingredients: "Aceite de coco, glicerina, vitamina E, fragancia",
  },
  {
    category: "mascarillas",
    brand: "PureNourish",
    title: "Herbal Infusion Mask",
    price: 7200,
    stock: 12,
    description: "Mascarilla nutritiva con extractos botánicos revitalizantes.",
    ingredients: "Extracto de romero, aceite de oliva, proteína de trigo, fragancia",
  },
  {
    category: "mascarillas",
    brand: "EverCare",
    title: "Detox Balance Mask",
    price: 7400,
    stock: 18,
    description: "Mascarilla detoxificante para cuero cabelludo y cabello.",
    ingredients: "Carbón activado, extracto de té verde, glicerina, fragancia",
  },
  {
    category: "mascarillas",
    brand: "SoftLocks",
    title: "Curl Define Mask",
    price: 6900,
    stock: 10,
    description: "Mascarilla que define rizos y reduce el encrespamiento.",
    ingredients: "Elastina hidrolizada, aceite de karité, proteína de seda, fragancia",
  },
  {
    category: "mascarillas",
    brand: "AquaTress",
    title: "Ocean Shine Mask",
    price: 7100,
    stock: 15,
    description: "Mascarilla hidratante inspirada en minerales marinos.",
    ingredients: "Extracto de algas, aceite de jojoba, glicerina, fragancia",
  },
];

const uploadMascarilla = async () => {
    try {
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const name = `${product.category}${i + 1}`;
        const image = `/images/${name}.png`;
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
  
uploadMascarilla();