import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MessageSquare,
  Download,
  Play,
  Cloud,
} from "lucide-react";

const PreviewSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg h-full flex flex-col overflow-hidden">
      {/* Main Profile Card - Smaller */}
    <div className="mb-2 flex justify-center flex-shrink-0">
      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4 rounded-[2rem] shadow-lg border border-gray-100 inline-block">
        <div className="bg-transparent backdrop-blur-sm rounded-[1rem]">
        <div className="flex justify-center items-start">
          {/* Left side - Profile */}
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden shadow-lg mb-2">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full"
            />
            </div>

            <h3 className="font-bold text-gray-900 text-base mb-0.5">Pam Beasly</h3>
            <p className="text-xs text-gray-600">Senior Sales Leader</p>
            <p className="text-xs text-gray-600 mb-2">Carrot Corp</p>

            {/* Brand logo placeholder */}
            <div className="border rounded-md">
            <img
              src="https://thumbs.dreamstime.com/b/print-185580926.jpg"
              alt="Brand Logo"
              className="object-contain rounded-xl w-7"
            />
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">Connect with me</p>
            <div className="w-24 h-24 bg-white border-2 mx-auto border-blue-200 rounded-lg flex items-center justify-center mb-2 shadow-sm">
            <img
              src="https://cdn-icons-png.freepik.com/512/1260/1260053.png"
              alt=""
              className="w-20 h-20"
            />
            </div>
            <p className="text-xs text-blue-600 font-medium mb-2">Business card</p>
            {/* Action Buttons */}
            <div className="flex space-x-2">
            <div className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer transition-colors">
              <Phone size={16} className="text-blue-600" />
            </div>
            <div className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer transition-colors">
              <Mail size={16} className="text-blue-600" />
            </div>
            <div className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer transition-colors">
              <MessageSquare size={16} className="text-blue-600" />
            </div>
            <div className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer transition-colors">
              <Download size={16} className="text-blue-600" />
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

      {/* Esteemed clients section */}
    <div className="mb-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-shrink-0">
      <h4 className="font-semibold text-gray-900 mb-3 text-sm">
        Esteemed clients and partners
      </h4>

      {/* Logos row with horizontal scroll */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="flex flex-col items-center flex-shrink-0">
        <div className="h-20 w-24 border border-gray-300 rounded-lg p-3 flex items-center justify-center mb-1">
          <img
            className="w-full object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/1280px-Snowflake_Logo.svg.png"
            alt=""
          />
        </div>
        <span className="text-xs text-gray-600">Snowflake</span>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
        <div className="h-20 w-24 border border-gray-300 rounded-lg p-3 flex items-center justify-center mb-1">
          <img
            className="w-full object-contain"
            src="https://exotel.com/wp-content/uploads/2025/07/green-black-logo-1.png"
            alt=""
          />
        </div>
        <span className="text-xs text-gray-600">Exotel</span>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
        <div className="h-20 w-24 border border-gray-300 rounded-lg p-3 flex items-center justify-center mb-1">
          <span className="text-purple-600 text-xl font-bold">luru</span>
        </div>
        <span className="text-xs text-gray-600">Luru</span>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
        <div className="h-20 w-24 border border-gray-300 rounded-lg p-3 flex items-center justify-center mb-1">
          <img
            className="w-full object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9xLXJScsgYaxAt_7ND_4p1Rda3O-MRB1HZg&s"
            alt=""
          />
        </div>
        <span className="text-xs text-gray-600">Freshworks</span>
        </div>

        <div className="flex flex-col items-center flex-shrink-0">
        <div className="h-20 w-24 border border-gray-300 rounded-lg p-3 flex items-center justify-center mb-1">
          <img
            className="w-full object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMPtJ1eUiP2AL8AQK0s6qQ3ojg8b6yFXBRg&s"
            alt=""
          />
        </div>
        <span className="text-xs text-gray-600">Firebase</span>
        </div>
      </div>
    </div>

      {/* Product cards - Top row - Fixed height to prevent overlap */}
    <div className="grid grid-cols-[1.5fr_1fr] gap-3 mb-3 h-32 flex-shrink-0">
      <Card className="relative bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-xl shadow-sm border-gray-200/50 rounded-2xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
        <CardContent className="p-2 relative z-10 h-full flex items-center justify-between gap-2">
        <div className="flex-1">
          <h5 className="font-semibold text-[11px] text-gray-900 mb-0.5">
            Product brochure
          </h5>
          <p className="text-[9px] text-gray-500 mb-1.5">One pager PDF</p>
          
          <button className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/80 transition-all">
            <Download size={12} />
          </button>
        </div>

        <div className="w-32 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
          <div className="absolute -right-2 -top-2 w-10 h-10 bg-gradient-to-tr from-cyan-100/40 to-white/20 rounded-full blur-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop"
            alt="Product Brochure"
            className="w-full h-full object-cover rounded-lg shadow-lg border border-white/30"
          />
        </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-gray-200 rounded-2xl overflow-hidden">
        <CardContent className="p-2.5 h-full flex flex-col">
        <h5 className="font-semibold text-[11px] text-gray-900 mb-2">
          Market domain expertise
        </h5>

        <div className="flex-1 flex items-center gap-2 min-h-0 overflow-x-auto scrollbar-hide">
          <div className="bg-gray-50 rounded-xl p-2 flex-shrink-0 w-20 flex flex-col items-center justify-center">
            <div className="w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center mb-1">
            <Cloud size={16} className="text-gray-700" />
            </div>
            <span className="text-[9px] text-gray-700">SaaS</span>
          </div>

          <div className="bg-gray-50 rounded-xl p-2 flex-shrink-0 w-20 flex flex-col items-center justify-center">
            <div className="w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center mb-1">
            <Phone size={16} className="text-gray-700" />
            </div>
            <span className="text-[9px] text-gray-700 text-center leading-tight">Cloud communi.</span>
          </div>
        </div>
        </CardContent>
      </Card>
    </div>

      {/* Bottom cards row */}
    <div className="grid grid-cols-3 gap-3 flex-shrink-0 mb-4">
      <Card className="bg-white shadow-sm border-gray-200 rounded-2xl">
        <CardContent className="p-2.5">
        <h5 className="font-semibold text-xs text-gray-900 mb-1">
          Tech stack expertise
        </h5>
        <p className="text-[10px] text-gray-500 mb-1.5">
          Tech I deploy for my customers
        </p>
        <div className="space-y-1.5">
          <div className="flex items-center space-x-1.5">
            <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
            <span className="text-orange-600 text-xs font-bold">H</span>
            </div>
            <span className="text-[10px] text-gray-700">HubSpot</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs font-bold">S</span>
            </div>
            <span className="text-[10px] text-gray-700">Salesforce</span>
          </div>
        </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-gray-200 rounded-2xl">
        <CardContent className="p-2.5">
        <h5 className="font-semibold text-xs text-gray-900 mb-1">
          Product Walkthrough - 5 minutes demo video
        </h5>
        <p className="text-[10px] text-gray-500 mb-1.5">
          Learn the basics of Acme and get started quickly.
        </p>
        <Button
          size="sm"
          className="bg-red-500 hover:bg-red-600 text-white h-7 text-[10px] px-2"
        >
          <Play size={11} className="mr-1" />
        </Button>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-gray-200 rounded-2xl">
        <CardContent className="p-2.5">
        <h5 className="font-semibold text-xs text-gray-900 mb-1">
          Book my calendar
        </h5>
        <p className="text-[10px] text-gray-500 mb-1.5">At your convenience</p>
        <div className="flex items-center justify-center mb-1.5">
          <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 14 }, (_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-100 rounded-sm"></div>
          ))}
        </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default PreviewSection;