import { parse } from 'path';
import { FrameNumber } from '../types/FrameNumber';

export function ParseArgv(): [FrameNumber, string] {
  let startFrame: number;
  let endFrame: number;
  let sensorId: string;
  if (process.argv[2] === '-start') {
    startFrame = parseInt(process.argv[3]);
  }
  if (process.argv[4] === '-end') {
    endFrame = parseInt(process.argv[5]);
  }
  if (process.argv[6] === '-sensorId') {
    sensorId = process.argv[7];
  }
  return [
    {
      startFrame: startFrame,
      endFrame: endFrame
    },
    sensorId
  ];
}
