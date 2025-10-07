"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LayoutGrid, UserPlus } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div 
            onClick={() => router.push("/home")}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all cursor-pointer group hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <UserPlus className="text-blue-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Onboarding Screen
              </h2>
              <p className="text-gray-600 mb-6">
                Check out the onboarding screen 
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 text-base font-medium">
                Get Started
              </Button>
            </div>
          </div>

          <div 
            onClick={() => router.push("/grid")}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-500 transition-all cursor-pointer group hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                <LayoutGrid className="text-purple-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Explore Grid Layout
              </h2>
              <p className="text-gray-600 mb-6">
                Check out the grid layout
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full h-12 text-base font-medium">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
