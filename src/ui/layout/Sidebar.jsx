import { useTranslations } from 'next-intl';
import { navigation } from '@/lib/data';
import { Link } from '@/i18n/navigation';

export default function Sidebar() {
  const t = useTranslations('sidebar');
  return (
    <div className="flex flex-col col-span-3 p-4 bg-primary-strong/50 backdrop-blur-md border-r border-secondary-strong/50 overflow-hidden">
      <p className="text-xl font-pokemon tracking-pokemon bg-primary/75 backdrop-blur-sm text-secondary p-4">
        Navigazione
      </p>
      <ul className="flex flex-col">
        {navigation.map((link, i) => (
          <li
            key={i}
            className="p-2 text-secondary font-semibold flex gap-2 items-center py-6 active:bg-secondary/75 active:text-primary border-b last:border-none border-primary">
            <div className="h-3 w-3 bg-green" />
            <div className="h-3 w-3 bg-yellow" />
            <Link href={link.href}>{t(`navigation.${link.name}`)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
