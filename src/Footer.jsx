import styled from "styled-components";

/* ---------------- css ---------------- */
const StyledFooter = styled.footer`
  min-width: 1020px;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  position: relative;
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
  height: 676.4px;
  margin: 0 auto;
  padding: 40px 20px;
`;
const StyledFooterTopContentFirst = styled.div`
  height: 80%;
  width: 980px;
  margin: 0;
  padding: 4px;
  box-sizing: border-box;
  border: solid 2px black;
  display:flex;
`;
const StyledFooterTopContent1 = styled.div`
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: solid 2px black;
`;
const StyledFooterTopContent2 = styled.div`
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: solid 2px black;
`;
const StyledFooterTopContentLast = styled.div`
  margin-top: 40px;
  width: 980px;
  box-sizing: border-box;
  border: solid 2px black;
  height: 20%;
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
  box-sizing: border-box;
  border: solid 2px black;
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
  box-sizing: border-box;
  border: solid 2px black;
`;



/* ---------------- jsx ---------------- */
const Footer = () => {
  return (
    <StyledFooter>

      <StyledFooterTop>
        <StyledFooterTopContent>
          <StyledFooterTopContentFirst>
            <StyledFooterTopContent1></StyledFooterTopContent1>
            <StyledFooterTopContent2></StyledFooterTopContent2>
          </StyledFooterTopContentFirst>
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