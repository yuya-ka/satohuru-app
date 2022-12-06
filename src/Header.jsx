import styled from "styled-components";

/* ---------------- css ---------------- */
const StyledHeader = styled.header`
  min-width: 1020px;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  position: relative;
`;
/* ---------------- top ---------------- */
const StyledHeaderTop = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px;
  background-color: #f7f3e7;
  display: block;
`;
const StyledHeaderTopTag = styled.p`
  margin: 0;
  padding: 0;
  width: 200px;
  height: 20px;
  position: absolute;
  box-sizing: border-box;
  border: solid 2px black;
  left: 20px;
  top: 11px;
  line-height: 1.4;
`;
const StyledHeaderTopNav = styled.ul`
  margin: 0;
  padding: 0;
  width: 50%;
  height: 20px;
  list-style: none;
  position: absolute;
  box-sizing: border-box;
  border: solid 2px black;
  right: 20px;
  top: 11px;
  line-height: 1.4;
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
  z-index: 500;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: solid 2px black;
  padding: 0 20px 10px;
  background-color: #fff!important;
`;



/* ---------------- jsx ---------------- */
const Header = () => {
  return (
    <StyledHeader>
      
      <StyledHeaderTop>
        <StyledHeaderTopTag></StyledHeaderTopTag>
        <StyledHeaderTopNav></StyledHeaderTopNav>
      </StyledHeaderTop>

      <StyledHeaderCenter>
        <StyledHeaderCenterLogo></StyledHeaderCenterLogo>
        <StyledHeaderCenterSearch></StyledHeaderCenterSearch>
        <StyledHeaderCenterNav></StyledHeaderCenterNav>
      </StyledHeaderCenter>

      <StyledHeaderBottom>

      </StyledHeaderBottom>

    </StyledHeader>
  );
}

export default Header;