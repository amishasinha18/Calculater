# Smart Calculator

A modern, web-based calculator with a sleek dark glassmorphism interface, built with **HTML5**, **Tailwind CSS**, and **vanilla JavaScript** — no frameworks, no build step, no dependencies to install.

It combines a clean everyday calculator with a full scientific mode, persistent calculation history, and small thoughtful touches (click-to-copy, keyboard shortcuts, smooth micro-animations) that make it feel like a polished product rather than a toy demo.

> SCT_WD_1

## Key Features

- **Tailwind CSS glassmorphism design** — frosted-glass panels, soft borders, and a subtle ambient glow over a dark gradient background, styled entirely with Tailwind CSS via CDN.
- **Normal / Scientific mode drawer** — a sliding segmented toggle reveals an expanded scientific keypad, grouped logically:
  - **Trigonometric:** `sin`, `cos`, `tan`, `asin`, `acos`, `atan` (with a Deg/Rad switch)
  - **Logarithmic:** `log`, `ln`
  - **Power:** `√`, `x²`, `xʸ`, `1/x`
  - **Constants:** `π`, `e`, `x!`, parentheses
- **Full keyboard support** — type numbers and operators directly, `Enter` to evaluate, `Backspace` to delete, `C` to clear.
- **History tracking with copy-to-clipboard** — every calculation is saved to `localStorage` and survives page refreshes. The history panel is collapsible, and clicking any result (current or past) copies it to your clipboard with a quick "Copied!" confirmation.
- **Custom footer** — a subtle "Built by AS" signature at the bottom of the calculator.
- **Responsive layout** — scales cleanly across desktop, tablet, and mobile screens.

## Tech Stack

| Layer      | Technology                        |
|------------|------------------------------------|
| Structure  | HTML5                              |
| Styling    | Tailwind CSS (via CDN)             |
| Behavior   | JavaScript (ES6+, vanilla)         |
| Storage    | Browser `localStorage`             |

## How to Run

No installation, build tools, or dependencies are required.

1. Clone or download this repository.
2. Open `task.1.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).

That's it — the calculator runs entirely client-side.

## Credits

Built by **AS**.
