export const SITE_NAME = "타잔 아카이브";
export const SITE_TAGLINE = "1918년 무성영화부터 2016년 《레전드 오브 타잔》까지";
export const SITE_SUB =
  "타잔 영화를 시대별로 정리하고, 타잔과 제인을 연기한 배우들, TV 시리즈까지 모았습니다.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tarzan-archive.vercel.app";

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

export const FAN_SITE_DISCLAIMER =
  "타잔 아카이브는 영화를 좋아하는 팬이 만든 비공식 팬사이트입니다. 에드거 라이스 버로스 주식회사, 각 영화 제작사·배급사와 어떤 관계도 없으며, '타잔(Tarzan)'과 영화 제목·상표는 각 권리자의 것입니다.";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/eras", label: "시대별 연표" },
  { href: "/films", label: "영화" },
  { href: "/actors", label: "배우" },
  { href: "/tv", label: "TV 시리즈" },
  { href: "/credits", label: "출처" },
] as const;

function utm(base: string, path = "/", medium = "footer") {
  const url = new URL(path, base);
  url.searchParams.set("utm_source", "tarzan-archive");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", "archive-network");
  return url.toString();
}

export const SISTER_SITES = [
  { label: "영화 체크리스트", url: "https://movie-checklist-sigma.vercel.app" },
  { label: "분노의 질주 아카이브", url: "https://ff-archive.vercel.app" },
  { label: "007 본드 아카이브", url: "https://bond-archive-two.vercel.app" },
  { label: "미션 임파서블 아카이브", url: "https://mi-archive.vercel.app" },
  { label: "트랜스포머 아카이브", url: "https://transformers-archive.vercel.app" },
  { label: "나두 허브", url: "https://tinalinkeom.vercel.app" },
] as const;

export function sisterUrl(url: string, medium = "footer") {
  return utm(url, "/", medium);
}
