
import React from 'react';
import VRLabLayout from '@/components/layout/VRLabLayout';
import { Card } from "@/components/ui/card";
import { Microscope, FlaskConical, Atom, InfoIcon, ShieldAlert } from 'lucide-react';

const ExperimentCard = ({ 
  title, 
  count, 
  icon: Icon,
  description,
  onClick 
}: { 
  title: string; 
  count: number; 
  icon: any;
  description?: string;
  onClick: () => void;
}) => (
  <Card 
    className="p-6 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in bg-white group"
    onClick={onClick}
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-lab-purple rounded-full group-hover:bg-lab-accent transition-colors">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-lab-darkGrey">{title}</h3>
        <p className="text-gray-600">{count} تجارب</p>
        {description && (
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        )}
      </div>
    </div>
  </Card>
);

const SafetyTip = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-lab-darkGrey">
    <ShieldAlert className="w-5 h-5 text-lab-purple" />
    <span>{children}</span>
  </div>
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
        <p className="text-gray-600 text-lg mb-6">
          اختر مجال التجارب العلمية الذي تريد استكشافه
        </p>
        <div className="inline-flex items-center gap-2 bg-lab-lightPurple/10 px-4 py-2 rounded-full">
          <InfoIcon className="w-5 h-5 text-lab-purple" />
          <span className="text-lab-darkGrey">تجربة تفاعلية بتقنية الواقع الافتراضي</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <ExperimentCard
          title="علم الأحياء"
          count={58}
          icon={Microscope}
          description="تشريح افتراضي ودراسة الخلايا والأنسجة"
          onClick={() => navigateToExperiments('biology')}
        />
        <ExperimentCard
          title="الكيمياء"
          count={96}
          icon={FlaskConical}
          description="تفاعلات كيميائية وتجارب معملية"
          onClick={() => navigateToExperiments('chemistry')}
        />
        <ExperimentCard
          title="الفيزياء"
          count={38}
          icon={Atom}
          description="تجارب القوى والحركة والطاقة"
          onClick={() => navigateToExperiments('physics')}
        />
      </div>

      <Card className="p-8 bg-white animate-fade-in">
        <h2 className="text-2xl font-bold text-lab-darkGrey mb-6">
          إرشادات السلامة في المختبر
        </h2>
        <div className="space-y-4">
          <SafetyTip>
            قم بقراءة تعليمات التجربة بعناية قبل البدء
          </SafetyTip>
          <SafetyTip>
            تأكد من اتباع إجراءات السلامة المطلوبة لكل تجربة
          </SafetyTip>
          <SafetyTip>
            احفظ نتائج التجارب وملاحظاتك بشكل منتظم
          </SafetyTip>
          <SafetyTip>
            استخدم المجهر الافتراضي وفقاً للإرشادات المحددة
          </SafetyTip>
        </div>
        
        <div className="mt-8 p-4 bg-lab-grey rounded-lg">
          <p className="text-lab-darkGrey text-sm">
            ملاحظة: جميع التجارب متاحة باللغتين العربية والإنجليزية، ويمكن إجراؤها في بيئة آمنة تماماً
          </p>
        </div>
      </Card>
    </VRLabLayout>
  );
};

export default Index;
