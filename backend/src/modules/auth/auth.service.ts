import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { supabase, supabaseAdmin } from 'src/config/database.config';
import { ForgetPasswordDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly JWTService: JwtService) {}

  async validateUser(email: string, password: string) {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      if (
        error.status === 400 &&
        error.message.includes('Invalid login credentials')
      ) {
        throw new UnauthorizedException('Wrong email or password');
      }

      if (
        error.status === 400 &&
        error.message.includes('Email not confirmed')
      ) {
        throw new ForbiddenException('Email not confirmed');
      }

      throw new InternalServerErrorException('Internal Error' + error);
    }
    if (!data.user) {
      throw new UnauthorizedException('User not found');
    }
    const user = data.user;
    // DEBUG LOGS - remove after verification
    console.log('[Auth] SUPABASE_URL:', process.env.SUPABASE_URL);
    console.log('[Auth] login user.id:', user.id, 'email:', user.email);
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('users')
      .select('avatar_url, role_id')
      .eq('id', user.id)
      .single();
    console.log('[Auth] db profile:', profile);
    if (profileError)
      throw new InternalServerErrorException(
        'Internal Server Error: ' + profileError.message,
      );

    return {
      ...user,
      role_id: profile?.role_id ?? null,
      avatar_url: profile?.avatar_url ?? null
    };
  }

  async getAuthenticated(user: any) {
    const payload = { sub: user.id };
    return {
      access_token: this.JWTService.sign(payload),
      user,
    };
  }

  async forgetPassword(model: ForgetPasswordDto){

  }
}
