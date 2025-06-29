# Music Channels Web Application - Project Setup

## Tech Stack

### Core Technologies

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS v4** - Latest version with modern CSS features and design tokens
- **ShadCN/UI** - High-quality, accessible component library

### Development Environment

- **Figma Make** - AI-powered web application builder
- **ES Modules** - Modern JavaScript module system
- **CSS Variables** - For dynamic theming and design tokens

## Project Type

This is a **single-page React application (SPA)** built as a music streaming platform prototype. The application focuses on content discovery through channel browsing, categorization, and filtering.

## Architecture Overview

### Component Structure

The application follows a **modular component architecture**:

```
├── App.tsx                 # Main application layout and routing
├── screens/               # Screen-level components
│   └── Home.tsx          # Home screen with content sections
├── components/
│   ├── stingray/         # Custom business components
│   │   ├── ChannelCard.tsx      # Individual channel display
│   │   ├── Swimlane.tsx         # Horizontal channel rows
│   │   ├── ContentSwitcher.tsx  # Tab-based content filtering
│   │   └── Banner.tsx           # Promotional banner
│   ├── ui/               # ShadCN UI components (40+ components)
│   └── figma/            # Figma-specific utilities
└── data/                 # Data layer and configuration
    ├── channels.ts       # Channel data and utilities
    └── switcher.ts       # Content switcher configurations
```

### Design System

#### Layout Specifications

- **Viewport Width**: Optimized for 1920px displays
- **Content Container**: 1140px max-width with auto centering
- **Component Sizing**: CSS variables for consistent dimensions
  - `--card-size: 175px` - Channel card dimensions
  - `--thumbnail-radius: 15px` - Rounded corners for media

#### Typography

- **Primary Font**: Roboto (Regular, Medium weights)
- **Font Sizes**: 16px base with responsive scaling
- **Typography Hierarchy**: Automatic sizing via CSS layers

#### Color System

The application uses a **dual-theme design system**:

**Light Mode Colors:**

- Background: `#ffffff`
- Primary: `#030213` (dark blue-black)
- Accent: `#0070e0` (blue for interactive elements)
- Text: Various opacity levels of `rgba(25,25,25,x)`

**Dark Mode Colors:**

- Background: `oklch(0.145 0 0)` (near black)
- Primary: `oklch(0.985 0 0)` (near white)
- Text: Various opacity levels of `rgba(255,255,255,x)`

## Key Features

### 1. Dark Mode Support

- **Toggle-based**: Click button to switch themes
- **CSS Variable System**: Automatic color adaptation
- **Component Compatibility**: All components support both themes
- **Transparent Colors**: Properly invert between black/white bases

### 2. Content Organization

- **Swimlane Layout**: Horizontal scrolling rows of 6 channels each
- **Category System**: "Most Popular", "Wellness", "New Releases"
- **Data-Driven**: 30 channels per category with TypeScript interfaces

### 3. Interactive Components

- **ContentSwitcher**: Tab system with sliding blue indicator

  - Configurable tabs: "All", "Music", "Podcasts", "Radio"
  - Smooth animations and hover effects
  - Data-driven from configuration files

- **ChannelCard**: Thumbnail-based content cards
  - 2-line text truncation for long names
  - Hover effects and click handlers
  - Fallback placeholders for missing thumbnails

### 4. Responsive Design

- **Container-based**: Max-width constraints with centering
- **Flexbox Layouts**: Modern CSS Grid and Flexbox
- **Component Sizing**: CSS custom properties for consistency

## File Organization

### Component Categories

1. **Business Logic** (`/components/stingray/`): Application-specific components
2. **UI Primitives** (`/components/ui/`): Reusable ShadCN components
3. **Screen Components** (`/screens/`): Page-level components
4. **Data Layer** (`/data/`): Static data and configurations

### Styling Approach

- **Tailwind Classes**: Utility-first CSS framework
- **CSS Variables**: Dynamic theming and component sizing
- **Component-Scoped**: Styles defined within component files
- **Global Styles**: Base typography and theme definitions in `globals.css`

## Development Patterns

### State Management

- **React Hooks**: `useState`, `useEffect` for local state
- **Props Interface**: TypeScript interfaces for type safety
- **Event Handling**: Callback props for component communication

### Data Flow

```
Data Files → Components → Event Handlers → Console Logging
```

### TypeScript Integration

- **Interface Definitions**: Strong typing for all data structures
- **Component Props**: Typed interfaces for all component inputs
- **Type Safety**: Compile-time error checking

## Future Extensibility

### Planned Enhancements

- **Additional Screens**: Settings, Profile, Channel Details
- **Navigation System**: Multi-screen routing
- **API Integration**: Replace static data with live endpoints
- **Advanced Filtering**: Search and category refinement

### Architecture Benefits

- **Modular Components**: Easy to extend and maintain
- **Type Safety**: Reduced runtime errors
- **Design System**: Consistent visual language
- **Theme System**: Easy brand customization

## Development Setup

### Required Dependencies

```json
{
  "react": "^18.x",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "@types/react": "^18.x"
}
```

### Key Configuration Files

- `styles/globals.css` - Tailwind v4 configuration and theme variables
- `data/` - Static data files with TypeScript interfaces
- `imports/` - Figma-generated assets and SVG components

This architecture provides a solid foundation for a modern, scalable music streaming application with excellent developer experience and user interface consistency.
