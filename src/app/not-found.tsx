"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-muted mb-4">404</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oops! We couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full sm:w-auto gradient-gold text-accent-foreground px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>

          <div className="text-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-accent-foreground hover:text-[#b07d10] font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
