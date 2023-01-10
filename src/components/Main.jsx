import styled from "styled-components";
import Ranking from "./home/Ranking";
import Sidebar from "./Sidebar"
import HomeVisual from "./HomeVisual";
import Recommend from "./home/Recommend";
import {Recommend2} from "./home/Recommend";
import News from "./home/News";
import Revue from "./home/Revue";
import Simulation from "./home/Simulation";

const StyledMain = styled.main`
  min-width: 1020px;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: #fff;
`;
const MainContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
`;
const MainContentOuter = styled.div`
  width: 980px;
  height: 100%;
  margin: 0;
  padding: 0 20px;
`;
const MainContentInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const MainCenter = styled.div`
  width: 100%;
  min-height: 3000px;
  margin: 0;
  padding: 25px 0 0 0;
  display: block;
`;
const MainCenterWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const MainCenterContainer = styled.div`
  width: 730px;
  height: 100%;
  margin: 0;
  padding: 0;
  float: left;
`;
const MainBottom = styled.div`
  width: auto;
  margin: 45px 0 0 0;
  padding: 45px 0 0 0;
  border-top: 1px solid #ccc;
`;
const BottomContainer = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;

const rankingsTitles = ['ふるさと納税 人気急上昇ランキング','ふるさと納税 総合人気ランキング','定期便の人気ランキング','おすすめお礼品','ふるさと納税 新着お礼品'];
const recommendTitles= [
  {special: 'おすすめ特集', content: 'おすすめコンテンツ'}
];
//------------ 現在、ランキングタイトルとアイテムを別で表示している。また、タイトルは別々で表示できているがアイテムが複数のタイトルにあなじものが表示されている。
//------------ 後で、カテゴリーなどを追加し、そのカテゴリーにタイトルやアイテムを紐付けして、アイテムが複数のタイトルに重複するのをなくす。
//------------ 書き方として、category:[{title:'test'}{items[item,item,item...]}]など。
//------------ mapの表示の仕方として、map(category), 表示の仕方として、タイトルは、category.title アイテムは、category.items.mapなどで記述する。
const Main = () => {
  return (
    <StyledMain>
      <MainContent>
        <MainContentOuter>
        <MainContentInner>
          <HomeVisual />
          <MainCenter>
            <Sidebar />
            <MainCenterWrap>
              <MainCenterContainer>
                {rankingsTitles.map((rankingTitle) => {
                  return (
                  <Ranking rankingTitle={rankingTitle}/>
                  );
                })}
                <Simulation />
                {recommendTitles.map((recommendTitle) => {
                  return (
                    <>
                    <Recommend title={recommendTitle}/>
                    <Recommend2 title={recommendTitle}/>
                    </>
                  );
                })}
              </MainCenterContainer>
            </MainCenterWrap>
          </MainCenter>
          <MainBottom>
            <BottomContainer>
              <News />
              <Revue />
            </BottomContainer>
          </MainBottom>
        </MainContentInner>
        </MainContentOuter>
      </MainContent>
    </StyledMain>
  );
};

export default Main;