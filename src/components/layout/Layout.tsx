import { LayoutProps } from '../../../lib/helpers/props';
import Navbar from '../navbar/Navbar';
import ProfileInfo from '../profile-info/ProfileInfo';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
});
const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`container mx-auto py-16 flex flex-col md:lg:xl:flex-row gap-4 ${roboto.className}`}
    >
      <div className="md:lg:xl:basis-1/5 md:lg:xl:shrink">
        <ProfileInfo />
      </div>
      <div className="md:lg:xl:basis-4/5 md:lg:xl:grow">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
