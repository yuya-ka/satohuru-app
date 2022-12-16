import styled from "styled-components";
import body from "../images/bnr_special_osechi.webp"

const MainSection = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;
const MainSectionWord = styled.div`
  width: auto;
  min-height: 35px;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 14px;
`;
const MainSectionTitle = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const MainSectionUl = styled.div`
  margin: 0;
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
`;
const SectionLi = styled.div`
  margin: 0 0 0 10px;
  padding: 0;
`;
const SectionLink = styled.a`
  margin: 0;
  padding: 0;
`;
const MainVisual = styled.div`
  width: 100%;
  height: 310px;
  margin: 15px 0 0 0;
  padding: 0;
  display: block;
`;
const MainVisualIn = styled.div`
  width: 100%;
  height: 286px;
  margin: 0;
  padding: 0;
`;
const MainVisualBody = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const MainVisualPointer = styled.div`
  width: 100%;
  height: 24px;
  margin: 0;
  padding: 0;
`;

const HomeVisual = () => {
  return (
    <>
    <MainSection>
      <MainSectionWord>
        <MainSectionTitle>注目ワード</MainSectionTitle>
        <MainSectionUl>
          <SectionLi><SectionLink>
            PayPay商品券
          </SectionLink></SectionLi>
          <SectionLi><SectionLink>
            PayPayジャンボ
          </SectionLink></SectionLi>
          <SectionLi><SectionLink>
            年内に届く
          </SectionLink></SectionLi>
          <SectionLi><SectionLink>
            さとふる限定
          </SectionLink></SectionLi>
          <SectionLi><SectionLink>
            コロナ対策支援
          </SectionLink></SectionLi>
          <SectionLi><SectionLink>
            ハンバーグ
          </SectionLink></SectionLi>
        </MainSectionUl>
      </MainSectionWord>
    </MainSection>
    <MainVisual>
    <MainVisualIn>
      <MainVisualBody>
        <img src={body} alt='body' height='286px' width='980px' />
      </MainVisualBody>
    </MainVisualIn>
    <MainVisualPointer></MainVisualPointer>
    </MainVisual>
    </>
  );
};

export default HomeVisual;