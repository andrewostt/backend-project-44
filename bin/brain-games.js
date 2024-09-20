#!/usr/bin/env node
import { askName } from "../../src/cli.js";

export function welcome() {
    console.log('Welcome to the Brain Games!');
    askName();
}

welcome();