import Navigation from '../navigation/Navigation';
import { page } from '../header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
const pages: page[] = [
  {
    url: './',
    pageName: 'Головна',
  },
  {
    url: './Services',
    pageName: 'Усі послуги',
  },
  {
    url: './Questions',
    pageName: 'Часті питання',
  },
];

const phone = '+38 (096) 555 12 11';
function Footer() {
  return (
    <footer>
      <section className="flex flex-row gap-32 justify-center items-center bg-thierdColor text-white">
        <Navigation
          pages={pages}
          isRow={false}
          isWithBg={false}
          isMainColorForButton={false}
        />
        <div className='flex gap-5 text-xl'>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTelegram} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="font-bold text-small md:text-base">
              <p>{phone}</p>
              <p>{phone}</p>
            </div>
      </section>
    </footer>
  );
}

export default Footer;
