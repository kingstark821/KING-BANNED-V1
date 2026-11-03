import { printRoyalHeader, purpleMatrixEffect, printBanProgress } from './style.js';
import prompt from 'prompt-sync';
const get = prompt();

// Configuration du simulateur V1
const CONFIG = {
   targetNumber: '',
    reportsSent: 0,
    expirationDate: 'EXP 19042026_T', // Date fixée pour V1 comme demandé
    powerfulMode: true
};

async function init() {
    printRoyalHeader();
    purpleMatrixEffect();
  
    const number = get(chalk.hex(colors.gold)(' │ ENTER NUMBER (Ex: 51400000000) => '));
    CONFIG.targetNumber = number;

    printBanProgress(CONFIG.targetNumber);
  
    console.log(chalk.gray(' │ [THREAD-1] CONNECTING TO WA GATEWAY...'));
    await wait(1500);
    console.log(chalk.hex(colors.gold)(` │ [SUCCESS] CONNECTION SECURED`));
    await wait(1000);
  
    console.log(chalk.gray(' │ [THREAD-2] INITIATING AGGRESSIVE REPORTS...'));
  
    // Simulation des rapports
    for(let i = 0; i < 10; i++) {
    await wait(200);
    CONFIG.reportsSent++;
    const progress = (CONFIG.reportsSent * 10);
    process.stdout.write(` │ REPORTS: ${progress}% \r`);
   }
   console.log('\n');

    // Résultat final
    console.log(chalk hex(colors.purple)(`
    ╔════════════════════════════════════════════════╗
   ║    𝖕𝖗𝖔𝖈𝖊𝖘𝖘 𝖊𝖉𝖊 𝖉'𝖆𝖋𝖋𝖆𝖎𝖗 𝖊𝖓 𝖈𝖔𝖚𝖗𝖘
   ║    ║
    ║ ☠  ${chalk.hex(colors.gold)('ACCOUNT TAGGED')} ☠
   ║    ║
    ║ TIME TO FLAG DATA: ${CONFIG.expirationDate}
    ║ NEXT REPORT: 12
    ╚════════════════════════════════════════════════╝
    `));
}

function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

init();