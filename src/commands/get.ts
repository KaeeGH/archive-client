import {Command, flags} from '@oclif/command'
import { cli } from 'cli-ux'
import { Login } from '../APIFuncs/login'
import { validateFrames } from '../APIFuncs/validateFrame'
import { getFrame } from '../APIFuncs/getFrame'
import { writeBinaries } from '../utils/writeBinaries'

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

      validateFrames(firstFrame, lastFrame, flags.camera as string, async (res) => {
        for (const result of res.validation_result) {
          this.log(`frame: ${result[0]}, result: ${result[1]}`)
        }
        const approvalTofetch = await cli.prompt('start fetching ? (y/n)')
        let requestiterator = getFrame(firstFrame, lastFrame, flags.camera as string, token)
        const BinaryArray: Array<ArrayBuffer> = []
        let frameindex: number
        frameindex = firstFrame
        if (approvalTofetch === 'y') {
          for (const request of requestiterator) {
            request
            .then(res => {
                BinaryArray.push(res.data)
                // if fetched all frames
                if (frameindex === firstFrame) {
                    //バイナリデータのインデックスは1からなのでインデックスをずらす
                    writeBinaries(frameindex - BinaryArray.length + 1, BinaryArray)
                } else if (BinaryArray.length === 5) {
                    writeBinaries(frameindex - 4, BinaryArray)
                    //5つまでレスポンスのバイナリデータをバッファリングします
                    //書き出したあとは長さを0にして全部削除します
                    BinaryArray.length = 0
                }
                frameindex += 1
            })
            .catch(err => console.log(err))
          }
        }
      }, token)

    } catch (e) {
      console.log(e.response.statusText)
    }
  }
}
