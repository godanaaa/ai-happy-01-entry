// ai-happy-01 entry (Node 22, standard library only).
// The image is entry.png beside this file: a robot and a developer
// sharing coffee at sunrise, with butterflies rising from the mug.
// The program copies it to /output/entry.png, byte for byte.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the output directory exists, then copy the image unchanged.
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(OUTPUT_DIR, 'entry.png'));
