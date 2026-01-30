'use client';

import { useEffect } from 'react';

/**
 * FaviconSwitcher component
 * Automatically switches between light and dark mode favicons based on user's system preference
 */
export default function FaviconSwitcher() {
  useEffect(() => {
    // Function to update favicon based on color scheme
    const updateFavicon = (isDark: boolean) => {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        // Use dark mode favicon (works on light backgrounds) when in light mode
        // Use light mode favicon (works on dark backgrounds) when in dark mode
        favicon.href = isDark ? '/favicon-light.ico' : '/favicon-dark.ico';
      }
    };

    // Check initial color scheme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateFavicon(darkModeMediaQuery.matches);

    // Listen for changes to color scheme
    const handleChange = (e: MediaQueryListEvent) => {
      updateFavicon(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return null; // This component doesn't render anything
}
