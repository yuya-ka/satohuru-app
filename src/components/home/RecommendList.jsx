import styled from "styled-components";
import img1 from "../../images/bnr_special_sweets_coffee.jpg"
import img2 from "../../images/bnr_special_daily_necessities.webp"
import img3 from "../../images/bnr_special_fruits.webp"
import img4 from "../../images/bnr_special_milk-smile-project.webp"
import img5 from "../../images/bnr_special_kaden.webp"
import img6 from "../../images/bnr_special_wakeari_oen.webp"

const RecommendLi = styled.div`
  width: auto;
  margin: 0 0 20px 0;
  padding: 0;
`;

const RecommendList = () => {
  return (
    <>
    <RecommendLi><img src={img1} alt='img' height='120px' width='228px' /></RecommendLi>
    <RecommendLi><img src={img2} alt='img' height='120px' width='228px' /></RecommendLi>
    <RecommendLi><img src={img3} alt='img' height='120px' width='228px' /></RecommendLi>
    <RecommendLi><img src={img4} alt='img' height='120px' width='228px' /></RecommendLi>
    <RecommendLi><img src={img5} alt='img' height='120px' width='228px' /></RecommendLi>
    <RecommendLi><img src={img6} alt='img' height='120px' width='228px' /></RecommendLi>
    </>
  );
};
const RecommendList2 = () => {
  return (
    <>
    <RecommendLi><img src={img1} alt='img' height='120px' width='228px' /></RecommendLi>
    <RecommendLi><img src={img2} alt='img' height='120px' width='228px' /></RecommendLi>
    <RecommendLi><img src={img3} alt='img' height='120px' width='228px' /></RecommendLi>
    </>
  );
};

export default RecommendList;
export {RecommendList2};