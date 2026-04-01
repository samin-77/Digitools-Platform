# DigiTools Platform

A modern, responsive e-commerce platform for premium digital tools, built with React.js and featuring a complete shopping cart experience with toast notifications.

## 🚀 Project Overview

DigiTools is a comprehensive digital marketplace where users can browse, select, and purchase premium AI tools, design assets, templates, and productivity software. The platform features a beautiful UI with smooth interactions, real-time cart management, and a seamless user experience.

## ✨ Key Features

### 🛒 **Shopping Cart System**
- Add/remove products with real-time cart updates
- Cart count indicator in navigation bar
- "Proceed to Checkout" functionality with order confirmation
- Empty cart state with helpful messaging

### 🎨 **Beautiful UI Components**
- **Responsive Navbar** with cart icon and mobile menu
- **Hero Banner** with call-to-action buttons and animated elements
- **Stats Section** showcasing platform metrics
- **Product Cards** with tags, features, and pricing
- **Toggle Section** for switching between Products and Cart views
- **Steps Section** explaining the onboarding process
- **Pricing Plans** with "Most Popular" highlighting
- **CTA Section** with gradient background
- **Footer** with comprehensive links and social media

### 🔔 **Toast Notifications**
- Success messages when adding products to cart
- Info alerts for duplicate items
- Error notifications for removal actions
- Order confirmation on checkout

### 📱 **Responsive Design**
- Mobile-first approach with breakpoints for tablets and desktops
- Collapsible navigation menu for mobile devices
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and interactions

## 🛠️ Technologies Used

### **Frontend Framework**
- **React.js 19.2.4** - Modern React with hooks and functional components
- **Vite 8.0.1** - Fast build tool and development server

### **Styling & UI**
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind CSS
- **Lucide React** - Beautiful icon library

### **Notifications**
- **React Toastify** - Elegant toast notification system

### **Data Management**
- **JSON** - Product data stored in structured JSON format
- **React State** - Local state management for cart and UI

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with cart counter
│   ├── Hero.jsx        # Hero banner section
│   ├── Stats.jsx       # Statistics display
│   ├── ProductsSection.jsx  # Product grid and toggle
│   ├── CartSection.jsx     # Shopping cart interface
│   ├── Steps.jsx       # Onboarding steps
│   ├── Pricing.jsx     # Pricing plans
│   ├── CTA.jsx         # Call-to-action banner
│   └── Footer.jsx      # Site footer
├── data/
│   └── products.json   # Product data (8 products)
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 🎯 Product Features

Each product includes:
- **ID, Name, Description** - Basic product information
- **Price & Period** - Flexible pricing (one-time/monthly/yearly)
- **Tags** - Visual indicators (Popular, New, Best Seller)
- **Features List** - Key product benefits
- **Icons** - Visual representation using emojis

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digitools-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Highlights

### **Color Scheme**
- **Primary Purple** (#9333EA) - Brand colors and CTAs
- **Blue Accents** (#1E40AF) - Footer and trust elements
- **Gray Tones** - Neutral backgrounds and text
- **Success Green** - Positive actions and confirmations

### **Interactive Elements**
- Hover states on all buttons and links
- Smooth transitions and animations
- Loading states and micro-interactions
- Mobile-responsive navigation drawer

### **Component Architecture**
- Modular, reusable components
- Props-based customization
- Clean separation of concerns
- Accessibility-friendly markup

## 🔧 Customization

### **Adding New Products**
Edit `src/data/products.json` to add new products:
```json
{
  "id": 9,
  "name": "Your Product",
  "description": "Product description",
  "price": 49,
  "period": "monthly",
  "tag": "new",
  "tagType": "new",
  "features": ["Feature 1", "Feature 2"],
  "icon": "🚀"
}
```

### **Modifying Colors**
Update Tailwind configuration in `tailwind.config.js` to customize the color scheme.

### **Toast Customization**
Modify toast settings in `App.jsx` to change position, duration, and appearance.

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari and Chrome

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Acknowledgments

- Built with modern React patterns and best practices
- Inspired by modern e-commerce design trends
- Icons provided by Lucide React and emoji sets
- Styling powered by Tailwind CSS and DaisyUI

---

**DigiTools Platform** - Transform your digital workflow with premium tools! 🚀
