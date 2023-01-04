import * as env from 'env-var';

const CONTENT_API_KEY = env.get('NEXT_PUBLIC_CONTENT_API_KEY').required().asString();
const API_URL: string = env.get('NEXT_PUBLIC_API_URL').required().asString();

const config = { CONTENT_API_KEY, API_URL };

export default config;
