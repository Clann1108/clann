'use client';

import { useState } from 'react';
import Link from '@/components/SmartLink';
import { useTheme, ThemeConfig } from '@/components/ThemeProvider';
import { ArrowLeft, RotateCcw, Palette, Type, BoxSelect, Check } from 'lucide-react';

export default function AdminPage() {
  const { theme, updateTheme, resetTheme } = useTheme();
  const [saved, setSaved] = useState(false);

  const handleChange = (key: keyof ThemeConfig, value: string) => {
    updateTheme({ [key]: value });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const colorFields: { key: keyof ThemeConfig; label: string }[] = [
    { key: 'primary', label: 'Primary Color' },
    { key: 'primaryDark', label: 'Primary Dark' },
    { key: 'navy', label: 'Navy / Dark' },
    { key: 'accent', label: 'Accent Color' },
    { key: 'accentHover', label: 'Accent Hover' },
    { key: 'light', label: 'Light Background' },
    { key: 'gray100', label: 'Gray 100' },
    { key: 'gray200', label: 'Gray 200' },
    { key: 'gray400', label: 'Gray 400' },
    { key: 'gray600', label: 'Gray 600' },
    { key: 'gray800', label: 'Gray 800' },
  ];

  const radiusFields: { key: keyof ThemeConfig; label: string }[] = [
    { key: 'radiusSm', label: 'Small Radius' },
    { key: 'radiusMd', label: 'Medium Radius' },
    { key: 'radiusLg', label: 'Large Radius' },
    { key: 'radiusXl', label: 'Extra Large Radius' },
  ];

  const presets = [
    { name: 'Default Blue', primary: '#004aad', primaryDark: '#003a8c', navy: '#020c45', accent: '#ff751f', accentHover: '#e56a1a' },
    { name: 'Ocean Teal', primary: '#0d9488', primaryDark: '#0f766e', navy: '#134e4a', accent: '#f59e0b', accentHover: '#d97706' },
    { name: 'Royal Purple', primary: '#7c3aed', primaryDark: '#6d28d9', navy: '#3b0764', accent: '#f43f5e', accentHover: '#e11d48' },
    { name: 'Forest Green', primary: '#15803d', primaryDark: '#166534', navy: '#14532d', accent: '#ea580c', accentHover: '#c2410c' },
    { name: 'Midnight Red', primary: '#dc2626', primaryDark: '#b91c1c', navy: '#450a0a', accent: '#f59e0b', accentHover: '#d97706' },
    { name: 'Slate Modern', primary: '#475569', primaryDark: '#334155', navy: '#0f172a', accent: '#06b6d4', accentHover: '#0891b2' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--light)' }}>
      {/* Admin Nav */}
      <nav className="sticky top-0 z-50 border-b" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderColor: 'var(--gray-200)' }}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--primary)' }}>
              <ArrowLeft size={18} />
              Back to Site
            </Link>
            <span className="text-sm" style={{ color: 'var(--gray-400)' }}>|</span>
            <span className="font-bold text-lg" style={{ color: 'var(--navy)' }}>Clann Admin</span>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--primary)' }}>
                <Check size={16} /> Saved
              </span>
            )}
            <button onClick={resetTheme} className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold border" style={{ borderColor: 'var(--gray-200)', color: 'var(--gray-600)' }}>
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="service-card sticky top-20 p-4">
              <h3 className="font-bold mb-3" style={{ color: 'var(--navy)', fontSize: '1rem' }}>Quick Presets</h3>
              <div className="flex flex-col gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      updateTheme({
                        primary: preset.primary,
                        primaryDark: preset.primaryDark,
                        navy: preset.navy,
                        accent: preset.accent,
                        accentHover: preset.accentHover,
                      });
                      setSaved(true);
                      setTimeout(() => setSaved(false), 1500);
                    }}
                    className="flex items-center gap-3 p-2 rounded-lg text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full" style={{ background: preset.primary }} />
                      <div className="w-4 h-4 rounded-full" style={{ background: preset.accent }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'var(--gray-800)' }}>{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Panel */}
          <div className="lg:col-span-6 space-y-6">
            {/* Colors */}
            <div className="service-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Palette size={20} style={{ color: 'var(--primary)' }} />
                <h3 className="font-bold" style={{ color: 'var(--navy)', fontSize: '1.1rem' }}>Colors</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {colorFields.map((field) => (
                  <div key={field.key}>
                    <label className="form-label flex items-center justify-between">
                      {field.label}
                      <span className="text-xs font-mono" style={{ color: 'var(--gray-400)' }}>{theme[field.key]}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={theme[field.key]}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                      />
                      <input
                        type="text"
                        value={theme[field.key]}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className="form-control flex-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="service-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Type size={20} style={{ color: 'var(--primary)' }} />
                <h3 className="font-bold" style={{ color: 'var(--navy)', fontSize: '1.1rem' }}>Typography</h3>
              </div>
              <div>
                <label className="form-label">Font Family</label>
                <select
                  value={theme.fontFamily}
                  onChange={(e) => handleChange('fontFamily', e.target.value)}
                  className="form-control"
                >
                  <option value="Inter">Inter</option>
                  <option value="Poppins">Poppins</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Open Sans">Open Sans</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Lato">Lato</option>
                  <option value="Nunito">Nunito</option>
                </select>
              </div>
            </div>

            {/* Border Radius */}
            <div className="service-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <BoxSelect size={20} style={{ color: 'var(--primary)' }} />
                <h3 className="font-bold" style={{ color: 'var(--navy)', fontSize: '1.1rem' }}>Border Radius</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {radiusFields.map((field) => (
                  <div key={field.key}>
                    <label className="form-label">{field.label}</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="40"
                        value={parseInt(theme[field.key])}
                        onChange={(e) => handleChange(field.key, `${e.target.value}px`)}
                        className="flex-1"
                      />
                      <input
                        type="text"
                        value={theme[field.key]}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className="form-control w-20 text-center"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="lg:col-span-3">
            <div className="service-card sticky top-20 p-4">
              <h3 className="font-bold mb-3" style={{ color: 'var(--navy)', fontSize: '1rem' }}>Live Preview</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg" style={{ background: 'var(--gradient-hero)' }}>
                  <p className="text-white text-sm font-bold">Hero Gradient</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: 'var(--gradient-blue)' }}>
                  <p className="text-white text-sm font-bold">Blue Gradient</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: 'var(--gradient-accent)' }}>
                  <p className="text-white text-sm font-bold">Accent Gradient</p>
                </div>
                <button className="btn btn-primary w-full text-sm">Primary Button</button>
                <button className="btn btn-accent w-full text-sm">Accent Button</button>
                <div className="p-3 rounded-lg border" style={{ background: 'var(--light)', borderColor: 'var(--gray-200)' }}>
                  <p className="text-sm" style={{ color: 'var(--gray-800)' }}>Light background card</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: 'var(--navy)' }}>
                  <p className="text-sm text-white">Navy background</p>
                </div>
                <div className="grid grid-cols-5 gap-1 mt-2">
                  {['var(--primary)', 'var(--accent)', 'var(--navy)', 'var(--gray-400)', 'var(--gray-600)'].map((c, i) => (
                    <div key={i} className="h-8 rounded" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
