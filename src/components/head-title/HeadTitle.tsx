import { HeadProps } from '@/helpers/props';
import Head from 'next/head';

const HeadTitle = ({ title }: HeadProps) => {
  return (
    <Head>
      <title>{`${title} - Resumé`}</title>
    </Head>
  );
};

export default HeadTitle;
