import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function header() {
  const pages = [
    { name: 'Головна', url: 'www.google.com' },
    { name: 'Події', url: 'www.google.com' },
    { name: 'Простір', url: 'www.google.com' },
    { name: 'Контакти', url: 'www.google.com' },
  ];
  const contacts = [
    { name: faFacebook, url: 'www.google.com' },
    { name: faInstagram, url: '' },
    { name: faTelegram, url: '' },
    { name: faTiktok, url: '' },
    { name: faWhatsapp, url: '' },
    { name: faEnvelope, url: '' },
  ];

  return (
    <header className="h-[100vh] bg-red-700 px-6 py-10 pb-28 w-fit flex flex-col justify-between">
      <Link href='/'>
        <img className="max-w-[150px]" src="./icon-white.svg" ></img>
      </Link>
      <nav className='flex flex-col gap-3'>
        {pages.map(({ name, url }) => (
          <Link key={name} href={url} className='ml-2 hover:text-secondColor'>{name}</Link>
        ))}
      </nav>
      <section className='grid grid-cols-3 gap-y-4 justify-center justify-items-center'>
        {contacts.map(({ name, url }) => (
          <Link key={name} href={url} className='w-fit'>
            <FontAwesomeIcon icon={name} className="text-[24px] hover:text-secondColor transition-colors" />
          </Link>
        ))}
      </section>
    </header>
  );
}
