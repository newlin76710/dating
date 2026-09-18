import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  color?: string;
  className?: string;
}

export function SectionHeading({
  children,
  subtitle,
  align = 'center',
  color = '#049089',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className="font-playfair font-bold text-section-title" style={{ color }}>
        {children}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-7 text-gray-600 ${align === 'center' ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
