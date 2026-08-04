"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-primary text-white flex flex-col items-center justify-center px-4 py-24">
      <div className="text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-8">
          <MapPinOff className="h-8 w-8 text-accent-foreground" />
        </div>

        <div className="font-display text-7xl sm:text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-white/70 text-lg leading-relaxed mb-10">
          We couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>

        <div className="flex flex-col items-center gap-5">
          <Link href="/">
            <Button className="gradient-gold text-accent-foreground px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
