import styled from "styled-components";

import logo from "../images/logo_satofull01.webp"
import sns1 from "../images/bnr_sns01.webp"
import sns2 from "../images/bnr_sns02.webp"
import sns3 from "../images/bnr_sns03.webp"
import sns4 from "../images/bnr_sns04.webp"
import apple from "../images/apple_pc.webp"
import google from "../images/google_pc.webp"
import logo2 from "../images/logo_privacy.webp"

/* ---------------------- css ---------------------- */
/* ---------------- top ---------------- */
const StyledFooterTop = styled.footer`
  min-width: 1020px;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  font-size: 13px;
  background-color: #f7f3e7;
`;
const StyledFooterTopContent = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: block;
`;
const StyledFooterTopFirst = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
`;
const StyledFooterFirstPurpose1 = styled.div`
  height: 100%;
  width: 490px;
  margin: 0;
  padding: 0;
`;
const StyledFooterPurposeTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const StyledFooterCategory = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const StyledFooterCategoryTitle = styled.div`
  margin: 0;
  padding: 0;
`;
const StyledFooterCategoryList = styled.div`
  padding: 0 14px;
`;
const StyledFooterCategoryListA = styled.a`
  margin: 0;
  padding: 0;
  line-height: 2;
  white-space: wrap;
`;
/* -------------------- リスト -------------------- */
const arry = ['肉', '魚介・海産物', '米・パン', '果物・フルーツ', '野菜',
  '卵・乳製品', '酒・アルコール', '飲料・ドリンク', '菓子・スイーツ', '麺',
  '惣菜・加工品', '調味料', '家電製品', '旅行券・チケット', '雑貨・日常品',
  '美容', '装飾品・工芸品', '花・観葉植物', 'その他', 'スペシャル', '定期便'];
const newArry = arry.map(val => {
  return val;
});
const arry2 = ['北海道地方', '東北地方', '関東地方', '中部地方', '近畿地方',
  '中国地方', '四国地方', '九州地方'];
const newArry2 = arry2.map(val => {
  return val;
});
/* -------------------- /リスト -------------------- */
const StyledFooterFirstPurpose2 = styled.div`
  height: 100%;
  width: 470px;
  margin: 0;
  padding: 0;
  margin-left: 20px;
`;
const StyledFooterFirstGuidel = styled.ul`
  height: 250px;
  margin: 0;
  padding: 0;
  padding-top: 6px;
  list-style: none;
  display: block;
`;
const StyledFooterFirstGuidelLi = styled.li`
  width: 227px;
  min-height: 41px;
  height: 41px;
  margin: 0 7px 7px 0 ;
  padding: 0;
  font-size: 13px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const StyledFooterFirstGuidelLiiA = styled.a`
  margin: 0;
  padding: 0;
`;
const StyledFooterFirstGuidel2 = styled.div`
  height: 60px;
  margin: 0;
  padding: 0;
  margin-top: 25px;
  display: block;
`;
const StyledFooterFirstGuidel2App = styled.div`
  width: 110px;
  height: 60px;
  margin: 0;
  padding: 0;
  margin-right: 7px;
  display: inline-block;
  justify-content: space-between;
`;
const StyledFooterFirstGuidel2App2 = styled.div`
  margin: 0;
  padding: 0;
  margin-right: 10px;
  display: inline-block;
  justify-content: space-between;
`;
const StyledFooterFirstGuidel2App3 = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 75px;
  display: inline-block;
`;
/* ---------------- center ---------------- */
const StyledFooterCenter = styled.footer`
  min-width: 1020px;
  height: 60px;
  margin: 0;
  padding: 0;
  line-height: 1.7;
  background-color: #c79a74;
`;
const StyledFooterCenterContent = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  padding: 15px 0 0 0;
  display: flex;
  justify-content: center;
`;
const StyledFooterCenterContentNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StyledFooterCenterContentNavLi = styled.li`
  margin: 0;
  padding: 0;
  display: inline;
  margin: 0 15px;
  font-size: 12px;
  justify-content: center;
`;
/* ---------------- bottom ---------------- */
const StyledFooterBottom = styled.div`
  min-width: 1020px;
  width: 100%;
  height: 71px;
  background-color: #eeefea;
  margin: 0;
  padding: 0;
  line-height: 1.7;
`;
const StyledFooterBottomContent = styled.div`
  width: auto;
  height:100%;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledFooterBottomContentText = styled.p`
  font-size: 15px;
`;


