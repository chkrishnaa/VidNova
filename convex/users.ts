import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .unique();

    if (existingUser) {
      return existingUser; // ✅ already full Doc<"users">
    }

    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      pictureUrl: args.pictureUrl,
      credits: 3,
    });

    // ✅ Fetch full inserted document
    const newUser = await ctx.db.get(userId);

    return newUser!;
  },
});
