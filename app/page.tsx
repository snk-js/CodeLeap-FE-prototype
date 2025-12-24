"use client";

import SignupModal from "@/components/Sinup/SignupModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignupModal />
    </div>
  );
}
