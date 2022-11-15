import { client } from '@/lib/api';
import { Response } from '@/types/api';

export default function Schedule() {
  return <h1>記事タイトル</h1>;
}

export async function getStaticProps() {
  const resPromise = client.get<Response>({
    endpoint: 'blogs',
  });

  try {
    const res = await resPromise;
    console.log(res.contents[0].title);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {},
  };
}
