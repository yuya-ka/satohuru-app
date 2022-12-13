import styled from "styled-components";

import body from "../images/bnr_special_osechi.webp"
import img1 from "../images/bnr_year-end_new-year.png"
import img2 from "../images/bnr_camp_202212_pcp_20pct.webp"
import img3 from "../images/bnr_research_no1_2022.webp"
import img4 from "../images/bnr_onestop_app.webp"
import img5 from "../images/bnr_satofull_app.webp"
import img6 from "../images/bnr_special_myhometown.webp"
import img7 from "../images/bnr_philosophy.webp"

import item1 from "../images/1221552_00_1670457676.webp"
import str from "../images/pic_star45.png"

import recommend1 from "../images/bnr_special_sweets_coffee.jpg"
import recommend2 from "../images/bnr_special_daily_necessities.webp"
import recommend3 from "../images/bnr_special_fruits.webp"
import recommend4 from "../images/bnr_special_milk-smile-project.webp"
import recommend5 from "../images/bnr_special_kaden.webp"
import recommend6 from "../images/bnr_special_wakeari_oen.webp"

import recommend7 from "../images/bnr_oenkifu_202209_typhoon-228_120.jpg"
import recommend8 from "../images/bnr_oenkifu_202207_typhoon-228_120.jpg"
import recommend9 from "../images/bnr_oenkifu_202203_fukushima-228_120.jpg"


/* -------------------- リスト -------------------- */
const category = ['肉', '魚介・海産物', '米・パン', '果物・フルーツ', '野菜',
  '卵・乳製品', '酒・アルコール', '飲料・ドリンク', '菓子・スイーツ', '麺',
  '惣菜・加工品', '調味料', '家電製品', '旅行券・チケット', '雑貨・日常品',
  '美容', '装飾品・工芸品', '花・観葉植物', 'その他', 'スペシャル', '定期便'];
const newCategory = category.map(val => {
  return <li style={{margin: '10px 0'}} key={val.toString()}>{val}</li>;
});
const region = ['北海道地方', '東北地方', '関東地方', '中部地方', '近畿地方',
  '中国地方', '四国地方', '九州地方'];
const newRegion = region.map(val => {
  return <li style={{margin: '10px 0'}} key={val.toString()}>{val}</li>;
});

/* ---------------- css ---------------- */
const StyledMain = styled.main`
  min-width: 1020px;
  height: auto;
  margin: 0;
  padding: 0;
  background-color: #fff;
`;
const MainContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
`;
const MainContentOuter = styled.div`
  width: 980px;
  height: 100%;
  margin: 0;
  padding: 0 20px;
`;
const MainContentInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
/* ---------------- Section ---------------- */
const MainSection = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;
const MainSectionWord = styled.div`
  width: auto;
  min-height: 35px;
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 14px;
`;
const MainSectionTitle = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const MainSectionUl = styled.div`
  margin: 0;
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
`;
const SectionLi = styled.div`
  margin: 0 0 0 10px;
  padding: 0;
`;
const SectionLink = styled.a`
  margin: 0;
  padding: 0;
`;
//---------------------------------
const MainVisual = styled.div`
  width: 100%;
  height: 310px;
  margin: 15px 0 0 0;
  padding: 0;
  display: block;
`;
const MainVisualIn = styled.div`
  width: 100%;
  height: 286px;
  margin: 0;
  padding: 0;
`;
const MainVisualBody = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const MainVisualPointer = styled.div`
  width: 100%;
  height: 24px;
  margin: 0;
  padding: 0;
`;
/* ---------------- center ---------------- */
const MainCenter = styled.div`
  width: 100%;
  height: 3000px;
  margin: 0;
  padding: 25px 0 0 0;
  display: block;
`;
//---------------------------------------
const MainSidebar = styled.div`
  width: 250px;
  height: 100%;
  margin: 0;
  padding: 0;
  float: left;
