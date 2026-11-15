export type EraId =
  | "silent"
  | "weissmuller"
  | "rivals"
  | "barker-scott"
  | "sixties"
  | "revival"
  | "animation"
  | "modern";

export type Era = {
  id: EraId;
  label: string;
  range: string;
  summary: string;
  tarzans: string[];
};

export const eras: Era[] = [
  {
    id: "silent",
    label: "무성영화 시대",
    range: "1918–1929",
    summary:
      "에드거 라이스 버로스의 소설이 나온 지 몇 년 만에 영화가 됐습니다. 장편과 연속극(시리얼)이 섞여 있고, 몇 편은 필름이 남아 있지 않습니다. 엘모 링컨이 첫 타잔, 이니드 마키가 첫 제인입니다.",
    tarzans: ["elmo-lincoln", "gene-pollar", "p-dempsey-tabler", "james-pierce", "frank-merrill"],
  },
  {
    id: "weissmuller",
    label: "조니 와이즈뮬러 시대",
    range: "1932–1948",
    summary:
      "올림픽 수영 금메달리스트 조니 와이즈뮬러가 12편에서 타잔을 맡았습니다. 1932~1942년 MGM 6편은 모린 오설리번이 제인, 1943~1948년 RKO 6편은 제작자 솔 레서가 이어받았고 브렌다 조이스가 제인을 맡았습니다. 유명한 타잔의 외침이 이 시대에 처음 나옵니다.",
    tarzans: ["johnny-weissmuller"],
  },
  {
    id: "rivals",
    label: "1930년대 경쟁작",
    range: "1933–1938",
    summary:
      "와이즈뮬러의 MGM 시리즈와 같은 시기에 다른 제작사들이 따로 만든 타잔입니다. 버스터 크래브, 허먼 브릭스, 글렌 모리스 모두 운동선수 출신입니다.",
    tarzans: ["buster-crabbe", "herman-brix", "glenn-morris"],
  },
  {
    id: "barker-scott",
    label: "렉스 바커·고든 스콧 시대",
    range: "1949–1960",
    summary:
      "RKO와 솔 레서의 시리즈가 렉스 바커(5편), 고든 스콧(6편)으로 이어집니다. 1957년 첫 컬러 타잔이 나왔고, 1959년부터 제작자 사이 와인트라웁이 말을 잘하는 교양 있는 타잔으로 방향을 바꿨습니다. MGM은 1959년 1932년작을 데니 밀러 주연으로 리메이크했습니다.",
    tarzans: ["lex-barker", "gordon-scott", "denny-miller"],
  },
  {
    id: "sixties",
    label: "1960년대 해외 로케이션 시대",
    range: "1962–1970",
    summary:
      "사이 와인트라웁 제작 아래 타잔이 인도, 태국, 멕시코, 브라질로 떠납니다. 조크 마호니 2편, 마이크 헨리 3편. 이어 론 일리의 NBC TV 시리즈(1966–1968)가 나왔고, 그 에피소드를 묶은 극장판도 공개됐습니다.",
    tarzans: ["jock-mahoney", "mike-henry", "ron-ely"],
  },
  {
    id: "revival",
    label: "1980~90년대 재해석",
    range: "1981–1998",
    summary:
      "제인의 시점으로 다시 쓴 1981년 《타잔, 유인원 인간》, 원작 소설에 가깝게 그레이스톡 경의 이야기로 만든 1984년 《그레이스톡》, 캐스퍼 반 디엔의 1998년작이 있습니다.",
    tarzans: ["miles-okeeffe", "christopher-lambert", "casper-van-dien"],
  },
  {
    id: "animation",
    label: "애니메이션",
    range: "1999–2013",
    summary:
      "1999년 디즈니 애니메이션 《타잔》과 비디오용 속편 두 편, 그리고 2013년 독일에서 만든 모션 캡처 3D 애니메이션입니다.",
    tarzans: ["tony-goldwyn", "michael-t-weiss", "harrison-chad", "kellan-lutz"],
  },
  {
    id: "modern",
    label: "2010년대 실사",
    range: "2016",
    summary:
      "데이비드 예이츠 감독의 《레전드 오브 타잔》. 런던에 정착한 존 클레이턴(타잔)이 콩고로 돌아가는 이야기로, 원작 이후의 시간을 그립니다.",
    tarzans: ["alexander-skarsgard"],
  },
];

export function eraById(id: EraId) {
  return eras.find((era) => era.id === id)!;
}
