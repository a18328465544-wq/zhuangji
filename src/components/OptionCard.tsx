interface OptionCardProps {
  key?: string;
  id: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

export default function OptionCard({ id, text, isSelected, onClick, index }: OptionCardProps) {
  // Option prefixes (A, B, C, D)
  const prefixes = ["A", "B", "C", "D"];

  return (
    <button
      id={`optionCard-${id}-${index}`}
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 relative flex items-start gap-3.5 focus:outline-none min-h-[56px] select-none cursor-pointer ${
        isSelected
          ? "border-indigo-600 bg-indigo-500/5 shadow-inner scale-[0.995]"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 active:scale-[0.99]"
      }`}
    >
      {/* Premium Radio/Index Circle */}
      <span
        id={`optionPrefix-${index}`}
        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono transition-all duration-200 ${
          isSelected
            ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-sm"
            : "bg-slate-100 text-slate-500 font-semibold"
        }`}
      >
        {prefixes[index] || ""}
      </span>

      {/* Main option label */}
      <span
        id={`optionText-${index}`}
        className={`text-sm md:text-base leading-relaxed transition-colors duration-200 mt-0.5 ${
          isSelected ? "text-slate-900 font-bold" : "text-slate-700 font-medium"
        }`}
      >
        {text}
      </span>
    </button>
  );
}
