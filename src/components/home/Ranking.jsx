import styled from "styled-components";
import Item from "./Item";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";

const Group = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
`;
const GroupContainer = styled.div`
  width: 730px;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const ContainerOuter = styled.div`
  width: auto;
  height: 330px;
  margin: 0;
  padding: 0;
`;
const ContainerInner = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
`;
//本当はMain.jsxでタイトルと商品の情報を分岐させたい。
const Ranking = (props) => {
  const baseURL = `${process.env.REACT_APP_API_HOST}/products`;
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(baseURL)
      setProducts(res.data);
    }
    getProducts();
  },[]);
  if (!products) {
    return (<h2>表示されるデータがありません</h2>)
  };
  return (
    <Group>
      <Title title={props.rankingTitle}/>
      <GroupContainer>
        <ContainerOuter>
          <ContainerInner>
            {products.map((item) => {
              return (
                <Item item={item}/>
              );
            })}
          </ContainerInner>
        </ContainerOuter>
      </GroupContainer>
    </Group>
  );
};

export default Ranking;