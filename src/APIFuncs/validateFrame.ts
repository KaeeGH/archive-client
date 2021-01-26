import axios from 'axios';
import { config } from 'process';
import { apiServerUrl } from '../BaseData';

type ValidatoinResult = {
    validation_result: Array<[number, string]>;
};

export function validateFrames(
    startFrame: number,
    endFrame: number,
    sensorId: string,
    onReponse: (result: ValidatoinResult) => void
): void {
    axios
        .post(apiServerUrl + '/api/validate', {
            firstFrame: startFrame,
            lastFrame: endFrame,
            sensorId: parseInt(sensorId)
        })
        .then(res => onReponse(res.data))
        .catch(err => console.log(err));
}
