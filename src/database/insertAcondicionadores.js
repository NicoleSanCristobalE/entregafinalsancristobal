import { db } from './connection.js';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  //acondicionadores
  {
    category: "acondicionadores",
    brand: "HairCarePlus",
    title: "Smooth & Shine",
    price: 6300,
    stock: 25,
    description: "Acondicionador que desenreda y aporta brillo al cabello.",
    ingredients: "Agua, dimeticona, proteína de trigo, aceite de argán, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "VitaStyle",
    title: "Hydra Plus",
    price: 5500,
    stock: 40,
    description: "Acondicionador hidratante para cabello seco y opaco.",
    ingredients: "Agua, extracto de aloe vera, glicerina, aceite de coco, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "FreshLocks",
    title: "Anti-Humidity Shield",
    price: 7000,
    stock: 30,
    description: "Acondicionador que protege contra la humedad y el frizz.",
    ingredients: "Agua, dimeticona, extracto de bambú, glicerina, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "SilkWave",
    title: "Curl Define Conditioner",
    price: 6200,
    stock: 18,
    description: "Acondicionador para rizos que define y controla el encrespamiento.",
    ingredients: "Agua, elastina hidrolizada, aceite de karité, proteína de seda, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "NatureSoft",
    title: "Herbal Repair",
    price: 5900,
    stock: 20,
    description: "Acondicionador con extractos herbales para cabello dañado.",
    ingredients: "Agua, extracto de romero, proteína de trigo, aceite de jojoba, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "CapillusCare",
    title: "Volume Max",
    price: 5800,
    stock: 30,
    description: "Acondicionador que aporta volumen al cabello fino.",
    ingredients: "Agua, pantenol, queratina hidrolizada, extracto de avena, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "PureLuxe",
    title: "Nutri Repair",
    price: 6500,
    stock: 15,
    description: "Acondicionador nutritivo para cabello extremadamente seco.",
    ingredients: "Agua, aceite de macadamia, extracto de miel, glicerina, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "VitaRoots",
    title: "Color Save Conditioner",
    price: 7200,
    stock: 12,
    description: "Acondicionador protector de color para cabello teñido.",
    ingredients: "Agua, filtro UV, dimeticona, proteína de soja, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "HairFusion",
    title: "Silky Touch",
    price: 5900,
    stock: 35,
    description: "Acondicionador que aporta suavidad y manejabilidad al cabello.",
    ingredients: "Agua, proteína de seda, aceite de coco, dimeticona, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "BioLuxe",
    title: "Herbal Therapy",
    price: 6400,
    stock: 20,
    description: "Acondicionador natural con extractos botánicos revitalizantes.",
    ingredients: "Agua, extracto de manzanilla, aceite de oliva, glicerina, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "AquaTress",
    title: "Ocean Hydration",
    price: 6700,
    stock: 15,
    description: "Acondicionador hidratante con extractos marinos.",
    ingredients: "Agua, extracto de algas, aceite de coco, dimeticona, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "NaturaShine",
    title: "Daily Repair",
    price: 5500,
    stock: 25,
    description: "Acondicionador diario para reparación intensiva.",
    ingredients: "Agua, queratina hidrolizada, aceite de aguacate, glicerina, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "EverLocks",
    title: "Detox Balance Conditioner",
    price: 6800,
    stock: 20,
    description: "Acondicionador detoxificante que equilibra el cuero cabelludo.",
    ingredients: "Agua, carbón activado, extracto de té verde, glicerina, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "VitalTress",
    title: "Herbal Volume",
    price: 5700,
    stock: 30,
    description: "Acondicionador que mejora el volumen y cuerpo del cabello.",
    ingredients: "Agua, extracto de lavanda, pantenol, glicerina, fragancia",
  },
  {
    category: "acondicionadores",
    brand: "AquaRoots",
    title: "Gentle Clean Conditioner",
    price: 5400,
    stock: 18,
    description: "Acondicionador suave para cabello sensible y cuero cabelludo delicado.",
    ingredients: "Agua, extracto de avena, proteína de trigo, aceite de jojoba, fragancia",
  },
];

const uploadAcondicionador = async () => {
    try {
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const name = `${product.category}${i + 1}`;
        const image = `${name}.png`;
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
  
  uploadAcondicionador();