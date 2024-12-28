import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { router } from "./routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "./components/ui/sidebar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
}

export default App;
