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
  margin: 0;
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
      <BottomTitle title={'さとふるNEWS'}/>
      <ContainerNews>
        <ContainerNewsUl>
{/* -------------------- 後でコンポーネントをmapで使いまわせるように修正する -------------------- */}
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
          <NewsList />
{/* -------------------- 後でコンポーネントをmapで使いまわせるように修正する -------------------- */}
        </ContainerNewsUl>
      </ContainerNews>
    </ContainerLeft>
  );
};

export default News;