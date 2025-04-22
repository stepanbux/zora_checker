const fs = require('fs');
const path = require('path');

console.log(`



  _    _ _     _     _             _____          _
 | |  | (_)   | |   | |           / ____|        | |
 | |__| |_  __| | __| | ___ _ __ | |     ___   __| | ___
 |  __  | |/ _\` |/ _\` |/ _ \\ '_ \\| |    / _ \\ / _\` |/ _ \\
 | |  | | | (_| | (_| |  __/ | | | |___| (_) | (_| |  __/
 |_|  |_|_|\\__,_|\\__,_|\\___|_| |_|\\_____\\___/ \\__,_|\\___|

            Zora Checker by stepanBD
            https://t.me/hidden_coding


`);

let totalTokensSum = 0;
let completedRequests = 0;
let totalWallets = 0;

const fetchWallet = (wallet, tries = 0) => {
    fetch('https://zora-checker.vercel.app/api/check-allocation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ walletAddress: wallet })
    })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log(`Wallet: ${wallet}, tokens: ${data.totalTokens}`);
            totalTokensSum += data.totalTokens;
            completedRequests++;
            checkIfAllDone();
        })
        .catch(error => {
            console.error(`Error request, repeating... (${tries + 1}/3)`, error);
            if (tries + 1 < 3) {
                setTimeout(() => fetchWallet(wallet, tries + 1), 1000);
            } else {
                completedRequests++;
                checkIfAllDone();
            }
        });
}

const checkIfAllDone = () => {
    if (completedRequests === totalWallets) {
        console.log(`\n✅ Total Tokens across all wallets: ${totalTokensSum}`);
    }
}

const checkWallets = (wallets) => {
    totalWallets = wallets.length;
    wallets.forEach((wallet, index) => {
        setTimeout(() => fetchWallet(wallet), 3000 * index);
    });
}

const filePath = path.join(__dirname, 'wallets.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }
    const wallets = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    checkWallets(wallets);
});
