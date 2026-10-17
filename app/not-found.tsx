import React from "react";
import Link from "next/link";
import { ArrowLeft, ServerCrash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0B0D] text-[#FFFFFF] flex flex-col items-center justify-center p-6 text-center tech-grid-pattern relative">
      <div className="w-16 h-16 rounded-2xl bg-[#FF6D29]/20 border border-[#FF6D29]/35 flex items-center justify-center text-[#FF8C42] mb-6">
        <ServerCrash className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-2 mb-3">
        <span className="font-mono text-xs font-semibold text-[#FF6D29] bg-[#FF6D29]/15 px-3 py-1 rounded-full border border-[#FF6D29]/30">
          STATUS 404: ENDPOINT NOT FOUND
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
        Resource Unreachable
      </h1>

      <p className="text-base text-[#BABABA] max-w-md mx-auto mb-8 leading-relaxed">
        The requested routing path does not exist on this backend cluster. Please return to the root gateway.
      </p>

      <Button
        href="/"
        variant="primary"
        size="lg"
        icon={<ArrowLeft className="w-4 h-4" />}
        iconPosition="left"
      >
        Return to Gateway
      </Button>
    </div>
  );
}
