'use client';

import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className={`
        lg:ml-72 
        min-h-screen 
        transition-all duration-300 ease-in-out
        overflow-x-hidden
        ${className}
      `}>
        {children}
      </main>
    </div>
  );
} 