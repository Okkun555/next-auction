import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリング（SSR）によってアクセス時にサーバー描写されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// MEMO: getServerPropsはりクエストがある度に実行される
export const getServerProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にこのページのgetServersSidePropsが実行`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
