#set( $className = ${StringUtils.removeAndHump(${NAME}, "-")} )
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ${className} = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    
    return #[[$END$]]#;
  },
);