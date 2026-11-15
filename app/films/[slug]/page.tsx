import Link from "next/link";
import { notFound } from "next/navigation";
import { CoupangCard } from "@/components/CoupangCard";
import { actorBySlug } from "@/data/actors";
import { eraById } from "@/data/eras";
import { filmBySlug, films, filmsChrono } from "@/data/films";
import { imageByKey } from "@/data/images";
import { canonicalUrl, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return films.map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = filmBySlug(slug);
  if (!film) return {};
  const tarzan = actorBySlug(film.tarzan);
  return pageMetadata({
    title: `${film.titleKo} (${film.year})`,
    description: `${film.year}년 ${film.titleKo}(${film.titleEn}). 감독 ${film.director}, 타잔 ${tarzan?.nameKo}. ${film.synopsis}`,
    path: `/films/${film.slug}`,
  });
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = filmBySlug(slug);
  if (!film) notFound();
  const era = eraById(film.era);
  const tarzan = actorBySlug(film.tarzan)!;
  const jane = film.jane ? actorBySlug(film.jane) : null;
  const image = imageByKey(film.image);
  const idx = filmsChrono.findIndex((f) => f.slug === film.slug);
  const prev = filmsChrono[idx - 1];
  const next = filmsChrono[idx + 1];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: film.titleEn,
    alternateName: film.titleKo,
    dateCreated: String(film.year),
    director: film.director.split(", ").map((name) => ({ "@type": "Person", name })),
    actor: [tarzan, jane].filter(Boolean).map((a) => ({ "@type": "Person", name: a!.nameEn })),
    url: canonicalUrl(`/films/${film.slug}`),
    sameAs: film.wiki,
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-xs text-muted">
        <Link href="/" className="hover:text-gold">홈</Link> / <Link href="/films" className="hover:text-gold">영화</Link> /{" "}
        <Link href={`/eras#${era.id}`} className="hover:text-gold">{era.label}</Link>
      </nav>
      <p className="mt-6 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-leaf/60 px-2 py-0.5 text-leaf">{era.label} · {era.range}</span>
        <span className="rounded-full border border-line px-2 py-0.5 text-muted">{film.kind}</span>
      </p>
      <h1 className="mt-3 font-serif text-3xl leading-tight text-gold sm:text-4xl">{film.titleKo}</h1>
      <p className="mt-1 text-muted">{film.titleEn} · {film.year}</p>

      <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_auto]">
        <dl className="grid grid-cols-[6rem_1fr] gap-x-4 gap-y-3 text-sm">
          <dt className="text-muted">개봉 연도</dt><dd>{film.year}년</dd>
          <dt className="text-muted">감독</dt><dd>{film.director}</dd>
          <dt className="text-muted">제작·배급</dt><dd>{film.studio}</dd>
          <dt className="text-muted">타잔</dt>
          <dd><Link href={`/actors/${tarzan.slug}`} className="text-gold underline decoration-line">{tarzan.nameKo}</Link> <span className="text-muted">({tarzan.nameEn})</span></dd>
          <dt className="text-muted">제인</dt>
          <dd>
            {jane ? (
              <><Link href={`/actors/${jane.slug}`} className="text-gold underline decoration-line">{jane.nameKo}</Link> <span className="text-muted">({jane.nameEn})</span></>
            ) : "—"}
            {film.janeNote && <span className="block text-xs text-muted">{film.janeNote}</span>}
          </dd>
          <dt className="text-muted">주요 출연</dt><dd>{film.cast.join(", ")}</dd>
        </dl>
        {image && (
          <figure className="w-48 justify-self-center sm:justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={`${film.titleEn} (${film.year}) 홍보물. 퍼블릭 도메인`} width={image.width} height={image.height} className="h-auto w-full rounded border border-line" loading="lazy" />
            <figcaption className="mt-2 text-[11px] leading-4 text-muted">
              {image.author} · {image.license} ·{" "}
              <a href={image.page} className="underline" target="_blank" rel="noopener noreferrer">위키미디어 공용</a>
            </figcaption>
          </figure>
        )}
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-xl">줄거리</h2>
        <p className="mt-3 leading-8">{film.synopsis}</p>
      </section>

      {film.notes && film.notes.length > 0 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl">알아 두면 좋은 점</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-paper/90">
            {film.notes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </section>
      )}

      <CoupangCard />

      <p className="text-xs text-muted">
        참고: <a href={film.wiki} target="_blank" rel="noopener noreferrer" className="underline">Wikipedia — {film.titleEn}</a>
      </p>

      <nav className="mt-10 grid gap-3 border-t border-line pt-6 text-sm sm:grid-cols-2">
        {prev ? (
          <Link href={`/films/${prev.slug}`} className="rounded border border-line p-3 hover:border-gold">← {prev.year} {prev.titleKo}</Link>
        ) : <span />}
        {next && (
          <Link href={`/films/${next.slug}`} className="rounded border border-line p-3 text-right hover:border-gold">{next.year} {next.titleKo} →</Link>
        )}
      </nav>
    </article>
  );
}
