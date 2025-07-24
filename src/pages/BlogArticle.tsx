import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BlogArticle = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();

  const articles = {
    "anxiety-vs-fear": {
      title: "Как отличить тревогу от страха",
      date: "15 января 2024",
      readTime: "5 мин чтения",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=400&fit=crop&crop=center",
      content: `
        <p class="text-lg leading-relaxed mb-6">Тревога и страх — две эмоции, которые часто путают между собой. Хотя они имеют схожие физические проявления, между ними есть важные различия, понимание которых поможет вам лучше управлять своими эмоциями.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Что такое страх?</h2>
        <p class="leading-relaxed mb-6">Страх — это естественная реакция на конкретную, реальную угрозу. Он возникает в ответ на опасность "здесь и сейчас". Например, страх перед агрессивной собакой или при виде змеи. Страх помогает нам выживать, активируя реакцию "бей или беги".</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Что такое тревога?</h2>
        <p class="leading-relaxed mb-6">Тревога — это беспокойство о потенциальных угрозах в будущем. Она может возникать без конкретной причины и часто связана с неопределенностью. Тревога заставляет нас думать о том, что "может случиться".</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Ключевые различия</h2>
        <ul class="list-disc list-inside space-y-3 mb-6">
          <li><strong>Фокус времени:</strong> страх — настоящее, тревога — будущее</li>
          <li><strong>Объект:</strong> страх имеет конкретный объект, тревога может быть размытой</li>
          <li><strong>Продолжительность:</strong> страх обычно кратковременен, тревога может длиться долго</li>
          <li><strong>Функция:</strong> страх защищает от реальной опасности, тревога готовит к потенциальным проблемам</li>
        </ul>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Как работать с тревогой и страхом</h2>
        <p class="leading-relaxed mb-6">Понимание различий между тревогой и страхом — первый шаг к их преодолению. Для работы со страхом важно оценить реальность угрозы, а для работы с тревогой — научиться возвращаться в настоящий момент и использовать техники заземления.</p>

        <p class="leading-relaxed mb-6">Если тревога или страх мешают вашей повседневной жизни, не стесняйтесь обратиться за профессиональной помощью. Психолог поможет вам разработать индивидуальные стратегии работы с этими эмоциями.</p>
      `
    },
    "grounding-techniques": {
      title: "5 техник заземления здесь-и-сейчас",
      date: "10 января 2024",
      readTime: "7 мин чтения",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop&crop=center",
      content: `
        <p class="text-lg leading-relaxed mb-6">Когда тревога захватывает наш разум, техники заземления становятся спасательным кругом, помогающим вернуться в настоящий момент. Эти простые, но эффективные упражнения можно выполнять в любое время и в любом месте.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Техника 5-4-3-2-1</h2>
        <p class="leading-relaxed mb-4">Одна из самых популярных техник заземления. Она помогает переключить внимание с тревожных мыслей на ощущения здесь и сейчас:</p>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li><strong>5 вещей</strong>, которые вы видите</li>
          <li><strong>4 вещи</strong>, которые вы можете потрогать</li>
          <li><strong>3 звука</strong>, которые вы слышите</li>
          <li><strong>2 запаха</strong>, которые вы чувствуете</li>
          <li><strong>1 вкус</strong> во рту</li>
        </ul>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Дыхательная техника 4-7-8</h2>
        <p class="leading-relaxed mb-4">Эта техника помогает активировать парасимпатическую нервную систему:</p>
        <ol class="list-decimal list-inside space-y-2 mb-6">
          <li>Вдохните через нос на 4 счета</li>
          <li>Задержите дыхание на 7 счетов</li>
          <li>Выдохните через рот на 8 счетов</li>
          <li>Повторите 3-4 раза</li>
        </ol>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Техника квадратного дыхания</h2>
        <p class="leading-relaxed mb-6">Простая техника, которая помогает стабилизировать дыхание: вдох на 4 счета, задержка на 4, выдох на 4, задержка на 4. Представьте, что рисуете квадрат своим дыханием.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Прогрессивная мышечная релаксация</h2>
        <p class="leading-relaxed mb-6">Поочередно напрягайте и расслабляйте разные группы мышц, начиная с пальцев ног и двигаясь вверх. Напрягите мышцы на 5 секунд, затем расслабьте на 10-15 секунд.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Техника "Называние эмоций"</h2>
        <p class="leading-relaxed mb-6">Просто назовите вслух или про себя то, что вы чувствуете: "Сейчас я чувствую тревогу", "Мое сердце бьется быстро", "Я замечаю напряжение в плечах". Называние эмоций помогает создать дистанцию между вами и переживанием.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Когда использовать техники заземления</h2>
        <p class="leading-relaxed mb-6">Эти техники особенно полезны при панических атаках, сильной тревоге, перед важными событиями или когда вы чувствуете, что "уплываете" в тревожные мысли. Регулярная практика поможет вам быстрее возвращаться в состояние равновесия.</p>
      `
    },
    "self-acceptance": {
      title: "Принятие себя: первый шаг к изменениям",
      date: "5 января 2024",
      readTime: "6 мин чтения",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop&crop=center",
      content: `
        <p class="text-lg leading-relaxed mb-6">Многие люди считают, что принятие себя означает смирение с недостатками и отказ от стремления к лучшему. На самом деле, принятие себя — это не пассивность, а активная основа для настоящих позитивных изменений в жизни.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Что такое принятие себя?</h2>
        <p class="leading-relaxed mb-6">Принятие себя — это способность видеть себя реалистично, со всеми сильными и слабыми сторонами, не осуждая и не критикуя. Это не означает, что вы не хотите меняться или развиваться. Это означает, что вы начинаете с честного признания того, где вы находитесь сейчас.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Почему принятие — это основа изменений?</h2>
        <p class="leading-relaxed mb-4">Когда мы боремся с собой, отрицаем свои особенности или стыдимся их, мы тратим огромное количество энергии на внутренний конфликт. Эта энергия могла бы быть направлена на конструктивные изменения.</p>
        
        <p class="leading-relaxed mb-6">Принятие создает безопасное пространство для роста. Когда мы не боимся увидеть свои "недостатки", мы можем честно оценить, что действительно нужно изменить, а что является просто особенностью нашей личности.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Мифы о принятии себя</h2>
        <ul class="list-disc list-inside space-y-3 mb-6">
          <li><strong>Миф 1:</strong> "Если я приму себя, то стану ленивым" — На самом деле принятие дает больше энергии для изменений</li>
          <li><strong>Миф 2:</strong> "Принятие означает, что я не буду стремиться к лучшему" — Принятие не исключает стремления к росту</li>
          <li><strong>Миф 3:</strong> "Я должен сначала измениться, а потом принять себя" — Изменения происходят эффективнее, когда есть основа принятия</li>
        </ul>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Как развивать принятие себя</h2>
        <ol class="list-decimal list-inside space-y-3 mb-6">
          <li><strong>Практикуйте самосострадание</strong> — Относитесь к себе так же доброжелательно, как к хорошему другу</li>
          <li><strong>Ведите дневник достижений</strong> — Записывайте даже маленькие успехи и прогресс</li>
          <li><strong>Исследуйте свои ценности</strong> — Понимание того, что для вас важно, помогает принять свои особенности</li>
          <li><strong>Практикуйте майндфулнес</strong> — Наблюдайте за своими мыслями и чувствами без осуждения</li>
          <li><strong>Окружите себя поддерживающими людьми</strong> — Выбирайте тех, кто принимает вас такими, какие вы есть</li>
        </ol>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Принятие и ответственность</h2>
        <p class="leading-relaxed mb-6">Важно понимать, что принятие себя не означает отказ от ответственности за свои действия. Наоборот, когда мы принимаем себя, мы можем более честно взглянуть на свое поведение и его последствия, что помогает принимать более осознанные решения.</p>

        <h2 class="text-2xl font-heading font-bold text-foreground mb-4 mt-8">Путь к принятию — это процесс</h2>
        <p class="leading-relaxed mb-6">Принятие себя — это не разовое решение, а постоянная практика. У всех нас есть дни, когда самокритика берет верх. Важно помнить, что это нормально, и возвращаться к практике принятия снова и снова. Каждый шаг на этом пути делает нас более целостными и открытыми для позитивных изменений.</p>
      `
    }
  };

  const article = articleId ? articles[articleId as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Статья не найдена
          </h1>
          <Button onClick={() => navigate('/blog')} variant="therapy">
            Вернуться к блогу
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              К блогу
            </Button>
          </div>

          <article className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div 
              className="prose prose-lg max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="text-center pt-8 border-t border-border">
              <div className="bg-gradient-warm p-8 rounded-lg">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Нужна профессиональная помощь?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Если вы хотите проработать эти темы индивидуально, запишитесь на консультацию
                </p>
                <div className="space-x-4">
                  <Button 
                    onClick={() => navigate('/')}
                    variant="therapy"
                  >
                    Записаться на консультацию
                  </Button>
                  <Button 
                    onClick={() => navigate('/blog')}
                    variant="outline"
                  >
                    Другие статьи
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;