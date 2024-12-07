import { db } from './connection.js';
import { collection, addDoc } from 'firebase/firestore';

const products = [
  //cremas
  {
    category: "cremas",
    brand: "HairGlow",
    title: "SmoothControl",
    price: 4900,
    stock: 25,
    description: "Crema para peinar que controla el frizz y define el peinado.",
    ingredients: "Agua, aceite de jojoba, glicerina, proteína de seda, fragancia",
  },
  {
    category: "cremas",
    brand: "VitaHair",
    title: "Silk Finish",
    price: 5200,
    stock: 30,
    description: "Crema ligera para peinar que aporta brillo y suavidad al cabello.",
    ingredients: "Agua, extracto de almendra, alcohol cetílico, aceite de argán, fragancia",
  },
  {
    category: "cremas",
    brand: "CapillusCare",
    title: "HydraLock",
    price: 4500,
    stock: 40,
    description: "Crema hidratante para peinar que sella la humedad y previene el quiebre.",
    ingredients: "Agua, glicerina, extracto de aloe vera, vitamina E, fragancia",
  },
  {
    category: "cremas",
    brand: "NatureStyle",
    title: "Herbal Shine",
    price: 6000,
    stock: 20,
    description: "Crema para peinar con extractos herbales que nutren y dan brillo.",
    ingredients: "Agua, extracto de romero, alcohol cetílico, aceite de coco, fragancia",
  },
  {
    category: "cremas",
    brand: "SilkWave",
    title: "Curl Define",
    price: 5800,
    stock: 15,
    description: "Crema para definir rizos y evitar el encrespamiento.",
    ingredients: "Agua, elastina hidrolizada, aceite de karité, proteína de trigo, fragancia",
  },
  {
    category: "cremas",
    brand: "HairLuxe",
    title: "Keratin Boost",
    price: 7500,
    stock: 10,
    description: "Crema fortalecedora para peinar con keratina para cabello dañado.",
    ingredients: "Agua, keratina hidrolizada, alcohol cetílico, aceite de macadamia, fragancia",
  },
  {
    category: "cremas",
    brand: "SoftLocks",
    title: "Volume & Lift",
    price: 5000,
    stock: 35,
    description: "Crema para peinar que proporciona volumen y cuerpo al cabello fino.",
    ingredients: "Agua, pantenol, glicerina, extracto de raíz de malvavisco, fragancia",
  },
  {
    category: "cremas",
    brand: "EverStyle",
    title: "Protect & Repair",
    price: 6500,
    stock: 18,
    description: "Crema para peinar con protección térmica y reparación intensiva.",
    ingredients: "Agua, proteína de seda, aceite de aguacate, alcohol cetílico, fragancia",
  },
  {
    category: "cremas",
    brand: "PureTress",
    title: "Anti-Humidity Shield",
    price: 5300,
    stock: 22,
    description: "Crema para peinar que protege contra la humedad y mantiene el peinado intacto.",
    ingredients: "Agua, dimeticona, extracto de bambú, alcohol cetílico, fragancia",
  },
  {
    category: "cremas",
    brand: "LumaLocks",
    title: "Ultra Moisture",
    price: 6200,
    stock: 12,
    description: "Crema intensamente hidratante para cabello muy seco o dañado.",
    ingredients: "Agua, aceite de oliva, extracto de miel, glicerina, fragancia",
  },
];

const uploadProducts = async () => {
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
  
uploadProducts();