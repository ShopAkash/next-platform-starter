'use client';

import { useEffect } from 'react';

interface PerformanceMonitorProps {
  enabled?: boolean;
}

export default function PerformanceMonitor({ enabled = process.env.NODE_ENV === 'development' }: PerformanceMonitorProps) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const { name, value } = entry as any;
        
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`🔍 ${name}:`, value);
        }
        
        // Send to analytics in production
        if (process.env.NODE_ENV === 'production' && (window as any).gtag) {
          (window as any).gtag('event', name, {
            value: Math.round(name === 'CLS' ? value * 1000 : value),
            event_category: 'Web Vitals',
            event_label: name,
            non_interaction: true,
          });
        }
      }
    });

    // Observe Core Web Vitals
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn('Performance Observer not fully supported');
    }

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn(`🐌 Long task detected: ${entry.duration}ms`);
        }
      }
    });

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task API not supported
    }

    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
    };
  }, [enabled]);

  return null;
}