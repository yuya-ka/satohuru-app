import styled from "styled-components";

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

/* ---------------- css ---------------- */
const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
`;



/* ---------------- jsx ---------------- */
const Home = () => {
  return (
    <StyledHome>

      <Header />
      
      <Main />

      <Footer />

    </StyledHome>
  );
}


//別のファイルでインポート(読み込み)出来るようにする
export default Home;
