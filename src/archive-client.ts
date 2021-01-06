#! /usr/bin/env node
import * as readline from 'readline';
import {Login} from './APIFuncs/login';
import {getFrame} from './APIFuncs/getFrame';
import {writeBinaries} from './utils/writeBinaries';
import {ParseArgv} from './utils/ParseArgv';

function main(): void {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //set stdin as email
    rl.question("email:\n", (email) => {
        console.log("email:", email);
        //set stdin as password
        rl.question('password: \n', (pass) => {
            console.log("pass:", pass)
            Login(email, pass)
            .then(res => {
                console.log('Authorized! \n')
                //parse commandline arg and set frame index and sensorid
                const [FrameData, SensorId] = ParseArgv()
                let requestiterator = getFrame(FrameData.startFrame, FrameData.endFrame, SensorId, res.data)
                const BinaryArray: Array<ArrayBuffer> = []
                let frameindex: number
                frameindex = FrameData.startFrame
                for (const request of requestiterator) {
                    request
                        .then(res => {
                            BinaryArray.push(res.data)
                            // if fetched all frames
                            if (frameindex === FrameData.endFrame) {
                                //バイナリデータのインデックスは1からなのでインデックスをずらす
                                writeBinaries(frameindex - BinaryArray.length + 1, BinaryArray)
                            } else if (BinaryArray.length === 5) {
                                writeBinaries(frameindex - 4, BinaryArray)
                                //5つまでレスポンスのバイナリデータをバッファリングします
                                //書き出したあとは長さを0にして全部削除します
                                BinaryArray.length = 0
                            }
                            frameindex += 1
                            console.log(BinaryArray)
                        })
                        .catch(err => console.log(err))
                }
            }
            )
            .catch(err => console.log('erronlogin'))
            rl.close();
        });
    });
}

main()
