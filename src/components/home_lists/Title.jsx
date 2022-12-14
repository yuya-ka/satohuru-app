import styled from "styled-components";


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
`;


const Title = () => {
  return (
    <GroupTitle>
      <TitleText>ふるさと納税 人気急上昇ランキング</TitleText>
      <TitleLink>もっと見る</TitleLink>
    </GroupTitle>
  );
};


export default Title;