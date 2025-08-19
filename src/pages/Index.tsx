import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const attackMethods = [
    {
      name: 'Layer 4 UDP Flood',
      description: 'Высокопроизводительные UDP атаки на сетевом уровне',
      power: '100-500 Gbps',
      icon: 'Zap'
    },
    {
      name: 'Layer 7 HTTP Flood',
      description: 'Имитация реальных пользователей для нагрузочного тестирования',
      power: '1M+ req/sec',
      icon: 'Globe'
    },
    {
      name: 'TCP SYN Flood',
      description: 'Классические TCP атаки для проверки устойчивости',
      power: '50-200 Gbps',
      icon: 'Network'
    },
    {
      name: 'Slowloris Attack',
      description: 'Медленные HTTP атаки для тестирования таймаутов',
      power: 'Low & Slow',
      icon: 'Timer'
    }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '₽2,500',
      period: '/месяц',
      features: [
        'До 10 Gbps мощность',
        'Layer 4 атаки',
        '5 одновременных тестов',
        'Базовая аналитика',
        'Email поддержка'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '₽8,900',
      period: '/месяц',
      features: [
        'До 100 Gbps мощность',
        'Layer 4 & 7 атаки',
        '25 одновременных тестов',
        'Расширенная аналитика',
        'API доступ',
        'Приоритетная поддержка'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₽25,000',
      period: '/месяц',
      features: [
        'До 500 Gbps мощность',
        'Все методы атак',
        'Неограниченные тесты',
        'Кастомные сценарии',
        'Dedicated инфраструктура',
        '24/7 поддержка'
      ],
      popular: false
    }
  ];

  const faqItems = [
    {
      question: 'Легально ли использование DDoS инструментов?',
      answer: 'Наши инструменты предназначены исключительно для стресс-тестирования собственной инфраструктуры. Использование против чужих ресурсов без разрешения является незаконным.'
    },
    {
      question: 'Какие протоколы поддерживаются?',
      answer: 'Мы поддерживаем TCP, UDP, HTTP/HTTPS, DNS и другие протоколы для комплексного тестирования вашей сетевой инфраструктуры.'
    },
    {
      question: 'Есть ли географические ограничения?',
      answer: 'Наши серверы расположены в разных регионах мира, что позволяет тестировать устойчивость к атакам из различных географических точек.'
    },
    {
      question: 'Как обеспечивается безопасность тестирования?',
      answer: 'Все тесты проводятся с соблюдением мер безопасности, включая верификацию владения тестируемыми ресурсами и контроль интенсивности нагрузки.'
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-gradient dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-neon z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="text-neon-cyan" size={32} />
            <span className="text-2xl font-bold text-neon-cyan">MAO-STRESS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-neon-cyan transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-neon-cyan transition-colors">Услуги</a>
            <a href="#pricing" className="text-foreground hover:text-neon-cyan transition-colors">Цены</a>
            <a href="#faq" className="text-foreground hover:text-neon-cyan transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-neon-cyan transition-colors">Контакты</a>
          </div>
          <Button className="btn-cyber">
            Войти
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 text-neon-pink animate-pulse-neon">
              Профессиональный инструмент DDoS атак
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-neon-cyan animate-glow">
              MAO-STRESS
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-neon-green">
              Лучшие Layer 4/7 атаки в мире на рынке
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Продвинутая платформа для стресс-тестирования сети с мощными методами атак. 
              Проверьте устойчивость вашей инфраструктуры с помощью наших профессиональных инструментов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-cyber text-lg px-8 py-4">
                <Icon name="Rocket" className="mr-2" />
                Начать тестирование
              </Button>
              <Button size="lg" variant="outline" className="border-neon text-neon-cyan hover:bg-primary/10">
                <Icon name="Play" className="mr-2" />
                Демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Attack Methods */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neon-cyan">Методы атак</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр методов для комплексного тестирования устойчивости вашей инфраструктуры
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attackMethods.map((method, index) => (
              <Card key={index} className="card-cyber hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/20 w-fit">
                    <Icon name={method.icon} size={32} className="text-neon-cyan" />
                  </div>
                  <CardTitle className="text-xl text-neon-cyan">{method.name}</CardTitle>
                  <Badge variant="outline" className="border-neon-pink text-neon-pink">
                    {method.power}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {method.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neon-cyan">Тарифные планы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий план для ваших потребностей в стресс-тестировании
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id}
                className={`card-cyber relative transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-neon-pink' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-neon-cyan">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-neon-green">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-neon-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 btn-cyber"
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neon-cyan">Вопросы и ответы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на часто задаваемые вопросы о нашем сервисе
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-cyber border-neon"
              >
                <AccordionTrigger className="text-left text-neon-cyan hover:text-neon-pink px-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-neon-cyan">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Готовы начать тестирование? Свяжитесь с нашей командой экспертов
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="card-cyber p-6">
                <Icon name="Mail" size={32} className="text-neon-cyan mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neon-cyan mb-2">Email</h3>
                <p className="text-muted-foreground">support@mao-stress.su</p>
              </div>
              <div className="card-cyber p-6">
                <Icon name="MessageCircle" size={32} className="text-neon-pink mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neon-pink mb-2">Telegram</h3>
                <p className="text-muted-foreground">@mao_stress_support</p>
              </div>
              <div className="card-cyber p-6">
                <Icon name="Clock" size={32} className="text-neon-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neon-green mb-2">Поддержка</h3>
                <p className="text-muted-foreground">24/7 онлайн</p>
              </div>
            </div>

            <Button size="lg" className="btn-cyber text-lg px-8 py-4">
              <Icon name="Send" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Shield" className="text-neon-cyan" size={24} />
              <span className="text-lg font-bold text-neon-cyan">MAO-STRESS</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2024 MAO-STRESS. Все права защищены.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Используйте только для тестирования собственной инфраструктуры
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;