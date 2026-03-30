import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center">
        <span className="text-3xl font-bold text-cta">Logo</span>
      </Link>
    </div>
  );
}
