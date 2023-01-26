import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    console.log("too", ctx.prisma.surfSpot.findMany());
    return ctx.prisma.surfSpot.findMany();
  }),
  addSurfSpot: publicProcedure
    .input(
      z.object({
        name: z.string(),
        latitude: z.number(),
        longitude: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.surfSpot.create({ data: input });
      } catch (error) {
        console.error(error);
      }
    }),
});

// [...]
