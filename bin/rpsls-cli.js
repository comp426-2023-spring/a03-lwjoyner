#!/usr/bin/env node

import { rpsls } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
    console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n  -h, --help\t  display this help message and exit\n  -r, --rules\t  display the rules and exit\n\nExamples:\n  node-rpsls\t  Return JSON with single player RPSLS result.\n\t\t  e.g. {"player":"rock"}\n  node-rps rock   Return JSON with results for RPSLS played against a simulated opponent.\n\t\t  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
}
else if (args.r || args.rules) {
    console.log('Rules for the Lizard-Spock Espansion of Rock Paper Scissors:\n\n  - Scissors CUTS Paper\n  - Paper COVERS Rock\n  - Rock SMOOSHES Lizard\n  - Lizard POISONS Spock\n  - Spock SMASHES Scissors\n  - Scissors DECAPITATES Lizard\n  - Lizard EATS Paper\n  - Paper DISPROVES Spock\n  - Spock VAPORIZES Rock\n  - Rock CRUSHES Scissors');
}
else {
    let output = rpsls(args._[0])
    if (output != 'error') {
        console.log(JSON.stringify(output));
    } 
}