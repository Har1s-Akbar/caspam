import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'hyofx9c3',
    useCdn: true,
    apiVersion: '2022-08-08',
    dataset: 'production',
    token: process.env.SANITY_NEXT_API_KEY
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)