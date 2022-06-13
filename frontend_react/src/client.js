import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'm8qlsdcm',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: 'true',
  token:
    'skZXH9Sk1hUAemTzrFt6QMS5J7N9UayAtVwlDOEjRPgXNSwbNpBznqolSVSK1OHf8XunwVP502pyesK8OClsZcp3csTPWpSsM1CUFGoDDCWd6NlSdmr4TV8oEG2ZU9CGa7wileRQZdCBBY6671mCl2nZv1JvfvhKZYv31V2Qnbqenz2hiP3K',
})