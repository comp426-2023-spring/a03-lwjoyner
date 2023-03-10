#!/usr/bin/env node

import { rps } from '../lib/rpsls.js';
import minimist from 'minimist';

function help() {
    console.log('Usage: node-rps [SHOT]');
    console.log('Play Rock Paper Scissors (RPS)');
    console.log('');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit');
    console.log('');
    console.log('Examples:');
    console.log('  node-rps\t  Return JSON with single player RPS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rps rock   Return JSON with results for RPS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"scissors","result":"win"}');
}

function rules() {
    console.log('Rules for Rock Paper Scissors:');
    console.log('');
    console.log('  - Scissors CUTS Paper');
    console.log('  - Paper COVERS Rock');
    console.log('  - Rock CRUSHES Scissors');
}

const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
    help();
}
else if (args.r || args.rules) {
    rules();
}
else {
    let output = rps(args._[0])
    if (output != 'error') {
        console.log(JSON.stringify(output));
    }
    else {
        console.error(`${args._[0]} is out of range.`);
        help();
        rules();
    } 
}