/* ---------------------- jsx ---------------------- */
const Footer = () => {
  return (
    <>
    <StyledFooterTop>

      <StyledFooterTopContent>
        <StyledFooterTopFirst>
          <StyledFooterFirstPurpose1>
            <StyledFooterPurposeTitle>目的別に探す</StyledFooterPurposeTitle>

            <StyledFooterCategory>
              <StyledFooterCategoryTitle>お礼品から探す</StyledFooterCategoryTitle>
              <StyledFooterCategoryList>
                <StyledFooterCategoryListA>{newArry}</StyledFooterCategoryListA>
              </StyledFooterCategoryList>
            </StyledFooterCategory>

            <StyledFooterCategory>
              <StyledFooterCategoryTitle>ランキングから探す</StyledFooterCategoryTitle>
              <StyledFooterCategoryList>
                <StyledFooterCategoryListA>{newArry}</StyledFooterCategoryListA>
              </StyledFooterCategoryList>
            </StyledFooterCategory>

            <StyledFooterCategory>
              <StyledFooterCategoryTitle>地域から探す</StyledFooterCategoryTitle>
              <StyledFooterCategoryList>
                <StyledFooterCategoryListA>{newArry2}</StyledFooterCategoryListA>
              </StyledFooterCategoryList>
            </StyledFooterCategory>

            <StyledFooterCategory>
              <StyledFooterCategoryTitle>特集から探す</StyledFooterCategoryTitle>
            </StyledFooterCategory>

            <StyledFooterCategory>
              <StyledFooterCategoryTitle>ふるさと納税の使い道から探す</StyledFooterCategoryTitle>
            </StyledFooterCategory>

          </StyledFooterFirstPurpose1>
          <StyledFooterFirstPurpose2>
            <StyledFooterPurposeTitle>初めての方へ</StyledFooterPurposeTitle>
              <StyledFooterFirstGuidel>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>ふるさと納税とは</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>控除額シミュレーション</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>ワンストップ特例制度とは</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>初めての確定申告</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>ふるさと納税の用語集</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>会員登録</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>よくあるご質問</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>お問い合わせ</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>さとふる通信バックナンバー</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
                <StyledFooterFirstGuidelLi><StyledFooterFirstGuidelLiiA>さとふるの特徴</StyledFooterFirstGuidelLiiA></StyledFooterFirstGuidelLi>
              </StyledFooterFirstGuidel>

              <StyledFooterFirstGuidel2>
                <StyledFooterFirstGuidel2App>
                  <img src={sns1} alt='sna' height='60px' width='110px' />
                </StyledFooterFirstGuidel2App>
                <StyledFooterFirstGuidel2App>
                  <img src={sns2} alt='sns' height='60px' width='110px' />
                </StyledFooterFirstGuidel2App>
                <StyledFooterFirstGuidel2App>
                  <img src={sns3} alt='sns' height='60px' width='110px' />
                </StyledFooterFirstGuidel2App>
                <StyledFooterFirstGuidel2App>
                  <img src={sns4} alt='sns' height='60px' width='110px' />
                </StyledFooterFirstGuidel2App>
              </StyledFooterFirstGuidel2>

              <StyledFooterFirstGuidel2>
                <StyledFooterFirstGuidel2App2>
                  <img src={apple} alt='apple' height='50px' width='135px' />
                </StyledFooterFirstGuidel2App2>
                <StyledFooterFirstGuidel2App2>
                  <img src={google} alt='google' height='50px' width='169px' />
                </StyledFooterFirstGuidel2App2>
                <StyledFooterFirstGuidel2App3>
                  <img src={logo2} alt='logo' height='60px' width='60px' />
                </StyledFooterFirstGuidel2App3>
              </StyledFooterFirstGuidel2>
          </StyledFooterFirstPurpose2>
        </StyledFooterTopFirst>
      </StyledFooterTopContent>

    </StyledFooterTop>

    <StyledFooterCenter>

      <StyledFooterCenterContent>
        <StyledFooterCenterContentNav>
          <StyledFooterCenterContentNavLi>サイトマップ </StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>サイトポリシー</StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>規約</StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>個人情報保護方針</StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>情報セキュリティ方針</StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>免責事項</StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>会社概要</StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>自治体関係者の皆様へ</StyledFooterCenterContentNavLi>
          <StyledFooterCenterContentNavLi>採用情報</StyledFooterCenterContentNavLi>
        </StyledFooterCenterContentNav>
      </StyledFooterCenterContent>

    </StyledFooterCenter>

    <StyledFooterBottom>

      <StyledFooterBottomContent>
        <img src={logo} alt='logo' height='35px' width='auto' />
        <StyledFooterBottomContentText>© Satofull Co., Ltd. All rights reserved.</StyledFooterBottomContentText>
      </StyledFooterBottomContent>

    </StyledFooterBottom>
    </>
  );
}

export default Footer;