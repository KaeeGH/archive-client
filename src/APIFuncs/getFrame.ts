import axios from 'axios';
import { config } from 'process';
import { apiServerUrl } from '../BaseData';

export async function getFrame(startFrame: number, endFrame: number, sensorId: string, token: string): Promise<Array<ArrayBuffer>> {
    let frameNum = startFrame;
    const Buffers: Array<ArrayBuffer> = []
    while (frameNum >= endFrame) {
        axios
            .get(`${apiServerUrl}/api/streams/${sensorId}/${frameNum}.bin`, {
                responseType: 'arraybuffer',
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
                Buffers.push(res.data)
                frameNum += 1
            })
            .catch(err => console.log(err));
    }
    return Buffers
}
