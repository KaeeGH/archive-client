import axios from 'axios';
import { config } from 'process';
import * as fs from 'fs';

export function* getFrame(startFrame: number, endFrame: number, sensorId: string, token: string) {
    const apiServerUrl = JSON.parse(fs.readFileSync('config.json', 'utf8')).apiServerUrl
    for (let frameNum = startFrame; frameNum <= endFrame; frameNum++) {
        console.log(frameNum)
        yield axios.get(`${apiServerUrl}/api/streams/${sensorId}/${frameNum}.bin`, {
            responseType: 'arraybuffer',
            headers: { Authorization: `Bearer ${token}` }
        });
        frameNum += 1;
    }
}
