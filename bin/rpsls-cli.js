#!/usr/bin/env node

import { rpsls } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

function help() {
    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!');
    console.log('');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit');
    console.log('');
    console.log('Examples:');
    console.log('  node-rpsls\t  Return JSON with single player RPSLS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
}

function rules() {
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:');
    console.log('');
    console.log(' Scissors CUTS Paper');
    console.log(' Paper COVERS Rock');
    console.log(' Rock SMOOSHES Lizard');
    console.log(' Lizard POISONS Spock');
    console.log(' Spock SMASHES Scissors');
    console.log(' Scissors DECAPITATES Lizard');
    console.log(' Lizard EATS Paper');
    console.log(' Paper DISPROVES Spock');
    console.log(' Spock VAPORIZES Rock');
    console.log(' Rock CRUSHES Scissors');
}

if (args.h || args.help) {
    help();
}
else if (args.r || args.rules) {
    rules();
}
else {
    let output = rpsls(args._[0])
    if (output != 'error') {
        console.log(JSON.stringify(output));
    }
    else {
        console.error(`${args._[0]} is out of range.`);
        rules();
        help();
    } 
}