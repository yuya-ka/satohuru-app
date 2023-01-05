import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledProducts = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
`;
const ContentText = styled.div`
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;
const Btn = styled.button`
  width: 100px;
  height: 50px;
  margin: 0;
  padding: 0;
`;
//商品クリックするとそのidを取得できるようにする。今は任意のidを取得している状態。
const Delete = () => {
  const baseURL = `${process.env.REACT_APP_API_HOST}/products`;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${baseURL}/${8}`)
      setProduct(res.data);
    }
    getProducts();
  },[]);
  const deleteProduct = async () => {
    await axios.delete(`${baseURL}/${product.id}`)
    setProduct(null);
  }
  if (!product) {
    return (<h2>表示されるデータがありません</h2>)
  };
  return (
    <StyledProducts>
      <ContentText>
        <div>{product.name}</div>
        <div>{product.city}</div>
        <div>{product.price}</div>
        <div>{product.content}</div>
      </ContentText>
      <Content>
        <Btn onClick={() => deleteProduct()}>削除</Btn>
      </Content>
    </StyledProducts>
  );
};

export default Delete;
