#set( $className = ${StringUtils.removeAndHump(${NAME}, "-")} )
import {HttpException, HttpStatus} from '@nestjs/common';

export class ${className}Exception extends HttpException {
  constructor() {
    super('Bad request', HttpStatus.BAD_REQUEST);
  }
}