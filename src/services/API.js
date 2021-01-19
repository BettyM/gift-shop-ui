import axios from 'axios'
import getProductList from './ProductsMock';

const apiURL = ''

async function getProducts() {
  try {
    // const url = `${apiURL}/products`
    // const products = axios.get(url);
    const products = getProductList()
    return products
  } catch(error) {
    
  }
}

const API = {
  getProducts
}

export default API
