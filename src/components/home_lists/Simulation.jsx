import styled from "styled-components";

const Recommendation = styled.div`
  width: auto;
  margin: 35px 0 0 0;
  padding: 35px 0 0 0;
  border-top: 1px solid #ccc;
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
  width: 170px;
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

const GroupTitle = styled.div`
  width: auto;
  margin: 0 0 10px 0;
  padding: 0;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleText = styled.h2`
  width: auto;
  margin: 0;
  padding: 0;
`;
const TitleLink = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
  font-size: 14px;
`;


const Simulation = () => {
  return (
    <Recommendation>

      <GroupTitle>
        <TitleText>控除上限額シミュレーション</TitleText>
        <TitleLink>詳細はこちら</TitleLink>
      </GroupTitle>
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
  );
};


export default Simulation;