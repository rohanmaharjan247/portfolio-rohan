import * as contentful from 'contentful';

export const client = contentful.createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API ?? '',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
});
