import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  image: defineTable({
    storageId: v.id('_storage'),
    fileName: v.string(),
    contentType: v.optional(v.string()),
    createdAt: v.number(),
  }),
});