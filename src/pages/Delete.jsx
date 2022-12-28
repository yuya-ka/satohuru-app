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

const Delete = () => {
  const baseURL = `${process.env.REACT_APP_API_HOST}/products`;
  const [products, setProducts] = useState(null);
  
  const deleteProducts = async () => {
    await axios.delete(`${baseURL}/${7351}`)
    setProducts(null);
  }

  return (
    <StyledProducts>
      <ContentText>
      </ContentText>
      <Content>
        <Btn onClick={() => deleteProducts()}>削除</Btn>
      </Content>
    </StyledProducts>
  );
};

export default Delete;