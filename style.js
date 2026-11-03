import chalk from 'chalk';

// Couleurs
const colors = {
    purple: '#8A2BE2',
    darkPurple: '#4B0082',
    gold: '#FFD700',
    neon: '#00FFFF',
    bg: '#050510'
};

export function printRoyalHeader() {
    console.clear();
    console.log(chalk.hex(colors.gold)(`\n ╔════════════════════════════════════════════════╗`));
    console.log(chalk.hex(colors.gold)(` ║   𝐊𝐈𝐍𝐆 𝐁𝐀𝐍𝐍𝐄𝐃 — 𝗗𝗘𝗩 𝗕𝗬 𝐊𝐈𝐍𝐆 𝐒𝐓𝐀𝐑𝐊    ║`));
    console.log(chalk.hex(colors.gold)(` ╚════════════════════════════════════════════════╝\n`));
}

export function purpleMatrixEffect() {
    const chars = 'KINGSTARkXy$#@&•⚡';
  
    // L'effet visuel rapide
    let index = 0;
    const interval = setInterval(() => {
    let line = '│ ';
    for (let i = 0; i < 60; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    line += Math.random() > 0.8? chalk.hex(colors.purple)(char): chalk.hex(colors.darkPurple)(char);
   }
    line += ' │';

    moveUp(20); // On remonte l'écran
    process.stdout.write(line);
    index++;
    if(index > 20) clearInterval(interval);

    }, 50);
}

function moveUp(lines) {
    for (let i = 0; i < lines; i++) {
    process.stdout.write('\x1B[' + (1) + 'A'); // Move up
   }
}

export function printBanProgress(targetNumber) {
    console.log(chalk.hex(colors.neon)(`\n ┌─────────────────────────────────────────┐`));
    console.log(chalk.hex(colors.gold)(` │ TARGET DETECTED:` + chalk.white(` ${targetNumber}`)));
    console.log(chalk.gray(` │ MODE: AGGRESSIVE BLACKLISTING    `));
    console.log(chalk.gray(` │ STATUS: ANALYZING HANDSHAKE...    `));
    console.log(chalk.hex(colors.neon)(` └─────────────────────────────────────────┘\n`));
}
