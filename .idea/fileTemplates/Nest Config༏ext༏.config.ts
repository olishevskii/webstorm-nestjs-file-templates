#set( $CamelCaseName = ${StringUtils.removeAndHump(${NAME}, "-")} )
#set( $configName = $CamelCaseName.substring(0,1).toLowerCase() + $CamelCaseName.substring(1))
import { registerAs } from '@nestjs/config';

export default registerAs('${configName}', () => ({
  #[[$property$]]#: process.env.#[[$variable$]]#,
  #[[$END$]]#
}));