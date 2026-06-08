import { PersonalityResult } from "../types";
import { Cpu, Terminal, Sparkles, Award, Compass, AlertTriangle, Lightbulb } from "lucide-react";

interface ResultCardProps {
  result: PersonalityResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  const statLabels = [
    { key: "performance" as const, label: "性能狂热", color: "from-red-500 to-orange-400", icon: Cpu },
    { key: "budgetControl" as const, label: "预算理智", color: "from-emerald-500 to-teal-400", icon: Compass },
    { key: "aesthetics" as const, label: "灯效颜值", color: "from-pink-500 to-rose-400", icon: Sparkles },
    { key: "researchAbility" as const, label: "硬核折腾", color: "from-amber-500 to-yellow-400", icon: Terminal },
    { key: "stressResistance" as const, label: "心态防暴", color: "from-blue-500 to-cyan-400", icon: Award },
  ];

  return (
    <div
      id="screenshot-target"
      className="w-full max-w-md mx-auto bg-white border border-slate-100 rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden relative flex flex-col p-8 font-sans select-none tracking-tight"
    >
      {/* Decorative absolute top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      {/* Decorative background grid and gradient */}
      <div className="absolute inset-0 bg-radial-at-t from-slate-50/50 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Stamp/Logo */}
      <div className="relative flex justify-between items-start mb-6 pt-1" id="resultCardHeader">
        <div>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase font-mono">
            HARDWARE PERSONALITY MATRIX
          </span>
          <h2 className="text-xl font-black text-slate-900 mt-0.5" id="appLogoHeading">
            装机人格报告
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[9px] font-bold tracking-widest text-slate-400 font-mono">RARE MATRIX</span>
          <span className="text-[11px] font-extrabold text-indigo-700 bg-indigo-50/70 border border-indigo-100/30 px-2 py-0.5 rounded-lg mt-1" id="rarityStamp">
            稀有度: {result.rarity}%
          </span>
        </div>
      </div>

      {/* Main Core Identity Grid */}
      <div className="relative mb-6 text-center py-6 bg-slate-50 border border-slate-100 rounded-3xl" id="mainCoreIdentity">
        <span className="text-[10px] font-bold tracking-wider text-indigo-600 bg-indigo-500/5 px-3 py-1 rounded-full inline-block font-mono">
          YOUR INSTINCTIVE IDENTITY
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight" id="resultNameTitle">
          {result.name}
        </h1>
        <p className="text-xs md:text-sm text-slate-600 px-4 mt-2.5 font-medium italic min-h-[40px] flex items-center justify-center text-center leading-relaxed" id="resultTagline">
          “{result.tagline}”
        </p>
      </div>

      {/* Dimension Metrics */}
      <div className="relative space-y-3 mb-6" id="metricsSection">
        <h3 className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-mono">
          装机倾向维度 (DIMENSIONS)
        </h3>
        <div className="space-y-3 bg-slate-50/50 p-4.5 rounded-2xl border border-slate-100/70">
          {statLabels.map(({ key, label, color, icon: IconComponent }) => {
            const value = result.stats[key];
            return (
              <div key={key} className="flex items-center gap-3">
                <IconComponent className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" id={`metricIcon-${key}`} />
                <span className="text-xs font-bold text-slate-600 w-16" id={`metricLabel-${key}`}>{label}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden" id={`metricBarBg-${key}`}>
                  <div
                    id={`metricBarFill-${key}`}
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-500`}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 w-8 text-right" id={`metricVal-${key}`}>{value}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Narrative Analysis */}
      <div className="relative space-y-3 mb-5" id="analysisSection">
        <h4 className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-mono flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          人格深度解析 (ANALYSIS)
        </h4>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-2xl border border-slate-100" id="resultDesc">
          {result.description}
        </p>
      </div>

      {/* Setup Recommend & Pitfall */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 mb-5" id="doubleCardGrid">
        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100/70 flex flex-col justify-start">
          <div className="flex items-center gap-1.5 text-slate-800 text-xs font-bold mb-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>配置特征</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed" id="resultSetupStyle">
            {result.setupStyle}
          </p>
        </div>
        <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100/70 flex flex-col justify-start">
          <div className="flex items-center gap-1.5 text-slate-800 text-xs font-bold mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            <span>自省盲区</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed" id="resultPitfalls">
            {result.pitfalls}
          </p>
        </div>
      </div>

      {/* Iconic Behaviors Quotes */}
      <div className="relative space-y-3 mb-5" id="behaviorsSection">
        <h4 className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-mono flex items-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
          经典语录 / 口头禅 (MEMES)
        </h4>
        <div className="space-y-2" id="behaviorList">
          {result.behaviors.map((quote, idx) => (
            <div
              key={idx}
              id={`quoteBubble-${idx}`}
              className="text-xs leading-relaxed bg-slate-50/30 border border-slate-100 p-3 rounded-2xl text-slate-700 italic flex items-start gap-1.5"
            >
              <span className="text-indigo-500 font-serif text-lg leading-none -mt-1 flex-shrink-0">“</span>
              <span className="flex-1 mt-0.5">{quote.replace(/^“|”$/g, "")}</span>
              <span className="text-indigo-500 font-serif text-lg leading-none mt-auto align-bottom">”</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keywords Badge Cloud */}
      <div className="relative flex flex-wrap gap-1.5 mb-6" id="keywordsCloud">
        {result.keywords.map((tag) => (
          <span
            key={tag}
            id={`keywordTag-${tag}`}
            className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/30"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer Branding Label */}
      <div className="relative mt-auto border-t border-slate-100 pt-4 flex justify-between items-center text-slate-400 font-mono text-[9px]" id="resultCardFooter">
        <span>GENERATED: {new Date().toISOString().split("T")[0]}</span>
        <span className="font-bold text-slate-500">你是哪种装机佬？装机测试</span>
      </div>
    </div>
  );
}
