import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface CardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  img: string;
  imgAlt: string;
  aspect?: string;
  title: ReactNode;
  desc?: ReactNode;
  cta?: ReactNode;
  titleFont?: 'sans' | 'serif';
}

export function Card({
  img,
  imgAlt,
  aspect = 'aspect-[3/2]',
  title,
  desc,
  cta,
  titleFont = 'sans',
  className = '',
  ...rest
}: CardProps) {
  return (
    <a
      {...rest}
      className={`group block overflow-hidden rounded-2xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover ${className}`}
    >
      <div className={`relative overflow-hidden ${aspect}`}>
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3
          className={
            titleFont === 'serif'
              ? 'font-playfair line-clamp-2 text-lg font-bold leading-snug text-gray-900'
              : 'line-clamp-2 text-[15px] font-semibold leading-snug text-gray-900'
          }
        >
          {title}
        </h3>
        {desc && <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">{desc}</p>}
        {cta && (
          <p className="mt-3 text-right text-sm font-semibold" style={{ color: '#049089' }}>
            {cta}
          </p>
        )}
      </div>
    </a>
  );
}
