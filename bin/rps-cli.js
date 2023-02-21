#!/usr/bin/env node

import { rps } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
    console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n  -h, --help\t  display this help message and exit\n  -r, --rules\t  display the rules and exit\n\nExamples:\n  node-rps\t  Return JSON with single player RPS result.\n\t\t  e.g. {"player":"rock"}\n  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n\t\t  e.g {"player":"rock","opponent":"scissors","result":"win"}');
}
else if (args.r || args.rules) {
    console.log('Rules for Rock Paper Scissors:\n\n  - Scissors CUTS Paper\n  - Paper COVERS Rock\n  - Rock CRUSHES Scissors');
}
else {
    let output = rps(args._[0])
    if (output != 'error') {
        console.log(JSON.stringify(output));
    } 
}