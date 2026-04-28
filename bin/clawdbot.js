#!/usr/bin/env node

const chalk = require('chalk');
const Clawdbot = require('../src/index.js');

const bot = new Clawdbot();
bot.start();
