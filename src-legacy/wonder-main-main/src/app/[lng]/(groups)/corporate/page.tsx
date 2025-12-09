import React from 'react';
import Hero from './_components/hero/Hero';
import AboutUs from './_components/aboutUs/AboutUs';
import Proposal from './_components/proposal/Proposal';
import GroupsTypes from './_components/groupsTypes/GroupsTypes';
import Impact from './_components/impact/Impact';
import AddOns from './_components/addOns/AddOns';
import Recognition from './_components/recognition/Recognition';
import Experience from './_components/experience/Experience';
import Reviews from './_components/reviews/Reviews';
import Contact from './_components/contact/Contact';
import AnimatedComponent from './_components/animate/Appear';
import Collage from './_components/collage/Collage';
import { useTranslation } from '@i18n-server';
// import Videos from './_components/videos/Videos';

const CorporatePage = async ({
  params: { lng },
}: {
  params: { lng: string };
}) => {
  const { t } = await useTranslation(lng, 'corporate');

  return (
    <div>
      <Hero t={t} />
      <AboutUs t={t} />
      <Proposal t={t} />
      <GroupsTypes t={t} />
      <Impact t={t} />
      <AddOns t={t} />
      {/* <Videos /> */}
      <Experience t={t} />
      <Recognition t={t} isUniversity />
      <Reviews t={t} />
      <Collage isUniversity />
      <AnimatedComponent>
        <Contact t={t} />
      </AnimatedComponent>
    </div>
  );
};

export default CorporatePage;
