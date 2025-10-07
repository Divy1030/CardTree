import { ChevronRight } from "lucide-react";

interface StepNavigationProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const StepNavigation = ({ currentStep, onStepClick }: StepNavigationProps) => {
  const steps = [
    { number: 1, label: "About" },
    { number: 2, label: "Contact info" },
    { number: 3, label: "Template", hasAI: true }
  ];

  return (
    <div className="flex items-center justify-center mb-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div 
            className="flex flex-col items-center cursor-pointer group" 
            onClick={() => onStepClick(step.number)}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all mb-2 ${
              currentStep === step.number 
                ? 'bg-[#00C5FF] text-white' 
                : currentStep > step.number
                ? 'bg-[#00C5FF] text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {step.number}
            </div>
            <div className="text-center">
              <span className={`text-sm font-medium ${
                currentStep >= step.number 
                  ? 'text-gray-900' 
                  : 'text-gray-400'
              }`}>
                {step.label}
              </span>
              {step.hasAI && (
                <span 
                  className="ml-1 text-xs font-semibold bg-gradient-to-b from-[#0058E6] via-[#E6511E] to-[#F4B400] bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  + AI
                </span>
              )}
            </div>
          </div>
          {index < steps.length - 1 && (
            <ChevronRight className="mx-4 mb-6 text-black" size={16} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;