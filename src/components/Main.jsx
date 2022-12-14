import styled from "styled-components";

import Ranking from "./home_lists/Ranking";
import Sidebar from "./Sidebar"
import Topbar from "./Topbar";
import Title from "./home_lists/Title";
import Recommend from "./home_lists/Recommend";
import News from "./home_lists/News";
import Revue from "./home_lists/Revue";


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

const SimulationArea = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SimulationFrame = styled.div`
  width: auto;
  margin: 0;
  padding: 15px;
  background-color: #FFFFDF;
  display: flex;
`;
const SelectBox = styled.div`
  width: auto;
  margin: 0;
  padding: 0 5px;
`;
const Label = styled.p`
  width: auto;
  margin: 0 0 8px 0;
  padding: 0;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;
const Select = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;
const MoneySelectArea = styled.select`
  width: 120px;
  margin: 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  border: solid #aaa 1px;
`;

const ResultArea = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const ResultBox = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const Result = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;
const ResultInput = styled.input`
  width: 100%;
  margin: 0 auto;
  padding: 10px 2px;
  background-color: #fff;
  box-sizing: border-box;
  border: 3px solid #7aa82e;
  color: #7aa82e;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
const ResultRear = styled.p`
  width: auto;
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 14px;
  font-weight: bold;
  color: #7aa82e;
`;
/* -------------------- おすすめ -------------------- */
const Recommendation = styled.div`
width: auto;
margin: 35px 0 0 0;
padding: 35px 0 0 0;
border-top: 1px solid #ccc;
`;
/* -------------------- bottom -------------------- */
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


const Main = () => {
  return (
    <StyledMain>
      <MainContent>
        <MainContentOuter>
        <MainContentInner>

          <Topbar />
          <MainCenter>

            <Sidebar />
            <MainCenterWrap>
              <MainCenterContainer>

                <Ranking />
                <Ranking />
                <Ranking />

                <Recommendation>

                  <Title />
                  <SimulationArea>
                    <SimulationFrame>
                      <SelectBox>
                        <Label>あなたの給与収入</Label>
                        <Select>
                          <MoneySelectArea></MoneySelectArea>
                        </Select>
                      </SelectBox>
                      <SelectBox>
                        <Label>あなたの家族構成</Label>
                        <Select>
                          <MoneySelectArea></MoneySelectArea>
                        </Select>
                      </SelectBox>
                    </SimulationFrame>
                    <ResultArea>
                      <ResultBox>
                        <Result>
                          <ResultInput type='text' value='給与収入・家族構成を選択してください'></ResultInput>
                        </Result>
                        <ResultRear>までのふるさと納税が控除の目安となります。</ResultRear>
                      </ResultBox>
                    </ResultArea>
                  </SimulationArea>
                </Recommendation>

                <Recommend />

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