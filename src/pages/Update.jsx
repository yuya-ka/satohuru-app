import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledProducts = styled.div`
  height: 100%;
  width: 100%;
  margin: 50px 0 0 50px;
`;
const ContentText = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const Btn = styled.button`
  width: 100px;
  height: 50px;
  margin: 0;
  padding: 0;
`;

const Update = () => {
  const baseURL = `${process.env.REACT_APP_API_HOST}/products`;
  const [products, setProducts] = useState(null);

  const updateProducts = async () => {
    const updateRes = await axios.patch(`${baseURL}/${4333}`, {
      name: name,
      city: city,
      price: price,
      content: content
    })
    setProducts(updateRes.data);
  };

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

  return (
    <StyledProducts>
      <ContentText>
        <input onChange={ChangeName}></input><br />
        <input onChange={ChangeCity}></input><br />
        <input onChange={ChangePrice}></input><br />
        <input onChange={ChangeContent}></input>
      </ContentText>
      <Content>
        <Btn onClick={() => updateProducts()}>編集</Btn>
      </Content>
    </StyledProducts>
  );
};

export default Update;