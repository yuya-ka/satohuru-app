import styled from "styled-components";


const PurposeLiftBox = styled.div`
  width: 490px;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const PurposeTitle = styled.p`
  margin: 0 0 15px 0;
  padding: 0;
  font-size: 17px;
  font-weight: 700;
`;
const PurposeCategory = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0 0 0;
  padding: 0;
`;
const CategoryTitle = styled.div`
  margin: 0 0 3px 0;
  padding: 0;
`;
const CategoryList = styled.div`
  width: auto;
  height: auto;
  margin: 0 0 20px 0;
  padding: 0;
`;
const ListLi = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

//style={{display: 'flex'}}

const category = ['肉', '魚介・海産物', '米・パン', '果物・フルーツ', '野菜',
  '卵・乳製品', '酒・アルコール', '飲料・ドリンク', '菓子・スイーツ', '麺',
  '惣菜・加工品', '調味料', '家電製品', '旅行券・チケット', '雑貨・日常品',
  '美容', '装飾品・工芸品', '花・観葉植物', 'その他', 'スペシャル', '定期便'];
const newCategory = category.map(val => {
  return <p style={{ margin: '0 2px', padding: '0 10px' }} key={val.toString()}>{val}</p>;
});
const region = ['北海道地方', '東北地方', '関東地方', '中部地方', '近畿地方',
  '中国地方', '四国地方', '九州地方'];
const newRegion = region.map(val => {
  return <p style={{ margin: '0 2px', padding: '0 10px' }} key={val.toString()}>{val}</p>;
});


const PurposeLift = () => {
  return (
    <PurposeLiftBox>
      <PurposeTitle>目的別に探す</PurposeTitle>

      <PurposeCategory>
        <CategoryTitle>お礼品から探す</CategoryTitle>
        <CategoryList><ListLi>{newCategory}</ListLi></CategoryList>
      </PurposeCategory>

      <PurposeCategory>
        <CategoryTitle>ランキングから探す</CategoryTitle>
        <CategoryList><ListLi>{newCategory}</ListLi></CategoryList>
      </PurposeCategory>

      <PurposeCategory>
        <CategoryTitle>地域から探す</CategoryTitle>
        <CategoryList><ListLi>{newRegion}</ListLi></CategoryList>
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