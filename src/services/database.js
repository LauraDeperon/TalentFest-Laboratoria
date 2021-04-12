import db from '../index'

const getProducts = async () => {
  try {
    const result = await db.collection('products').get();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default getProducts
