import { useState } from "react";
import { QuizQuestion, QuizOption } from "../types";
import { ChevronLeft, ChevronRight, HelpCircle, ArrowLeft } from "lucide-react";
import ProgressBar from "./ProgressBar";
import OptionCard from "./OptionCard";
import { motion, AnimatePresence } from "motion/react";

interface QuizProps {
  questions: QuizQuestion[];
  onFinishQuiz: (answers: QuizOption[]) => void;
  onBackToHome: () => void;
}

export default function Quiz({ questions, onFinishQuiz, onBackToHome }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track selected answers per question index
  const [selections, setSelections] = useState<Record<number, QuizOption>>({});

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Handle option click
  const handleOptionSelect = (option: QuizOption) => {
    const updated = { ...selections, [currentIndex]: option };
    setSelections(updated);

    // If it's not the last question, auto-advance with a slight delay
    // to let the user visually witness their selected item state.
    if (!isLastQuestion) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 250);
    }
  };

  // Previous button handler
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      onBackToHome();
    }
  };

  // Next button handler (manual override or trigger submit code)
  const handleNext = () => {
    if (selections[currentIndex]) {
      if (isLastQuestion) {
        // Collect all selections in order
        const OrderedAnswers = questions.map((_, idx) => selections[idx]);
        onFinishQuiz(OrderedAnswers);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="min-h-screen py-6 px-4 md:py-8 flex flex-col justify-between items-center text-left bg-[#f2f2f7]" id="quizView">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />

      {/* Header Bar */}
      <div className="w-full max-w-xl mx-auto flex items-center justify-between mb-4 relative z-10" id="quizHeader">
        <button
          id="backToHomeBtn"
          onClick={onBackToHome}
          className="text-slate-500 hover:text-black text-xs flex items-center gap-1 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm hover:shadow active:scale-95 transition-all outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>返回首页</span>
        </button>
        <div className="flex gap-4 text-xs font-semibold text-slate-500 font-mono">
          <span>首页</span>
          <span className="text-black bg-white px-2.5 py-1 rounded-full shadow-sm border border-slate-200/40">2. 答题</span>
          <span>结果</span>
        </div>
      </div>

      {/* Primary Quiz Frame */}
      <div className="w-full max-w-xl mx-auto my-auto relative z-10" id="quizContentFrame">
        {/* Progress Bar Container */}
        <div className="mb-4 bg-white border border-slate-200/60 p-4 rounded-2xl shadow-sm" id="progressWrapper">
          <ProgressBar current={currentIndex + 1} total={totalQuestions} />
        </div>

        {/* Animate slide transitions for questions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="bg-white border border-slate-100 shadow-2xl rounded-[40px] p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden"
            id={`quizCard-slide-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            {/* Index, Question Title */}
            <div className="space-y-2 mt-1">
              <div className="flex items-center gap-1.5" id="questionIconTitleBlock">
                <span className="flex-shrink-0 bg-slate-100 text-slate-800 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full">
                  QUESTION {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug" id="questionTitle">
                {currentQuestion.title}
              </h2>
              {currentQuestion.description && (
                <p className="text-xs text-slate-400 font-normal leading-relaxed" id="questionDesc">
                  {currentQuestion.description}
                </p>
              )}
            </div>

            {/* Answer Options Stack */}
            <div className="space-y-3 pt-1" id="optionsStack">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selections[currentIndex]?.text === option.text;
                return (
                  <OptionCard
                    key={`${currentIndex}-${idx}`}
                    id={`${currentIndex}-${idx}`}
                    text={option.text}
                    isSelected={isSelected}
                    onClick={() => handleOptionSelect(option)}
                    index={idx}
                  />
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation Bar */}
      <div className="w-full max-w-xl mx-auto flex items-center justify-between mt-6 relative z-10" id="quizNavigationFooter">
        <button
          id="prevQuestionBtn"
          onClick={handlePrevious}
          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-black bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-sm active:scale-95 transition-all outline-none-hidden"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>上一题</span>
        </button>

        {isLastQuestion ? (
          <button
            id="finishTestBtn"
            disabled={!selections[currentIndex]}
            onClick={handleNext}
            className={`flex items-center gap-1 text-xs font-bold px-6 py-3 rounded-2xl shadow-xl transition-all outline-none ${
              selections[currentIndex]
                ? "bg-black hover:bg-neutral-900 text-white active:scale-95 cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <span>生成人格诊断报告</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            id="nextQuestionBtn"
            disabled={!selections[currentIndex]}
            onClick={handleNext}
            className={`flex items-center gap-1 text-xs font-semibold px-5 py-2.5 rounded-2xl shadow-sm transition-all outline-none ${
              selections[currentIndex]
                ? "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 active:scale-95 cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <span>下一题</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
