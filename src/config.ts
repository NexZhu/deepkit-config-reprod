import { SomethingConfig } from '~/something' // This does not work
// import { SomethingConfig } from '~/something/config' // This works

export class Config {
  something: SomethingConfig = new SomethingConfig()
}
