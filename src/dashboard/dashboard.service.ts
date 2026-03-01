import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}
  async getDashhboard() {
    const totalMenu = await this.prisma.menu.count();

    const latestMenu = await this.prisma.menu.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });

    return {
      totalMenu,
      latestMenu,
    };
  }
}
