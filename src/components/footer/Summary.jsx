import styled from "styled-components";
import PurposeLift from "./PurposeLeft";
import PurposeRight from "./PurposeRight";

const FooterTopBox = styled.footer`
  min-width: 1020px;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  font-size: 13px;
  background-color: #f7f3e7;
`;
const TopContent = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: block;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
`;

const FooterTop = () => {
  return (
    <FooterTopBox>
      <TopContent>
        <Container>
          <PurposeLift />
          <PurposeRight />
        </Container>
      </TopContent>
    </FooterTopBox>
  );
};

export default FooterTop;