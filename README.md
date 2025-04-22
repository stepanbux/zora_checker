# 🚀 Zora Checker 

An automated script to check token allocations for a list of wallets on the Zora platform.  
It reads wallet addresses from a `wallets.txt` file, sends POST requests to the API, and calculates the total amount of tokens.

---

## ✨ Features
- 📥 Reads wallet addresses from `wallet.txt`.
- 🌐 Sends automated requests to `https://zora-checker.vercel.app/api/check-allocation`.
- 🔄 Retries failed requests up to 3 times.
- ⏱ Adds delay between requests to avoid spamming the API.
- 📊 Calculates total tokens across all wallets.
- ✅ Clean and informative console output.

---

### 📄 File Descriptions
- **`checker.js`** — The core script.
- **`wallets.txt`** — Add your wallet addresses here (one per line).
- **`package.json`** — Contains dependencies (`node-fetch` if using Node.js < 18).
- **`README.md`** — You're reading it!

---

## ⚡️ Installation & Usage

1. **Clone the repository:**
    ```bash
    git clone https://github.com/stepanbux/zora_checker.git
    cd zora_checker
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Add wallet addresses:**
   Create a `wallets.txt` file in the project directory and list each wallet address on a new line. Ensure each address:

   - Starts with `0x`
   - Is exactly 42 characters long

   **Example `wallets.txt`:**

   ```
   0xYourWalletAddress1
   0xYourWalletAddress2
   0xYourWalletAddress3
   ```
4. **Run the Script**

   ```bash
   node checker.js
   ```

   
## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software as per the license terms.

---

## Contact

For support or inquiries, join our Telegram group:

---

```
  
  _    _ _     _     _             _____          _
 | |  | (_)   | |   | |           / ____|        | |
 | |__| |_  __| | __| | ___ _ __ | |     ___   __| | ___
 |  __  | |/ _` |/ _` |/ _ \ '_ \| |    / _ \ / _` |/ _ \
 | |  | | | (_| | (_| |  __/ | | | |___| (_) | (_| |  __/
 |_|  |_|_|\__,_|\__,_|\___|_| |_|\_____\___/ \__,_|\___|

            Zora Checker by stepanBD
            https://t.me/hidden_coding
```

[![Join our Telegram RU](https://img.shields.io/badge/Telegram-RU-03A500?style=for-the-badge&logo=telegram&logoColor=white&labelColor=blue&color=red)](https://t.me/hidden_coding)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@flaming_chameleon)
[![Reddit](https://img.shields.io/badge/Reddit-FF3A00?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/r/HiddenCode/)
[![Join our Telegram ENG](https://img.shields.io/badge/Telegram-EN-03A500?style=for-the-badge&logo=telegram&logoColor=white&labelColor=blue&color=red)](https://t.me/hidden_coding_en)
