import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: "anxiety-vs-fear",
      title: "Как отличить тревогу от страха",
      excerpt: "Тревога и страх часто воспринимаются как одно и то же чувство, но между ними есть важные различия. Понимание этих различий поможет вам лучше справляться с эмоциями.",
      date: "15 января 2024",
      readTime: "5 мин чтения",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "grounding-techniques",
      title: "5 техник заземления здесь-и-сейчас",
      excerpt: "Когда тревога захватывает разум, техники заземления помогают вернуться в настоящий момент. Эти простые упражнения можно выполнять в любое время и в любом месте.",
      date: "10 января 2024", 
      readTime: "7 мин чтения",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "self-acceptance",
      title: "Принятие себя: первый шаг к изменениям",
      excerpt: "Многие считают, что принятие себя означает смирение с недостатками. На самом деле, это основа для настоящих позитивных изменений в жизни.",
      date: "5 января 2024",
      readTime: "6 мин чтения",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              На главную
            </Button>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Блог
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полезные статьи о психологии, саморазвитии и работе с эмоциями
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-heading text-foreground hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <Button 
                        variant="outline" 
                        className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => navigate(`/blog/${article.id}`)}
                      >
                        Читать полностью
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-warm p-8 rounded-lg">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Полезные материалы
              </h3>
              <p className="text-muted-foreground mb-6">
                Регулярно публикую статьи о психологии и саморазвитии
              </p>
              <Button 
                onClick={() => navigate('/')}
                variant="therapy"
              >
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;