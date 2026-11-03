import chalk from 'chalk';

// Palette des couleurs de ton site KING GENERATOR (Purple/Royal)
const colors = {
    purple: '#8A2BE2',    // BlueViolet
    darkPurple: '#4B0082', // Indigo
    gold: '#FFD700',    // Or royal
    neon: '#00FFFF',    // Cyan pour contraste
    bg: '#050510'    // Fond sombre
};

export function printRoyalHeader() {
    console.clear();
    console.log(chalk.hex(colors.gold)(`\n ╔════════════════════════════════════════════════╗\n ║   𝐊𝐈𝐍𝐆 𝐁𝐀𝐍𝐍𝐄𝐃 — 𝗗𝗘𝗩 𝗕𝗬 𝐊𝐈𝐍𝐆 𝐒𝐓𝐀𝐑𝐊    ║\n ╚════════════════════════════════════════════════╝`));
    console.log(chalk.gray(`[ SYSTEM READY ] ${new Date().toLocaleTimeString()}`));
}

export function purpleMatrixEffect() {
    // Fait apparaître des lignes violettes et du texte comme dans les films
    const chars = 'KINGSTARkXy$#@&•⚡';
  
    setInterval(() => {
    // Effacer une ligne aléatoire au lieu de tout nettoyer
    process.stdout.write('\x1B[' + (Math.floor(Math.random() * 20) + 1) + 'A'); 
    let line = '│ ';
    for (let i = 0; i < 50; i++) {
    line += chars[Math.floor(Math.random() * chars.length)];
   }
    line += ' │';
  
    // Mélange de violet et de cyan pour l'effet "KING GENERATOR"
    const randomColor = Math.random() > 0.5? colors.purple: colors.gold;
    line = line.replace(/./g, char => Math.random() > 0.8? chalk.hex(randomColor)(char): chalk.hex(colors.darkPurple)(char));
  
    process.stdout.write(chalk.hex(colors.purple)(line));
    }, 50);
}

export function printBanProgress(targetNumber) {
    console.log(chalk.hex(colors.neon)(`\n ┌─────────────────────────────────────────┐`));
    console.log(chalk.hex(colors.gold)(` │ TARGET DETECTED:` + chalk.white(` ${targetNumber}`)));
    console.log(chalk.gray(` │ MODE: AGGRESSIVE BLACKLISTING    `));
    console.log(chalk.gray(` │ STATUS: ANALYZING HANDSHAKE...    `));
    console.log(chalk.hex(colors.neon)(` └─────────────────────────────────────────┘\n`));
}