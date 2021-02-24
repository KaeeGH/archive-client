import {Command, flags} from '@oclif/command'
import { cli } from 'cli-ux'

export default class get extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ archive-client get`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),

    camera: flags.string({char: 'c', description: 'camera id'})
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(get)

    const email = await cli.prompt('email')

    const pass = await cli.prompt('password')

    this.log(`email: ${email}, password: ${pass}, camera: ${flags.camera}`)
  }
}
