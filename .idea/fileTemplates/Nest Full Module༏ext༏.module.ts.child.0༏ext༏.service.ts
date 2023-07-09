#set( $className = ${StringUtils.removeAndHump(${NAME}, "-")} )
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ${className}Service {
  private readonly logger = new Logger(${className}Service.name)  
  
  constructor() {}
}