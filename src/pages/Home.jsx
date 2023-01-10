import styled from "styled-components";
import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
`;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Main />
      <Footer />
    </StyledHome>
  );
};

//別のファイルでインポート(読み込み)出来るようにする
export default Home;