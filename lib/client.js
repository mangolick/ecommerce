import sanityClient from '@sanity/Client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '5iyraju5',
    dataset: 'production',
    apiVersion: '2022-11-08',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

 const builder = imageUrlBuilder(client);

 export const urlFor = (source) => builder.image (source);
