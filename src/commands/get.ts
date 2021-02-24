import {Command, flags} from '@oclif/command'
import { cli } from 'cli-ux'
import { Login } from '../APIFuncs/login'
import { validateFrames } from '../APIFuncs/validateFrame'

export default class get extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ archive-client get`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),

    camera: flags.string({char: 'c', description: 'camera id', required: true})
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(get)

    const email = await cli.prompt('email')

    const pass = await cli.prompt('password')

    this.log(`email: ${email}, password: ${pass}, camera: ${flags.camera}`)

    try {
      const token = await (await Login(email, pass)).data

      this.log(`token: ${token}`)

      const firstFrame = await cli.prompt('first frame')

      const lastFrame = await cli.prompt('last frame')

      validateFrames(firstFrame, lastFrame, flags.camera as string, (res) => {
        for (const result of res.validation_result) {
          this.log(`frame: ${result[0]}, result: ${result[1]}`)
        }
      }, token)
    } catch (e) {
      console.log(e.response.statusText)
    }
  }
}
