import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'line' | 'rose' | 'teal' | 'outline' | 'dark';

const VARIANT_STYLES: Record<ButtonVariant, { background?: string; color: string; border?: string }> = {
  line: { background: '#2DC861', color: '#FFFFFF' },
  rose: { background: '#FF93A6', color: '#FFFFFF' },
  teal: { background: '#049089', color: '#FFFFFF' },
  dark: { background: '#1A1A1A', color: '#FFFFFF' },
  outline: { color: '#049089', border: '2px solid #049089' },
};

const LINE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  icon?: boolean;
  children: ReactNode;
}

export function LineButton({
  variant = 'line',
  size = 'md',
  icon = false,
  className = '',
  children,
  style,
  ...rest
}: ButtonProps) {
  const v = VARIANT_STYLES[variant];
  const sizeClasses = size === 'lg' ? 'px-9 py-4 text-base' : 'px-7 py-3.5 text-sm';

  return (
    <a
      {...rest}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full font-semibold shadow-md transition hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses} ${className}`}
      style={{
        backgroundColor: v.background,
        color: v.color,
        border: v.border,
        ...style,
      }}
    >
      {icon && LINE_ICON}
      {children}
    </a>
  );
}
