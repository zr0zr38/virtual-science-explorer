
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface VRLabLayoutProps {
  children: React.ReactNode;
}

const VRLabLayout = ({ children }: VRLabLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div dir="rtl" className="min-h-screen bg-lab-grey">
      <header className="bg-lab-purple text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">المختبر الافتراضي</h1>
          <nav className="flex gap-4">
            <button className="hover:bg-lab-lightPurple px-4 py-2 rounded-lg transition-colors">
              الرئيسية
            </button>
            <button className="hover:bg-lab-lightPurple px-4 py-2 rounded-lg transition-colors">
              التجارب
            </button>
          </nav>
        </div>
      </header>
      <main className={`container mx-auto p-6 ${isMobile ? 'space-y-4' : 'space-y-8'}`}>
        {children}
      </main>
    </div>
  );
};

export default VRLabLayout;
