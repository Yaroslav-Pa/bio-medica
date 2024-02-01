import { LatLngTuple } from 'leaflet';

type ImageForSlider = {
  id: number;
  title: string;
  description: string;
  buttonUrl: string;
  imgSrc: string;
};

export type MapLocation = {
  address: string;
  coordinates: LatLngTuple;
  phone: string;
  schedule: {
    weekdays: string;
    saturday?: string;
  };
};

type MyData = {
  imagesForSlider: ImageForSlider[];
  phones: string[];
  map: Record<string, MapLocation[]>;
};

export const Change: MyData = {
  imagesForSlider: [
    {
      id: 1,
      title: 'ПАКЕТ АНАЛІЗІВ "ПРЕДОПЕРАЦІЙНИЙ"',
      description:
        'Тільки у нас Ви можете зробити все дослідження з гарантією якості!',
      buttonUrl: 'https://nikolab.com.ua/uk/',
      imgSrc: 'https://nikolab.com.ua/wp-content/uploads/2023/10/01.jpg.webp',
    },
    {
      id: 2,
      title: 'ПАКЕТ АНАЛІЗІВ "ОПЕРАЦІЙНИЙ"',
      description:
        'Тільки у нас Ви можете зробити все дослідження з гарантією якості!',
      buttonUrl: 'https://nikolab.com.ua/uk/',
      imgSrc:
        'https://nikolab.com.ua/wp-content/uploads/2022/09/slide2-min.jpg.webp',
    },
  ],
  phones: ['+38(096) 201 23 45', '+38(090) 123 12 33'],
  map: {
    'м. Запоріжжя': [
      {
        address: 'вул. Новокузнецька, 20А (ПІСКИ «РОМАКС»)',
        coordinates: [47.777880992849404, 35.185136087056755],
        phone: '+38 (067) 612-81-12',
        schedule: {
          weekdays: 'пн-пт: 7:30-14:00',
          saturday: 'сб: 7:30-13:00',
        },
      },
      {
        address: 'вул. Патріотична, 56 Б (Алея троянд)',
        coordinates: [47.838514629221834, 35.129974399138845],
        phone: '+38 (066) 960-58-60',
        schedule: {
          weekdays: 'пн-пт: 8:00-13:00',
          saturday: 'сб: 8:00-12:00',
        },
      },
      {
        address: 'вул. Північно-Кільцева, 7 (КОСМОС район Варуса)',
        coordinates: [47.78591764537749, 35.2168867437514],
        phone: '+38 (099) 374-83-67',
        schedule: {
          weekdays: 'пн-пт: 8:00-13:00',
          saturday: 'сб: 8:00-12:00',
        },
      },
      {
        address: 'вул. Авраменко, 3 (Шевченківський м-н Лікарня №',
        coordinates: [47.84888973102916, 35.23780389673298],
        phone: '+38 (099) 374-84-69',
        schedule: {
          weekdays: 'пн-сб: 8:00-12:00',
        },
      },
      {
        address: 'пр-т Соборний, 84 (пл. Університетська)',
        coordinates: [47.81930258928428, 35.17409477967007],
        phone: '+38 (050) 664-74-98',
        schedule: {
          weekdays: 'пн-сб: 8:00-12:00',
        },
      },
      {
        address: 'вул. Запорізька, 13 (МАЛИЙ РИНОК)',
        coordinates: [47.824795800386795, 35.16296707951566],
        phone: '+38 (066) 010-67-09',
        schedule: {
          weekdays: 'пн-пт: 8:00-13:00',
          saturday: 'сб: 8:00-12:00',
        },
      },
      {
        address: 'Ладозька, 22 (Правий берег район АМСТОРУ)',
        coordinates: [47.8867828915093, 35.07038814821203],
        phone: '+38 (099) 395-90-18',
        schedule: {
          weekdays: 'пн-пт: 7:30-14:30',
          saturday: 'сб: 8:00-12:00',
        },
      },
    ],
    'м. Покровськ': [
      {
        address: 'вул. Шахтобудівників, 32',
        coordinates: [48.27075108573006, 37.17954621957571],
        phone: '+38 (099) 395-90-18',
        schedule: {
          weekdays: 'пн.- сб. 8:00 - 12:00',
        },
      },
    ],
  },
};
