'use client';

import { useTranslations } from 'next-intl';
import { navigation } from '@/lib/data';
import { Link } from '@/i18n/navigation';

import { useState } from 'react';

export default function Sidebar() {
  const t = useTranslations('sidebar');

  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div className="flex flex-col col-span-3 p-4 bg-primary-strong/50 backdrop-blur-md border-r border-secondary-strong/50 overflow-hidden">
      <p className="text-xl font-pokemon tracking-pokemon bg-primary/75 backdrop-blur-sm text-secondary p-4">
        Navigazione
      </p>
      <ul className="flex flex-col">
        {navigation.map((link, i) => (
          <li
            key={i}
            className="p-2 text-secondary font-semibold flex gap-4 py-6 border-b last:border-none border-primary">
            {link.items?.length > 0 ? (
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <div
                    className={`text-yellow text-xs  transition-all duration-300 ${openItems[i] ? 'rotate-180' : 'rotate-90'}`}>
                    &#9650;
                  </div>
                  <p
                    onClick={() => toggleItem(i)}
                    className="cursor-pointer font-pokemon tracking-pokemon pl-2">
                    {t(`navigation.${link.name}`)}
                  </p>
                </div>
                <ul
                  className={`flex flex-col gap-2 overflow-hidden ${openItems[i] ? 'max-h-96 pt-4' : 'max-h-0'} transition-all duration-300`}>
                  {link.items.map((item, j) => (
                    <li key={j}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="text-yellow rotate-90 text-xs">&#9650;</div>
                <Link className="pl-2" href={link.href}>
                  {t(`navigation.${link.name}`)}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
