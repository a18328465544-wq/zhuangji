import { Cpu, HardDrive, Network, Layers } from "lucide-react";
import { motion } from "motion/react";

interface HomeProps {
  onStartQuiz: () => void;
}

export default function Home({ onStartQuiz }: HomeProps) {
  const hardwareTags = [
    { label: "RTX 4090", style: "bg-slate-50 text-slate-800 border-slate-200" },
    { label: "ITX 闷罐", style: "bg-indigo-500/5 text-indigo-700 border-indigo-100" },
    { label: "本地 AI 炼丹", style: "bg-purple-500/5 text-purple-700 border-purple-100" },
    { label: "二手矿渣", style: "bg-amber-600/5 text-amber-800 border-amber-100" },
    { label: "RGB 霓虹夜店", style: "bg-pink-500/5 text-pink-700 border-pink-100" },
    { label: "分体纯铜水冷", style: "bg-blue-500/5 text-blue-700 border-blue-100" },
    { label: "5090 首发抢购", style: "bg-emerald-500/5 text-emerald-700 border-emerald-100" },
    { label: "核显办公 Excel", style: "bg-slate-100 text-slate-600 border-slate-200" },
    { label: "咸鱼捡垃圾战神", style: "bg-yellow-600/5 text-yellow-800 border-yellow-200" },
  ];

  return (
    <div className="min-h-screen py-8 px-4 flex flex-col justify-between items-center text-center relative overflow-hidden bg-[#f2f2f7]" id="homeView">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />

      {/* Navigation Bar simulation as requested by theme */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-between items-center mb-8 px-3 relative z-10"
        id="simulatedNav"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-md">
            <div className="w-3.5 h-3.5 border-2 border-white rounded-sm"></div>
          </div>
          <span className="font-bold tracking-tight text-lg text-[#1d1d1f]">装机人格测试</span>
        </div>
        <div className="flex gap-4 text-xs font-semibold text-slate-500 font-mono">
          <span className="text-black bg-white px-2.5 py-1 rounded-full shadow-sm border border-slate-250/20">1. 首页</span>
          <span className="px-1.5 py-1">2. 答题</span>
          <span className="px-1.5 py-1">3. 结果</span>
        </div>
      </motion.nav>

      {/* Main hero introduction content */}
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center my-auto relative z-10 w-full" id="homeHeroCenter">
        {/* Main Title */}
        <motion.h1
          id="homeAppTitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-[#1d1d1f] tracking-tight leading-tight mb-2"
        >
          测测你到底是哪种装机佬？
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          id="homeAppSubtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-slate-500 font-medium tracking-wide mb-6 uppercase font-mono"
        >
          HARDWARE PERSONALITY ASSESSMENT MATRIX
        </motion.p>

        {/* Introduction Panel Card with Geometric Top Stripe & rounded-[40px] */}
        <motion.div
          id="homeIntroCard"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative max-w-lg mb-8 w-full text-left"
        >
          {/* Top Decorative accent */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="p-8 md:p-10">
            <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold tracking-widest text-slate-500 uppercase inline-block mb-4">
              Diagnostic Scope
            </span>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6" id="homeIntroPara">
              有人装机是为了极致 3A 帧数，有人装机是为了深夜跑 AI 本地炼丹，有人装机是为了把卧室点亮成蹦迪夜店，而有人只想享受将二手垃圾洗净开机的纯粹快乐。
              <br />
              <br />
              本评测不含冗长复杂的行业跑分，只有最直击灵魂的数码极客吐槽题。回答完 14 道测试题，探索你在电脑软硬件光谱上的深层人格画像。
            </p>

            {/* Drifting tags pill cloud */}
            <div className="border-t border-slate-100 pt-6" id="tagsCloudWrapper">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-3 font-mono">
                HARDWARE VECTOR INDEX / 硬件属性索引
              </span>
              <div className="flex flex-wrap gap-1.5 justify-start" id="homeTagsContainer">
                {hardwareTags.map((tag, idx) => (
                  <motion.span
                    key={tag.label}
                    id={`homeTag-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.04 }}
                    className={`text-xs px-3 py-1 rounded-xl border font-medium ${tag.style}`}
                  >
                    {tag.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          id="ctaBtnContainer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <button
            id="startQuizBtn"
            onClick={onStartQuiz}
            className="w-full max-w-lg py-4.5 bg-black hover:bg-neutral-900 text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-slate-300 hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
          >
            <span>开始我的装机人格测试</span>
            <span className="text-xs tracking-wider opacity-70">START TEST →</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative footer features list */}
      <motion.div
        id="homeFooterInfo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-md mx-auto grid grid-cols-3 gap-2 border-t border-slate-200/60 pt-6 text-[10px] text-slate-400 font-mono relative z-10 w-full mt-8"
      >
        <div className="flex flex-col items-center" id="feat-1">
          <Layers className="w-3.5 h-3.5 text-slate-400 mb-1" />
          <span>ALGORITHM</span>
          <span className="text-slate-800 font-bold mt-0.5">多维决策谱</span>
        </div>
        <div className="flex flex-col items-center" id="feat-2">
          <HardDrive className="w-3.5 h-3.5 text-slate-400 mb-1" />
          <span>SPECTRUMS</span>
          <span className="text-slate-800 font-bold mt-0.5">14大核心分类</span>
        </div>
        <div className="flex flex-col items-center" id="feat-3">
          <Network className="w-3.5 h-3.5 text-slate-400 mb-1" />
          <span>PERSISTED</span>
          <span className="text-slate-800 font-bold mt-0.5">本地免登运行</span>
        </div>
      </motion.div>
    </div>
  );
}
