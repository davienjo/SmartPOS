const { PrismaClient } = require("./generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  const existing = await prisma.user.findUnique({
    where: { email: "admin@smartpos.com" },
  });

  if (existing) {
    console.log("✅ Admin already exists! Skipping.");
    return;
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.create({
    data: {
      name: "Shop Owner",
      email: "admin@smartpos.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  const cashierPassword = await bcrypt.hash("cashier123", 10);

  const cashier = await prisma.user.create({
    data: {
      name: "John Cashier",
      email: "cashier@smartpos.com",
      password: cashierPassword,
      role: "cashier",
    },
  });

  console.log(`
  ✅ Database seeded successfully!

  👑 ADMIN LOGIN:
     Email:    admin@smartpos.com
     Password: admin123
     Access:   Everything

  💼 CASHIER LOGIN:
     Email:    cashier@smartpos.com
     Password: cashier123
     Access:   POS only
  `);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    // Always disconnect when done
    await prisma.$disconnect();
  });
