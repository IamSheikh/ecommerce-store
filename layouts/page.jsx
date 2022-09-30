import Head from 'next/head';

const Page = ({ title, children }) => {
  const fullTitle = `${title} - Babyset Store`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
