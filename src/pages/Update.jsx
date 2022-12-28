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
const ContentName = styled.div`
  width: 100px;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//商品クリックするとそのidを取得できるようにする。今は任意のidを取得している状態。
const Update = () => {
  const baseURL = `${process.env.REACT_APP_API_HOST}/products`;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${baseURL}/${19}`)
      setProduct(res.data);
    }
    getProducts();
  },[]);
  const updateProduct = async () => {
    const updateRes = await axios.patch(`${baseURL}/${product.id}`, {
      name: name,
      city: city,
      price: price,
      content: content
    })
    setProduct(updateRes.data);
  };
  //後で1つにまとめて、出力する。バリューをデフォルトではなくまとめて出す
  const [name, setName] = useState(null)
  const ChangeName = (e) => {
    setName(e.target.value)
  }
  const [city, setCity] = useState(null)
  const ChangeCity = (e) => {
    setCity(e.target.value)
  }
  const [price, setPrice] = useState(null)
  const ChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const [content, setContent] = useState(null)
  const ChangeContent = (e) => {
    setContent(e.target.value)
  }
  if (!product) {
    return (<h2>表示されるデータがありません</h2>)
  };
  return (
    <StyledProducts>
      <ContentText>
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.city}</div>
        <div>{product.price}</div>
        <div>{product.content}</div>
      </ContentText>
      <ContentText>
        <ContentName>name</ContentName>
        <input defaultValue={product.name} value={name} onChange={ChangeName}></input><br />
      </ContentText>
      <ContentText>
        <ContentName>city</ContentName>
        <input defaultValue={product.city} value={city} onChange={ChangeCity}></input><br />
      </ContentText>
      <ContentText>
        <ContentName>price</ContentName>
        <input defaultValue={product.price} value={price} onChange={ChangePrice}></input><br />
      </ContentText>
      <ContentText>
        <ContentName>content</ContentName>
        <input defaultValue={product.content} value={content} onChange={ChangeContent}></input>
      </ContentText>
      <Content>
        <Btn onClick={() => updateProduct()}>編集</Btn>
      </Content>
    </StyledProducts>
  );
};

export default Update;