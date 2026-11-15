import Link from "next/link";
import { FilmCard } from "@/components/FilmCard";
import { actors } from "@/data/actors";
import { eras } from "@/data/eras";
import { films, filmsByEra } from "@/data/films";
import { tvSeries } from "@/data/tv";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({ title: SITE_NAME, description: `${SITE_TAGLINE}. ${SITE_SUB}`, path: "/" });

export default function Home() {
  const tarzans = actors.filter((a) => a.role === "tarzan").length;
  const janes = actors.filter((a) => a.role === "jane").length;
  const jsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, inLanguage: "ko" };
  return (
    <div className="mx-auto max-w-6xl px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-14">
        <p className="text-xs tracking-[0.3em] text-leaf">TARZAN FILM ARCHIVE</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-gold sm:text-5xl">{SITE_NAME}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8">{SITE_TAGLINE}</p>
        <p className="mt-2 max-w-2xl leading-7 text-muted">{SITE_SUB}</p>
        <dl className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["영화", `${films.length}편`],
            ["타잔 배우", `${tarzans}명`],
            ["제인 배우", `${janes}명`],
            ["TV 시리즈", `${tvSeries.length}편`],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-line bg-card px-3 py-3">
              <dt className="text-xs text-muted">{k}</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/eras" className="rounded-full bg-gold px-4 py-2 font-semibold text-bg hover:opacity-90">시대별 연표 보기</Link>
          <Link href="/actors" className="rounded-full border border-line px-4 py-2 hover:border-gold">역대 타잔·제인 배우</Link>
          <Link href="/tv" className="rounded-full border border-line px-4 py-2 hover:border-gold">TV 시리즈</Link>
        </div>
      </section>

      {eras.map((era) => {
        const list = filmsByEra(era.id);
        return (
          <section key={era.id} className="border-t border-line py-10" id={era.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-serif text-2xl text-paper">
                {era.label} <span className="ml-2 text-base text-gold">{era.range}</span>
              </h2>
              <Link href={`/eras#${era.id}`} className="text-sm text-muted hover:text-gold">연표에서 보기 →</Link>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{era.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((film) => <FilmCard key={film.slug} film={film} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}
