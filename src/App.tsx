import { useState, useEffect } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { questions } from "./data/questions";
import { results } from "./data/results";
import { calculateResult } from "./utils/calculateResult";
import { QuizOption, PersonalityResult } from "./types";
import { motion, AnimatePresence } from "motion/react";

const LOCAL_STORAGE_KEY = "diy_pc_personality_latest_result";

export default function App() {
  const [view, setView] = useState<"home" | "quiz" | "result">("home");
  const [winningResult, setWinningResult] = useState<PersonalityResult | null>(null);

  // Check if there's a stored result on mount
  useEffect(() => {
    try {
      const storedKey = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedKey && results[storedKey]) {
        setWinningResult(results[storedKey]);
      }
    } catch (e) {
      console.warn("Could not read from localStorage:", e);
    }
  }, []);

  // Handler for starting the quiz
  const handleStartQuiz = () => {
    setView("quiz");
  };

  // Handler for completing the quiz
  const handleFinishQuiz = (answers: QuizOption[]) => {
    const WinningKey = calculateResult(answers);
    const resultObj = results[WinningKey];
    
    setWinningResult(resultObj || results.rtx4060Rational);
    setView("result");

    // LocalStorage persistence
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, WinningKey);
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  };

  // Back to home view
  const handleBackToHome = () => {
    setView("home");
  };

  // Reset/retry the quiz
  const handleRetry = () => {
    setView("quiz");
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col font-sans" id="appletRoot">
      <div className="w-full max-w-md md:max-w-xl mx-auto flex-1 flex flex-col min-h-screen relative overflow-hidden bg-white shadow-2xl" id="frameWrapper">
        <AnimatePresence mode="wait">
          {view === "home" && (
            <motion.div
              key="home"
              id="homeSection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col"
            >
              {/* Show history badge if user has run the test before */}
              {winningResult && (
                <div 
                  id="historyBadge"
                  className="bg-blue-50 border-b border-blue-100/65 flex justify-between items-center px-4 py-2 text-xs text-blue-700 font-mono relative z-20"
                >
                  <span id="historyText">上次测试报告：<b>{winningResult.name}</b></span>
                  <button
                    id="historyViewBtn"
                    onClick={() => setView("result")}
                    className="text-[10px] font-bold bg-blue-600 text-white px-2.5 py-1 rounded-md hover:bg-blue-700 active:scale-95 transition-all outline-none cursor-pointer"
                  >
                    查看结果
                  </button>
                </div>
              )}
              <Home onStartQuiz={handleStartQuiz} />
            </motion.div>
          )}

          {view === "quiz" && (
            <motion.div
              key="quiz"
              id="quizSection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col"
            >
              <Quiz
                questions={questions}
                onFinishQuiz={handleFinishQuiz}
                onBackToHome={handleBackToHome}
              />
            </motion.div>
          )}

          {view === "result" && winningResult && (
            <motion.div
              key="result"
              id="resultSection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col"
            >
              <Result result={winningResult} onRetry={handleRetry} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
