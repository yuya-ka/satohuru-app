import styled from "styled-components";
import { useState } from "react";
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

const Create = () => {
  const baseURL = `${process.env.REACT_APP_API_HOST}/products`;
  const [products, setProducts] = useState(null);
  const createProducts = async () => {
    const createRes = await axios.post(baseURL, {
      name: name,
      city: city,
      price: price,
      content: content
    })
    setProducts(createRes.data);
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
        <ContentName>name</ContentName>
        <input onChange={ChangeName}></input><br />
      </ContentText>
      <ContentText>
        <ContentName>city</ContentName>
        <input onChange={ChangeCity}></input><br />
      </ContentText>
      <ContentText>
        <ContentName>price</ContentName>
        <input onChange={ChangePrice}></input><br />
      </ContentText>
      <ContentText>
        <ContentName>content</ContentName>
        <input onChange={ChangeContent}></input>
      </ContentText>
      <Content>
        <Btn onClick={() => createProducts()}>作成</Btn>
      </Content>
    </StyledProducts>
  );
};

export default Create;