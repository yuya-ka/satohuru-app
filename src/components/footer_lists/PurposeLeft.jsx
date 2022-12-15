import styled from "styled-components";


const PurposeLiftBox = styled.div`
  height: 100%;
  width: 490px;
  margin: 0;
  padding: 0;
`;
const PurposeTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 15px;
`;
const PurposeCategory = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const CategoryTitle = styled.div`
  margin: 0;
  padding: 0;
`;
const CategoryList = styled.div`
  margin: 0;
  padding: 0 14px;
  list-style: none;
`;
const ListLink = styled.a`
  margin: 0;
  padding: 0;
`;

const category = ['肉', '魚介・海産物', '米・パン', '果物・フルーツ', '野菜',
  '卵・乳製品', '酒・アルコール', '飲料・ドリンク', '菓子・スイーツ', '麺',
  '惣菜・加工品', '調味料', '家電製品', '旅行券・チケット', '雑貨・日常品',
  '美容', '装飾品・工芸品', '花・観葉植物', 'その他', 'スペシャル', '定期便'];
const newCategory = category.map(val => {
  return <li style={{display: 'flex'}} key={val.toString()}>{val}</li>;
});
const region = ['北海道地方', '東北地方', '関東地方', '中部地方', '近畿地方',
  '中国地方', '四国地方', '九州地方'];
const newRegion = region.map(val => {
  return <li style={{margin: '0'}} key={val.toString()}>{val}</li>;
});


const PurposeLift = () => {
  return (
    <PurposeLiftBox>
      <PurposeTitle>目的別に探す</PurposeTitle>

      <PurposeCategory>
        <CategoryTitle>お礼品から探す</CategoryTitle>
        <CategoryList>
          <ListLink>{newCategory}</ListLink>
        </CategoryList>
      </PurposeCategory>
      <PurposeCategory>
        <CategoryTitle>ランキングから探す</CategoryTitle>
        <CategoryList>
          <ListLink>{newCategory}</ListLink>
        </CategoryList>
      </PurposeCategory>
      <PurposeCategory>
        <CategoryTitle>地域から探す</CategoryTitle>
        <CategoryList>
          <ListLink>{newRegion}</ListLink>
        </CategoryList>
      </PurposeCategory>
      <PurposeCategory>
        <CategoryTitle>特集から探す</CategoryTitle>
      </PurposeCategory>
      <PurposeCategory>
        <CategoryTitle>ふるさと納税の使い道から探す</CategoryTitle>
      </PurposeCategory>
    </PurposeLiftBox>
  );
};


export default PurposeLift;