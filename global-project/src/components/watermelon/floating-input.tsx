'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, className, id, value, defaultValue, onChange, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(
      Boolean(value || defaultValue)
    );
    const inputId = id || React.useId();

    React.useEffect(() => {
      if (value !== undefined) {
        setHasValue(Boolean(value));
      }
    }, [value]);

    return (
      <div className="relative w-full">
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'peer w-full rounded-lg border bg-white px-3.5 pt-5 pb-2 text-sm text-gray-900 outline-none transition-all duration-200 placeholder-transparent',
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-gray-300 focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342]',
            className
          )}
          placeholder={label}
          value={value}
          defaultValue={defaultValue}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value !== '');
            onBlur?.(e);
          }}
          onChange={(e) => {
            setHasValue(e.target.value !== '');
            onChange?.(e);
          }}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            'absolute left-3.5 transition-all duration-200 pointer-events-none select-none',
            focused || hasValue
              ? 'top-1.5 text-[11px] font-semibold text-[#0A2342]'
              : 'top-3.5 text-sm text-gray-500'
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);
FloatingInput.displayName = 'FloatingInput';

export default FloatingInput;
