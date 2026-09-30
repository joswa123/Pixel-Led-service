'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Button20Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  showArrow?: boolean;
}

export const Button20: React.FC<Button20Props> = ({
  children = 'View All Services',
  href = '#',
  className,
  showArrow = true,
  ...props
}) => {
  return (
    <a
      href={href}
      className={cn(
        'group relative inline-flex items-center gap-1.5 text-sm font-bold text-[#0A2342] hover:text-[#FF8C00] !no-underline transition-colors py-1 select-none',
        'after:bg-[#FF8C00] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 text-[#FF8C00] transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );
};

export default Button20;
