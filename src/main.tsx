import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RoutePravider } from "./routes/RouteProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RoutePravider />
    </QueryClientProvider>
  </StrictMode>
);
