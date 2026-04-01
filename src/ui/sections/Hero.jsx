import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  return (
    <section className="min-w-full flex flex-col h-full bg-primary/75 backdrop-blur-sm border-t border-b border-secondary py-4">
      <div className="flex items-center gap-4">
        <Image
          src={'/images/italy-flag.webp'}
          width={200}
          height={200}
          alt="immagine del cazzo"
        />
        <p className="text-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          <span className="text-secondary font-bold">
            {' '}
            scrambled it to make a type specimen book
          </span>
        </p>
      </div>
      <div className='h-1 w-full bg-contrast-yellow mt-4'/>
      <div className='h-1 w-full bg-contrast-green mt-4'/>
    </section>
  );
}
