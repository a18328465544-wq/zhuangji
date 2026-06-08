import { motion } from "motion/react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full" id="progressBarContainer">
      <div className="flex justify-between items-center mb-1 text-xs text-neutral-400 font-mono">
        <span id="progressText">进度 {current} / {total}</span>
        <span id="progressPercent">{Math.round(percentage)}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden" id="progressBarBG">
        <motion.div
          id="progressBarFill"
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
        />
      </div>
    </div>
  );
}
