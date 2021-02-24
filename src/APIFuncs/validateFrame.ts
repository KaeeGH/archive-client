import axios from 'axios';
import { config } from 'process';
import * as fs from 'fs';

type ValidatoinResult = {
    validation_result: Array<[number, string]>;
};

export function validateFrames(
    startFrame: number,
    endFrame: number,
    sensorId: string,
    onReponse: (result: ValidatoinResult) => void,
    token: string
): void {
    const apiServerUrl = JSON.parse(fs.readFileSync('config.json', 'utf8')).apiServerUrl
    axios
        .post(
            apiServerUrl + '/api/validate',
            {
                firstFrame: startFrame,
                lastFrame: endFrame,
                sensorId: parseInt(sensorId)
            },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(res => onReponse(res.data))
        .catch(err => console.log(err));
}
