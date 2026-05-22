/**
 * HeroDashboardPreview — decorative mock dashboard panel for the Hero section.
 * Uses glassmorphism styling and contains purely static/decorative data.
 *
 * Requirements: 3.5
 */

const HeroDashboardPreview = () => {
  // Static bar heights for the fake line chart (decorative only)
  const chartBars = [
    { height: 'h-4' },
    { height: 'h-8' },
    { height: 'h-6' },
    { height: 'h-12' },
    { height: 'h-9' },
  ];

  const statusIndicators = [
    { label: 'System Active',     dotColor: 'bg-green-400' },
    { label: 'AI Engine Running', dotColor: 'bg-cyan-400'  },
    { label: 'CERT Connected',    dotColor: 'bg-blue-400'  },
  ];

  return (
    <div className="glass-card rounded-xl p-5 w-full max-w-sm space-y-5" aria-hidden="true">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
          RAKSHAK Dashboard
        </span>
        <span className="text-xs text-gray-500">LIVE</span>
      </div>

      {/* Threat Level gauge */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Threat Level</span>
          <span className="text-cyan-400">72%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
            style={{ width: '72%' }}
          />
        </div>
      </div>

      {/* Fake line chart — 5 div bars of varying heights */}
      <div className="space-y-1">
        <span className="text-xs text-gray-400">Detection Activity</span>
        <div className="flex items-end gap-1 h-14">
          {chartBars.map((bar, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${bar.height} bg-cyan-400/60`}
            />
          ))}
        </div>
      </div>

      {/* Status indicator rows */}
      <div className="space-y-2">
        {statusIndicators.map(({ label, dotColor }) => (
          <div key={label} className="flex items-center gap-2 text-xs text-gray-300">
            <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`} />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroDashboardPreview;
