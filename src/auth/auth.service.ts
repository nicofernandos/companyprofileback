import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const admin = await this.prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) throw new UnauthorizedException('Admin tidak ditemukan');

    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) throw new UnauthorizedException('Password salah');

    const payload = {
      sub: admin.id,
      username: admin.username,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
