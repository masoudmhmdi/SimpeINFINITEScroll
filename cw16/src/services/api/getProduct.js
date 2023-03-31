import PublicAxios from '../instances/publicAxios';

async function getProduct(startProduct = 0) {
  const res = await PublicAxios(`products?offset=${startProduct}&limit=10`);
  return res;
}

export default getProduct;
