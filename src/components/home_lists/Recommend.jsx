import styled from "styled-components";

import Title from "./Title";
import RecommendList from "./RecommendList";


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


const Recommend = () => {
  return (
    <Recommendation>
      <Title />

      <RecommendBox>
        <RecommendUl>
          <RecommendList />
        </RecommendUl>
      </RecommendBox>

    </Recommendation>
  );
};


export default Recommend;