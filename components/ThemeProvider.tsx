'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ThemeConfig {
  primary: string;
  primaryDark: string;
  navy: string;
  accent: string;
  accentHover: string;
  light: string;
  gray100: string;
  gray200: string;
  gray400: string;
  gray600: string;
  gray800: string;
  fontFamily: string;
  radiusSm: string;
  radiusMd: string;
  radiusLg: string;
  radiusXl: string;
}

const defaultTheme: ThemeConfig = {
  primary: '#004aad',
  primaryDark: '#003a8c',
  navy: '#020c45',
  accent: '#ff751f',
  accentHover: '#e56a1a',
  light: '#f8f9fc',
  gray100: '#f1f3f9',
  gray200: '#e2e6ef',
  gray400: '#94a3b8',
  gray600: '#475569',
  gray800: '#1e293b',
  fontFamily: 'Inter',
  radiusSm: '8px',
  radiusMd: '12px',
  radiusLg: '20px',
  radiusXl: '28px',
};

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('clann-theme');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTheme({ ...defaultTheme, ...parsed });
      } catch {
        setTheme(defaultTheme);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--navy', theme.navy);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-hover', theme.accentHover);
    root.style.setProperty('--light', theme.light);
    root.style.setProperty('--gray-100', theme.gray100);
    root.style.setProperty('--gray-200', theme.gray200);
    root.style.setProperty('--gray-400', theme.gray400);
    root.style.setProperty('--gray-600', theme.gray600);
    root.style.setProperty('--gray-800', theme.gray800);
    root.style.setProperty('--font-family', theme.fontFamily);
    root.style.setProperty('--radius-sm', theme.radiusSm);
    root.style.setProperty('--radius-md', theme.radiusMd);
    root.style.setProperty('--radius-lg', theme.radiusLg);
    root.style.setProperty('--radius-xl', theme.radiusXl);
    root.style.setProperty(
      '--gradient-hero',
      `linear-gradient(135deg, ${hexToRgba(theme.navy, 0.95)} 0%, ${hexToRgba(theme.primary, 0.85)} 50%, ${hexToRgba(theme.navy, 0.9)} 100%)`
    );
    root.style.setProperty(
      '--gradient-accent',
      `linear-gradient(135deg, ${theme.accent} 0%, ${lightenColor(theme.accent, 20)} 100%)`
    );
    root.style.setProperty(
      '--gradient-blue',
      `linear-gradient(135deg, ${theme.primary} 0%, ${lightenColor(theme.primary, 15)} 100%)`
    );
    localStorage.setItem('clann-theme', JSON.stringify(theme));
  }, [theme, mounted]);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...updates }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
    localStorage.removeItem('clann-theme');
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    // Return a fallback for SSR/static generation safety
    return {
      theme: defaultTheme,
      updateTheme: () => {},
      resetTheme: () => {},
    };
  }
  return context;
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}
