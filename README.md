# Nila Hospital - Healthcare at its Finest

A modern, responsive healthcare website for **Nila Hospital**, specializing in Obstetrics and Gynaecology. Designed with a premium aesthetic and focused on patient-centered communication and care.

## 🏥 About the Hospital

Located in Namakkal, Nila Hospital is a trusted destination for women's healthcare, led by **Dr. Nithya Subashini (MBBS, DGO)**. The hospital specializes in:

- High-Risk Pregnancy Management
- Normal & Surgical Deliveries
- PCOS / PCOD Treatment
- Gynaecological Disorders

## 🚀 Technology Stack

This project is built using modern web development standards for performance and reliability:

- **Frontend**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom Tailwind transitions and hover effects

## 🎨 Asset Management

To maintain the premium look of the site, please follow these guidelines for images and logos:

- **Logos**: Always use SVGs for branding (located in `src/assets/`). Current logos are:
  - `NHLogo_NB.svg`: Main white wordmark logo for dark backgrounds.
  - `NHLogo_2.svg`: Blue background icon logo.
- **Favicon**: The browser tab icon is handled via `public/favicon.svg`.
- **Placeholders**: Generic image placeholders can be found in the `public/` folder.

## 💻 Local Development

1. **Clone & Install**:

   ```bash
   git clone <repo-url>
   cd nilahospital-website
   npm install
   ```

2. **Run Dev Server**:

   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🛠️ Key Components

- **Header/Footer**: Standardized branding with `h-20` SVG logos and optimized spacing.
- **Doctor Profile**: A clean 1x3 grid layout highlighting qualifications, specializations, and experience.
- **Consultation CTAs**: Strategically placed "Call Now" and "Directions" buttons across all pages.
