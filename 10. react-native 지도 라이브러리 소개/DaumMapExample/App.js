import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DaumMap from './pages/DaumMapExample';
import GoogleMap from './pages/GoogleMapExample';

export default class App extends Component {
  state = {
    mapType: 'google',
  };
  render() {
    const { mapType } = this.state;
    return (
      <View style={styles.container}>
        <Button title='react-native-maps' onPress={() => this.setState({ mapType: 'google' })} />
        <Button title='react-native-daummap' onPress={() => this.setState({ mapType: 'daum' })} />
        {mapType === 'google' ? <GoogleMap data={data}/> : <DaumMap />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const data = [
  {
    "name": "둘리뮤지엄",
    "lat": 37.65243153,
    "lon": 127.0276397
  },
  {
    "name": "서대문자연사박물관",
    "lat": 37.57675252,
    "lon": 126.9378582
  },
  {
    "name": "서대문형무소역사관",
    "lat": 37.57244171,
    "lon": 126.9595412
  },
  {
    "name": "서울교육박물관",
    "lat": 37.58103147,
    "lon": 126.983694
  },
  {
    "name": "서울상상나라",
    "lat": 37.54945787,
    "lon": 127.0862609
  },
  {
    "name": "서울약령시한의약박물관",
    "lat": 37.58047191,
    "lon": 127.0373165
  },
  {
    "name": "서울역사박물관",
    "lat": 37.57087947,
    "lon": 126.9688292
  },
  {
    "name": "성북선잠박물관",
    "lat": 37.59322963,
    "lon": 126.9982179
  },
  {
    "name": "손기정기념관",
    "lat": 37.55562546,
    "lon": 126.9638899
  },
  {
    "name": "수도박물관",
    "lat": 37.64033477,
    "lon": 126.9380085
  },
  {
    "name": "은평역사한옥박물관",
    "lat": 37.58318496,
    "lon": 126.9889549
  },
  {
    "name": "종로구립 고희동 미술자료관",
    "lat": 37.57126473,
    "lon": 127.0350421
  },
  {
    "name": "청계천박물관",
    "lat": 37.5154282,
    "lon": 127.1208007
  },
  {
    "name": "한성백제박물관",
    "lat": 37.56787164,
    "lon": 126.8510306
  },
  {
    "name": "허준박물관",
    "lat": 37.58160503,
    "lon": 126.9852494
  },
  {
    "name": "가회민화박물관",
    "lat": 37.48766827,
    "lon": 127.0657421
  },
  {
    "name": "경기여자고등학교 경운박물관",
    "lat": 37.5596784,
    "lon": 126.9632021
  },
  {
    "name": "고촌이종근기념관",
    "lat": 37.47375026,
    "lon": 127.022282
  },
  {
    "name": "관문사 성보 박물관",
    "lat": 37.55326331,
    "lon": 126.9298387
  },
  {
    "name": "근현대디자인박물관",
    "lat": 37.55361879,
    "lon": 126.8507495
  },
  {
    "name": "기생충박물관",
    "lat": 37.60035632,
    "lon": 126.9558572
  },
  {
    "name": "김달진미술자료박물관",
    "lat": 37.58369627,
    "lon": 127.0037149
  },
  {
    "name": "꼭두박물관",
    "lat": 37.5664602,
    "lon": 126.9677352
  },
  {
    "name": "농협 농업박물관",
    "lat": 37.61877901,
    "lon": 126.9325193
  },
  {
    "name": "세계다문화박물관",
    "lat": 37.52395048,
    "lon": 127.0356033
  },
  {
    "name": "도산안창호기념관",
    "lat": 37.57490095,
    "lon": 126.9906387
  },
  {
    "name": "떡박물관",
    "lat": 37.51375212,
    "lon": 127.1044469
  },
  {
    "name": "롯데월드 아쿠아리움",
    "lat": 37.51070945,
    "lon": 127.0999377
  },
  {
    "name": "롯데월드 민속박물관",
    "lat": 37.58016368,
    "lon": 126.985185
  },
  {
    "name": "명인박물관",
    "lat": 37.57319771,
    "lon": 126.9865478
  },
  {
    "name": "목인박물관",
    "lat": 37.57355543,
    "lon": 126.984866
  },
  {
    "name": "뮤지엄김치간",
    "lat": 37.6538158,
    "lon": 127.0084889
  },
  {
    "name": "박을복자수박물관",
    "lat": 37.56401227,
    "lon": 126.9725854
  },
  {
    "name": "배재학당역사박물관",
    "lat": 37.54427779,
    "lon": 126.9592536
  },
  {
    "name": "백범김구기념관",
    "lat": 37.57327196,
    "lon": 126.9867814
  },
  {
    "name": "보나장신구 박물관",
    "lat": 37.5838838,
    "lon": 126.9835971
  },
  {
    "name": "북촌동양문화박물관",
    "lat": 37.58043,
    "lon": 126.9847656
  },
  {
    "name": "북촌박물관",
    "lat": 37.584493,
    "lon": 126.9829955
  },
  {
    "name": "북촌생활사박물관",
    "lat": 37.57389389,
    "lon": 126.9818818
  },
  {
    "name": "불교중앙박물관",
    "lat": 37.56539367,
    "lon": 127.1477157
  },
  {
    "name": "브이센터 더 라이브 뮤지엄",
    "lat": 37.6087015,
    "lon": 126.9570781
  },
  {
    "name": "삼성출판박물관",
    "lat": 37.56222376,
    "lon": 126.9878243
  },
  {
    "name": "샬트르성바오로수녀회 역사박물관",
    "lat": 37.56627097,
    "lon": 126.9803939
  },
  {
    "name": "서울그레뱅뮤지엄",
    "lat": 37.57880969,
    "lon": 126.9970208
  },
  {
    "name": "서울대학교병원 의학박물관",
    "lat": 37.51889593,
    "lon": 127.115509
  },
  {
    "name": "서울올림픽기념관",
    "lat": 37.5081228,
    "lon": 127.0618874
  },
  {
    "name": "세계골프역사박물관",
    "lat": 37.58096684,
    "lon": 126.9818002
  },
  {
    "name": "세계장신구박물관",
    "lat": 37.57981529,
    "lon": 127.0046233
  },
  {
    "name": "쇳대박물관",
    "lat": 37.59950589,
    "lon": 126.9556793
  },
  {
    "name": "쉼박물관",
    "lat": 37.56986879,
    "lon": 126.9776582
  },
  {
    "name": "신문박물관 PRESSEUM",
    "lat": 37.51966412,
    "lon": 126.9399092
  },
  {
    "name": "아쿠아플라넷63",
    "lat": 37.55346737,
    "lon": 126.9804036
  },
  {
    "name": "안중근의사기념관",
    "lat": 37.61189018,
    "lon": 126.9717567
  },
  {
    "name": "영인문학관",
    "lat": 37.60089578,
    "lon": 126.990133
  },
  {
    "name": "우리옛돌박물관",
    "lat": 126.9817505,
    "lon": 37.55943913
  },
  {
    "name": "우리은행 은행사박물관",
    "lat": 37.55656511,
    "lon": 126.9403287
  },
  {
    "name": "우석뮤지엄",
    "lat": 37.59371971,
    "lon": 126.9626575
  },
  {
    "name": "유금와당박물관",
    "lat": 37.55496014,
    "lon": 126.9338173
  },
  {
    "name": "이한열기념관",
    "lat": 37.56623131,
    "lon": 126.970695
  },
  {
    "name": "전기박물관",
    "lat": 37.485889,
    "lon": 127.028535
  },
  {
    "name": "전쟁과여성인권박물관",
    "lat": 37.560103,
    "lon": 126.914879
  },
  {
    "name": "전쟁기념관",
    "lat": 35.44802,
    "lon": 128.386295
  },
  {
    "name": "종이나라박물관",
    "lat": 37.559634,
    "lon": 127.00616
  },
  {
    "name": "짚풀생활사박물관",
    "lat": 37.584851,
    "lon": 126.999954
  },
  {
    "name": "초전섬유퀼트박물관",
    "lat": 37.558158,
    "lon": 126.984233
  },
  {
    "name": "춘원당한방박물관",
    "lat": 37.571517,
    "lon": 126.990288
  },
  {
    "name": "코리아나화장박물관",
    "lat": 37.524051,
    "lon": 127.032784
  },
  {
    "name": "탄허기념박물관",
    "lat": 37.479002,
    "lon": 127.102944
  },
  {
    "name": "평강성서유물박물관",
    "lat": 37.491971,
    "lon": 126.844051
  },
  {
    "name": "한국가구박물관",
    "lat": 37.600014,
    "lon": 126.99312
  },
  {
    "name": "한국광고박물관",
    "lat": 37.51583,
    "lon": 127.099222
  },
  {
    "name": "한국금융사박물관",
    "lat": 37.56846,
    "lon": 126.976273
  },
  {
    "name": "한국은행 화폐박물관",
    "lat": 37.562075,
    "lon": 126.980538
  },
  {
    "name": "한국잡지박물관",
    "lat": 37.519773,
    "lon": 126.930237
  },
  {
    "name": "한국현대의상박물관",
    "lat": 37.575461,
    "lon": 127.005507
  },
  {
    "name": "한무숙 문학관",
    "lat": 37.587793,
    "lon": 126.998591
  },
  {
    "name": "혜곡최순우기념관",
    "lat": 37.592904,
    "lon": 127.000314
  },
  {
    "name": "화정박물관",
    "lat": 37.604654,
    "lon": 126.965901
  },
  {
    "name": "건국대학교박물관",
    "lat": 37.542383,
    "lon": 127.075614
  },
  {
    "name": "경희대학교 자연사박물관",
    "lat": 37.59771,
    "lon": 127.055198
  },
  {
    "name": "경희대학교 중앙박물관",
    "lat": 37.597043,
    "lon": 127.053142
  },
  {
    "name": "고려대학교박물관",
    "lat": 37.589433,
    "lon": 127.034532
  },
  {
    "name": "국민대학교박물관",
    "lat": 37.612707,
    "lon": 126.993619
  },
  {
    "name": "덕성여자대학교박물관",
    "lat": 37.652736,
    "lon": 127.016541
  },
  {
    "name": "삼육대학교박물관",
    "lat": 37.642261,
    "lon": 127.107832
  },
  {
    "name": "상명대학교 박물관",
    "lat": 37.610541,
    "lon": 126.975955
  },
  {
    "name": "서울대학교박물관",
    "lat": 37.46453,
    "lon": 126.952209
  },
  {
    "name": "서울시립대학교 박물관",
    "lat": 37.583155,
    "lon": 127.056948
  },
  {
    "name": "성균관대학교 박물관",
    "lat": 37.587447,
    "lon": 126.994751
  },
  {
    "name": "성신여자대학교 박물관",
    "lat": 37.591711,
    "lon": 127.021257
  },
  {
    "name": "세종대학교박물관",
    "lat": 37.55152,
    "lon": 127.075253
  },
  {
    "name": "숙명여자대학교박물관",
    "lat": 37.544679,
    "lon": 126.96411
  },
  {
    "name": "숭실대학교 한국기독교박물관",
    "lat": 37.495555,
    "lon": 126.95707
  },
  {
    "name": "연세대학교박물관",
    "lat": 37.561825,
    "lon": 126.937904
  },
  {
    "name": "이화여대박물관",
    "lat": 37.560298,
    "lon": 126.944735
  },
  {
    "name": "이화여자대학교 자연사박물관",
    "lat": 37.560603,
    "lon": 126.948208
  },
  {
    "name": "한양대학교박물관",
    "lat": 37.555271,
    "lon": 127.044727
  },
  {
    "name": "홍익대학교  박물관",
    "lat": 37.550714,
    "lon": 126.926043
  },
  {
    "name": "동덕여자대학교박물관",
    "lat": 37.606597,
    "lon": 127.042782
  },
  {
    "name": "겸재정선미술관",
    "lat": 37.57224,
    "lon": 126.838467
  },
  {
    "name": "성북구립미술관",
    "lat": 37.594821,
    "lon": 126.994897
  },
  {
    "name": "종로구립 박노수미술관",
    "lat": 37.581322,
    "lon": 126.966761
  },
  {
    "name": "서울특별시과학기술대학교 미술관",
    "lat": "",
    "lon": ""
  },
  {
    "name": "서울특별시대학교 미술관",
    "lat": 37.46642,
    "lon": 126.949626
  },
  {
    "name": "OCI미술관",
    "lat": 37.573184,
    "lon": 126.982093
  },
  {
    "name": "금호미술관",
    "lat": 37.577462,
    "lon": 126.979899
  },
  {
    "name": "대림미술관",
    "lat": 37.577546,
    "lon": 126.973371
  },
  {
    "name": "밀알미술관",
    "lat": 37.485667,
    "lon": 127.082724
  },
  {
    "name": "사비나미술관",
    "lat": 37.576518,
    "lon": 126.984564
  },
  {
    "name": "상원미술관",
    "lat": 37.611653,
    "lon": 126.976565
  },
  {
    "name": "성곡미술관",
    "lat": 37.573155,
    "lon": 126.969761
  },
  {
    "name": "소마미술관",
    "lat": 37.516913,
    "lon": 127.11822
  },
  {
    "name": "아라리오뮤지엄 인 스페이스",
    "lat": 37.577739,
    "lon": 126.988343
  },
  {
    "name": "아르코미술관",
    "lat": 37.580488,
    "lon": 127.003203
  },
  {
    "name": "아모레퍼시픽미술관",
    "lat": 37.259943,
    "lon": 127.110334
  },
  {
    "name": "아트선재센터",
    "lat": 37.579489,
    "lon": 126.981955
  },
  {
    "name": "아트센터나비미술관",
    "lat": 37.569795,
    "lon": 126.980315
  },
  {
    "name": "한가람미술관",
    "lat": 37.480418,
    "lon": 127.014258
  },
  {
    "name": "한가람디자인미술관",
    "lat": 37.479918,
    "lon": 127.012564
  },
  {
    "name": "일민미술관",
    "lat": 37.569824,
    "lon": 126.977677
  },
  {
    "name": "자하미술관",
    "lat": 37.589433,
    "lon": 126.9604
  },
  {
    "name": "코리아나미술관",
    "lat": 37.524051,
    "lon": 127.032784
  },
  {
    "name": "토탈미술관",
    "lat": 37.611903,
    "lon": 126.975621
  },
  {
    "name": "포스코미술관",
    "lat": 37.505831,
    "lon": 127.056088
  },
  {
    "name": "한미사진미술관",
    "lat": 37.516608,
    "lon": 127.11397
  },
  {
    "name": "헬로우뮤지움",
    "lat": 37.507358,
    "lon": 127.040312
  },
  {
    "name": "환기미술관",
    "lat": 37.594431,
    "lon": 126.966289
  }
]