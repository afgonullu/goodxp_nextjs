import GhostContentAPI from '@tryghost/content-api';

import config from '../config';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: config.API_URL,
  key: config.CONTENT_API_KEY,
  version: 'v5.0',
});

const getPosts = async () => {
  const posts = await api.posts.browse({ limit: 'all' });

  return posts;
};

const getSinglePost = async (slug: string) => {
  const post = await api.posts.read({ slug });

  return post;
};

const ghost = {
  getPosts,
  getSinglePost,
};

export default ghost;
