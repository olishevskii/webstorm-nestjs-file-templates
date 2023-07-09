#set( $className = ${StringUtils.removeAndHump(${NAME}, "-")} )
#set( $tagName = ${StringUtils.capitalizeFirstLetter( ${StringUtils.sub(${NAME}, "-", " ")} )} )
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('${tagName}')
@Controller('${NAME}')
export class ${className}Controller {
  constructor() {}
}