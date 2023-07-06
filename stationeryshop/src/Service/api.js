import axios from 'axios';

const url = "http://localhost:5000";

export const addAccount = async (login) => {
  return await axios.post(`${url}/MyAccount`, login);
};
export const loginAccount = async (login) => {
  return await axios.get(`${url}/MyAccount`, login);
};

export const addProduct = async (productData) => {
  try {
    console.log(productData.brand);
    const response = await axios.post(`${url}/PRODUCTS`, productData);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async () => {
  try {
    console.log("i am in getPRoducts api")
    const response = await axios.get(`${url}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
