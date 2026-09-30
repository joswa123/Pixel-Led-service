'use client';

import * as React from 'react';
import { buttonVariants } from '@/components/base-ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Button20Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  showArrow?: boolean;
}

export const Button20: React.FC<Button20Props> = ({
  children = 'Message Us',
  href = '#',
  className,
  showArrow = true,
  ...props
}) => {
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ variant: 'link' }),
        'group relative inline-flex items-center gap-1.5 text-sm font-bold text-[#FF8A00] !no-underline transition-colors hover:text-[#FF6500]',
        'after:bg-[#FF6500] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );
};

export default Button20;
