#! /usr/bin/env node
import * as readline from 'readline';
import {Login} from './APIFuncs/login';
import {getFrame} from './APIFuncs/getFrame';
import {ParseArgv} from './utils/ParseArgv';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("email:\n", (email) => {
    console.log("email:", email);
    rl.question('password: \n', (pass) => {
        console.log("pass:", pass)
        Login(email, pass)
        .then(res => {
            console.log('Authorized! \n')
            const [FrameData, SensorId] = ParseArgv()
            getFrame(FrameData.startFrame, FrameData.endFrame, SensorId, res.data)
            .then((binArray) => console.log(binArray))
        }
        )
        .catch(err => console.log('erronlogin'))
        rl.close();
    });
});

//console.log(ParseArgv())
