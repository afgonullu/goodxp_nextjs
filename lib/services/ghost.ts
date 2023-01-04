import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://blog.goodxp.org',
  key: '3e6dc3f011142c8a94181f88f6',
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
