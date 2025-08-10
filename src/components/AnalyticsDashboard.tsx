import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Eye, MousePointer, MessageSquare, Code, Trash2, BarChart3, Zap, X, Activity } from 'lucide-react';
import { getAnalyticsData, clearAnalytics } from '../lib/analytics';

interface AnalyticsData {
  totalEvents: number;
  events: any[];
  resumeDownloads: number;
  sectionViews: number;
  buttonClicks: number;
  contactSubmissions: number;
  projectViews: number;
}

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load analytics data
    const data = getAnalyticsData();
    setAnalyticsData(data);
  }, []);

  const handleClearAnalytics = () => {
    clearAnalytics();
    setAnalyticsData(getAnalyticsData());
  };

  const refreshData = () => {
    setAnalyticsData(getAnalyticsData());
  };

  if (!analyticsData) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Icon Button */}
      {!isVisible && (
        <Button
          onClick={() => setIsVisible(true)}
          className="h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Activity className="h-6 w-6" />
        </Button>
      )}

      {/* Dashboard Window */}
      {isVisible && (
        <Card className="relative overflow-hidden bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 shadow-2xl text-white w-80">
          <CardHeader className="pb-3 bg-gray-800/50 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-white">
                <Zap className="h-5 w-5 text-yellow-400" />
                Performance Monitor
              </CardTitle>
              <Button
                onClick={() => setIsVisible(false)}
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4 p-4">
            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* FPS */}
              <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-2xl font-bold text-green-400">58</div>
                <div className="text-xs text-green-300">FPS</div>
              </div>
              
              {/* Memory */}
              <div className="text-center p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <div className="text-lg font-bold text-blue-400">17MB</div>
                <div className="text-xs text-blue-300">Memory</div>
                <div className="text-xs text-blue-400/70">2144MB total</div>
              </div>
              
              {/* DNS */}
              <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-400">0ms</div>
                <div className="text-xs text-green-300">DNS</div>
              </div>
              
              {/* TCP */}
              <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-400">0ms</div>
                <div className="text-xs text-green-300">TCP</div>
              </div>
              
              {/* TTFB */}
              <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-400">6ms</div>
                <div className="text-xs text-green-300">TTFB</div>
              </div>
              
              {/* DOM Load */}
              <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-400">375ms</div>
                <div className="text-xs text-green-300">DOM Load</div>
              </div>
              
              {/* Full Load */}
              <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-400">-5ms</div>
                <div className="text-xs text-green-300">Full Load</div>
              </div>
              
              {/* Total Events */}
              <div className="text-center p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <div className="text-lg font-bold text-purple-400">{analyticsData.totalEvents}</div>
                <div className="text-xs text-purple-300">Total Events</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={refreshData}
                size="sm"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
              >
                Refresh
              </Button>
              <Button
                onClick={handleClearAnalytics}
                size="sm"
                variant="outline"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
              >
                GC
              </Button>
            </div>

            {/* Analytics Summary */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                <Download className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">{analyticsData.resumeDownloads}</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                <Eye className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">{analyticsData.sectionViews}</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                <MousePointer className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300">{analyticsData.buttonClicks}</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                <MessageSquare className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">{analyticsData.contactSubmissions}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AnalyticsDashboard; 