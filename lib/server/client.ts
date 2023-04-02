import { PrismaClient } from "@prisma/client";

// Prisma에서 client를 사용하여 DB를 조작할 때 마다 client를 새롭게 생성하게 되는데
// 이를 방지하기 위해 사용

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}
//@ts-ignore
export default prisma;
