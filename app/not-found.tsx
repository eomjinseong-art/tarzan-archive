import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl text-gold">길을 잃었습니다</h1>
      <p className="mt-3 text-muted">찾는 페이지가 정글 어딘가로 사라졌습니다.</p>
      <Link href="/" className="mt-6 inline-block underline hover:text-gold">홈으로</Link>
    </div>
  );
}
