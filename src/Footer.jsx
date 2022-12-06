import styled from "styled-components";

/* ---------------- css ---------------- */
const StyledFooter = styled.footer`
  min-width: 1020px;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  position: relative;
  z-index: 400;
`;
/* ---------------- top ---------------- */
const StyledFooterTop = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f7f3e7;
  min-width: 1020px;
`;
const StyledFooterTopContent = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 40px 20px;
`;
const StyledFooterTopContentFirst = styled.div`
  height: 676.4px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: solid 2px black;
`;
const StyledFooterTopContentLast = styled.div`
  position: relative;
  margin-top: 40px;
  box-sizing: border-box;
  border: solid 2px black;
  height: 100px;
`;
/* ---------------- center ---------------- */
const StyledFooterCenter = styled.div`
  min-width: 1020px;
  margin: 0;
  padding: 0;
  line-height: 1.7;
  height: 60px;
  background-color: #c79a74;
`;
const StyledFooterCenterContent = styled.div`
  width: 980px;
  height: 37.8px;
  margin: 0 auto;
  padding: 21px 20px 0;
`;
/* ---------------- bottom ---------------- */
const StyledFooterBottom = styled.div`
  position: relative;
  width: 100%;
  height: 71px;
  background-color: #eeefea;
  min-width: 1020px;
  margin: 0;
  padding: 0;
  line-height: 1.7;
`;
const StyledFooterBottomContent = styled.div`
  width: 1020px;
  height: 71px;
  margin: 0 auto;
`;



/* ---------------- jsx ---------------- */
const Footer = () => {
  return (
    <StyledFooter>

      <StyledFooterTop>
        <StyledFooterTopContent>
          <StyledFooterTopContentFirst></StyledFooterTopContentFirst>
          <StyledFooterTopContentLast></StyledFooterTopContentLast>
        </StyledFooterTopContent>
      </StyledFooterTop>

      <StyledFooterCenter>
        <StyledFooterCenterContent>
        </StyledFooterCenterContent>
      </StyledFooterCenter>

      <StyledFooterBottom>
        <StyledFooterBottomContent>
        </StyledFooterBottomContent>
      </StyledFooterBottom>

    </StyledFooter>
  );
}

export default Footer;