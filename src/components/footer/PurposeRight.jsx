import styled from "styled-components";
import sns1 from "../../images/bnr_sns01.webp"
import sns2 from "../../images/bnr_sns02.webp"
import sns3 from "../../images/bnr_sns03.webp"
import sns4 from "../../images/bnr_sns04.webp"
import apple from "../../images/apple_pc.webp"
import google from "../../images/google_pc.webp"
import logo2 from "../../images/logo_privacy.webp"

const PurposeFirst = styled.div`
  width: 450px;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-left: 40px;
`;
const PurposeTitle = styled.p`
  margin: 0 0 15px 0;
  padding: 0;
  font-size: 17px;
  font-weight: 700;
`;
const FirstGuide = styled.div`
  width: 100%;
  height: 250px;
  margin: 0;
  padding: 0;
`;
const GuideUl = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const GuideLi = styled.div`
  width: 220px;
  height: 40px;
  margin: 0;
  padding: 0;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const AppBox = styled.div`
  height: 60px;
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
const BoxSet = styled.div`
  height: 60px;
  margin: 0;
  padding: 0;
  display: flex;
`;
const AppGuide = styled.div`
  height: 60px;
  margin: 0;
  padding: 0;
`;
const Guide = styled.div`
  height: 60px;
  margin: 0 10px 0 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
const App = styled.div`
  height: 60px;
  margin: 0;
  padding: 0;
`;

const PurposeRight = () => {
  return (
    <PurposeFirst>
      <PurposeTitle>初めての方へ</PurposeTitle>
      <FirstGuide>
        <GuideUl>
          <GuideLi><p>ふるさと納税とは</p></GuideLi>
          <GuideLi><p>控除額シミュレーション</p></GuideLi>
          <GuideLi><p>ワンストップ特例制度とは</p></GuideLi>
          <GuideLi><p>初めての確定申告</p></GuideLi>
          <GuideLi><p>ふるさと納税の用語集</p></GuideLi>
          <GuideLi><p>会員登録</p></GuideLi>
          <GuideLi><p>よくあるご質問</p></GuideLi>
          <GuideLi><p>お問い合わせ</p></GuideLi>
          <GuideLi><p>さとふる通信バックナンバー</p></GuideLi>
          <GuideLi><p>さとふるの特徴</p></GuideLi>
        </GuideUl>
      </FirstGuide>
      <AppBox>
        <AppGuide>
          <img src={sns1} alt='sna' height='60px' width='110px' />
        </AppGuide>
        <AppGuide>
          <img src={sns2} alt='sns' height='60px' width='110px' />
        </AppGuide>
        <AppGuide>
          <img src={sns3} alt='sns' height='60px' width='110px' />
        </AppGuide>
        <AppGuide>
          <img src={sns4} alt='sns' height='60px' width='110px' />
        </AppGuide>
      </AppBox>
      <AppBox>
        <BoxSet>
          <Guide>
            <img src={apple} alt='apple' height='50px' width='135px' />
          </Guide>
          <Guide>
            <img src={google} alt='google' height='50px' width='169px' />
          </Guide>
        </BoxSet>
        <App>
          <img src={logo2} alt='logo' height='60px' width='60px' />
        </App>
      </AppBox>
    </PurposeFirst>
  );
};

export default PurposeRight;