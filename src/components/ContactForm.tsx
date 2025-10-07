import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  formData: {
    email: string;
    phone: string;
  };
  onInputChange: (field: string, value: string) => void;
  validationErrors?: string[];
}

const ContactForm = ({ formData, onInputChange, validationErrors = [] }: ContactFormProps) => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          How can your audience connect with you?
        </h1>
        <p className="text-sm text-gray-500">You can customize the details later.</p>
      </div>

      <div className="space-y-6">
        {/* Email ID */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
            Email ID
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@domain.com"
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="h-12 rounded-lg"
          />
        </div>

        {/* Phone Number */}
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
            Phone number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(+XX)999999999"
            value={formData.phone}
            onChange={(e) => onInputChange("phone", e.target.value)}
            className="h-12 rounded-lg"
          />
        </div>

        {/* Validation Error Message - Only show when validation fails */}
        {validationErrors.length > 0 && (
          <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">
              <span className="font-medium">⚠️ Contact Information:</span>
            </p>
            <ul className="mt-2 text-sm text-red-600">
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;