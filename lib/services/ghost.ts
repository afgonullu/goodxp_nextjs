import GhostContentAPI from '@tryghost/content-api';
import config from '../config';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: config.API_URL,
  key: config.CONTENT_API_KEY,
  version: 'v5.0',
});

async function getPosts() {
  const posts = await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });

  return posts;
}

const ghost = {
  getPosts,
};

export default ghost;
