import styled from "styled-components";

import logo from "../images/logo_satofull01.webp"

/* ---------------------- css ---------------------- */
/* ---------------- top ---------------- */
const StyledFooterTop = styled.footer`
  min-width: 1020px;
  width: 100%;
  height: 670px;
  margin: 0;
  padding: 0;
  font-size: 12px;
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
  height: 80%;
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
  box-sizing: border-box;
  border: solid 2px black;
`;
const StyledFooterPurposeTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const StyledFooterCategory = styled.div`
  margin-top: 10px;
`;
const StyledFooterCategoryList = styled.div`
  line-height: 1.8;
`;
const StyledFooterCategoryListMe = styled.div`
  padding-left: 14px;
`;

const StyledFooterFirstPurpose2 = styled.div`
  height: 100%;
  width: 470px;
  margin: 0;
  margin-left: 20px;
  padding: 0;
  box-sizing: border-box;
  border: solid 2px black;
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
              <StyledFooterCategoryList>
                <p>お礼品から探す</p>
                <StyledFooterCategoryListMe>
                  <a>肉</a><a>肉</a><a>肉</a><a>肉</a><a>肉</a><a>肉</a><a>肉</a><a>肉</a><a>肉</a><a>肉</a>
                </StyledFooterCategoryListMe>
              </StyledFooterCategoryList>
            </StyledFooterCategory>
          </StyledFooterFirstPurpose1>
          <StyledFooterFirstPurpose2>

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