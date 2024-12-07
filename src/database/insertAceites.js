import { db } from './connection.js';
import { collection, addDoc } from 'firebase/firestore';

    // "insertChampus": "node src/database/insertChampus.js",
    // "insertAceites": "node src/database/insertAceites.js",
    // "insertAcondicionadores": "node src/database/insertAcondicionadores.js",
    // "insertCremas": "node src/database/insertCremas.js",
    // "insertMascarillas": "node src/database/insertMascarillas.js",
    
const products = [
  //aceites
  {
    category: "aceites",
    brand: "HairGlow",
    title: "Repair Oil",
    price: 7000,
    stock: 20,
    description: "Aceite reparador para cabello dañado y seco.",
    ingredients: "Aceite de argán, vitamina E, aceite de jojoba, fragancia",
  },
  {
    category: "aceites",
    brand: "VitaLocks",
    title: "Shine Booster",
    price: 6800,
    stock: 25,
    description: "Aceite que aporta brillo intenso al cabello opaco.",
    ingredients: "Aceite de coco, extracto de manzanilla, vitamina E, fragancia",
  },
  {
    category: "aceites",
    brand: "BioTress",
    title: "Detox Elixir",
    price: 8500,
    stock: 10,
    description: "Aceite detoxificante con antioxidantes naturales.",
    ingredients: "Aceite de té verde, carbón activado, vitamina E, fragancia",
  },
  {
    category: "aceites",
    brand: "PureCare",
    title: "Herbal Infusion",
    price: 7200,
    stock: 15,
    description: "Aceite nutritivo con extractos herbales revitalizantes.",
    ingredients: "Aceite de almendra, extracto de romero, vitamina E, fragancia",
  },
  {
    category: "aceites",
    brand: "SoftLocks",
    title: "Anti-Frizz Serum",
    price: 6900,
    stock: 18,
    description: "Aceite anti-frizz que controla el encrespamiento y suaviza el cabello.",
    ingredients: "Aceite de karité, queratina hidrolizada, vitamina B5, fragancia",
  },
  {
    category: "aceites",
    brand: "AquaLuxe",
    title: "Ocean Mist Oil",
    price: 7400,
    stock: 12,
    description: "Aceite hidratante inspirado en minerales marinos.",
    ingredients: "Aceite de algas, glicerina, vitamina E, fragancia",
  },
  {
    category: "aceites",
    brand: "HairEssence",
    title: "Daily Moisture",
    price: 6500,
    stock: 20,
    description: "Aceite para uso diario que hidrata profundamente el cabello.",
    ingredients: "Aceite de oliva, extracto de aloe vera, vitamina E, fragancia",
  },
  {
    category: "aceites",
    brand: "NatureLocks",
    title: "Ultra Repair Oil",
    price: 7700,
    stock: 15,
    description: "Aceite reparador intensivo para cabello extremadamente seco.",
    ingredients: "Aceite de macadamia, extracto de miel, glicerina, fragancia",
  },
  {
    category: "aceites",
    brand: "SilkTress",
    title: "Curl Enhancing Oil",
    price: 6600,
    stock: 18,
    description: "Aceite que define rizos y reduce el frizz.",
    ingredients: "Aceite de coco, elastina hidrolizada, vitamina E, fragancia",
  },
  {
    category: "aceites",
    brand: "PureRoots",
    title: "Strength & Shine Oil",
    price: 7100,
    stock: 20,
    description: "Aceite fortalecedor que aporta brillo y suavidad al cabello.",
    ingredients: "Aceite de aguacate, proteína de trigo, vitamina B7, fragancia",
  },
  {
    category: "aceites",
    brand: "VitalLocks",
    title: "Color Protect Oil",
    price: 7800,
    stock: 10,
    description: "Aceite que protege el color y evita el daño del cabello teñido.",
    ingredients: "Aceite de argán, filtro UV, vitamina C, fragancia",
  },
  {
    category: "aceites",
    brand: "EverGlow",
    title: "Anti-Breakage Serum",
    price: 8200,
    stock: 12,
    description: "Aceite anti-quiebre que fortalece y nutre profundamente el cabello.",
    ingredients: "Aceite de ricino, queratina hidrolizada, vitamina E, fragancia",
  },
];

const uploadProducts = async () => {
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
  
uploadProducts();