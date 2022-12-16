import styled from "styled-components";
import RecommendList from "./RecommendList";
import {RecommendList2} from "./RecommendList";

const Recommendation = styled.div`
  width: auto;
  margin: 35px 0 0 0;
  padding: 35px 0 0 0;
  border-top: 1px solid #ccc;
`;
const RecommendBox = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const RecommendUl = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

const Recommend = ({title}) => {
  return (
    <Recommendation>
      <GroupTitle>
        <TitleText>{`${title.title1}`}</TitleText>
        <TitleLink>もっと見る</TitleLink>
      </GroupTitle>
      <RecommendBox>
        <RecommendUl>
          <RecommendList />
        </RecommendUl>
      </RecommendBox>
    </Recommendation>
  );
};
const Recommend2 = ({title}) => {
  return (
    <Recommendation>
      <GroupTitle>
        <TitleText>{`${title.title2}`}</TitleText>
        <TitleLink>もっと見る</TitleLink>
      </GroupTitle>
      <RecommendBox>
        <RecommendUl>
          <RecommendList2 />
        </RecommendUl>
      </RecommendBox>
    </Recommendation>
  );
};

export default Recommend;
export {Recommend2};