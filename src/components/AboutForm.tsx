import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

interface AboutFormProps {
  formData: {
    firstName: string;
    lastName: string;
    location: string;
    title: string;
    company: string;
  };
  onInputChange: (field: string, value: string) => void;
  validationErrors?: string[];
}

const AboutForm = ({ formData, onInputChange, validationErrors = [] }: AboutFormProps) => {
  return (
    <div>
      <div className="mb-">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Tell us a bit about yourself
        </h1>
        <p className="text-sm text-gray-500">We&apos;ll use this info to build your page.</p>
      </div>

      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
              First name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => onInputChange("firstName", e.target.value)}
              className="h-12 rounded-lg"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
              Last name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => onInputChange("lastName", e.target.value)}
              className="h-12 rounded-lg"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <Label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2 block">
            Location
          </Label>
          <Input
            id="location"
            placeholder="Place, City, Country"
            value={formData.location}
            onChange={(e) => onInputChange("location", e.target.value)}
            className="h-12 rounded-lg"
          />
        </div>

        {/* Title */}
        <div>
          <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
            Title
          </Label>
          <Input
            id="title"
            placeholder="Marketing Lead"
            value={formData.title}
            onChange={(e) => onInputChange("title", e.target.value)}
            className="h-12 rounded-lg"
          />
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
            Company
          </Label>
          <div className="relative">
            <Input
              id="company"
              placeholder="Acme"
              value={formData.company}
              onChange={(e) => onInputChange("company", e.target.value)}
              className="h-12 rounded-lg pr-10"
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>

        {/* Validation Error Message */}
        {validationErrors.length > 0 && (
          <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">
              <span className="font-medium">⚠️ Required fields:</span>
            </p>
            <ul className="mt-2 text-sm text-red-600">
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutForm;