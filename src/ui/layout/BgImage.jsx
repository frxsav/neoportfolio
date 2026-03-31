import Image from 'next/image';

export default function BgImage() {
  return <Image src={'/images/noise.jpg'} fill alt="Rumore di background" />;
}
