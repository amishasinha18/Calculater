# 🧮 Smart Calculator

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A modern, web-based calculator with a sleek dark glassmorphism interface, built with **HTML5**, **Tailwind CSS**, and **vanilla JavaScript** — no frameworks, no build step, no dependencies to install.

It combines a clean everyday calculator with a full scientific mode, persistent calculation history, and small thoughtful touches (click-to-copy, keyboard shortcuts, smooth micro-animations) that make it feel like a polished product rather than a toy demo.

> SCT_WD_1

---

## 📸 Screenshot / Preview

<table align="center">
  <tr>
    <td align="center">
      <img src="https://i.ibb.co/QF1SxXtR/Screenshot-2026-07-23-021346.png" width="380" alt="Smart Calculator — Desktop view of the calculator interface" /><br />
      <sub><b>Desktop View — Calculator Interface</b></sub>
    </td>
    <td align="center">
      <img src="https://i.ibb.co/kNSXNtq/Screenshot-2026-07-23-021447.png" width="380" alt="Smart Calculator — Scientific mode with history panel" /><br />
      <sub><b>Scientific Mode & History</b></sub>
    </td>
  </tr>
</table>

---

## ✨ Key Features

- 🎨 **Tailwind CSS glassmorphism design** — frosted-glass panels, soft borders, and a subtle ambient glow over a dark gradient background, styled entirely with Tailwind CSS via CDN.
- 🔬 **Normal / Scientific mode drawer** — a sliding segmented toggle reveals an expanded scientific keypad, grouped logically:
  - **Trigonometric:** `sin`, `cos`, `tan`, `asin`, `acos`, `atan` (with a Deg/Rad switch)
  - **Logarithmic:** `log`, `ln`
  - **Power:** `√`, `x²`, `xʸ`, `1/x`
  - **Constants:** `π`, `e`, `x!`, parentheses
- ⌨️ **Full keyboard support** — type numbers and operators directly, `Enter` to evaluate, `Backspace` to delete, `C` to clear.
- 🕘 **History tracking with copy-to-clipboard** — every calculation is saved to `localStorage` and survives page refreshes. The history panel is collapsible, and clicking any result (current or past) copies it to your clipboard with a quick "Copied!" confirmation.
- 🖋️ **Custom footer** — a subtle "Built by AS" signature at the bottom of the calculator.
- 📱 **Responsive layout** — scales cleanly across desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|------------------------------------|
| Structure  | HTML5                              |
| Styling    | Tailwind CSS (via CDN)             |
| Behavior   | JavaScript (ES6+, vanilla)         |
| Storage    | Browser `localStorage`             |

---

## 🚀 How to Run

No installation, build tools, or dependencies are required.

1. Clone or download this repository.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).

That's it — the calculator runs entirely client-side.

---

## 🔮 Future Enhancements

- 🌗 Light/dark theme switcher
- 🧠 Memory functions (`M+`, `M-`, `MR`, `MC`)
- 📤 Export calculation history (CSV / JSON)
- 🧩 Unit converter mode (length, weight, currency)
- 📴 Offline support via PWA (installable, works without a connection)
- 🧪 Automated test coverage for the calculation engine

---

## 🙌 Credits

Built by **AS**.
