import styled from "styled-components";

import BottomTitle from "./BottomTitle";
import NewsList from "./NewsList";


const ContainerLeft = styled.div`
  width: 460px;
  height: 370px;
  margin: 0;
  padding: 0;
  float: left;
  overflow: hidden;
`;
const ContainerNews = styled.div`
  width: auto;
  //何かが原因で右のレビューとの文字の位置がずれている
  margin: 11px 0 0 0;
  padding: 0;
`;
const ContainerNewsUl = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;


const News = () => {
  return (
    <ContainerLeft>
      <BottomTitle />

      <ContainerNews>
        <ContainerNewsUl>

          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          
        </ContainerNewsUl>
      </ContainerNews>
    </ContainerLeft>
  );
};


export default News;