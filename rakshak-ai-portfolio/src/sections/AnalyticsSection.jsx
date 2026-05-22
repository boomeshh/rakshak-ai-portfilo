/**
 * AnalyticsSection — Performance analytics with stat cards, Recharts visualizations,
 * and animated progress bars.
 *
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6
 */

import { motion } from 'framer-motion';
import { Target, Zap, Bell, Database } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
} from 'recharts';

import { metrics, barChartData, lineChartData, progressBars } from '../data/analytics';
import AnimatedCounter from '../components/AnimatedCounter';
import GlassCard from '../components/GlassCard';
import { staggerContainer, fadeInUp } from '../animations/variants';

const iconMap = { Target, Zap, Bell, Database };

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-20 px-4 md:px-8 lg:px-16 relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center cyber-text mb-4">
        Performance Analytics
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Real-time performance metrics demonstrating RAKSHAK AI's effectiveness.
      </p>

      {/* Task 13.1 — Stat cards with AnimatedCounter */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
      >
        {metrics.map((metric) => {
          const Icon = iconMap[metric.icon];
          return (
            <motion.div variants={fadeInUp} key={metric.id}>
              <GlassCard
                className="p-6 rounded-xl text-center"
                style={{ boxShadow: '0 0 20px rgba(0,245,255,0.1)' }}
              >
                <Icon size={28} className="text-cyan-400 mx-auto mb-3" aria-hidden="true" />
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-gray-400 text-sm mt-1">{metric.label}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Task 13.2 — Recharts visualizations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Bar chart */}
        <GlassCard className="p-6 rounded-xl">
          <h3 className="text-white font-semibold mb-4">Detection Accuracy by Category</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barChartData}>
              <XAxis dataKey="category" stroke="#6b7280" tick={{ fontSize: 10 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 10 }} domain={[70, 100]} />
              <Tooltip
                contentStyle={{
                  background: '#0d1117',
                  border: '1px solid rgba(0,245,255,0.2)',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="accuracy" fill="#00f5ff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Line chart */}
        <GlassCard className="p-6 rounded-xl">
          <h3 className="text-white font-semibold mb-4">Response Time Trend (seconds)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 10 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 10 }} />
              <Tooltip
                contentStyle={{
                  background: '#0d1117',
                  border: '1px solid rgba(0,245,255,0.2)',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="responseTime"
                stroke="#0066ff"
                strokeWidth={2}
                dot={{ fill: '#0066ff', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Task 13.3 — Animated progress bars */}
      <div className="space-y-4">
        <h3 className="text-white font-semibold mb-6">AI Model Accuracy</h3>
        {progressBars.map((pb, index) => (
          <div key={pb.label} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">{pb.label}</span>
              <span className="text-cyan-400">{pb.value}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${pb.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnalyticsSection;
