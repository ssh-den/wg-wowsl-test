# UI TechArt Test — World of Warships: Legends

Test assignment for the UI Tech Artist position.
This project is implemented using **Angular**, **Tailwind CSS**, and a responsive approach for both desktop and mobile views.

## Live Demo 

**Main page (layout selector):**
[https://ssh-den.github.io/wg-wowsl-test/](https://ssh-den.github.io/wg-wowsl-test/)

**Desktop version:**
[https://ssh-den.github.io/wg-wowsl-test/desktop](https://ssh-den.github.io/wg-wowsl-test/desktop)

**Mobile version:**
[https://ssh-den.github.io/wg-wowsl-test/mobile](https://ssh-den.github.io/wg-wowsl-test/mobile)

## Tech Stack

- **Angular 19**
- **Tailwind CSS**
- TypeScript, SCSS Modules
- Modular architecture (Core / Shared / Features)
- Centralized state and service-driven communication
- Responsive layout (flexible ui, orientation detection)
- Lazy-loaded feature modules (desktop & mobile)

## Project Structure

The main codebase is located under `src/`, structured into:

- `core/` — mock data and business services
- `features/` — separate modules for desktop and mobile
- `shared/` — reusable components, UI elements, and screens
- `models/` — typed data models for commander, guise, user, etc.

Static assets (images, icons, backgrounds) are stored in the `public/` folder.

## Getting Started

### Clone the repository:

```bash
git clone https://github.com/ssh-den/wg-wowsl-test.git
cd wg-wowsl-test
```

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
ng serve
```

Navigate to [http://localhost:4200](http://localhost:4200) — the app will automatically reload on source changes.

## Font

To avoid licensing issues, instead **DIN 2014** font,  I used [**Barlow**](https://fonts.google.com/specimen/Barlow) — an open-source, geometric sans-serif font with a similar visual tone.
