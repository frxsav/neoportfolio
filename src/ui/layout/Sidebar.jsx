'use client';

import { useTranslations } from 'next-intl';
import { navigation } from '@/lib/data';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

import { useState } from 'react';

export default function Sidebar() {
  const t = useTranslations('sidebar');

  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div className="flex flex-col col-span-3 bg-primary-strong/50 backdrop-blur-md border border-secondary-strong/50 overflow-hidden rounded-xl mr-4 h-fit">
      <p className="uppercase text-sm font-semibold font-pokemon tracking-pokemon bg-primary/75 backdrop-blur-sm text-ctext p-4 rounded-t-xl border-2 border-b-0 border-primary">
        {t('navigation.navigation')}
      </p>
      <ul className="flex flex-col">
        {navigation.map((link, i) => (
          <li
            key={i}
            className="text-secondary font-semibold flex gap-4 last:border-0 border-b border-b-secondary/30">
            {link.items?.length > 0 ? (
              <div className="flex flex-col w-full">
                <div
                  className="flex flex-row p-2 py-4 gap-2 hover:bg-secondary-strong group cursor-pointer"
                  onClick={() => toggleItem(i)}>
                  <div
                    className={`text-yellow text-[10px] ${openItems[i] ? 'rotate-180' : 'rotate-90'}`}>
                    &#9650;
                  </div>
                  <p className="font-pokemon text-secondary text-sm tracking-pokemon pl-2 group-hover:text-primary">
                    {t(`navigation.${link.name}`)}
                  </p>
                </div>
                <ul
                  className={`w-full flex flex-col gap-1 overflow-hidden transition-all duration-300 ${openItems[i] ? 'max-h-96' : 'max-h-0'}`}>
                  {link.items.map((item, j) => (
                    <li key={j} className="rounded-sm w-full">
                      <Link
                        href={item.href}
                        className="text-xs flex pl-4 py-2 gap-2 hover:bg-secondary-strong hover:text-primary">
                        <Image
                          src={item.icon}
                          width={20}
                          height={20}
                          alt={`${item.name} icon`}
                          className="animate-bob-1"
                        />
                        {t(`navigation.${item.name}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                className="text-sm flex gap-4 p-2 hover:bg-secondary-strong hover:text-primary w-full py-4"
                href={link.href}>
                <div className="text-yellow rotate-90 text-[10px]">&#9650;</div>
                {t(`navigation.${link.name}`)}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
