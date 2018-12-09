const tc = require('turbocolor');

class DeckDeckGoInfoPlugin {
    constructor() {
    }

    apply(compiler) {
        compiler.hooks.beforeRun.tap('DeckDeckGoInfoPlugin', () => {
            console.log('\nDon\'t forget to edit your ' + tc.magenta('meta information and favicon') + ' before publishing your talk online 🚀\n');
        });
    }
}

module.exports = DeckDeckGoInfoPlugin;