import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <p>
          このサイトは静的サイト生成によってビルド時に生成されたページです。
        </p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];

  // MEMO: fallbackをfalseで、paths定義されたもの以外は404となる
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const id = Array.isArray(context.params!["id"])
    ? context.params!["id"][0]
    : (context.params!["id"] as string);
  return {
    props: {
      id: id,
    },
  };
};

export default Post;
