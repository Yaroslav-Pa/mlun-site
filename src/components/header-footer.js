'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

export default function header() {
  const pages = [
    { name: 'Головна', url: '1' },
    { name: 'Події', url: '2' },
    { name: 'Простір', url: '3' },
    { name: 'Контакти', url: '4' },
  ];
  const contacts = [
    { name: faFacebook, url: '1' },
    { name: faInstagram, url: '2' },
    { name: faTelegram, url: '3' },
    { name: faTiktok, url: '4' },
    { name: faWhatsapp, url: '5' },
    { name: faEnvelope, url: '6' },
  ];

  const [showingMenu, setShowingMenu] = useState(false);

  return (
    <header className='text-white'>
      {/* bg for open mobile menu */}
      <div
        className={
          'absolute top-0 left-0 right-0 bottom-0 transition-colors duration-300 md:hidden' +
          (showingMenu
            ? ' bg-[#0a0a0a5b] visible'
            : ' bg-transparent invisible')
        }
      ></div>

      {/* burger menu for mobile */}
      <div className="absolute left-5 top-5 md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-[24px]"
          onClick={() => {
            setShowingMenu(true);
          }}
        />
      </div>

      {/* main nav section */}
      <section
        className={
          'absolute h-[100vh] md:bg-transperent  md:w-fit flex flex-col justify-between left-0 top-0 transition-all duration-300' +
          (showingMenu
            ? ' px-6 py-10 pb-28 z-10 w-[250px] bg-orange-600'
            : ' py-0 px-0 pb-0 md:px-6 md:py-10 md:pb-28 w-0')
        }
      >
        <div className="flex flex-row gap-6">
          <Link
            href="/"
            className={showingMenu ? 'visible' : 'invisible md:visible'}
          >
            <img className="max-w-[150px]" src="./iconWhite.png"></img>
          </Link>
          <div className={showingMenu ? ' md:hidden' : ' hidden'}>
            <FontAwesomeIcon icon={faXmark} className={'text-[24px]'} onClick={() => {
            setShowingMenu(false);
          }} />
          </div>
        </div>

        <nav
          className={
            'flex flex-col gap-3' +
            (showingMenu ? ' visible' : ' invisible md:visible')
          }
        >
          {pages.map(({ name, url }) => (
            <Link key={url} href={url} className="ml-2 hover:text-secondColor">
              {name}
            </Link>
          ))}
        </nav>
        <section
          className={
            'grid grid-cols-3 gap-y-4 justify-center justify-items-center' +
            (showingMenu ? ' visible' : ' invisible md:visible')
          }
        >
          {contacts.map(({ name, url }) => (
            <Link key={url} href={url} className="w-fit">
              <FontAwesomeIcon
                icon={name}
                className="text-[24px] hover:text-secondColor transition-colors"
              />
            </Link>
          ))}
        </section>
      </section>
    </header>
  );
}
