import styled from "styled-components";
import str from "../../images/pic_star45.png"

const RevueLi = styled.div`
  width: auto;
  margin: 0 0 15px 0;
  padding: 0;
  font-size: 13px;
`;
const RevueLiHead = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
const RevueDate = styled.p`
  width: 150px;
  margin: 0;
  padding: 0;
`;
const RevueRate = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;
const RevueLiMain = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const RevueLiName = styled.p`
  width: auto;
  margin: 5px 0 0 0;
  padding: 0;
`;
const RevueLiText = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;

const RevueList = () => {
  return (
    <RevueLi>
      <RevueLiHead>
        <RevueDate>2022年12月10日</RevueDate>
        <RevueRate>評価：</RevueRate>
        <img src={str} alt='item' height='13px' width='82px' />
      </RevueLiHead>
      <RevueLiMain>
        <RevueLiName>オホーツク産ホタテ玉冷大(1kg)</RevueLiName>
        <RevueLiText>味もサイズも大満足でした！！</RevueLiText>
      </RevueLiMain>
    </RevueLi>
  );
};

export default RevueList;