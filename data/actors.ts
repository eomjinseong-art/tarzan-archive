export type ActorRole = "tarzan" | "jane" | "boy";

export type Actor = {
  slug: string;
  nameKo: string;
  nameEn: string;
  role: ActorRole;
  life: string;
  bio: string;
  /** 극장 영화 외 출연 (TV 등) */
  extra?: string[];
  wiki: string;
};

const W = (title: string) => `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;

export const actors: Actor[] = [
  // ── 타잔 ──
  { slug: "elmo-lincoln", nameKo: "엘모 링컨", nameEn: "Elmo Lincoln", role: "tarzan", life: "1889–1952",
    bio: "영화 속 첫 타잔입니다. 힘센 역할을 주로 맡던 배우로, 무성에서 유성 시대까지 100편 넘게 출연했습니다. 1918년 두 편과 1921년 연속극에서 타잔을 맡았습니다.", wiki: W("Elmo Lincoln") },
  { slug: "gene-pollar", nameKo: "진 폴라", nameEn: "Gene Pollar", role: "tarzan", life: "1892–1971",
    bio: "뉴욕시 소방관 출신입니다. 1920년 《타잔의 복수》 한 편으로 짧은 영화 경력을 마쳤습니다.", wiki: W("Gene Pollar") },
  { slug: "p-dempsey-tabler", nameKo: "P. 뎀프시 테이블러", nameEn: "P. Dempsey Tabler", role: "tarzan", life: "1876–1956",
    bio: "테네시 출신 오페라 가수이자 운동선수, 사업가였습니다. 1920년 연속극 《타잔의 아들》에서 단 한 번 타잔을 맡은 세 번째 타잔입니다.", wiki: W("P. Dempsey Tabler") },
  { slug: "james-pierce", nameKo: "제임스 피어스", nameEn: "James Pierce", role: "tarzan", life: "1900–1983",
    bio: "영화 속 네 번째 타잔입니다. 1927년 《타잔과 황금 사자》에 나왔고, 1930년대 초에는 라디오 드라마에서 타잔 목소리를 맡았습니다.", extra: ["라디오 타잔 (1932–1934)"], wiki: W("James Pierce") },
  { slug: "frank-merrill", nameKo: "프랭크 메릴", nameEn: "Frank Merrill", role: "tarzan", life: "1893–1966",
    bio: "전미 체조 타이틀을 50번 넘게 딴 체조 선수 출신으로, 경찰관과 스턴트맨으로도 일했습니다. 다섯 번째 영화 타잔입니다.", wiki: W("Frank Merrill (actor)") },
  { slug: "johnny-weissmuller", nameKo: "조니 와이즈뮬러", nameEn: "Johnny Weissmuller", role: "tarzan", life: "1904–1984",
    bio: "1924·1928년 올림픽에서 금메달 다섯 개를 딴 수영 선수입니다. 1932년부터 1948년까지 12편에서 타잔을 맡아, 가장 널리 알려진 타잔이 됐습니다.", wiki: W("Johnny Weissmuller") },
  { slug: "buster-crabbe", nameKo: "버스터 크래브", nameEn: "Buster Crabbe", role: "tarzan", life: "1908–1983",
    bio: "1932년 올림픽 400m 자유형 금메달리스트입니다. 1933년 《용감한 타잔》 한 편에서 타잔을 맡았고, 이후 플래시 고든과 벅 로저스로 연속극 스타가 됐습니다.", wiki: W("Buster Crabbe") },
  { slug: "herman-brix", nameKo: "허먼 브릭스 (브루스 베넷)", nameEn: "Herman Brix (Bruce Bennett)", role: "tarzan", life: "1906–2007",
    bio: "1928년 올림픽 포환던지기 은메달리스트입니다. 1935년 《타잔의 새로운 모험》에서 원작에 가까운 교양 있는 타잔을 연기했고, 1939년부터 브루스 베넷이라는 이름으로 활동했습니다.", wiki: W("Bruce Bennett") },
  { slug: "glenn-morris", nameKo: "글렌 모리스", nameEn: "Glenn Morris", role: "tarzan", life: "1912–1974",
    bio: "1936년 올림픽 10종 경기에서 세계 기록과 함께 금메달을 딴 육상 선수입니다. 1938년 《타잔의 복수》가 유일한 타잔입니다.", wiki: W("Glenn Morris") },
  { slug: "lex-barker", nameKo: "렉스 바커", nameEn: "Lex Barker", role: "tarzan", life: "1919–1973",
    bio: "1949년부터 1953년까지 RKO에서 다섯 편의 타잔을 맡았습니다. 이후 유럽으로 건너가 서독의 카를 마이 원작 서부극에서 올드 섀터핸드를 연기했습니다.", wiki: W("Lex Barker") },
  { slug: "gordon-scott", nameKo: "고든 스콧", nameEn: "Gordon Scott", role: "tarzan", life: "1926–2007",
    bio: "열한 번째 타잔입니다. 1955년부터 1960년까지 장편 다섯 편과 TV 파일럿 편집판 한 편에 나왔고, 그의 시기에 첫 컬러 타잔과 말을 잘하는 타잔이 등장했습니다.", wiki: W("Gordon Scott") },
  { slug: "denny-miller", nameKo: "데니 밀러", nameEn: "Denny Miller", role: "tarzan", life: "1934–2014",
    bio: "1959년 MGM 리메이크 《타잔, 유인원 인간》의 타잔입니다. TV 서부극 《왜건 트레인》의 듀크 섀넌 역으로도 알려졌습니다.", wiki: W("Denny Miller") },
  { slug: "jock-mahoney", nameKo: "조크 마호니", nameEn: "Jock Mahoney", role: "tarzan", life: "1919–1989",
    bio: "배우이자 스턴트맨입니다. 1960년 《위대한 타잔》에서 악당을 맡은 뒤 1962·1963년 두 편에서 타잔이 됐고, 1981년작에서는 스턴트 코디네이터로 참여했습니다.", wiki: W("Jock Mahoney") },
  { slug: "mike-henry", nameKo: "마이크 헨리", nameEn: "Mike Henry", role: "tarzan", life: "1936–2021",
    bio: "미식축구 라인배커 출신입니다. 1966~1968년 타잔 3부작에 나왔고, 《스모키 밴디트》 시리즈의 주니어 역으로도 알려졌습니다.", wiki: W("Mike Henry (American football)") },
  { slug: "ron-ely", nameKo: "론 일리", nameEn: "Ron Ely", role: "tarzan", life: "1938–2024",
    bio: "1966~1968년 NBC TV 시리즈 《타잔》의 주인공입니다. 시리즈 에피소드를 묶은 극장판도 공개됐고, 영화 《닥 새비지》(1975)의 주연도 맡았습니다.", extra: ["TV 《타잔》 (NBC, 1966–1968)"], wiki: W("Ron Ely") },
  { slug: "miles-okeeffe", nameKo: "마일스 오키프", nameEn: "Miles O'Keeffe", role: "tarzan", life: "1954–",
    bio: "1981년 《타잔, 유인원 인간》의 타잔으로 처음 큰 주목을 받았습니다. 영화 속에서 대사가 거의 없는 타잔입니다.", wiki: W("Miles O'Keeffe") },
  { slug: "christopher-lambert", nameKo: "크리스토퍼 램버트", nameEn: "Christopher Lambert", role: "tarzan", life: "1957–",
    bio: "프랑스 영화에서 조연으로 경력을 시작해, 1984년 《그레이스톡》의 타잔으로 세계에 이름을 알렸습니다. 이후 《하이랜더》로 유명해졌습니다.", wiki: W("Christopher Lambert") },
  { slug: "casper-van-dien", nameKo: "캐스퍼 반 디엔", nameEn: "Casper Van Dien", role: "tarzan", life: "1968–",
    bio: "《스타십 트루퍼스》(1997)의 조니 리코 역으로 알려진 배우입니다. 1998년 《타잔과 잃어버린 도시》에서 타잔을 맡았습니다.", wiki: W("Casper Van Dien") },
  { slug: "tony-goldwyn", nameKo: "토니 골드윈", nameEn: "Tony Goldwyn", role: "tarzan", life: "1960–",
    bio: "배우이자 감독입니다. 《사랑과 영혼》(1990)의 칼 역으로 알려졌고, 1999년 디즈니 애니메이션 《타잔》에서 어른 타잔의 목소리를 맡았습니다.", wiki: W("Tony Goldwyn") },
  { slug: "michael-t-weiss", nameKo: "마이클 T. 와이스", nameEn: "Michael T. Weiss", role: "tarzan", life: "1962–",
    bio: "TV 시리즈 《프리텐더》의 재러드 역으로 알려졌습니다. 디즈니 TV 애니메이션 《레전드 오브 타잔》과 비디오 영화 《타잔 앤 제인》에서 타잔 목소리를 맡았습니다.", extra: ["TV 애니메이션 《레전드 오브 타잔》 (2001–2002)"], wiki: W("Michael T. Weiss") },
  { slug: "harrison-chad", nameKo: "해리슨 채드", nameEn: "Harrison Chad", role: "tarzan", life: "1992–",
    bio: "브로드웨이 뮤지컬과 TV에서 활동한 배우입니다. 2005년 《타잔 2》에서 어린 타잔의 목소리를 맡았습니다.", wiki: W("Harrison Chad") },
  { slug: "kellan-lutz", nameKo: "켈런 루츠", nameEn: "Kellan Lutz", role: "tarzan", life: "1985–",
    bio: "《트와일라잇》 시리즈의 에밋 컬렌 역으로 알려졌습니다. 2013년 독일 모션 캡처 애니메이션 《타잔》에서 타잔을 맡았습니다.", wiki: W("Kellan Lutz") },
  { slug: "alexander-skarsgard", nameKo: "알렉산더 스카스가드", nameEn: "Alexander Skarsgård", role: "tarzan", life: "1976–",
    bio: "스웨덴 배우로, 배우 스텔란 스카스가드의 아들입니다. 2016년 《레전드 오브 타잔》에서 런던에 정착한 타잔, 존 클레이턴을 연기했습니다.", wiki: W("Alexander Skarsgård") },

  // ── 제인 ──
  { slug: "enid-markey", nameKo: "이니드 마키", nameEn: "Enid Markey", role: "jane", life: "1894–1981",
    bio: "영화 속 첫 제인입니다. 1918년 두 편에서 엘모 링컨의 상대역을 맡았고, 연극·영화·라디오·TV를 오가며 50년 넘게 활동했습니다.", wiki: W("Enid Markey") },
  { slug: "karla-schramm", nameKo: "칼라 슈람", nameEn: "Karla Schramm", role: "jane", life: "1891–1980",
    bio: "두 번째 영화 제인입니다. 1920년 《타잔의 복수》와 《타잔의 아들》에서 서로 다른 타잔과 함께 제인을 맡았습니다.", wiki: W("Karla Schramm") },
  { slug: "louise-lorraine", nameKo: "루이즈 로레인", nameEn: "Louise Lorraine", role: "jane", life: "1904–1981",
    bio: "무성영화 시대의 배우입니다. 1921년 연속극 《타잔의 모험》에서 엘모 링컨의 제인을 맡았습니다.", wiki: W("Louise Lorraine") },
  { slug: "dorothy-dunbar", nameKo: "도로시 던바", nameEn: "Dorothy Dunbar", role: "jane", life: "1902–1992",
    bio: "1920년대 무성영화 배우이자 사교계 인사입니다. 1927년 《타잔과 황금 사자》의 제인입니다.", wiki: W("Dorothy Dunbar") },
  { slug: "natalie-kingston", nameKo: "내털리 킹스턴", nameEn: "Natalie Kingston", role: "jane", life: "1905–1991",
    bio: "1928년 《강대한 타잔》에서는 메리 트레버를, 1929년 《타잔 더 타이거》에서는 제인을 맡았습니다.", wiki: W("Natalie Kingston") },
  { slug: "maureen-osullivan", nameKo: "모린 오설리번", nameEn: "Maureen O'Sullivan", role: "jane", life: "1911–1998",
    bio: "아일랜드 출신 배우입니다. 1932년부터 1942년까지 MGM 여섯 편에서 와이즈뮬러의 제인을 맡아 가장 유명한 제인이 됐고, 반세기 넘게 수십 편에 출연했습니다.", wiki: W("Maureen O'Sullivan") },
  { slug: "brenda-joyce", nameKo: "브렌다 조이스", nameEn: "Brenda Joyce", role: "jane", life: "1917–2009",
    bio: "1945년부터 1949년까지 RKO 다섯 편에서 제인을 맡았습니다. 와이즈뮬러와 렉스 바커, 두 타잔과 함께한 제인입니다.", wiki: W("Brenda Joyce (actress)") },
  { slug: "vanessa-brown", nameKo: "버네사 브라운", nameEn: "Vanessa Brown", role: "jane", life: "1928–1999",
    bio: "오스트리아 태생의 미국 배우로 라디오·영화·연극·TV에서 활동했습니다. 1950년 《타잔과 노예 소녀》가 유일한 제인입니다.", wiki: W("Vanessa Brown") },
  { slug: "virginia-huston", nameKo: "버지니아 휴스턴", nameEn: "Virginia Huston", role: "jane", life: "1925–1981",
    bio: "미국 배우입니다. 1951년 《타잔의 위기》에서 렉스 바커의 제인을 맡았습니다.", wiki: W("Virginia Huston") },
  { slug: "dorothy-hart", nameKo: "도로시 하트", nameEn: "Dorothy Hart", role: "jane", life: "1922–2004",
    bio: "주로 조연으로 활동한 배우로, 《벌거벗은 도시》(1948)에도 나왔습니다. 1952년 《타잔의 야성》의 제인입니다.", wiki: W("Dorothy Hart") },
  { slug: "joyce-mackenzie", nameKo: "조이스 매켄지", nameEn: "Joyce MacKenzie", role: "jane", life: "1925–2021",
    bio: "1946년부터 1961년까지 활동한 배우입니다. 1953년 《타잔과 여악마》에서 열한 번째 영화 제인을 맡았습니다.", wiki: W("Joyce MacKenzie") },
  { slug: "eve-brent", nameKo: "이브 브렌트", nameEn: "Eve Brent", role: "jane", life: "1929–2011",
    bio: "진 루이스라는 이름으로도 활동했습니다. 1958년 《타잔의 생존 투쟁》과 TV 파일럿 편집판 《타잔과 사냥꾼들》에서 고든 스콧의 제인을 맡았습니다.", wiki: W("Eve Brent") },
  { slug: "joanna-barnes", nameKo: "조애나 반스", nameEn: "Joanna Barnes", role: "jane", life: "1934–2022",
    bio: "배우이자 작가입니다. 1959년 리메이크 《타잔, 유인원 인간》에서 데니 밀러의 제인을 맡았습니다.", wiki: W("Joanna Barnes") },
  { slug: "bo-derek", nameKo: "보 데릭", nameEn: "Bo Derek", role: "jane", life: "1956–",
    bio: "모델 출신 배우입니다. 1981년 《타잔, 유인원 인간》에서 제작과 주연을 겸해, 제인 파커의 시점으로 이야기를 이끌었습니다. 연출은 남편 존 데릭이 맡았습니다.", wiki: W("Bo Derek") },
  { slug: "andie-macdowell", nameKo: "앤디 맥다월", nameEn: "Andie MacDowell", role: "jane", life: "1958–",
    bio: "모델 출신 배우로, 1984년 《그레이스톡》이 영화 데뷔작입니다. 이 영화에서 그녀의 목소리는 글렌 클로스가 더빙했습니다. 이후 《사랑의 블랙홀》 등 로맨틱 코미디로 사랑받았습니다.", wiki: W("Andie MacDowell") },
  { slug: "jane-march", nameKo: "제인 마치", nameEn: "Jane March", role: "jane", life: "1973–",
    bio: "영국 배우이자 모델입니다. 1998년 《타잔과 잃어버린 도시》에서 제인 포터를 맡았습니다.", wiki: W("Jane March") },
  { slug: "minnie-driver", nameKo: "미니 드라이버", nameEn: "Minnie Driver", role: "jane", life: "1970–",
    bio: "영국·미국 배우이자 가수입니다. 《굿 윌 헌팅》으로 아카데미 후보에 올랐고, 1999년 디즈니 《타잔》에서 제인의 목소리를 맡았습니다.", wiki: W("Minnie Driver") },
  { slug: "olivia-dabo", nameKo: "올리비아 다보", nameEn: "Olivia d'Abo", role: "jane", life: "1969–",
    bio: "영국 배우이자 가수로, 《케빈은 열두 살》의 캐런 역으로 알려졌습니다. 디즈니 TV 애니메이션 《레전드 오브 타잔》과 《타잔 앤 제인》에서 제인 목소리를 맡았습니다.", extra: ["TV 애니메이션 《레전드 오브 타잔》 (2001–2002)"], wiki: W("Olivia d'Abo") },
  { slug: "spencer-locke", nameKo: "스펜서 로크", nameEn: "Spencer Locke", role: "jane", life: "1991–",
    bio: "《몬스터 하우스》, 《레지던트 이블》 시리즈의 K-마트 역으로 알려진 배우입니다. 2013년 《타잔》에서 제인 포터의 목소리를 맡았습니다.", wiki: W("Spencer Locke") },
  { slug: "margot-robbie", nameKo: "마고 로비", nameEn: "Margot Robbie", role: "jane", life: "1990–",
    bio: "오스트레일리아 배우이자 제작자입니다. 2016년 《레전드 오브 타잔》에서 제인을 맡았고, 아카데미 후보에 세 번 올랐습니다.", wiki: W("Margot Robbie") },

  // ── 보이 ──
  { slug: "johnny-sheffield", nameKo: "조니 셰필드", nameEn: "Johnny Sheffield", role: "boy", life: "1931–2010",
    bio: "1939년부터 1947년까지 와이즈뮬러 시리즈 여덟 편에서 타잔과 제인의 양아들 '보이'를 맡았습니다. 이후 《정글 소년 봄바》 시리즈의 주인공이 됐습니다.", wiki: W("Johnny Sheffield") },
];

export function actorBySlug(slug: string) {
  return actors.find((actor) => actor.slug === slug);
}