`;
const MainSidebarColumn = styled.div`
  width: 230px;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const SidebarSection1 = styled.div`
  width: auto;
  margin: 0 0 15px 0;
  padding: 0;
`;
const SidebarSection2 = styled.div`
  width: auto;
  margin: 0 0 15px 0;
  padding: 0;
`;
const Section2Title = styled.h2`
  width: auto;
  margin: 0;
  padding: 0 0 5px 0;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
const Section2Ul = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const Section2Li = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  border: solid 1px #995a29;
`;
const Section2Text = styled.p`
  width: auto;
  margin: 0;
  padding: 10px 20px 10px 40px;
  font-size: 14px;
  font-weight: bold;
`;

const SidebarSection3 = styled.div`
  width: auto;
  margin: 0 0 15px 0;
  padding: 0;
`;
const SideBox = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
`;
const Section3TitleBox = styled.div`
  width: auto;
  margin: 0;
  padding: 13px 17px 13px 9px;
  border-left: 5px solid #9a5a24;
  border-bottom: 1px solid #ccc;
`;
const Section3Title = styled.h2`
  width: auto;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
`;
const Section3ListBox = styled.div`
  width: auto;
  margin: 0;
  padding: 5px 0;
`;
const Section3Ul = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const Section3Li = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Section3Text = styled.p`
  width: auto;
  margin: 0;
  padding: 10px 20px;
  font-size: 14px;
`;


//お礼品から探す・地域から探す//--------------------
const Section4ListBox = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const Section4Ul = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const Section4Li = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Section4Text = styled.p`
  width: auto;
  margin: 0;
  padding: 0 20px;
  font-size: 14px;
`;




const MainCenterWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const MainCenterContainer = styled.div`
  width: 730px;
  height: 100%;
  margin: 0;
  padding: 0;
  float: left;
`;
const Group = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
`;

const GroupTitle = styled.div`
  width: auto;
  margin: 0 0 10px 0;
  padding: 0;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const TitleText = styled.h2`
  width: auto;
  margin: 0;
  padding: 0;
`;
const TitleLink = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;

const GroupContainer = styled.div`
  width: 730px;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const ContainerOuter = styled.div`
  width: auto;
  height: 316px;
  margin: 0;
  padding: 0;
`;
const ContainerInner = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
`;
const Item = styled.div`
  width: 144px;
  height: 100%;
  margin: 0 15px 0 0;
  padding: 0;
`;
const ItemSet = styled.div`
  width: 144px;
  margin: 10px 0 0 0;
  padding: 0;
`;
const SetName = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: 700;
`;
const SetCity = styled.p`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
  font-size: 10px;
`;
const SetShow = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;
const SetPrice = styled.p`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
  font-size: 13px;
`;
const SetText = styled.p`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
  font-size: 10px;
`;
const SetReview = styled.div`
  width: auto;
  margin: 3px 0 0 0;
  padding: 0;
`;

/* <-------------------------------おすすめ------------------------> */
const Recommendation = styled.div`
  width: auto;
  margin: 35px 0 0 0;
  padding: 35px 0 0 0;
  border-top: 1px solid #ccc;
`;
const RecommendationTitle = styled.div`
  width: auto;
  margin: 0 0 10px 0;
  padding: 0;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const RecommendationText = styled.h2`
  width: auto;
  margin: 0;
  padding: 0;
`;
const RecommendationLink = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;

const Recommend = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const RecommendUl = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

`;
const RecommendLi = styled.div`
  width: auto;
  margin: 0 15px 15px 0;
  padding: 0;
`;


/* ---------------- bottom ---------------- */
const MainBottom = styled.div`
  width: auto;
  margin: 45px 0 0 0;
  padding: 45px 0 0 0;
  border-top: 1px solid #ccc;
`;
const BottomContainer = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const ContainerLeft = styled.div`
  width: 460px;
  margin: 0;
  padding: 0;
  float: left;
`;
const ContainerTitle = styled.div`
  width: auto;
  margin: 0 0 10px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ContainerTitleText = styled.h2`
  width: auto;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 700;
`;
const ContainerTitleBtn = styled.button`
  width: auto;
  margin: 0;
  padding: 4px 10px;
  background-color: #995a29;
  color: #fff;
  border: none;
  font-weight: 700;
  border-radius: 4px;
