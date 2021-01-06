import { writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';

export function writeBinaries(frameindex: number, BinaryArray: Array<ArrayBuffer>) {
  for (const buffer of BinaryArray) {
    const arrayBuffer = new Uint8Array(buffer);
    writeFile(`${frameindex}.bin`, arrayBuffer);
    frameindex += 1;
  }
}
