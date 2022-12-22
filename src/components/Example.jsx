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
  const baseURL = "http://localhost:3001/products";
  const [products, setProducts] = useState(null);
  console.log(products)
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setProducts(res.data);
    });
  },[]);
  //もしproductsでないならnullを返す
  if (!products) return null;
  return (
    <Sample>
      <p>{products[0].title}</p>
      <p>{products[0].money}</p>
      <p>{products[0].content}</p>
    </Sample>
  );
};

export default Example;