import Link from 'next/link';

export default function LegalLinks() {
  return (
    <div className="flex flex-col text-sm text-secondary pt-4 gap-3">
      <p className="font-bold pb-2 text-lg uppercase">
        Legal Links
      </p>
      <Link
        href="/privacy-policy"
        className="text-muted hover:underline underline-offset-4 rounded-md font-medium transition-colors">
        Privacy Policy
      </Link>
      <Link
        href="/terms-of-service"
        className="text-muted hover:underline underline-offset-4 rounded-md font-medium transition-colors">
        Terms of Service
      </Link>
      <Link
        href="/cookie-policy"
        className="text-muted hover:underline underline-offset-4 rounded-md font-medium transition-colors">
        Cookie Policy
      </Link>
    </div>
  );
}
