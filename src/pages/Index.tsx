
import React from 'react';
import VRLabLayout from '@/components/layout/VRLabLayout';
import { Card } from "@/components/ui/card";
import { Microscope, FlaskConical, Atom } from 'lucide-react';

const ExperimentCard = ({ 
  title, 
  count, 
  icon: Icon,
  onClick 
}: { 
  title: string; 
  count: number; 
  icon: any;
  onClick: () => void;
}) => (
  <Card 
    className="p-6 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in bg-white"
    onClick={onClick}
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-lab-purple rounded-full">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-lab-darkGrey">{title}</h3>
        <p className="text-gray-600">{count} تجارب</p>
      </div>
    </div>
  </Card>
);

const Index = () => {
  const navigateToExperiments = (category: string) => {
    console.log(`Navigating to ${category} experiments`);
  };

  return (
    <VRLabLayout>
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-lab-darkGrey mb-4">
          مرحباً بك في المختبر الافتراضي
        </h1>
        <p className="text-gray-600 text-lg">
          اختر مجال التجارب العلمية الذي تريد استكشافه
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExperimentCard
          title="علم الأحياء"
          count={58}
          icon={Microscope}
          onClick={() => navigateToExperiments('biology')}
        />
        <ExperimentCard
          title="الكيمياء"
          count={96}
          icon={FlaskConical}
          onClick={() => navigateToExperiments('chemistry')}
        />
        <ExperimentCard
          title="الفيزياء"
          count={38}
          icon={Atom}
          onClick={() => navigateToExperiments('physics')}
        />
      </div>

      <div className="mt-12 p-6 bg-white rounded-lg shadow-md animate-fade-in">
        <h2 className="text-2xl font-bold text-lab-darkGrey mb-4">
          إرشادات المختبر
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-lab-purple rounded-full"></span>
            اختر مجال التجربة التي تريد إجراءها
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-lab-purple rounded-full"></span>
            اقرأ تعليمات السلامة بعناية قبل البدء
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-lab-purple rounded-full"></span>
            اتبع الخطوات بدقة للحصول على أفضل النتائج
          </li>
        </ul>
      </div>
    </VRLabLayout>
  );
};

export default Index;
