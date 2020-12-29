import { parse } from 'path';
import {FrameData} from '../types/FrameData';

export function ParseArgv(): FrameData {
    let startFrame: number;
    let endFrame: number;
    if (process.argv[2] === "-start") {
        startFrame = parseInt(process.argv[3])
    }
    if (process.argv[4] === "-end") {
        endFrame = parseInt(process.argv[5])
    }
    return {
        startFrame: startFrame,
        endFrame: endFrame
    }
}
