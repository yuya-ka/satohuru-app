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

const Ranking = (props) => {
  return (
    <Group>
      <Title title={props.rankingData.title}/>
      <GroupContainer>
        <ContainerOuter>
          <ContainerInner>
            {props.rankingData.items.map((item) => {
              return (
/* -------------------- 後でItemをmapで使いまわせるように修正する（現在は1つしかない。最低5つ必要） -------------------- */
                <Item item={item}/>
              );
            })}
          </ContainerInner>
        </ContainerOuter>
      </GroupContainer>
    </Group>
  );
};

export default Ranking;