import styled from "styled-components";


const ContainerTitle = styled.div`
  width: auto;
  margin: 0 0 10px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ContainerTitleText = styled.h2`
  width: auto;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 700;
`;
const ContainerTitleBtn = styled.button`
  width: auto;
  margin: 0;
  padding: 4px 10px;
  background-color: #995a29;
  color: #fff;
  border: none;
  font-weight: 700;
  border-radius: 4px;
`;


const BottomTitle = () => {
  return (
    <ContainerTitle>
      <ContainerTitleText>さとふるNEWS</ContainerTitleText>
      <ContainerTitleBtn>一覧を見る</ContainerTitleBtn>
    </ContainerTitle>
  );
};


export default BottomTitle;