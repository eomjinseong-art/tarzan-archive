export type TvSeries = {
  slug: string;
  years: string;
  titleKo: string;
  titleEn: string;
  episodes: string;
  network: string;
  format: string;
  tarzan: string;
  jane: string;
  note: string;
};

export const tvSeries: TvSeries[] = [
  { slug: "tarzan-1966", years: "1966–1968", titleKo: "타잔", titleEn: "Tarzan", episodes: "57화", network: "NBC", format: "실사 시리즈",
    tarzan: "론 일리", jane: "없음",
    note: "사이 와인트라웁 제작. 소년 자이(마누엘 파디야 주니어)가 함께 나옵니다. 두 편짜리 에피소드를 묶은 극장판 《타잔의 정글 반란》(1967), 《타잔의 죽음의 침묵》(1970)도 공개됐습니다." },
  { slug: "tarzan-lord-of-the-jungle", years: "1976–1980", titleKo: "정글의 왕 타잔", titleEn: "Tarzan, Lord of the Jungle", episodes: "36화", network: "CBS", format: "애니메이션",
    tarzan: "로버트 리질리 (목소리)", jane: "린다 게리 (30화 게스트)",
    note: "필메이션 제작. 에피소드는 이후 《배트맨/타잔 어드벤처 아워》(1977–1978) 등 묶음 프로그램에도 편성됐습니다." },
  { slug: "tarzan-in-manhattan", years: "1989", titleKo: "맨해튼의 타잔", titleEn: "Tarzan in Manhattan", episodes: "TV 영화 1편", network: "CBS", format: "TV 영화",
    tarzan: "조 라라", jane: "킴 크로스비",
    note: "제목 그대로 타잔을 뉴욕 맨해튼으로 데려온 TV 영화입니다." },
  { slug: "tarzan-1991", years: "1991–1994", titleKo: "타잔", titleEn: "Tarzán", episodes: "75화", network: "TF1·미국 신디케이션", format: "실사 시리즈",
    tarzan: "울프 라슨", jane: "리디 드니에",
    note: "금발의 환경운동가 타잔과 프랑스 생태학자 제인이 나오는 버전입니다." },
  { slug: "tarzan-epic-adventures", years: "1996–1997", titleKo: "타잔: 에픽 어드벤처", titleEn: "Tarzan: The Epic Adventures", episodes: "22화", network: "미국 신디케이션", format: "실사 시리즈",
    tarzan: "조 라라", jane: "없음",
    note: "두 편짜리 파일럿 《타잔의 귀환》으로 시작했습니다." },
  { slug: "legend-of-tarzan-2001", years: "2001–2002", titleKo: "레전드 오브 타잔", titleEn: "The Legend of Tarzan", episodes: "39화", network: "UPN", format: "애니메이션",
    tarzan: "마이클 T. 와이스 (목소리)", jane: "올리비아 다보 (목소리)",
    note: "1999년 디즈니 애니메이션의 후속 TV 시리즈입니다. 미방영 세 편이 비디오 영화 《타잔 앤 제인》이 됐습니다." },
  { slug: "tarzan-2003", years: "2003", titleKo: "타잔", titleEn: "Tarzan", episodes: "8화", network: "The WB", format: "실사 시리즈",
    tarzan: "트래비스 핌멜", jane: "세라 웨인 콜리스",
    note: "현대 뉴욕을 무대로, 제인이 형사로 나옵니다. 8화 만에 끝났습니다." },
  { slug: "tarzan-and-jane-2017", years: "2017", titleKo: "타잔과 제인", titleEn: "Tarzan and Jane", episodes: "13화", network: "넷플릭스", format: "애니메이션",
    tarzan: "자일스 팬턴 (목소리)", jane: "레베카 쇼이켓 (목소리)",
    note: "타잔과 제인을 주인공으로 한 애니메이션 시리즈입니다." },
];
