
import React, { useState } from 'react';
import VRLabLayout from '@/components/layout/VRLabLayout';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Microscope, 
  FlaskConical, 
  Atom, 
  InfoIcon, 
  ShieldAlert, 
  TestTube,
  BeakerIcon,
  Dna,
  Flame,
  Zap,
  Brain,
  HeartPulse,
  Droplets,
  Activity
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ExperimentCard = ({ 
  title, 
  count, 
  icon: Icon,
  description,
  experiments,
  onClick,
  difficulty = "متوسط"
}: { 
  title: string; 
  count: number; 
  icon: any;
  description?: string;
  experiments?: string[];
  onClick: () => void;
  difficulty?: string;
}) => {
  const { toast } = useToast();

  const handleExperimentClick = (experimentName: string) => {
    toast({
      title: "تم اختيار التجربة",
      description: `سيتم فتح تجربة ${experimentName} قريباً`,
    });
  };

  return (
    <Card 
      className="p-6 hover:shadow-lg transition-shadow cursor-pointer animate-fade-in bg-white group"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-lab-purple rounded-full group-hover:bg-lab-accent transition-colors">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-lab-darkGrey">{title}</h3>
            <Badge variant="secondary" className="bg-lab-lightPurple/10 text-lab-purple">
              {difficulty}
            </Badge>
          </div>
          <p className="text-gray-600 mb-3">{count} تجارب</p>
          {description && (
            <p className="text-sm text-gray-500 mb-4">{description}</p>
          )}
          {experiments && (
            <ScrollArea className="h-32 w-full rounded-md border p-2">
              <div className="space-y-2">
                {experiments.map((exp, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExperimentClick(exp);
                    }}
                  >
                    <TestTube className="w-4 h-4 text-lab-purple" />
                    <span className="text-sm text-gray-600">{exp}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </Card>
  );
};

const SafetyTip = ({ children, icon: Icon = ShieldAlert, important = false }: { 
  children: React.ReactNode; 
  icon?: any;
  important?: boolean;
}) => (
  <div className={`flex items-center gap-2 text-lab-darkGrey p-2 rounded-md ${
    important ? 'bg-red-50' : ''
  }`}>
    <Icon className={`w-5 h-5 ${important ? 'text-red-500' : 'text-lab-purple'}`} />
    <span className={important ? 'font-medium' : ''}>{children}</span>
  </div>
);

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

  const navigateToExperiments = (category: string) => {
    setSelectedCategory(category);
    toast({
      title: "تم اختيار القسم",
      description: `تم اختيار قسم ${category}`,
    });
  };

  const categories = [
    {
      title: "علم الأحياء",
      count: 58,
      icon: Microscope,
      description: "تشريح افتراضي ودراسة الخلايا والأنسجة",
      difficulty: "متقدم",
      experiments: [
        "تجربة الخلية النباتية والحيوانية",
        "دراسة الأنسجة الحية",
        "فحص العامل الرايزيسي Rh",
        "تحليل البروتينات",
        "دراسة الانقسام الخلوي",
        "تشريح القلب",
        "دراسة الجهاز العصبي"
      ]
    },
    {
      title: "الكيمياء",
      count: 96,
      icon: FlaskConical,
      description: "تفاعلات كيميائية وتجارب معملية",
      difficulty: "متوسط",
      experiments: [
        "تفاعلات الأكسدة والاختزال",
        "الكشف عن البروتينات",
        "تحليل المركبات العضوية",
        "دراسة المحاليل الكيميائية",
        "تفاعلات الأحماض والقواعد",
        "الكيمياء الحرارية",
        "التحليل الكهربائي"
      ]
    },
    {
      title: "الفيزياء",
      count: 38,
      icon: Atom,
      description: "تجارب القوى والحركة والطاقة",
      difficulty: "أساسي",
      experiments: [
        "قوانين نيوتن للحركة",
        "قياس الطاقة الحركية",
        "دراسة المجال المغناطيسي",
        "تجارب الضوء والصوت",
        "قياس الكتلة والوزن",
        "دراسة الموجات",
        "قوانين الكهرباء"
      ]
    }
  ];

  return (
    <VRLabLayout>
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-lab-darkGrey mb-4">
          مرحباً بك في المختبر الافتراضي
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          اكتشف عالم التجارب العلمية التفاعلية بتقنية الواقع الافتراضي
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Badge variant="secondary" className="bg-lab-lightPurple/10 text-lab-purple">
            تجربة تفاعلية VR
          </Badge>
          <Badge variant="secondary" className="bg-lab-lightPurple/10 text-lab-purple">
            عربي / English
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            متاح الآن
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <ExperimentCard
            key={index}
            {...category}
            onClick={() => navigateToExperiments(category.title)}
          />
        ))}
      </div>

      <Card className="p-8 bg-white animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-lab-darkGrey">
            إرشادات السلامة في المختبر
          </h2>
          <Button 
            variant="outline" 
            className="hover:bg-lab-lightPurple/10"
            onClick={() => {
              toast({
                title: "إرشادات السلامة",
                description: "سيتم فتح صفحة إرشادات السلامة الكاملة قريباً",
              });
            }}
          >
            عرض جميع الإرشادات
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <SafetyTip important>
              قم بقراءة تعليمات التجربة بعناية قبل البدء
            </SafetyTip>
            <SafetyTip icon={Flame}>
              تأكد من اتباع إجراءات السلامة المطلوبة لكل تجربة
            </SafetyTip>
            <SafetyTip icon={BeakerIcon}>
              التعامل مع المواد الكيميائية بحذر وعناية
            </SafetyTip>
            <SafetyTip icon={Dna}>
              استخدم المجهر الافتراضي وفقاً للإرشادات المحددة
            </SafetyTip>
          </div>
          
          <div className="bg-lab-grey rounded-lg p-6">
            <h3 className="font-bold text-lab-darkGrey mb-3 flex items-center gap-2">
              <InfoIcon className="w-5 h-5 text-lab-purple" />
              ملاحظات مهمة
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Activity className="w-4 h-4 text-lab-purple" />
                جميع التجارب متاحة باللغتين العربية والإنجليزية
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Zap className="w-4 h-4 text-lab-purple" />
                يمكن إعادة التجربة في أي وقت باستخدام زر الإعادة
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Brain className="w-4 h-4 text-lab-purple" />
                يتوفر شرح تفصيلي لكل خطوة من خطوات التجربة
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <HeartPulse className="w-4 h-4 text-lab-purple" />
                يمكن حفظ نتائج التجارب ومشاركتها
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </VRLabLayout>
  );
};

export default Index;

