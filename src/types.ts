export interface PersonalityStats {
  performance: number;      // 性能追求
  budgetControl: number;    // 预算控制
  aesthetics: number;       // 外观颜值
  researchAbility: number;  // 硬核研究 (折腾指数)
  stressResistance: number; // 抗折腾心理 (抗压能力)
}

export interface PersonalityResult {
  id: string;
  name: string;
  tagline: string;
  description: string;
  setupStyle: string;
  pitfalls: string;
  behaviors: string[];
  keywords: string[];
  rarity: number; // 击败了多少百分比的玩家
  stats: PersonalityStats;
}

export interface QuizOption {
  text: string;
  // Which personalities this option adds points to (and how much weight, usually 1 or 2)
  scores: Record<string, number>;
}

export interface QuizQuestion {
  id: number;
  title: string;
  description?: string;
  options: QuizOption[];
}
