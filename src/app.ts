#!/usr/bin/env ts-node-script
import 'module-alias/register'

import { App } from '@deepkit/app'
import { FrameworkModule } from '@deepkit/framework'

import { Config } from '~/config'
import { Service, SomethingModule } from '~/something'

export const app = new App({
  config: Config,
  imports: [new FrameworkModule(), new SomethingModule()],
}).loadConfigFromEnv({ envFilePath: ['.env.local', '.env'] })

setTimeout(() => {
  app.get<Service>()
}, 5000)

app.run()
