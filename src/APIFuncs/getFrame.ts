import axios from 'axios';
import { config } from 'process';
import { apiServerUrl } from '../BaseData';

export function* getFrame(startFrame: number, endFrame: number, sensorId: string, token: string) {
    let frameNum = startFrame;
    while (frameNum <= endFrame) {
        yield axios.get(`${apiServerUrl}/api/streams/${sensorId}/${frameNum}.bin`, {
            responseType: 'arraybuffer',
            headers: { Authorization: `Bearer ${token}` }
        });
        frameNum += 1;
    }
}
