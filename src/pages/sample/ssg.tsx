import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generate</title>
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたものです。</p>
      </main>
    </div>
  );
};

/**
 * MEMO
 * SSG（Static Site Generation）はビルド時にAPIからデータを取得し、ページを描写、静的ファイルとして保持する
 *
 * getStaticPropsを非同期関数として定義し、exportする事でSSGを作成できる
 */
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました。`;
  console.log(message);

  // MEMO: 返却するpropsを定義。これを元にページコンポーネントを描写する
  return {
    props: {
      message,
    },
  };
};

export default SSG;
