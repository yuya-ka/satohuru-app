import styled from "styled-components";
import FooterTop from "./footer/Summary";
import logo from "../images/logo_satofull01.webp"

const FooterCenter = styled.footer`
  min-width: 1020px;
  height: 60px;
  margin: 0;
  padding: 0;
  background-color: #c79a74;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterContent = styled.div`
  width: 980px;
  height: auto;
  margin: 0;
  padding: 0;
`;
const ContentNav = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;
const ContentNavLi = styled.div`
  margin: 0;
  padding: 0;
  display: inline;
  margin: 0;
  font-size: 12px;
  justify-content: center;
`;
const FooterBottom = styled.div`
  min-width: 1020px;
  height: 71px;
  margin: 0;
  padding: 0;
  background-color: #eeefea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomContent = styled.div`
  width: 980px;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContentText = styled.p`
  font-size: 15px;
`;

const Footer = () => {
  return (
    <>
    <FooterTop />
    <FooterCenter>
      <CenterContent>
        <ContentNav>
          <ContentNavLi>サイトマップ </ContentNavLi>
          <ContentNavLi>サイトポリシー</ContentNavLi>
          <ContentNavLi>規約</ContentNavLi>
          <ContentNavLi>個人情報保護方針</ContentNavLi>
          <ContentNavLi>情報セキュリティ方針</ContentNavLi>
          <ContentNavLi>免責事項</ContentNavLi>
          <ContentNavLi>会社概要</ContentNavLi>
          <ContentNavLi>自治体関係者の皆様へ</ContentNavLi>
          <ContentNavLi>採用情報</ContentNavLi>
        </ContentNav>
      </CenterContent>
    </FooterCenter>
    <FooterBottom>
      <BottomContent>
        <img src={logo} alt='logo' height='35px' width='auto' />
        <ContentText>© Satofull Co., Ltd. All rights reserved.</ContentText>
      </BottomContent>
    </FooterBottom>
    </>
  );
};

export default Footer;