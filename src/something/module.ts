import { createModule } from '@deepkit/app'

import { Config } from '~/config'

import { SomethingConfig } from './config'
import { Service } from './service'

export class SomethingModule extends createModule({
  config: Config,
  providers: [Service],
  exports: [Service],
}) {}
