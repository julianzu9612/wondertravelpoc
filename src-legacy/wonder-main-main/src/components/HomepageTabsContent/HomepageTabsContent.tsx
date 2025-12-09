import { CWonderLines } from '../../constants';
// models
import { IHomepageTabsContent } from './HomepageTabsContent.model';
// styles
import HomepageTabsContentTab from './HomepageTabsContentTab';

const HomepageTabsContent = ({ allTrips }: IHomepageTabsContent) => {
  return <HomepageTabsContentTab tab={CWonderLines[0]} allTrips={allTrips} />;
};

export default HomepageTabsContent;
