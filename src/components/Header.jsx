import styled from "styled-components";

import logo from "../images/logo_satofull01.webp"
import icon1 from "../images/icon_header01.webp"
import icon2 from "../images/icon_header02.webp"
import icon3 from "../images/icon_header03.webp"
import icon4 from "../images/icon_header04.webp"
import { FaCrown } from "react-icons/fa"
import { GiPresent } from "react-icons/gi"
import { BiMap } from "react-icons/bi"
import { BsFillArchiveFill } from "react-icons/bs"


/* ---------------- css ---------------- */
const StyledHeader = styled.header`
  min-width: 1020px;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
`;
/* ---------------- top ---------------- */
const StyledHeaderTop = styled.div`
  min-width: 1020px;
  margin: 0;
  padding: 0;
  height: 40px;
  background-color: #f7f3e7;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledHeaderTopTag = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 70px;
  font-size: 12px;
`;
const StyledHeaderTopNav = styled.ul`
  margin: 0;
  margin-right: 60px;
  padding: 0;
  list-style: none;
`;
const StyledHeaderTopNavLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
  margin: 0 15px;
  font-size: 12px;
`;
/* ---------------- center ---------------- */
const StyledHeaderCenter = styled.div`
  margin: 0 140px;
  padding: 0;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledHeaderCenterLogo = styled.div`
  margin: 0;
  padding: 0;
  width: 158px;
`;
const StyledHeaderCenterSearch = styled.div`
  margin: 0;
  padding: 0;
  width: 400px;
  height: 36px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledHeaderCenterSearchField = styled.input`
  margin: 0;
  padding-left: 10px;
  height: 100%;
  width: 290px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: inset 0 4px 4px rgb(0 0 0 / 10%);
  border: none;
  background-color: #ebebeb;
  color: #999;
  font-size: 12px;
`;
const StyledHeaderCenterSearchBtn = styled.button`
  margin: 0;
  padding: 0;
  width: 100px;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  background-color: #995a29;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: #fff;
`;
const StyledHeaderCenterNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StyledHeaderCenterNavLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
`;
/* ---------------- bottom ---------------- */
const StyledHeaderBottom = styled.div`
  min-width: 1020px;
  height: 50px;
  margin: 0;
  padding: 0 20px 10px 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledHeaderBottomNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StyledHeaderBottomNavLi = styled.li`
  margin: 0 100px;
  padding: 0;
  list-style: none;
  display: inline;
  margin: 0 70px;
`;


/* ---------------- jsx ---------------- */
const Header = () => {
  return (
    <StyledHeader>
      
      <StyledHeaderTop>
        <StyledHeaderTopTag>ランニングとレビューで探せる利用率No.1ふるさと納税サイト</StyledHeaderTopTag>
        <StyledHeaderTopNav>
          <StyledHeaderTopNavLi>ログイン</StyledHeaderTopNavLi>
          <StyledHeaderTopNavLi>新規会員登録</StyledHeaderTopNavLi>
          <StyledHeaderTopNavLi>よくあるご質問</StyledHeaderTopNavLi>
          <StyledHeaderTopNavLi>クラウドファンディング</StyledHeaderTopNavLi>
        </StyledHeaderTopNav>
      </StyledHeaderTop>

      <StyledHeaderCenter>
        <StyledHeaderCenterLogo>
          <img src={logo} alt='logo' height='42px' width='158px'/>
        </StyledHeaderCenterLogo>
        <StyledHeaderCenterSearch>
          <StyledHeaderCenterSearchField placeholder='お礼の品のキーワードから探す'></StyledHeaderCenterSearchField>
          <StyledHeaderCenterSearchBtn>検索</StyledHeaderCenterSearchBtn>
        </StyledHeaderCenterSearch>
        <StyledHeaderCenterNav>
          <StyledHeaderCenterNavLi><img src={icon1} alt='icon1' height='40px' width='75px'/></StyledHeaderCenterNavLi>
          <StyledHeaderCenterNavLi><img src={icon2} alt='icon2' height='40px' width='75px'/></StyledHeaderCenterNavLi>
          <StyledHeaderCenterNavLi><img src={icon3} alt='icon3' height='40px' width='75px'/></StyledHeaderCenterNavLi>
          <StyledHeaderCenterNavLi><img src={icon4} alt='icon4' height='40px' width='75px'/></StyledHeaderCenterNavLi>
        </StyledHeaderCenterNav>
      </StyledHeaderCenter>

      <StyledHeaderBottom>
        <StyledHeaderBottomNav> 
          <StyledHeaderBottomNavLi>< FaCrown/> 人気ランキング</StyledHeaderBottomNavLi>
          <StyledHeaderBottomNavLi>< GiPresent /> お礼品から探す</StyledHeaderBottomNavLi>
          <StyledHeaderBottomNavLi>< BiMap /> 地域から探す</StyledHeaderBottomNavLi>
          <StyledHeaderBottomNavLi>< BsFillArchiveFill /> 特集・キャンペーン</StyledHeaderBottomNavLi>
        </StyledHeaderBottomNav>
      </StyledHeaderBottom>

    </StyledHeader>
  );
}

export default Header;