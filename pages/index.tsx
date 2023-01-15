import Link from 'next/link';

import ghost from '../lib/services/ghost';

const Home = ({ posts }: { posts: any }) => (
  <div>
    <ul>
      {posts.map((post: any) => (
        <Link href={`/writings/${post.slug}`} key={post.id}>
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Home;

export async function getStaticProps() {
  const posts = await ghost.getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}
