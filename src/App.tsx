import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="text-center mt-28">
        <div>
          <p className="text-6xl">Hello World</p>
          <br />
          <br />
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
