#set( $className = ${StringUtils.removeAndHump(${NAME}, "-")} )
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ${className}Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    next();
  }
}
