"use client";

import SignupModal from "@/components/Sinup/SignupModal";

const Signup = () => {
  if (typeof window === "undefined") return null;
  return (
    <div className="flex justify-center h-full">
      <SignupModal />
    </div>
  );
};

export default Signup;
