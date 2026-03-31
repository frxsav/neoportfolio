import Image from 'next/image';

export default function BgImage() {
  return (
    // <div className="fixed z-0 top-0 left-0 min-w-full min-h-screen bg-[url('/images/noise.jpg')] bg-no-repeat bg-cover bg-center bg-fixed" />

    <Image
      src={'/images/noise.jpg'}
      fill
      alt="bg image"
      className=""
    />
  );
}
