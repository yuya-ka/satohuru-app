import styled from "styled-components";
import BottomTitle from "./BottomTitle";
import RevueList from "./RevueList";

const ContainerRight = styled.div`
  width: 460px;
  height: 370px;
  margin: 0;
  padding: 0;
  float: right;
`;
const ContainerRevue = styled.div`
  width: auto;
  height: 330px;
  margin: 0;
  padding: 0;
`;
const ContainerRevueBox = styled.div`
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
`;
const RevueItem = styled.div`
  width: auto;
  height: 100%;
  margin: 0 20px 0 0;
  padding: 0;
`;
const RevueBox = styled.div`
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const Scroll = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;

const Revue = () => {
  return (
    <ContainerRight>
      <BottomTitle title={'評価の高い新着お礼品レビュー・口コミ'}/>
      <ContainerRevue>
        <ContainerRevueBox>
          <RevueItem>
            <RevueBox>
{/* -------------------- 後でコンポーネントをmapで使いまわせるように修正する -------------------- */}
              <RevueList />
              <RevueList />
              <RevueList />
              <RevueList />
              <RevueList />
{/* -------------------- 後でコンポーネントをmapで使いまわせるように修正する -------------------- */}
            </RevueBox>
          </RevueItem>
          <Scroll></Scroll>
        </ContainerRevueBox>
      </ContainerRevue>
    </ContainerRight>
  );
};

export default Revue;