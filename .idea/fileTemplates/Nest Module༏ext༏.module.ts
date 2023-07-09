#set( $className = ${StringUtils.removeAndHump(${NAME}, "-")} )
import { Module } from '@nestjs/common';

@Module({#[[$END$]]#})
export class ${className}Module {}