import { makeFunctionReference } from 'convex/server';

export const api = {
  image: {
    generateUploadUrl: makeFunctionReference('image:generateUploadUrl'),
    saveImage: makeFunctionReference('image:saveImage'),
  },
} as const;