import { Config } from '~/config'

export class Service {
  constructor(private config: Config['something']) {
    console.log(config.str)
  }
}
