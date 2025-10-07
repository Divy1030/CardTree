"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import StepNavigation from "@/components/StepNavigation";
import AboutForm from "@/components/AboutForm";
import ContactForm from "@/components/ContactForm";
import TemplateSelection from "@/components/TemplateSelection";
import PreviewSection from "@/components/PreviewSection";

interface FormData {
  firstName: string;
  lastName: string;
  location: string;
  title: string;
  company: string;
  email: string;
  phone: string;
}

function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [showValidation, setShowValidation] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    location: "",
    title: "",
    company: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (showValidation) {
      setShowValidation(false);
      setValidationErrors([]);
    }
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      const step1Errors = validateStep1();
      if (step1Errors.length > 0) {
        setValidationErrors(step1Errors);
        setShowValidation(true);
        console.warn("❌ Step 1 Validation Failed:", step1Errors);
        return;
      }
      
      setValidationErrors([]);
      setShowValidation(false);
      
      console.log("✅ Step 1 - About Data (Validated):", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        location: formData.location,
        title: formData.title,
        company: formData.company
      });
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const step2Errors = validateStep2();
      if (step2Errors.length > 0) {
        setValidationErrors(step2Errors);
        setShowValidation(true);
        console.warn("❌ Step 2 Validation Failed:", step2Errors);
        return;
      }
      
      setValidationErrors([]);
      setShowValidation(false);
      
      console.log("✅ Complete Form Data (Validated):", formData);
      setCurrentStep(3);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    setValidationErrors([]);
    setShowValidation(false);
    console.log(`Navigated to Step ${step}`);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValidationErrors([]);
      setShowValidation(false);
      console.log(`⬅️ Navigated back to Step ${currentStep - 1}`);
    }
  };

  const validateStep1 = () => {
    const errors: string[] = [];
    
    if (!formData.firstName.trim()) {
      errors.push("• First name is required");
    }
    if (!formData.lastName.trim()) {
      errors.push("• Last name is required");
    }
    
    return errors;
  };

  const validateStep2 = () => {
    const errors: string[] = [];
    
    if (!formData.email.trim() && !formData.phone.trim()) {
      errors.push("• Please provide at least one contact method (email or phone)");
    }
    
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("• Please enter a valid email address");
    }
    
    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,3}[\s\-\(]?[\d]{3,}[\s\-\)]?[\d]+$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.push("• Please enter a valid phone number");
    }
    
    return errors;
  };

  const validateFormData = () => {
    const errors: string[] = [];
    
    if (!formData.firstName.trim()) errors.push("First name is required");
    if (!formData.lastName.trim()) errors.push("Last name is required");
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Invalid email format");
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,3}[\s\-\(]?[\d]{3,}[\s\-\)]?[\d]+$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.push("Invalid phone format");
    }
    
    return errors;
  };

  const handleTemplateSelection = (templateName: string) => {
    const validationErrors = validateFormData();
    
    if (validationErrors.length > 0) {
      alert(`Please fix the following issues:\n${validationErrors.join('\n')}`);
    } else {
      alert(`Template "${templateName}" selected successfully! ✅`);
    }
  };

  return (
    <div className="h-screen bg-gray-200 flex overflow-hidden">
      {/* Left Section - Form */}
      <div className={`${currentStep === 3 ? 'w-full' : 'w-1/2'} bg-white px-28 py-12 flex flex-col h-screen overflow-hidden rounded-tr-[2rem] rounded-br-[2rem]`}>
        {/* Logo/Brand - Only show on steps 1 and 2 */}
        {currentStep < 3 && (
          <div className="mb-8">
            <div className="w-10 h-10 bg-gray-900 rounded-lg"></div>
          </div>
        )}

        {/* Steps Navigation - Only show on steps 1 and 2 */}
        {currentStep < 3 && (
          <div className="mb">
            <StepNavigation currentStep={currentStep} onStepClick={handleStepClick} />
          </div>
        )}

        {/* Form Content */}
        <div className={`flex-1 ${currentStep === 3 ? 'flex items-center justify-center overflow-y-auto' : ''}`}>
          {currentStep === 1 && (
            <AboutForm 
              formData={{
                firstName: formData.firstName,
                lastName: formData.lastName,
                location: formData.location,
                title: formData.title,
                company: formData.company
              }}
              onInputChange={handleInputChange}
              validationErrors={showValidation ? validationErrors : []}
            />
          )}

          {currentStep === 2 && (
            <ContactForm 
              formData={{
                email: formData.email,
                phone: formData.phone
              }}
              onInputChange={handleInputChange}
              validationErrors={showValidation ? validationErrors : []}
            />
          )}

          {currentStep === 3 && (
            <TemplateSelection 
              formData={formData} 
              onTemplateSelect={handleTemplateSelection}
              onBack={handleBack}
            />
          )}
        </div>

        {/* Continue Button - Only show for steps 1 and 2 */}
        {currentStep < 3 && (
          <div className="mt-10">
            <Button 
              onClick={handleContinue}
              className="w-full h-12 bg-[#2C7BDE] hover:bg-blue-700 text-white rounded-full text-base font-medium"
            >
              Continue
            </Button>
          </div>
        )}
      </div>

      {/* Right Section - Preview - Hide on step 3 */}
      {currentStep < 3 && (
        <div className="w-1/2 bg-gray-200 flex items-center justify-center p-8 overflow-hidden">
          <PreviewSection />
        </div>
      )}
    </div>
  );
}

export default Home;