const chalk = require('chalk');

class Clawdbot {
  constructor() {
    this.comments = [
      "Bu kodu yazarken 3 saat oldu kanka 👀",
      "StackOverflow'a bakman 5 dakika sürdü, tebrikler 🎉",
      "Bu değişiklik production'ı patlatır 💀",
      "Yine mi aynı hatayı yapıyorsun? 😅",
      "Kahve molası zamanı gelmedi mi? ☕",
      "O fonksiyon 500 satır olmuş, roman mı yazıyorsun? 📚",
      "Commit mesajın 'fix stuff' mı? Gerçekten mi? 🤦",
      "Bugün çok verimlisin! (şaka yapıyorum) 😏",
      "Bu variable ismi ne kanka? 'x' mi? Yaratıcılık 100 💯",
      "Git push --force yapmayı düşünüyor musun? CESURSUN! 🔥",
    ];
    this.emojis = ['🤖', '👀', '☕', '🔥', '💀', '🎉', '📚', '🤦', '😏', '💯'];
  }

  getRandomComment() {
    return this.comments[Math.floor(Math.random() * this.comments.length)];
  }

  getRandomEmoji() {
    return this.emojis[Math.floor(Math.random() * this.emojis.length)];
  }

  drawBot() {
    const bot = [
      chalk.cyan('    🤖'),
      chalk.cyan('   /||\\'),
      chalk.cyan('    /\\'),
      '',
    ];
    return bot.join('\n');
  }

  speak() {
    const comment = this.getRandomComment();
    const emoji = this.getRandomEmoji();
    
    console.log('\n' + this.drawBot());
    console.log(chalk.yellow('  ╔' + '═'.repeat(comment.length + 4) + '╗'));
    console.log(chalk.yellow('  ║  ') + chalk.white(comment) + chalk.yellow('  ║'));
    console.log(chalk.yellow('  ╚' + '═'.repeat(comment.length + 4) + '╝'));
    console.log(chalk.gray(`  ${emoji} CLAWDBOT v0.1.0\n`));
  }

  start() {
    console.log(chalk.cyan('\n🤖 CLAWDBOT aktif!'));
    console.log(chalk.gray('   Seni izliyorum... 👀\n'));
    
    this.speak();
    
    // Her 10 saniyede bir yorum yap
    setInterval(() => {
      this.speak();
    }, 10000);
  }
}

module.exports = Clawdbot;
