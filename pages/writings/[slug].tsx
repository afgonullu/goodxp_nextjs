/* eslint-disable react/no-danger */
import type { PostOrPage } from '@tryghost/content-api';

import ghost from '../../lib/services/ghost';

const WritingsPage = ({ post }: { post: PostOrPage }) => {
  console.log('post', post);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default WritingsPage;

export async function getStaticPaths() {
  const posts = await ghost.getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const post = await ghost.getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 3600,
  };
}
