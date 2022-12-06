import styled from "styled-components";

/* ---------------- css ---------------- */
const StyledMain = styled.main`
  min-width: 1020px;
  margin: 0;
  padding: 0;
  height: 1000px;
  background-color: rgb(121, 179, 141);
  position: relative;
  z-index: 200;
`;
const StyledMainContent = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px 50px 20px;
  box-sizing: border-box;
  border: solid 2px black;
`;
/* ---------------- top ---------------- */
const StyledMainTop = styled.div`
  width: 100%;
  height: 0;
`;
/* ---------------- center ---------------- */
const StyledMainCenter = styled.div`
  width: 100%;
  height: 0;
`;
/* ---------------- bottom ---------------- */
const StyledMainBottom = styled.div`
  width: 100%;
  height: 0;
`;


/* ---------------- jsx ---------------- */
const Main = () => {
  return (
    <StyledMain>

      <StyledMainContent>
        <StyledMainTop>
        </StyledMainTop>
        <StyledMainCenter>
        </StyledMainCenter>
        <StyledMainBottom>
        </StyledMainBottom>
      </StyledMainContent>
      
    </StyledMain>
  );
}

export default Main;