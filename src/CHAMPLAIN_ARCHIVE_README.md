# Champlain College Digital Archive Tool

A 3-panel digital archiving interface built with React, following Champlain College brand guidelines.

---

## 🎨 Champlain College Branding

This application follows the [Champlain College Brand Guidelines](https://www.champlain.edu/office/marketing/brand-guide/).

### Color Palette

**Primary Colors:**
- **Champlain Blue** (#003C5F) - Main brand color used for headers and primary elements
- **Dark Blue** (#002A3A) - Text and secondary elements
- **Medium Blue** (#236192) - Accents and hover states
- **Bright Blue** (#00A9E0) - Interactive elements, buttons, tags

**Secondary Colors:**
- **Light Blue Tints** (#7ED3EF, #BEE9F7) - Backgrounds and borders
- **Champlain Red** (#BE3A34) - Clear/delete buttons
- **Champlain Teal** (#3DC4B2) - Available for future use
- **Champlain Green** (#74AA50) - Available for future use
- **Champlain Yellow** (#FDC55E) - Available for future use

### Typography

**Primary Font:** [Figtree](https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap) (Google Font)
- Used throughout the application for all text
- Weights: 300-800 available
- Automatically loaded via Google Fonts

**Note:** Champlain's secondary typeface (Adobe Garamond Pro) can be added for formal communications if needed.

---

## 📐 Application Structure

### Three-Panel Layout

#### 1. **Left Panel - Filter Menu**
- Opens with hamburger button (☰)
- Champlain Blue header with white text
- Filters artifacts by:
  - Tags (multiple selection)
  - File Types (multiple selection)
  - Uploaders (multiple selection)
  - Date Range (start/end dates)
- Red "Clear All Filters" button
- Smooth slide-in animation

#### 2. **Main Panel - Artifact Grid**
- Champlain Blue header bar
- Responsive grid of artifact cards
- Cards feature:
  - Light blue placeholder backgrounds
  - Bright blue tags
  - Hover effects with Champlain Blue shadows
  - Click to open detail panel

#### 3. **Right Panel - Detail View**
- Opens when artifact is clicked
- Champlain Blue header
- Full artifact information with:
  - Large image display
  - Bright blue tags
  - Organized metadata sections
  - Responsive on mobile (full-width)

---

## 📁 Project Structure

```
src/
├── App.jsx                    # Main application component
├── App.css                    # Main layout with Champlain branding
├── main.jsx                   # Application entry point
├── index.css                  # Global styles + Figtree font import
├── components/
│   ├── ArtifactCard.jsx       # Grid card component
│   ├── ArtifactCard.css       # Card styles with Champlain colors
│   ├── FilterPanel.jsx        # Left sidebar filter component
│   ├── FilterPanel.css        # Filter panel with Champlain branding
│   ├── DetailPanel.jsx        # Right sidebar detail component
│   └── DetailPanel.css        # Detail panel with Champlain branding
├── data/
│   └── artifacts.js           # Sample artifact data
└── assets/
    └── artifacts/
        └── artifact.png       # Placeholder (replace with real image)
```

---

## 🎯 Brand Implementation Details

### Header
- Background: Champlain Blue (#003C5F)
- Text: White
- Accent border: Bright Blue (#00A9E0)

### Cards
- Background: White
- Border: Light Champlain Blue with opacity
- Hover border: Bright Blue (#00A9E0)
- Tags: Bright Blue (#00A9E0)
- Tag hover: Medium Blue (#236192)

### Filter Panel
- Header: Champlain Blue background
- Section dividers: Light Blue tint (#BEE9F7)
- Checkbox accent: Bright Blue (#00A9E0)
- Clear button: Champlain Red (#BE3A34)

### Detail Panel
- Header: Champlain Blue background
- Image border: Light Blue tints
- Tags: Bright Blue (#00A9E0)

### Typography
- All text uses Figtree font family
- Headers: 600-700 weight
- Body text: 400-500 weight
- Uppercase labels: 700 weight with letter-spacing

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.19.0 or 22.12.0+
- npm or yarn

### Installation

1. **Copy files to your React project:**
   ```bash
   # Copy the entire src folder to your project
   cp -r src/* your-project/src/
   ```

2. **Install dependencies (if starting fresh):**
   ```bash
   npm install
   ```

3. **Replace placeholder image:**
   - Add your artifact image to `src/assets/artifacts/artifact.png`
   - The placeholder SVG should be replaced

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 📝 Adding More Artifacts

Edit `src/data/artifacts.js` to add more artifacts:

```javascript
export const artifacts = [
  {
    id: 1,
    title: "Your Artifact Title",
    image: "/src/assets/artifacts/your-image.png",
    tags: ["tag1", "tag2"],
    uploader: "Uploader Name",
    uploadDate: "2024-01-15", // YYYY-MM-DD format
    fileType: "image/png",
    description: "Optional description",
    dimensions: "1920x1080", // Optional
    fileSize: "2.4 MB" // Optional
  },
  // Add more artifacts here
];
```

**Important:** 
- Images should be placed in `src/assets/artifacts/`
- Tags should be consistent for filtering to work properly
- uploadDate must be in ISO format (YYYY-MM-DD)

---

## 🎨 Customization

### Using Brand Colors in Your Code

All Champlain colors are defined as CSS variables in `src/index.css`:

```css
var(--champlain-blue)    /* #003C5F */
var(--dark-blue)         /* #002A3A */
var(--medium-blue)       /* #236192 */
var(--bright-blue)       /* #00A9E0 */
var(--light-blue)        /* #7ED3EF */
var(--lighter-blue)      /* #BEE9F7 */
var(--champlain-red)     /* #BE3A34 */
var(--champlain-teal)    /* #3DC4B2 */
var(--champlain-green)   /* #74AA50 */
var(--champlain-yellow)  /* #FDC55E */
```

Use these variables in your custom CSS:
```css
.my-element {
  background-color: var(--champlain-blue);
  color: var(--bright-blue);
}
```

### Adding New Features

When adding new components, follow these branding guidelines:
- Use Champlain Blue for headers and primary actions
- Use Bright Blue for interactive elements and links
- Use Champlain Red sparingly for destructive actions
- Maintain consistent spacing and border-radius (4-8px)
- Keep font weights consistent with existing patterns

---

## 📱 Responsive Design

The application is fully responsive:
- **Desktop (>768px):** Three-panel layout with side panels
- **Tablet (481-768px):** Panels slide over content
- **Mobile (≤480px):** Single column grid, full-width panels

---

## 🔧 Technical Details

### Dependencies
- React 19.2.0
- React DOM 19.2.0
- Vite 7.3.1 (build tool)

### Browser Support
Modern browsers supporting:
- CSS Grid
- CSS Custom Properties
- ES6+ JavaScript

---

## 🎓 For Leahy Center Team

This tool is designed specifically for the Champlain College Leahy Center for Digital Archiving. It follows all brand guidelines and can be extended with:

- Backend API integration
- Database connections
- User authentication
- Upload functionality
- Advanced search
- Export features
- Batch operations

For questions or support, contact the Champlain College Office of Marketing or your development team.

---

## 📄 License

Built for Champlain College. All Champlain College brand assets and guidelines are property of Champlain College.

---

## 🔗 Resources

- [Champlain College Brand Central](https://www.champlain.edu/office/marketing/brand-guide/)
- [Color Guidelines](https://www.champlain.edu/office/marketing/brand-guide/color/)
- [Typography Guidelines](https://www.champlain.edu/office/marketing/brand-guide/typography/)
- [Figtree Font (Google Fonts)](https://fonts.google.com/specimen/Figtree)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
