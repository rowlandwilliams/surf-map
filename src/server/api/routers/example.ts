import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    console.log("too", ctx.prisma.surfSpot.findMany());
    return ctx.prisma.surfSpot.findMany();
  }),
});
