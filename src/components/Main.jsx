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

const rankingsData = [
  {title: 'ふるさと納税 人気急上昇ランキング' , items: [{name: '【先行受付】山梨県産シャインマスカ...', city: '山梨県山梨市', price: '寄付金額 10000円', text: '山梨県の豊かな自然で育った、味わい深いシャインマスカットです。'}]},
  {title: 'ふるさと納税 総合人気ランキング' , items: [{name: '【先行受付】山梨県産シャインマスカ...', city: '山梨県山梨市', price: '寄付金額 10000円', text: '山梨県の豊かな自然で育った、味わい深いシャインマスカットです。'}]},
  {title: '定期便の人気ランキング' , items: [{name: '【先行受付】山梨県産シャインマスカ...', city: '山梨県山梨市', price: '寄付金額 10000円', text: '山梨県の豊かな自然で育った、味わい深いシャインマスカットです。'}]},
  {title: 'おすすめお礼品' , items: [{name: '【先行受付】山梨県産シャインマスカ...', city: '山梨県山梨市', price: '寄付金額 10000円', text: '山梨県の豊かな自然で育った、味わい深いシャインマスカットです。'}]},
  {title: 'ふるさと納税 新着お礼品' , items: [{name: '【先行受付】山梨県産シャインマスカ...', city: '山梨県山梨市', price: '寄付金額 10000円', text: '山梨県の豊かな自然で育った、味わい深いシャインマスカットです。'}]}
];
const recommendTitles= [
  {title1: 'おすすめ特集', title2: 'おすすめコンテンツ'}
];

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
                {rankingsData.map((rankingData) => {
                  return (
                  <Ranking rankingData={rankingData}/>
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