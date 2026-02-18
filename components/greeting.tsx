import { motion } from "framer-motion";
import {
  BookOpenIcon,
  BriefcaseIcon,
  FileTextIcon,
  GavelIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";

const QUICK_ACTIONS = [
  {
    icon: ScaleIcon,
    label: "استشارة قانونية",
    description: "توجيهات متخصصة في الأنظمة السعودية",
    gradient: "from-zinc-500/10 to-zinc-600/5",
    iconBg: "bg-zinc-500/15 dark:bg-zinc-400/15",
    iconColor: "text-zinc-700 dark:text-zinc-300",
    hoverBorder: "hover:border-zinc-300 dark:hover:border-zinc-700",
  },
  {
    icon: FileTextIcon,
    label: "مراجعة عقد",
    description: "تحليل بنود العقود وتقييم المخاطر",
    gradient: "from-zinc-500/10 to-zinc-600/5",
    iconBg: "bg-zinc-500/15 dark:bg-zinc-400/15",
    iconColor: "text-zinc-700 dark:text-zinc-300",
    hoverBorder: "hover:border-zinc-300 dark:hover:border-zinc-700",
  },
  {
    icon: BriefcaseIcon,
    label: "قضايا عمالية",
    description: "حقوق العمال والتعويضات",
    gradient: "from-zinc-500/10 to-zinc-600/5",
    iconBg: "bg-zinc-500/15 dark:bg-zinc-400/15",
    iconColor: "text-zinc-700 dark:text-zinc-300",
    hoverBorder: "hover:border-zinc-300 dark:hover:border-zinc-700",
  },
  {
    icon: BookOpenIcon,
    label: "الأنظمة واللوائح",
    description: "البحث في أنظمة المملكة",
    gradient: "from-zinc-500/10 to-zinc-600/5",
    iconBg: "bg-zinc-500/15 dark:bg-zinc-400/15",
    iconColor: "text-zinc-700 dark:text-zinc-300",
    hoverBorder: "hover:border-zinc-300 dark:hover:border-zinc-700",
  },
];

const FEATURES = [
  { icon: ShieldCheckIcon, text: "مصادر رسمية" },
  { icon: GavelIcon, text: "أنظمة سعودية" },
  { icon: SparklesIcon, text: "ذكاء اصطناعي" },
];

export const Greeting = () => {
  return (
    <div
      className="mx-auto flex size-full max-w-2xl flex-col items-center justify-center px-4 md:px-6"
      key="overview"
    >
      {/* Hero */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.2, 0, 0, 1] }}
      >
        {/* Logo */}
        <div className="relative mb-8">
          <div className="flex size-[76px] items-center justify-center rounded-[22px] bg-linear-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20 md:size-[84px] md:rounded-3xl">
            <ScaleIcon className="size-9 md:size-10" strokeWidth={1.6} />
          </div>
          <div className="-bottom-1 -right-1 absolute flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md ring-[3px] ring-background">
            <SparklesIcon className="size-3.5" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-extrabold text-[28px] text-foreground tracking-tight md:text-[34px]">
          محامي <span className="font-black text-primary">فيصل</span>
        </h1>
        <p className="mt-2.5 max-w-sm text-[14px] text-muted-foreground leading-relaxed md:text-[15px]">
          مساعدك القانوني الذكي المتخصص في الأنظمة السعودية
        </p>

        {/* Feature Chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {FEATURES.map((feature) => (
            <div
              className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5 shadow-sm"
              key={feature.text}
            >
              <feature.icon
                className="size-[13px] text-primary"
                strokeWidth={2.2}
              />
              <span className="font-medium text-[12px] text-foreground/80">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action Cards */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.35, duration: 0.5, ease: [0.2, 0, 0, 1] }}
      >
        {QUICK_ACTIONS.map((action, index) => (
          <motion.button
            animate={{ opacity: 1, scale: 1 }}
            className={`group flex w-full items-start gap-3 rounded-2xl border border-transparent bg-linear-to-br ${action.gradient} p-4 text-right transition-all duration-200 ${action.hoverBorder} hover:shadow-sm active:scale-[0.98] dark:bg-linear-to-br`}
            initial={{ opacity: 0, scale: 0.95 }}
            key={action.label}
            transition={{
              delay: 0.4 + index * 0.06,
              duration: 0.3,
              ease: [0.2, 0, 0, 1],
            }}
            type="button"
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${action.iconBg} ${action.iconColor} transition-transform duration-200 group-hover:scale-105`}
            >
              <action.icon className="size-5" strokeWidth={1.7} />
            </div>
            <div className="flex flex-col gap-0.5 pt-0.5">
              <span className="font-semibold text-[14px] text-foreground">
                {action.label}
              </span>
              <span className="text-[12px] text-muted-foreground leading-relaxed">
                {action.description}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.p
        animate={{ opacity: 1 }}
        className="mt-8 max-w-lg text-center text-[11px] text-muted-foreground/70 leading-relaxed"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.7 }}
      >
        المعلومات للاسترشاد فقط ولا تُعد استشارة ملزمة. يُنصح بالتواصل مع محامٍ
        مرخص.
      </motion.p>
    </div>
  );
};
