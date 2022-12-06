import './App.css';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';




/* ---------------- css ---------------- */
// const StyledHeader = styled.header`

// `;

// const StyledMain = styled.main`
//   height: 400px;
//   width: auto;
//   background-color: red;
//   margin: 0;
// `;
// const StyledFooter = styled.footer`
//   height: 200px;
//   width: auto;
//   background-color: green;
// `;

/* ---------------- jsx ---------------- */
const App = () => {
  return (
    <>
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      
      <div className='main'>
        <Main />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    </>
  );
}


//別のファイルでインポート(読み込み)出来るようにする
export default App;
