import { photoOf } from "@/data/actorPhotos";

/** 배우 사진. 자유 이용 사진이 없으면 이름 첫 글자 자리표시를 보여 줍니다. */
export function ActorAvatar({ slug, name, size = 64 }: { slug: string; name: string; size?: number }) {
  const photo = photoOf(slug);
  const style = { width: size, height: size };
  if (!photo) {
    return (
      <span
        style={style}
        className="inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-[radial-gradient(circle_at_30%_30%,#1f2a1d,#151b14)] font-serif text-gold/80"
        aria-label={`${name}: 자유 이용 사진 없음`}
        title="자유 이용 라이선스 사진을 찾지 못했습니다"
      >
        <span style={{ fontSize: size * 0.38 }}>{name.slice(0, 1)}</span>
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      alt={`${name} 사진 (${photo.license})`}
      width={size}
      height={size}
      loading="lazy"
      style={style}
      className="shrink-0 rounded-full border border-line object-cover object-top"
    />
  );
}

export function PhotoCredit({ slug }: { slug: string }) {
  const photo = photoOf(slug);
  if (!photo) return <p className="text-[11px] text-muted">자유 이용 라이선스 사진을 찾지 못해 자리표시를 둡니다.</p>;
  return (
    <p className="text-[11px] leading-4 text-muted">
      {photo.note ? `${photo.note} · ` : ""}사진: {photo.author} · {photo.license} ·{" "}
      <a href={photo.page} target="_blank" rel="noopener noreferrer" className="underline">위키미디어 공용</a>
    </p>
  );
}
