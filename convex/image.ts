import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const generateUploadUrl = mutation({
  args: {},
  returns: v.string(),
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const saveImage = mutation({
  args: {
    storageId: v.id('_storage'),
    fileName: v.string(),
    contentType: v.optional(v.string()),
  },
  returns: v.object({
    imageId: v.id('image'),
    url: v.union(v.string(), v.null()),
  }),
  handler: async (ctx, args) => {
    const imageId = await ctx.db.insert('image', {
      storageId: args.storageId,
      fileName: args.fileName,
      contentType: args.contentType,
      createdAt: Date.now(),
    });

    const url = await ctx.storage.getUrl(args.storageId);

    return { imageId, url };
  },
});

export const listImages = query(async (ctx) => {
  const images = await ctx.db.query('image').order('desc').collect();

  return Promise.all(
    images.map(async (image) => ({
      ...image,
      url: await ctx.storage.getUrl(image.storageId),
    })),
  );
});