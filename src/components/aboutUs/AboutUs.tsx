'use client';
import InfoBlock from './block/Block';
import {
  faUserLarge,
  faUserDoctor,
  faVialCircleCheck,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

const blocs = [
  {
    text: 'Пациентів',
    number: 5000,
    img: faUserLarge,
    styleRounded: 'rounded-tl-xl',
  },
  {
    text: 'Докторів',
    number: 100,
    img: faUserDoctor,
    styleRounded: 'rounded-tr-xl',
  },
  {
    text: 'Нагород',
    number: 5000,
    img: faTrophy,
    styleRounded: 'rounded-bl-xl',
  },
  {
    text: 'Тестів',
    number: 100,
    img: faVialCircleCheck,
    styleRounded: 'rounded-br-xl',
  },
];

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <section className="max-w-containerWidth flex flex-col gap-10 p-8">
        <article className="flex flex-col mdp:flex-row justify-center items-center gap-24">
          <div className="flex flex-col gap-5 max-w-[500px] text-base lg:text-medium">
            <h1 className="text-xl font-bold">Про нас</h1>
            <h2 className="text-medium lg:text-large">Медична лабораторія</h2>
            <p className="font-light">
              Ми спеціалізуємося на проведенні лабораторних досліджень
              найрізноманітніших аналітів: крові, сечі, калу, ліквору, мокроти,
              сперми, мазків та багато, багато іншого. Наша лабораторія виконує
              біохімічні, гематологічні, імунологічні, генетичні,
              бактеріологічні, гістологічні та інші дослідження за
              демократичними цінами в короткий термін. Допоможемо визначити
              рівень гормонів, виявити збудника алергії чи захворювання,
              зрозуміти причини зміни вашого самопочуття. З нами діагностика –
              це швидко, вигідно та надійно.
            </p>
            {/* <a href='' className="text-small font-light underline">
                Читати
              </a> */}
          </div>
          <div className="grid grid-cols-2 grid-rows-2  gap-1 min-w-fit items-center">
            {blocs.map(({ text, number, img, styleRounded }) => (
              <InfoBlock
                key={text}
                text={text}
                number={number}
                img={img}
                styleRounded={styleRounded}
              />
            ))}
          </div>
        </article>
        {/* <div className="flex justify-center items-center">
          <YouTubeVideo videoId={'stUyuEVZlU4'} />
        </div> */}
      </section>
    </div>
  );
}

export default AboutUs;
