# Calculater

SCT_WD_1 — A modern, web-based calculator built using HTML, Tailwind CSS, and vanilla JavaScript. It features a sleek dark glassmorphism interface with both a standard and scientific mode.

## Features

- **Modern Tailwind CSS design** — dark glassmorphism aesthetic (frosted glass panels, soft borders, subtle glow) built entirely with Tailwind CSS via CDN, no build step required.
- **Normal / Scientific modes** — a sliding segmented toggle switches between a compact standard keypad and an expanded scientific keypad, with the calculator smoothly widening in Scientific mode.
- **Scientific functions**, grouped logically:
  - Trigonometric: `sin`, `cos`, `tan`, `asin`, `acos`, `atan` (with a Deg/Rad toggle)
  - Logarithmic: `log`, `ln`
  - Power: `√`, `x²`, `xʸ`, `1/x`
  - Constants: `π`, `e`, `x!`, parentheses
- **Percentage and power operators** (`%`, `xʸ`) alongside the standard `+ − × ÷` operations.
- **Calculation history** — every result is saved to `localStorage`, so it persists across page refreshes. The history panel is collapsible and can be cleared at any time.
- **Click-to-copy** — click the result or any history entry to instantly copy it to your clipboard, with a small "Copied!" confirmation.
- **Full keyboard support** — type numbers and operators, `Enter` to evaluate, `Backspace` to delete, and `C` to clear.
- **Responsive layout** — scales cleanly across desktop, tablet, and mobile viewports.
- **"Built by AS" footer** — a subtle signature at the bottom of the calculator.

## Usage

Open `task.1.html` directly in any modern browser — no installation or build step needed.
