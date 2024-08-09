import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guard...');
    const request = context.switchToHttp().getRequest();
    const isAuth = request.headers.authorization === 'secret';

    if (!isAuth) {
      throw new UnauthorizedException('Не авторизован');
    }

    return isAuth;
  }
}