`;
const ContainerNews = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const ContainerNewsUl = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
`;
const ContainerNewsLi = styled.div`
  width: auto;
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 13px;
  display: flex;
`;
const NewsDate = styled.p`
  width: 400px;
  margin: 0;
  padding: 0;
`;
const NewsText = styled.p`
  width: auto;
  margin: 0;
  padding: 0;
`;

const ContainerRight = styled.div`
  width: 460px;
  height: 200px;
  margin: 0;
  padding: 0;
  border: solid 1px black;
  float: right;
`;


/* ---------------- jsx ---------------- */
const Main = () => {
  return (
    <StyledMain>

      <MainContent>
        <MainContentOuter>
        <MainContentInner>
          <MainSection>
            <MainSectionWord>
              <MainSectionTitle>注目ワード</MainSectionTitle>
              <MainSectionUl>
                <SectionLi><SectionLink>
                  PayPay商品券
                </SectionLink></SectionLi>
                <SectionLi><SectionLink>
                  PayPayジャンボ
                </SectionLink></SectionLi>
                <SectionLi><SectionLink>
                  年内に届く
                </SectionLink></SectionLi>
                <SectionLi><SectionLink>
                  さとふる限定
                </SectionLink></SectionLi>
                <SectionLi><SectionLink>
                  コロナ対策支援
                </SectionLink></SectionLi>
                <SectionLi><SectionLink>
                  ハンバーグ
                </SectionLink></SectionLi>
              </MainSectionUl>
            </MainSectionWord>
          </MainSection>

          <MainVisual>
            <MainVisualIn>
              <MainVisualBody>
                <img src={body} alt='body' height='286px' width='980px' />
              </MainVisualBody>
            </MainVisualIn>
            <MainVisualPointer></MainVisualPointer>
          </MainVisual>

          <MainCenter>
            <MainSidebar>
              <MainSidebarColumn>
                <SidebarSection1>
                  <img src={img1} alt='section1' height='80px' width='230px' />
                </SidebarSection1>

                <SidebarSection2>
                  <Section2Title>よくあるご質問</Section2Title>
                  <Section2Ul>
                    <Section2Li><Section2Text>お礼品の到着について</Section2Text></Section2Li>
                    <Section2Li><Section2Text>さとふるマイステップ・<br />マイポイントについて</Section2Text></Section2Li>
                    <Section2Li><Section2Text>さとふるアプリdeワンストップ申請（オンライン申請）について</Section2Text></Section2Li>
                    <Section2Li><Section2Text>ワンストップ特例申請書の納付先</Section2Text></Section2Li>
                    <Section2Li><Section2Text>ワンストップ特例申請書が届かない</Section2Text></Section2Li>
                    <Section2Li><Section2Text>ワンストップ特例制度とは</Section2Text></Section2Li>
                  </Section2Ul>
                </SidebarSection2>

                <SidebarSection1>
                  <img src={img2} alt='section1' height='110px' width='230px' />
                </SidebarSection1>
                <SidebarSection1>
                  <img src={img3} alt='section1' height='110px' width='230px' />
                </SidebarSection1>

                <SidebarSection3>
                  <SideBox>
                    <Section3TitleBox><Section3Title>初めてのふるさと納税</Section3Title></Section3TitleBox>
                    <Section3ListBox>
                      <Section3Ul>
                      <Section3Li><Section3Text>ふるさと納税とは</Section3Text></Section3Li>
                      <Section3Li><Section3Text>控除額シミュレーション</Section3Text></Section3Li>
                      <Section3Li><Section3Text>初めての確定申告</Section3Text></Section3Li>
                      <Section3Li><Section3Text>ワンステップ特例制度とは</Section3Text></Section3Li>
                      </Section3Ul>
                    </Section3ListBox>
                  </SideBox>
                </SidebarSection3>

                <SidebarSection1>
                  <img src={img4} alt='section1' height='110px' width='230px' />
                </SidebarSection1>
                <SidebarSection1>
                  <img src={img5} alt='section1' height='110px' width='230px' />
                </SidebarSection1>

                <SidebarSection3>
                  <SideBox>
                    <Section3TitleBox><Section3Title>さとふるのサービス紹介</Section3Title></Section3TitleBox>
                    <Section3ListBox>
                      <Section3Ul>
                      <Section3Li><Section3Text>ふるさと納税とは</Section3Text></Section3Li>
                      <Section3Li><Section3Text>控除額シミュレーション</Section3Text></Section3Li>
                      <Section3Li><Section3Text>初めての確定申告</Section3Text></Section3Li>
                      <Section3Li><Section3Text>ワンステップ特例制度とは</Section3Text></Section3Li>
                      </Section3Ul>
                    </Section3ListBox>
                  </SideBox>
                </SidebarSection3>

                <SidebarSection1>
                  <img src={img6} alt='section1' height='110px' width='230px' />
                </SidebarSection1>
                <SidebarSection1>
                  <img src={img7} alt='section1' height='110px' width='230px' />
                </SidebarSection1>

                <SidebarSection3>
                  <SideBox>
                    <Section3TitleBox><Section3Title>お礼品から探す</Section3Title></Section3TitleBox>
                    <Section4ListBox>
                      <Section4Ul>
                      <Section4Li><Section4Text>{newCategory}</Section4Text></Section4Li>
                      </Section4Ul>
                    </Section4ListBox>
                  </SideBox>
                </SidebarSection3>

                <SidebarSection3>
                  <SideBox>
                    <Section3TitleBox><Section3Title>地域から探す</Section3Title></Section3TitleBox>
                    <Section4ListBox>
                      <Section4Ul>
                      <Section4Li><Section4Text>{newRegion}</Section4Text></Section4Li>
                      </Section4Ul>
                    </Section4ListBox>
                  </SideBox>
                </SidebarSection3>


              </MainSidebarColumn>
            </MainSidebar>

{/* --------------------- コンテント ---------------------- */}

            <MainCenterWrap>
              <MainCenterContainer>

                <Group>
                  <GroupTitle>
                    <TitleText>ふるさと納税 人気急上昇ランキング</TitleText>
                    <TitleLink>もっと見る</TitleLink>
                  </GroupTitle>
                  <GroupContainer>
                    <ContainerOuter>
                      <ContainerInner>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                      </ContainerInner>
                    </ContainerOuter>
                  </GroupContainer>
                </Group>

                <Group>
                  <GroupTitle>
                    <TitleText>ふるさと納税 総合人気ランキング</TitleText>
                    <TitleLink>もっと見る</TitleLink>
                  </GroupTitle>
                  <GroupContainer>
                    <ContainerOuter>
                      <ContainerInner>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                      </ContainerInner>
                    </ContainerOuter>
                  </GroupContainer>
                </Group>

                <Group>
                  <GroupTitle>
                    <TitleText>定期便の人気ランキング</TitleText>
                    <TitleLink>もっと見る</TitleLink>
                  </GroupTitle>
                  <GroupContainer>
                    <ContainerOuter>
                      <ContainerInner>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                        <Item>
                          <img src={item1} alt='item' height='144px' width='144px' />
                          <ItemSet>
                            <SetName>【先行受付】山梨県産シャインマスカ...</SetName>
                            <SetCity>山梨県山梨市</SetCity>
                            <SetShow>
                              <SetPrice>寄付金額</SetPrice>
                              <SetText>山梨県の豊かな自然で育った、味わい深いシャインマスカットです。</SetText>
                              <SetReview><img src={str} alt='item' height='13px' width='82px' /></SetReview>
                            </SetShow>
                          </ItemSet>
                        </Item>
                      </ContainerInner>
                    </ContainerOuter>
                  </GroupContainer>
                </Group>

{/* --------------------- おすすめ ---------------------- */}

                <Recommendation>
                  <RecommendationTitle>
                    <RecommendationText>おすすめ特集</RecommendationText>
                    <RecommendationLink>もっと見る</RecommendationLink>
                  </RecommendationTitle>

                  <Recommend>
                    <RecommendUl>
                      <RecommendLi><img src={recommend1} alt='recommend' height='120px' width='228px' /></RecommendLi>
                      <RecommendLi><img src={recommend2} alt='recommend' height='120px' width='228px' /></RecommendLi>
                      <RecommendLi><img src={recommend3} alt='recommend' height='120px' width='228px' /></RecommendLi>
                      <RecommendLi><img src={recommend4} alt='recommend' height='120px' width='228px' /></RecommendLi>
                      <RecommendLi><img src={recommend5} alt='recommend' height='120px' width='228px' /></RecommendLi>
                      <RecommendLi><img src={recommend6} alt='recommend' height='120px' width='228px' /></RecommendLi>
                    </RecommendUl>
                  </Recommend>

                </Recommendation>

                <Recommendation>
                  <RecommendationTitle>
                    <RecommendationText>おすすめコンテンツ</RecommendationText>
                    <RecommendationLink>もっと見る</RecommendationLink>
                  </RecommendationTitle>

                  <Recommend>
                    <RecommendUl>
                      <RecommendLi><img src={recommend1} alt='recommend' height='120px' width='228px' /></RecommendLi>
                      <RecommendLi><img src={recommend2} alt='recommend' height='120px' width='228px' /></RecommendLi>
                      <RecommendLi><img src={recommend3} alt='recommend' height='120px' width='228px' /></RecommendLi>
                    </RecommendUl>
                  </Recommend>

                </Recommendation>

                <Recommendation>
                  <RecommendationTitle>
                    <RecommendationText>災害支援寄付</RecommendationText>
                    <RecommendationLink>もっと見る</RecommendationLink>
                  </RecommendationTitle>

                  <Recommend>
                    <RecommendUl>
                      <RecommendLi><img src={recommend7} alt='recommend' height='120px' width='228px' /><p>令和4年9月台風・豪雨</p></RecommendLi>
                      <RecommendLi><img src={recommend8} alt='recommend' height='120px' width='228px' /><p>令和4年7・8月台風・豪雨</p></RecommendLi>
                      <RecommendLi><img src={recommend9} alt='recommend' height='120px' width='228px' /><p>令和4年3月福島県沖地震</p></RecommendLi>
                    </RecommendUl>
                  </Recommend>

                </Recommendation>

              </MainCenterContainer>
            </MainCenterWrap>

          </MainCenter>

          <MainBottom>
            <BottomContainer>
              <ContainerLeft>
                <ContainerTitle>
                  <ContainerTitleText>さとふるNEWS</ContainerTitleText>
                  <ContainerTitleBtn>一覧を見る</ContainerTitleBtn>
                </ContainerTitle>

                <ContainerNews>
                  <ContainerNewsUl>
                    <ContainerNewsLi>
                      <NewsDate>2022年12月12日</NewsDate>
                      <NewsText>
[プレスリリース] ワンストップ特例制度の申請がオンラインで完結する「さとふるアプリdeワンストップ申請」開始約2か月半で寄付控除申請数が63万件以上に ～サービス対象自治体は849自治体に～</NewsText>
                    </ContainerNewsLi>
                    <ContainerNewsLi>
                      <NewsDate>2022年12月12日</NewsDate>
                      <NewsText>
[プレスリリース] ワンストップ特例制度の申請がオンラインで完結する「さとふるアプリdeワンストップ申請」開始約2か月半で寄付控除申請数が63万件以上に ～サービス対象自治体は849自治体に～</NewsText>
                    </ContainerNewsLi>
                    <ContainerNewsLi>
                      <NewsDate>2022年12月12日</NewsDate>
                      <NewsText>
[プレスリリース] ワンストップ特例制度の申請がオンラインで完結する「さとふるアプリdeワンストップ申請」開始約2か月半で寄付控除申請数が63万件以上に ～サービス対象自治体は849自治体に～</NewsText>
                    </ContainerNewsLi>
                    <ContainerNewsLi>
                      <NewsDate>2022年12月12日</NewsDate>
                      <NewsText>
[プレスリリース] ワンストップ特例制度の申請がオンラインで完結する「さとふるアプリdeワンストップ申請」開始約2か月半で寄付控除申請数が63万件以上に ～サービス対象自治体は849自治体に～</NewsText>
                    </ContainerNewsLi>
                  </ContainerNewsUl>
                </ContainerNews>
              </ContainerLeft>
              <ContainerRight>

              </ContainerRight>
            </BottomContainer>
          </MainBottom>
        </MainContentInner>
        </MainContentOuter>
      </MainContent>
      
    </StyledMain>
  );
}

export default Main;