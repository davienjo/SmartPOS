const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

async function reset() {
  console.log("🗑️  Clearing all data...");

  

  await prisma.returnOutwardItem.deleteMany();
  await prisma.returnInwardItem.deleteMany();
  await prisma.returnOutward.deleteMany();
  await prisma.returnInward.deleteMany();
  await prisma.purchaseItem.deleteMany();
  await prisma.saleItem.deleteMany();
  await prisma.purchase.deleteMany();
  await prisma.sale.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.product.deleteMany();
  await prisma.supplier.deleteMany();
  await prisma.user.deleteMany();

  console.log("✅ All data cleared!");
  console.log("🌱 Now run: npm run seed");
}

reset()
  .catch((e) => console.error("Reset failed:", e))
  .finally(() => prisma.$disconnect());
