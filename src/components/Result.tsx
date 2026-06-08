import { useState } from "react";
import { PersonalityResult } from "../types";
import ResultCard from "./ResultCard";
import { copyText } from "../utils/copyText";
import { RefreshCw, Copy, Check, Info, ArrowLeft, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ResultProps {
  result: PersonalityResult;
  onRetry: () => void;
}

export default function Result({ result, onRetry }: ResultProps) {
  const [copied, setCopied] = useState(false);
  const [showHowToSave, setShowHowToSave] = useState(false);

  // Handle result text copying
  const handleCopy = async () => {
    const textToCopy = `我是【${result.name}】
“${result.tagline}”

我的装机倾向：${result.setupStyle}
最易踩的坑：${result.pitfalls}

测测你是哪种装机佬？快来一起测试体验吧！👇
${window.location.origin}`;

    const ok = await copyText(textToCopy);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen py-6 px-4 md:py-8 bg-[#f2f2f7] text-slate-800 relative overflow-hidden" id="resultView">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />

      {/* Action panel header */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between mb-6 relative z-10" id="resultTopBar">
        <button
          id="backToHomeFromResults"
          onClick={onRetry}
          className="text-slate-500 hover:text-black text-xs flex items-center gap-1 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm hover:shadow outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>返回首页</span>
        </button>
        <div className="flex gap-4 text-xs font-semibold text-slate-500 font-mono">
          <span>首页</span>
          <span>答题</span>
          <span className="text-black bg-white px-2.5 py-1 rounded-full shadow-sm border border-slate-200/40">3. 结果</span>
        </div>
      </div>

      {/* Main Result Card for Screenshots */}
      <motion.div
        id="resultCardMotionWrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 14 }}
        className="w-full max-w-md mx-auto relative z-10"
      >
        <ResultCard result={result} />
      </motion.div>

      {/* Functional controller buttons */}
      <div className="w-full max-w-md mx-auto mt-6 space-y-3 relative z-10" id="actionPanelContainer">
        {/* Toast Warning */}
        <AnimatePresence>
          {copied && (
            <motion.div
              id="copySuccessToast"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="bg-black text-white border border-slate-850/60 rounded-2xl p-3 shadow-xl flex items-center justify-center gap-2 text-xs font-semibold text-center"
            >
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>结果文案已成功复制到剪纸板！快去给群友投毒对线吧！</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Row Trigger: Copy & Tip */}
        <div className="grid grid-cols-2 gap-3" id="actionsDoubleRow">
          <button
            id="copyResultBtn"
            onClick={handleCopy}
            type="button"
            className="flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold text-xs py-3.5 px-4 rounded-2xl shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] transition-all cursor-pointer outline-none"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>复制文字结果</span>
          </button>
          
          <button
            id="howToSaveBtn"
            onClick={() => setShowHowToSave(!showHowToSave)}
            type="button"
            className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs py-3.5 px-4 rounded-2xl shadow-sm hover:translate-y-[-1px] active:translate-y-[1px] transition-all cursor-pointer outline-none"
          >
            <Share2 className="w-4 h-4 text-indigo-500" />
            <span>截图保存指南</span>
          </button>
        </div>

        {/* Explain dialog box (How to save) */}
        <AnimatePresence>
          {showHowToSave && (
            <motion.div
              id="howToSaveSection"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border border-slate-200/50 rounded-2xl p-4 text-xs text-slate-600 leading-relaxed overflow-hidden flex gap-2.5 items-start shadow-sm"
            >
              <Info className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-slate-800" id="tipHeading">💡 如何保存报告长图？</p>
                <div className="text-[11px] text-slate-500 space-y-1" id="tipPara">
                  <p>1. <b>手机端：</b>双开音量键或截图快捷手势，截取上方大卡片即能完成保存，超高质感卡片直接丢给群聊或小红书反馈。</p>
                  <p>2. <b>电脑端：</b>利用系统内置框切 <b>Win+Shift+S</b> 或 <b>Cmd+Shift+4</b> 框选，极易获取完美的点像素图。</p>
                  <p>3. <b>转发优势：</b>报告底部已自动生成并集成了二维码图层与装机佬专属签名，可无缝二次吸粉。</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Large Retry Button */}
        <button
          id="retryTestBtn"
          onClick={onRetry}
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-105 text-white font-bold text-xs py-4 px-4 rounded-2xl shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] transition-all cursor-pointer outline-none"
        >
          <RefreshCw className="w-4 h-4" />
          <span>重新测评我的隐藏人格</span>
        </button>

        {/* Fun credits */}
        <div className="text-center pt-3 text-[10px] text-slate-400 font-mono" id="resultsPromoText">
          DIY PORTAL DIAGNOSTIC SYSTEM • LOCAL DEVICE ONLY
        </div>
      </div>
    </div>
  );
}
