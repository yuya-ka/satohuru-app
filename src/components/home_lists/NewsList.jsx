import styled from "styled-components";


const ContainerNewsLi = styled.div`
  width: auto;
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 13px;
  display: flex;
`;
const NewsDate = styled.p`
  width: 400px;
  margin: 0;
  padding: 0;
`;
const NewsText = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;


const NewsList = () => {
  return (
    <ContainerNewsLi>
      <NewsDate>2022年12月12日</NewsDate>
      <NewsText>
        [プレスリリース] ワンストップ特例制度の申請がオンラインで完結する「さとふるアプリdeワンストップ申請」開始約2か月半で寄付控除申請数が63万件以上に ～サービス対象自治体は849自治体に～
      </NewsText>
    </ContainerNewsLi>
  );
};


export default NewsList;