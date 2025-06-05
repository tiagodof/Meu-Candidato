"use client";

import React, { createContext, useContext, useState } from 'react';

interface CommandContextType {
  search: string;
  setSearch: (value: string) => void;
}

const CommandContext = createContext<CommandContextType | undefined>(undefined);

interface CommandProps {
  className?: string;
  children: React.ReactNode;
}

interface CommandInputProps {
  placeholder?: string;
  className?: string;
}

interface CommandListProps {
  className?: string;
  children: React.ReactNode;
}

interface CommandEmptyProps {
  className?: string;
  children: React.ReactNode;
}

interface CommandGroupProps {
  heading?: string;
  className?: string;
  children: React.ReactNode;
}

interface CommandItemProps {
  onSelect?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Command: React.FC<CommandProps> = ({ className = '', children }) => {
  const [search, setSearch] = useState('');
  
  return (
    <CommandContext.Provider value={{ search, setSearch }}>
      <div className={`flex flex-col overflow-hidden rounded-md bg-white text-gray-950 ${className}`}>
        {children}
      </div>
    </CommandContext.Provider>
  );
};

export const CommandInput: React.FC<CommandInputProps> = ({ placeholder, className = '' }) => {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error('CommandInput must be used within a Command component');
  }
  
  const { search, setSearch } = context;
  
  return (
    <input
      className={`flex h-11 w-full rounded-md bg-transparent py-3 px-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export const CommandList: React.FC<CommandListProps> = ({ className = '', children }) => {
  return (
    <div className={`max-h-[300px] overflow-y-auto overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CommandEmpty: React.FC<CommandEmptyProps> = ({ className = '', children }) => {
  return (
    <div className={`py-6 text-center text-sm text-gray-500 ${className}`}>
      {children}
    </div>
  );
};

export const CommandGroup: React.FC<CommandGroupProps> = ({ heading, className = '', children }) => {
  return (
    <div className={`overflow-hidden p-1 text-gray-950 ${className}`}>
      {heading && (
        <div className="px-2 py-1.5 text-xs font-medium text-gray-500">
          {heading}
        </div>
      )}
      {children}
    </div>
  );
};

export const CommandItem: React.FC<CommandItemProps> = ({ onSelect, className = '', children }) => {
  return (
    <div
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 hover:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

