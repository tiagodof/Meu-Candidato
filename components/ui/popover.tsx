"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface PopoverContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

interface PopoverProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

interface PopoverTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

interface PopoverContentProps {
  className?: string;
  align?: 'start' | 'center' | 'end';
  children: React.ReactNode;
}

export const Popover: React.FC<PopoverProps> = ({ open: controlledOpen, onOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  
  const setOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };
  
  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div className="relative">
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ asChild, children }) => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('PopoverTrigger must be used within a Popover component');
  }
  
  if (asChild) {
    return <>{children}</>;
  }
  
  return (
    <button onClick={() => context.setOpen(!context.open)}>
      {children}
    </button>
  );
};

export const PopoverContent: React.FC<PopoverContentProps> = ({ className = '', align = 'center', children }) => {
  const context = useContext(PopoverContext);
  const contentRef = useRef<HTMLDivElement>(null);
  
  if (!context) {
    throw new Error('PopoverContent must be used within a Popover component');
  }
  
  const { open, setOpen } = context;
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open, setOpen]);
  
  if (!open) {
    return null;
  }
  
  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0'
  };
  
  return (
    <div
      ref={contentRef}
      className={`absolute top-full mt-1 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-950 shadow-md ${alignmentClasses[align]} ${className}`}
    >
      {children}
    </div>
  );
};

