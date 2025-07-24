import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: "Как отличить тревогу от страха",
      excerpt: "Тревога и страх часто воспринимаются как одно и то же чувство, но между ними есть важные различия. Понимание этих различий поможет вам лучше справляться с эмоциями.",
      date: "15 января 2024",
      readTime: "5 мин чтения"
    },
    {
      title: "5 техник заземления здесь-и-сейчас",
      excerpt: "Когда тревога захватывает разум, техники заземления помогают вернуться в настоящий момент. Эти простые упражнения можно выполнять в любое время и в любом месте.",
      date: "10 января 2024", 
      readTime: "7 мин чтения"
    },
    {
      title: "Принятие себя: первый шаг к изменениям",
      excerpt: "Многие считают, что принятие себя означает смирение с недостатками. На самом деле, это основа для настоящих позитивных изменений в жизни.",
      date: "5 января 2024",
      readTime: "6 мин чтения"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Блог
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи о психологии, саморазвитии и работе с эмоциями
            </p>
          </div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <Card key={index} className="shadow-gentle hover:shadow-therapy transition-all duration-300 border-0">
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
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    Читать полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/')}
              variant="therapy"
              className="font-semibold"
            >
              Вернуться на главную
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;