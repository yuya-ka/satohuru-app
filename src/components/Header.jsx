import styled from "styled-components";

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
  font-size: 12px;
`;
const StyledHeaderTopNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StyledHeaderTopNavLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
  margin-left: 30px;
  font-size: 12px;
`;
/* ---------------- center ---------------- */
const StyledHeaderCenter = styled.div`
  margin: 0, auto;
  padding: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: block;
  position: relative;
`;
const StyledHeaderCenterLogo = styled.div`
  margin: 0;
  padding: 0;
  width: 158px;
  height: 42px;
  box-sizing: border-box;
  border: solid 2px black;
  position: absolute;
  top: 13px;
  left: 167px;
`;
const StyledHeaderCenterSearch = styled.div`
  margin: 0;
  padding: 0;
  width: 400px;
  height: 36px;
  box-sizing: border-box;
  border: solid 2px black;
  position: absolute;
  left: 400px; 
  top: 16px;
`;
const StyledHeaderCenterNav = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  border: solid 2px black;
  position: absolute;
  left: 844px;
  top: 13px;
`;
/* ---------------- bottom ---------------- */
const StyledHeaderBottom = styled.div`
  min-width: 1020px;
  color: #000;
  line-height: 1.7;
  display: block;
  position: relative;
  width: 1020px;
  height: 50px;
  margin: 0 auto;
  box-sizing: border-box;
  border: solid 2px black;
  padding: 0 20px 10px;
  background-color: #fff;
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
          
        </StyledHeaderCenterLogo>
        <StyledHeaderCenterSearch></StyledHeaderCenterSearch>
        <StyledHeaderCenterNav></StyledHeaderCenterNav>
      </StyledHeaderCenter>

      <StyledHeaderBottom>

      </StyledHeaderBottom>

    </StyledHeader>
  );
}

export default Header;