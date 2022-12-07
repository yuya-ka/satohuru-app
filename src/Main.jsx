import styled from "styled-components";

/* ---------------- css ---------------- */
const StyledMain = styled.main`
  min-width: 1020px;
  margin: 0;
  padding-bottom: 50px;
  height: 1500px;
  background-color: rgb(121, 179, 141);
  position: relative;
  z-index: 200;
`;
const StyledMainContent = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
  padding-bottom:50px;
`;
const StyledMainContentOuter = styled.div`
  width: 980px;
  height: 100%;
  margin: 0;
  padding: 0 20px;
`;
const StyledMainContentInner = styled.div`
  width: 980px;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: solid 2px black;
`;
/* ---------------- top ---------------- */
const StyledMainTop = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  border: solid 1px black;
  padding-top: 25px;
`;
/* ---------------- center ---------------- */
const StyledMainCenter = styled.div`
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  border: solid 1px black;
  display:flex;
`;
const StyledMainCenterSidebar = styled.div`
  width: 20%;
  height: 500px;
  box-sizing: border-box;
  border: solid 1px black;
`;
const StyledMainCenterItem = styled.div`
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  border: solid 2px black;
`;
/* ---------------- bottom ---------------- */
const StyledMainBottom = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  border: solid 2px black;
  padding: 2px;

`;


/* ---------------- jsx ---------------- */
const Main = () => {
  return (
    <StyledMain>

      <StyledMainContent>
        <StyledMainContentOuter>
        <StyledMainContentInner>
          <StyledMainTop>

          </StyledMainTop>
          <StyledMainCenter>
            <StyledMainCenterSidebar></StyledMainCenterSidebar>
            <StyledMainCenterItem></StyledMainCenterItem>

          </StyledMainCenter>
          <StyledMainBottom>

          </StyledMainBottom>
        </StyledMainContentInner>
        </StyledMainContentOuter>
      </StyledMainContent>
      
    </StyledMain>
  );
}

export default Main;