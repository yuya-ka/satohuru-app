import './App.css';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

import styled from "styled-components";


/* ---------------- css ---------------- */
const StyledHeader = styled.header`
  height: 200px;
  width: auto;
  background-color: aqua;
  margin: 0;
  .header-top {
    height: 100%;
    width: 50%;
    background-color: black;
  }
`;
console.log(StyledHeader);
const StyledMain = styled.main`
  height: 400px;
  width: auto;
  background-color: red;
  margin: 0;
`;
const StyledFooter = styled.footer`
  height: 200px;
  width: auto;
  background-color: green;
`;

/* ---------------- jsx ---------------- */
const App = () => {
  return (
    <>
    <div className="app">

      {/* <div className='header'> */}
        <StyledHeader>
        <Header />
        </StyledHeader>
      {/* </div> */}
      
      {/* <div className='main'> */}
        <StyledMain>
        <Main />
        </StyledMain>
      {/* </div> */}
      {/* <div className='footer'> */}
        <StyledFooter>
        <Footer />
        </StyledFooter>
      {/* </div> */}

    </div>
    </>
  );
}


//別のファイルでインポート(読み込み)出来るようにする
export default App;
