import * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-2', className)} {...props} />
));
Field.displayName = 'Field';

export const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'text-xs font-semibold uppercase tracking-wider text-slate-300',
      className
    )}
    {...props}
  />
));
FieldLabel.displayName = 'FieldLabel';

export const FieldContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('relative', className)} {...props} />
));
FieldContent.displayName = 'FieldContent';

export const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-xs text-slate-400', className)}
    {...props}
  />
));
FieldDescription.displayName = 'FieldDescription';

export const FieldError = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  if (!children) return null;
  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-950/60 px-2.5 py-1.5 text-xs font-medium text-red-300 shadow-sm transition-all animate-in fade-in-50 duration-200',
        className
      )}
      {...props}
    >
      <AlertCircle className="h-3.5 w-3.5 text-red-400 shrink-0" />
      <span>{children}</span>
    </div>
  );
});
FieldError.displayName = 'FieldError';
