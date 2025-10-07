# Ecommerce Landing Page - React + Tailwind

A modern, responsive ecommerce landing page built with React, Vite, and Tailwind CSS. This project demonstrates conditional rendering, component-based architecture, and responsive design principles.

## 🚀 Features

- **Responsive Navigation**: Fully responsive navbar with mobile hamburger menu
- **Conditional Rendering**: Dynamic page switching without page reload
- **Multiple Pages**: 
  - Home (Landing Page)
  - Dashboard with user details and product cards
  - Team page
  - About page
- **Consistent Layout**: Persistent header and footer across all pages
- **Modern UI**: Built with Tailwind CSS for sleek, contemporary design
- **Mobile-First**: Optimized for all screen sizes

## 🛠️ Tech Stack

- **React** - JavaScript library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Component Structure

```mermaid
graph TD
    A[App.jsx] --> B[Header.jsx]
    A --> C[Footer.jsx]
    A --> D{Conditional Rendering}
    
    D -->|Home| E[LandingBody.jsx]
    D -->|Dashboard| F[Dashboard.jsx]
    D -->|Team| G[Team.jsx]
    D -->|About| H[About.jsx]
    
    F --> I[DashboardHeader.jsx]
    F --> J[UserDetailCardSection.jsx]
    F --> K[ProductCard.jsx]
    
    J --> L[UserDetails.jsx]
    
    style A fill:#4F46E5,stroke:#312E81,stroke-width:3px,color:#fff
    style B fill:#10B981,stroke:#065F46,stroke-width:2px,color:#fff
    style C fill:#10B981,stroke:#065F46,stroke-width:2px,color:#fff
    style D fill:#F59E0B,stroke:#92400E,stroke-width:2px,color:#fff
    style F fill:#3B82F6,stroke:#1E40AF,stroke-width:2px,color:#fff
```

### Component Flow Explanation
- **App.jsx** is the root component (purple box)
- **Header & Footer** (green boxes) are always visible across all pages
- **Conditional Rendering** (orange diamond) switches between different pages based on navbar selection
- **Dashboard.jsx** (blue box) is the most complex page with 3 child components
- **UserDetailCardSection.jsx** further imports **UserDetails.jsx**


## 🎯 Key Learning Points

- React component composition and reusability
- React States, Events, Props
- Conditional rendering for SPA navigation
- Responsive design with Tailwind CSS
- Mobile-first approach with hamburger menu
- Component-based architecture

## 🔮 Future Enhancements

- Add routing with React Router
- Implement shopping cart functionality
- Add product filtering and search
- Integrate with backend API
- User Authentication with security
- Add animations and transitions

## 👤 Author

Abinash Dash
- GitHub: [@AbiDev2003](https://github.com/AbiDev2003)
- LinkedIn: [Abinash Dash](https://linkedin.com/in/abinashDev)

## 🔗 Live Link
- Website Link: [urbannex.com](https://react-project-ecommerce-landing-pag.vercel.app/)
---

⭐ Let's connect and grow together !
