import Link from "next/link";
import { actorBySlug, actors } from "@/data/actors";
import { actorPhotos } from "@/data/actorPhotos";
import { films } from "@/data/films";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "출처와 이미지 정보",
  description: "타잔 아카이브가 참고한 자료, 실린 퍼블릭 도메인 이미지의 출처와 라이선스, 넣지 않은 작품을 정리했습니다.",
  path: "/credits",
});

export default function CreditsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-serif text-3xl text-gold">출처와 이미지 정보</h1>

      <section className="mt-8">
        <h2 className="font-serif text-xl">참고 자료</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
          <li><a className="underline" href="https://en.wikipedia.org/wiki/Tarzan_in_film,_television_and_other_non-print_media" target="_blank" rel="noopener noreferrer">Wikipedia — Tarzan in film, television and other non-print media</a></li>
          <li>각 영화·배우의 Wikipedia 문서 (각 페이지 하단에 링크)</li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-muted">감독·출연·연도는 위 자료의 정보 상자와 출연진 목록을 기준으로 했습니다. 줄거리는 한국어로 짧게 새로 썼습니다. {films.length}편 모두 원문 링크를 달았습니다.</p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl">넣지 않은 작품</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-muted">
          <li>《Tarzan of the Apes》(1999, 소니 원더 비디오 애니메이션): 감독·성우 정보를 확인하지 못했습니다.</li>
          <li>《Tarzan&apos;s Jungle Rebellion》(1967, 론 일리 TV 에피소드 극장판): 세부 정보를 확인하지 못해 <Link href="/tv" className="underline">TV 시리즈</Link> 설명에만 적었습니다.</li>
          <li>《Tarzan and the Green Goddess》(1938): 1935년 연속극을 다시 편집한 판이라 원작 항목에 함께 적었습니다.</li>
          <li>버로스 측의 허락 없이 해외에서 만든 비공인 타잔 영화들.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl">이미지</h2>
        <p className="mt-3 text-sm leading-7 text-muted">위키미디어 공용에서 퍼블릭 도메인으로 분류된 초기 홍보물만 실었습니다. 2026년 11월 15일 각 파일 페이지의 라이선스를 확인했습니다. 저작권이 남은 포스터와 영화 스틸은 쓰지 않습니다.</p>
        <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-card text-sm">
          {images.map((img) => {
            const film = films.find((f) => f.image === img.key);
            return (
              <li key={img.key} className="px-4 py-3">
                <a href={img.page} target="_blank" rel="noopener noreferrer" className="underline">{img.file}</a>
                <span className="block text-xs text-muted">{film ? `${film.year} ${film.titleKo}` : ""} · {img.author} · {img.license}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl">배우 사진</h2>
        <p className="mt-3 text-sm leading-7 text-muted">위키미디어 공용에서 퍼블릭 도메인, CC0, CC BY, CC BY-SA로 공개된 사진만 실었습니다. CC BY·CC BY-SA 사진은 저작자와 라이선스를 함께 적습니다. 2026년 11월 15일 각 파일 페이지의 라이선스를 확인했습니다.</p>
        <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-card text-sm">
          {actorPhotos.map((photo) => (
            <li key={photo.slug} className="px-4 py-3">
              <a href={photo.page} target="_blank" rel="noopener noreferrer" className="underline">{photo.file}</a>
              <span className="block text-xs text-muted">{actorBySlug(photo.slug)?.nameKo} · {photo.author} · {photo.license}{photo.note ? ` · ${photo.note}` : ""}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          자유 이용 사진을 찾지 못해 자리표시를 둔 배우:{" "}
          {actors.filter((a) => !actorPhotos.some((p) => p.slug === a.slug)).map((a) => a.nameKo).join(", ")}
        </p>
      </section>
    </div>
  );
}
