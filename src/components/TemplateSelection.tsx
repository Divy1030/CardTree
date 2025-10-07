import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  location: string;
  title: string;
  company: string;
  email: string;
  phone: string;
}

interface TemplateSelectionProps {
  formData: FormData;
  onTemplateSelect?: (templateName: string) => void;
  onBack?: () => void;
}

const TemplateSelection = ({ formData, onTemplateSelect, onBack }: TemplateSelectionProps) => {
  const templates = [
    {
      name: "Full Story",
      description: "Template 1 of 5",
    },
    {
      name: "Quick Intro", 
      description: "Template 2 of 5",
    }
  ];

  const handleTemplateSelect = (templateName: string) => {
    const timestamp = new Date().toISOString();
    
    console.group(`🎨 Template Selected - ${templateName}`);
    console.log(`⏰ Timestamp: ${timestamp}`);
    console.log(`📋 Selected Template: ${templateName}`);
    
    console.group(`📝 Complete Form Data`);
    console.log(`👤 Personal Info:`, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      location: formData.location,
      title: formData.title,
      company: formData.company
    });
    console.log(`📞 Contact Info:`, {
      email: formData.email,
      phone: formData.phone
    });
    console.groupEnd();
    
    const filledFields = Object.values(formData).filter((value: string) => value && value.trim() !== '').length;
    const totalFields = Object.keys(formData).length;
    const completionPercentage = Math.round((filledFields / totalFields) * 100);
    
    console.log(`📊 Form Completion: ${completionPercentage}% (${filledFields}/${totalFields} fields)`);
    
    console.log(`📈 Selection Summary:`, {
      template: templateName,
      completionRate: `${completionPercentage}%`,
      timestamp: timestamp,
      userProfile: {
        hasName: !!(formData.firstName && formData.lastName),
        hasContact: !!(formData.email || formData.phone),
        hasProfessionalInfo: !!(formData.title || formData.company)
      }
    });
    
    console.groupEnd();
    
    // Use the parent's handler if provided
    if (onTemplateSelect) {
      onTemplateSelect(templateName);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Top Bar with Logo and Back Button */}
      <div className="flex items-center justify-between mb-12">
        <div className="w-10 h-10 bg-gray-900 rounded-lg"></div>
        
        {onBack && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back</span>
          </Button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose a template
            </h1>
          </div>

          {/* Template Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {templates.map((template) => (
              <div key={template.name} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{template.description}</p>
                
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-6 h-64 flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Template Preview</div>
                </div>

                <div className="flex gap-3 justify-center">
                  <Button 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full"
                    onClick={() => handleTemplateSelect(template.name)}
                  >
                    Use template
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-white border-black text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full flex items-center gap-2"
                  >
                    Preview
                    <Eye size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* BYOB Section */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              BYOB - Build Your Own Bio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;