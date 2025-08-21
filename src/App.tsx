import Home from "./components/screens/Home";
import SearchBrowse from "./components/screens/SearchBrowse";
import AppInfo from "./components/screens/AppInfo";
import ChannelDetails from "./components/screens/ChannelDetails";
import MainMenu from "./components/navigation/MainMenu";
import { NavigationProvider } from "./contexts/NavigationContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { useNavigation } from "./hooks/useNavigation";

function AppContent() {
  const { currentScreen } = useNavigation();

  // Render the appropriate screen based on navigation state
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home />;
      case "search":
        return <SearchBrowse />;
      case "appInfo":
        return <AppInfo />;
      case "channelDetails":
        return <ChannelDetails />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      className="h-screen"
      style={{ backgroundColor: "var(--color-background-primary)" }}
    >
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Menu - fixed position, overlays content */}
      <MainMenu />

      {/* Main layout */}
      <div className="h-full">
        {/* Current screen content - full width but padded to account for sidebar */}
        {renderCurrentScreen()}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
