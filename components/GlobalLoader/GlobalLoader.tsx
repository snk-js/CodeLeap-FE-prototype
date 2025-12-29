// app/components/GlobalLoader/GlobalLoader.tsx
"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const GlobalLoader: React.FC = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const isLoading = isFetching > 0 || isMutating > 0;

  if (!isLoading) return null;

  return <LoadingSpinner />;
};

export default GlobalLoader;
