import express from 'express';
import cors from 'cors';
import db from './database/db';
import productRoutes from './routes/routesProducts';
import userRoutes from './routes/routesUser';
import ProductModel from './models/ProductModel';
import { pay } from './routes/pay';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/payment', pay);

try{
    db.authenticate()
    console.log('conexion exitosa a la bd');
} catch (error){
    console.log(`El error de conexion fue ${error}`);
}

const PORT = process.env.PORT || 3001;//conexion al purto de backend

app.listen(PORT, ()=> {
    console.log(`servidor corriendo en puerto ${PORT}`);//info para la terminal de donde esta el server
})

//con el modelo de productos, construye y guarda todos los productos
const products = await ProductModel.findAll({
    attributes: ['id', 'stock', 'stockMin', 'nombre']
})

let productsStock = {}//objeto para guardar el stock 
let productMinStock = {}// objeto para guardar stock minimo

//para cada producto obtenido

products.forEach(product => {
    productsStock[product.dataValues.id] = product.dataValues.stock;
});
products.forEach(product => {
    productMinStock[product.dataValues.id] = {stockMin: product.dataValues.stockMin, nombre: product.dataValues.nombre};//se le asigna el id correspondiente al producto y a su vez el valor minimo del stock en forma de objeto, junto con el nomrbe
});
console.log(productMinStock);
export {productsStock, productMinStock};//exportation de los objetos
