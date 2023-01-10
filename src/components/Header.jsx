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

const StyledHeader = styled.header`
  min-width: 980px;
  height: auto;
  margin: 0;
  padding: 0;
`;
const HeaderTop = styled.div`
  min-width: 1020px;
  height: 40px;
  margin: 0;
  padding: 0;
  background-color: #f7f3e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;
const TopTag = styled.p`
  margin: 0;
  padding: 0;
`;
const TopNav = styled.div`
  margin: 0;
  padding: 0;
`;
const TopNavLi = styled.div`
  margin: 0;
  padding: 0;
  display: inline;
  margin: 0 0 0 20px;
`;
const HeaderCenter = styled.div`
  min-width: 1020px;
  height: 60px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CenterLogo = styled.div`
  width: 158px;
  margin: 0;
  padding: 0;
`;
const CenterSearch = styled.div`
  width: 400px;
  height: 36px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SearchField = styled.input`
  width: 290px;
  height: 100%;
  margin: 0;
  padding-left: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: inset 0 4px 4px rgb(0 0 0 / 10%);
  border: none;
  background-color: #ebebeb;
  color: #999;
  font-size: 12px;
`;
const SearchBtn = styled.button`
  width: 100px;
  height: 100%;
  margin: 0;
  padding: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  background-color: #995a29;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: #fff;
`;
const CenterNav = styled.div`
  margin: 0;
  padding: 0;
`;
const CenterNavLi = styled.div`
  margin: 0;
  padding: 0;
  display: inline;
`;
const HeaderBottom = styled.div`
  min-width: 1020px;
  height: 50px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomNav = styled.div`
  width: 980px;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BottomNavLi = styled.div`
  margin: 0;
  padding: 0;
  display: inline-block;
`;
const BottomIcon = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
const BottomList = styled.div`
  height: 100%;
  margin: 0;
  padding-left: 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderTop>
        <TopContainer>
          <TopTag>ランニングとレビューで探せる利用率No.1ふるさと納税サイト</TopTag>
          <TopNav>
            <TopNavLi>ログイン</TopNavLi>
            <TopNavLi>新規会員登録</TopNavLi>
            <TopNavLi>よくあるご質問</TopNavLi>
            <TopNavLi>クラウドファンディング</TopNavLi>
          </TopNav>
        </TopContainer>
      </HeaderTop>
      <HeaderCenter>
        <CenterContainer>
          <CenterLogo>
            <img src={logo} alt='logo' height='42px' width='158px'/>
          </CenterLogo>
          <CenterSearch>
            <SearchField placeholder='お礼の品のキーワードから探す'></SearchField>
            <SearchBtn>検索</SearchBtn>
          </CenterSearch>
          <CenterNav>
            <CenterNavLi><img src={icon1} alt='icon1' height='40px' width='75px'/></CenterNavLi>
            <CenterNavLi><img src={icon2} alt='icon2' height='40px' width='75px'/></CenterNavLi>
            <CenterNavLi><img src={icon3} alt='icon3' height='40px' width='75px'/></CenterNavLi>
            <CenterNavLi><img src={icon4} alt='icon4' height='40px' width='75px'/></CenterNavLi>
          </CenterNav>
        </CenterContainer>
      </HeaderCenter>
      <HeaderBottom>
        <BottomNav> 
          <BottomNavLi>
            <BottomIcon>
              <FaCrown /><BottomList>人気ランキング</BottomList>
            </BottomIcon>
          </BottomNavLi>
          <BottomNavLi>
            <BottomIcon>
              < GiPresent /><BottomList>お礼品から探す</BottomList>
            </BottomIcon>
          </BottomNavLi>
          <BottomNavLi>
            <BottomIcon>
              < BiMap /><BottomList>地域から探す</BottomList>
            </BottomIcon>
          </BottomNavLi>
          <BottomNavLi>
            <BottomIcon>
              < BsFillArchiveFill /><BottomList>特集・キャンペーン</BottomList>
            </BottomIcon>
          </BottomNavLi>
        </BottomNav>
      </HeaderBottom>
    </StyledHeader>
  );
};

export default Header;