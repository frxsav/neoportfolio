import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex flex-row space-x-6 py-4">
      <Link href="https://facebook.com" className="text-3xl text-cta">
        <FaFacebook></FaFacebook>
      </Link>
      <Link href="https://instagram.com" className="text-3xl text-cta">
        <FaInstagram></FaInstagram>
      </Link>
      <Link href="https://tiktok.com" className="text-3xl text-cta">
        <FaTiktok></FaTiktok>
      </Link>
    </div>
  );
}
