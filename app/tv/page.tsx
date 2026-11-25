import { NadooAd } from "@/components/NadooAd";
import { tvSeries } from "@/data/tv";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "타잔 TV 시리즈",
  description: "론 일리의 NBC 《타잔》(1966)부터 디즈니 《레전드 오브 타잔》, 2017년 애니메이션까지 타잔 TV 시리즈와 TV 영화를 정리했습니다.",
  path: "/tv",
});

export default function TvPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-serif text-3xl text-gold">TV 시리즈</h1>
      <p className="mt-3 text-sm leading-7 text-muted">1950년대 중반부터 옛 타잔 영화가 TV로 방영되면서, TV는 타잔을 대중에게 전하는 주요 무대가 됐습니다. 주요 시리즈와 TV 영화를 모았습니다.</p>
      <NadooAd inline />
      <ul className="mt-8 space-y-4">
        {tvSeries.map((tv) => (
          <li key={tv.slug} id={tv.slug} className="rounded-lg border border-line bg-card p-5">
            <p className="text-sm text-gold">{tv.years} · {tv.network} · {tv.format} · {tv.episodes}</p>
            <h2 className="mt-1 font-serif text-xl">{tv.titleKo} <span className="text-sm text-muted">{tv.titleEn}</span></h2>
            <p className="mt-2 text-sm">타잔 <b>{tv.tarzan}</b> · 제인 <b>{tv.jane}</b></p>
            <p className="mt-2 text-sm leading-7 text-muted">{tv.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
