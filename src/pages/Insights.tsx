import React from 'react';
    import SimulatedUsageStats from '@/components/Analytics/SimulatedUsageStats';
    import SimulatedVisualAnalytics from '@/components/Analytics/SimulatedVisualAnalytics';

    const InsightsPage = () => {
      return (
        <div className="p-4">
          <h1>Insights</h1>
          <SimulatedUsageStats />
          <SimulatedVisualAnalytics />
        </div>
      );
    };

    export default InsightsPage;
