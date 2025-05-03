import mongoose from 'mongoose';
import Product from '../models/product.model.js';

const products = [
  { title: "Actron 600", description: "Analgésico y antiinflamatorio", price: 196, code: "ACTRON-001", stock: 10, category: "analgesicos" },
  { title: "Perifar 600", description: "Analgésico y antiinflamatorio", price: 186, code: "PERIFAR-001", stock: 10, category: "analgesicos" },
  { title: "Dolosedol 500", description: "Analgésico y antifebril (Paracetamol)", price: 199, code: "DOLOSEDOL-001", stock: 50, category: "analgesicos" },
  { title: "Dolex 500", description: "Analgésico y antifebril (Paracetamol)", price: 244, code: "DOLEX-001", stock: 50, category: "analgesicos" },
  { title: "Colagenol C", description: "Ayuda en la mejora de las articulaciones", price: 1300, code: "COLAGENOL-001", stock: 30, category: "suplementos" },
  { title: "Mega Omega 3", description: "Prevención y protección cardiovascular, neurológica y articular", price: 699, code: "OMEGA3-001", stock: 30, category: "suplementos" },
  { title: "Citrato de Magnesio", description: "Mejora la digestión, salud ósea y muscular, y apoya la función cardiovascular", price: 968, code: "MAGNESIO-001", stock: 100, category: "suplementos" },
  { title: "Harina de Orujo", description: "Actúa contra el envejecimiento celular y varias enfermedades", price: 390, code: "ORUJO-001", stock: 100, category: "suplementos" },
  { title: "Pantene 3min", description: "Tratamiento capilar intensivo", price: 320, code: "PANTENE-001", stock: 10, category: "higiene" },
  { title: "Colgate Total 12", description: "Pasta dental de protección completa", price: 230, code: "COLGATE-001", stock: 10, category: "higiene" },
  { title: "Dove Aero Clasic", description: "Desodorante antitranspirante", price: 199, code: "DOVE-001", stock: 10, category: "higiene" },
  { title: "Sublime D/H x12", description: "Toallitas femeninas con alas", price: 199, code: "SUBLIME-001", stock: 10, category: "higiene" },
  { title: "Yasmin", description: "Anticonceptivo oral de uso diario", price: 500, code: "YASMIN-001", stock: 10, category: "anticonceptivos" },
  { title: "Slinda", description: "Anticonceptivo libre de estrógenos", price: 500, code: "SLINDA-001", stock: 10, category: "anticonceptivos" },
  { title: "Divina 28", description: "Anticonceptivo oral con 28 comprimidos", price: 500, code: "DIVINA28-001", stock: 10, category: "anticonceptivos" },
  { title: "Divina 21", description: "Anticonceptivo oral con 21 comprimidos", price: 500, code: "DIVINA21-001", stock: 10, category: "anticonceptivos" }
];


export default async function populateProducts() {
  try {
    await mongoose.connect('mongodb://localhost:27017/farmaciaVeracierto', { // Connect to the farmaciaVeracierto database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Product.insertMany(products)
      .then(() => {
        console.log('Products added successfully to the farmaciaVeracierto collection!');
      })
      .catch(err => {
        console.error('Error adding products to the farmaciaVeracierto collection:', err);
      });

    mongoose.connection.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
