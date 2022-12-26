//色々導入する練習用ファイル
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Sample = styled.div`
  width: 100%;
  height: 100px;
  margin: 0;
  padding: 0;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Example = () => {
  const baseURL = `${process.env.REACT_APP_API_HOST}/products`;
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(baseURL)
      setProducts(res.data);
    }
    getProducts();
  },[]);
  //もしproductsでないならnullを返す
  if (!products) return null;
  return (
    <Sample>
      <p>{products[0].name}</p>
      <p>{products[0].city}</p>
      <p>{products[0].price}</p>
      <p>{products[0].content}</p>
    </Sample>
  );
};

export default Example;