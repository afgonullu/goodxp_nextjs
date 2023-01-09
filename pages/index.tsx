import ghost from '../lib/services/ghost';

const Home = ({ posts }: { posts: any }) => (
  <div>
    {posts.map((post: any) => (
      <p>{post.title}</p>
    ))}
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
