import styled from "styled-components";

import Item from "./Item";
import Title from "./Title";


const Group = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
`;
const GroupContainer = styled.div`
  width: 730px;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const ContainerOuter = styled.div`
  width: auto;
  height: 330px;
  margin: 0;
  padding: 0;
`;
const ContainerInner = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
`;


const Ranking = () => {
  return (
    <Group>
      
      <Title />

      <GroupContainer>
        <ContainerOuter>
          <ContainerInner>

            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            
          </ContainerInner>
        </ContainerOuter>
      </GroupContainer>
    </Group>
  );
};


export default Ranking;