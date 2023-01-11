import axios from 'axios';

const MYSERVER = "http://localhost:9000/products"
export function getAllProducts() {
  return axios.get(MYSERVER)
}
