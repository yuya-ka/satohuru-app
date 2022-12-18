import styled from "styled-components";
import img from "../../images/1221552_00_1670457676.webp"
import str from "../../images/pic_star45.png"

const ItemBox = styled.div`
  width: 144px;
  height: 100%;
  margin: 0 15px 0 0;
  padding: 0;
`;
const ItemSet = styled.div`
  width: 144px;
  margin: 10px 0 0 0;
  padding: 0;
`;
const SetName = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: 700;
`;
const SetCity = styled.p`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
  font-size: 10px;
`;
const SetShow = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;
const SetPrice = styled.p`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
  font-size: 13px;
`;
const SetText = styled.p`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
  font-size: 10px;
`;
const SetReview = styled.div`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
`;

const Item = ({item}) => {
  return (
    <ItemBox>
      <img src={img} alt='img' height='144px' width='144px' />
      <ItemSet>
        <SetName>{`${item.name}`}</SetName>
        <SetCity>{`${item.city}`}</SetCity>
        <SetShow>
          <SetPrice>{`${item.price}`}</SetPrice>
          <SetText>{`${item.text}`}</SetText>
          <SetReview><img src={str} alt='str' height='13px' width='82px' /></SetReview>
        </SetShow>
      </ItemSet>
    </ItemBox>
  );
};

export default Item;