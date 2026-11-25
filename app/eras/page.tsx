import { NadooAd } from "@/components/NadooAd";
import Link from "next/link";
import { actorBySlug } from "@/data/actors";
import { eras } from "@/data/eras";
import { filmsByEra } from "@/data/films";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "타잔 영화 시대별 연표",
  description: "무성영화, 조니 와이즈뮬러, 렉스 바커·고든 스콧, 1960년대, 1980~90년대, 애니메이션, 2016년까지. 타잔 영화 100년을 시대별로 따라갑니다.",
  path: "/eras",
});

export default function ErasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-serif text-3xl text-gold">시대별 연표</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        에드거 라이스 버로스의 소설 《유인원 타잔》(1912)에서 시작한 타잔은 1918년 첫 영화 이후 100년 가까이 스크린에 돌아왔습니다. 시대마다 타잔 배우와 제작 방식이 바뀌었습니다.
      </p>
      <NadooAd inline />
      <ol className="mt-10 space-y-14 border-l border-line pl-6">
        {eras.map((era) => (
          <li key={era.id} id={era.id} className="relative scroll-mt-24">
            <span aria-hidden className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border border-gold bg-bg" />
            <p className="text-sm text-gold">{era.range}</p>
            <h2 className="font-serif text-2xl">{era.label}</h2>
            <p className="mt-3 leading-7 text-paper/90">{era.summary}</p>
            <p className="mt-3 text-sm text-muted">
              이 시대의 타잔:{" "}
              {era.tarzans.map((slug, i) => {
                const actor = actorBySlug(slug)!;
                return (
                  <span key={slug}>
                    {i > 0 && ", "}
                    <Link href={`/actors/${slug}`} className="text-paper underline decoration-line hover:text-gold">{actor.nameKo}</Link>
                  </span>
                );
              })}
            </p>
            <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-card">
              {filmsByEra(era.id).map((film) => (
                <li key={film.slug}>
                  <Link href={`/films/${film.slug}`} className="flex gap-4 px-4 py-3 hover:bg-gold/5">
                    <span className="w-12 shrink-0 font-serif text-gold tabular-nums">{film.year}</span>
                    <span className="min-w-0">
                      <span className="block">{film.titleKo}</span>
                      <span className="block text-xs text-muted">{film.titleEn} · {actorBySlug(film.tarzan)?.nameKo}{film.jane ? ` · 제인 ${actorBySlug(film.jane)?.nameKo}` : ""}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-12 text-sm text-muted">TV로 이어진 타잔은 <Link href="/tv" className="underline hover:text-gold">TV 시리즈</Link>에 따로 모았습니다.</p>
    </div>
  );
}
