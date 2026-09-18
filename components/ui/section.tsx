import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: string;
  /** Set false to skip the default vertical padding, e.g. for full-bleed image sections. */
  padded?: boolean;
  id?: string;
}

export function Section({ children, className = '', bg, padded = true, id }: SectionProps) {
  return (
    <section id={id} className={padded ? 'py-16 md:py-24' : ''} style={{ background: bg }}>
      <div className={`mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10 ${className}`}>{children}</div>
    </section>
  );
}
