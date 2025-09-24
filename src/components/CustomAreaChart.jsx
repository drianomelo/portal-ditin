import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AnimatedNumber } from "./AnimatedNumber";

const data = [
  { day: "Dia 1", value: 10 },
  { day: "Dia 5", value: 18 },
  { day: "Dia 10", value: 22 },
  { day: "Dia 15", value: 20 },
  { day: "Dia 20", value: 28 },
  { day: "Dia 25", value: 34 },
  { day: "Dia 30", value: 40 },
];

export const CustomAreaChart = () => {
  const stats = [
    { label: "Total de chamados em 2025", value: 5518 },
    { label: "Total de fechados em 2025", value: 5490 },
    { label: "Total de abertos em 2025", value: 28 },
    { label: "Total de atribuídos em 2025", value: 27 },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="w-full"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={300} className="pr-12 mb-20 max-lg:pr-6 max-md:pr-0 max-md:-left-6 max-md:mb-10 relative">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              fill="url(#colorGradient)"
              strokeWidth={3}
              dot={{ r: 4, fill: "#3b82f6" }}
              activeDot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="flex items-start justify-between gap-20 max-lg:gap-10 max-md:flex-wrap max-md:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col max-md:w-[150px] max-md:flex-auto"
          >
            <span className="text-5xl border-b-2 pb-2 mb-3 border-white/10 max-md:text-4xl">
              <AnimatedNumber value={stat.value} duration={2000} />
            </span>
            <span className="text-xs opacity-40 w-fit max-md:text-[10px]">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
