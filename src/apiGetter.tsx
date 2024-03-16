import axios from 'axios';
import { CardSectionType } from './components/namedSections/namedSectionCards/NamedSectionCards';
import { CardType } from './components/card/Card';

export const getFromApi = (
  url: string,
  setter: Function,
  mapper?: (data: TransformSectionsPayload) => CardSectionType[]
) => {
  axios
    .get(url)
    .then((res) => {
      setter(mapper ? mapper(res.data.story.content) : res.data.story.content);
    })
    .catch(({ message }: { message: string }) => {
      console.log(message);
    });
};

type SectionPayload = CardSectionType & { services: string };

type TransformSectionsPayload = {
  Sections: SectionPayload[];
};

export const transformSections = (data: TransformSectionsPayload) => {
  const sections = data.Sections;
  const transformServices = (services: string) => {
    const lines = services.split('\n');
    const cards: CardType[] = [];

    lines.forEach((line, index) => {
      const [name, price, days] = line.split('\t');
      if (name === undefined || days === undefined || price === undefined)
        return;
      cards.push({
        Name: name.trim(),
        Days: days.trim(),
        Price: price.trim(),
        _uid: name.trim() + index,
      });
    });

    return cards;
  };

  return sections.map((section) => ({
    ...section,
    services: transformServices(section.services) || [],
  }));
};
