import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import React from "react";

// Add Indira K font-face globally for this page
const indiraFont = `@font-face {
  font-family: 'Indira K';
  src: url('/assets/indira_k.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f9f7f3]">
      <style>{indiraFont}</style>
      <Card className="w-full max-w-md mx-4 bg-white rounded-3xl shadow-lg">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 justify-center">
            <AlertCircle className="h-8 w-8 text-[#a86c3c]" />
            <h1 className="text-2xl font-bold text-[#a86c3c]">
              Page not found
            </h1>
          </div>
          <p className="mt-4 text-base text-[#3d2c1e]">
            Sorry, the page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="inline-block mt-6 text-[#a86c3c] font-semibold hover:underline"
          >
            Back to Home
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
