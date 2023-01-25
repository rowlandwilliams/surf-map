import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const surfspot = await prisma.surfSpot.create({
    data: { name: "Suh", latitude: 41.44, longitude: 22.3 },
  });
  console.log(surfspot);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
