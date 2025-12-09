import styles from './Section.module.scss';
import { useTranslation } from '@i18n-server';
import { Fragment } from 'react';
import ScrollLink from '@components/ScrollLink/ScrollLink';
import useGetLanguage from '@hooks/useGetLanguaje';
interface ISections {
  sections: {
    ariaLabel: string;
    idNavegation: string;
    text: string;
  }[];
}
const Sections = async ({ sections }: ISections) => {
  const lng = useGetLanguage();
  const { t } = await useTranslation(lng, 'itinerary');
  const trans = (value: string) => t(`navbar.${value}`);
  return (
    <div className={styles.sections} id=''>
      {sections.map(({ ariaLabel, idNavegation, text }, i, data) => {
        const elem =
          typeof window !== 'undefined' &&
          document.getElementById(idNavegation);

        // Obtener las coordenadas del elemento
        const rect = elem && elem?.getBoundingClientRect();

        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        let middleY = 0;
        if (rect) {
          middleY = rect.top + scrollY - window.innerHeight / 2;
        }
        return (
          <Fragment key={i}>
            <ScrollLink
              top={middleY}
              aria-label={ariaLabel}
              href={'/#' + idNavegation}
            >
              {trans(text)}
            </ScrollLink>
            {i !== data.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Sections;
