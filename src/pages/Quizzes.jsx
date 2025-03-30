
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Play, BookOpen, Filter, Plus, Search, SortAsc, GraduationCap } from "lucide-react";

// Note: Fixed the FileText import error by adding it to the import statement above

const Quizzes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [quizzes, setQuizzes] = useState([
    {
      id: "1",
      title: "Machine Learning Basics",
      source: "Introduction to Machine Learning",
      questions: 15,
      score: 85,
      date: "2023-06-12",
      status: "completed",
    },
    {
      id: "2",
      title: "JavaScript Fundamentals",
      source: "Advanced JavaScript Concepts",
      questions: 20,
      score: 90,
      date: "2023-06-10",
      status: "completed",
    },
    {
      id: "3",
      title: "Data Structures",
      source: "Data Structures & Algorithms",
      questions: 25,
      score: 75,
      date: "2023-06-05",
      status: "completed",
    },
    {
      id: "4",
      title: "English Grammar",
      source: "English Grammar Basics",
      questions: 30,
      score: null,
      date: "2023-06-15",
      status: "pending",
    },
  ]);

  // Filter quizzes based on search query and filter
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || quiz.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">My Quizzes</h1>
        <p className="text-muted-foreground">
          View and manage your quizzes
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search quizzes..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("completed")}
          >
            Completed
          </Button>
          <Button
            variant={filter === "pending" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("pending")}
          >
            Pending
          </Button>
        </div>
      </div>

      <Tabs defaultValue="quizzes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="quizzes">
            <BookOpen className="h-4 w-4 mr-2" />
            My Quizzes
          </TabsTrigger>
          <TabsTrigger value="history">
            <GraduationCap className="h-4 w-4 mr-2" />
            Quiz History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quizzes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Create New Quiz Card */}
            <Card className="bg-gradient-to-br from-brand-50 to-accent1-50 border-dashed border-2 hover:bg-gradient-to-br hover:from-brand-100 hover:to-accent1-100 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                <div className="bg-white rounded-full p-3 mb-4 shadow-sm">
                  <Plus className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-center">Generate New Quiz</h3>
                <p className="text-center text-muted-foreground mb-4">
                  Create a quiz from your materials or topics
                </p>
                <Button>Create Quiz</Button>
              </CardContent>
            </Card>

            {/* Quiz Cards */}
            {filteredQuizzes.map((quiz) => (
              <Card key={quiz.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{quiz.title}</CardTitle>
                    <Badge 
                      variant={quiz.status === "completed" ? "default" : "outline"}
                      className={quiz.status === "completed" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                    >
                      {quiz.status === "completed" ? "Completed" : "Pending"}
                    </Badge>
                  </div>
                  <CardDescription>
                    From: {quiz.source}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Questions</div>
                      <div className="font-medium">{quiz.questions}</div>
                    </div>
                    {quiz.status === "completed" && (
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Score</div>
                        <div className={`font-medium ${
                          quiz.score >= 80 ? "text-green-600" : 
                          quiz.score >= 60 ? "text-amber-600" : 
                          "text-red-600"
                        }`}>
                          {quiz.score}%
                        </div>
                      </div>
                    )}
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Date</div>
                      <div className="font-medium">{new Date(quiz.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                      {quiz.status === "completed" ? "Review" : "Take Quiz"}
                    </Button>
                    {quiz.status === "completed" && (
                      <Button size="sm">Retry</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredQuizzes.length === 0 && (
              <div className="col-span-3 py-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No quizzes found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery 
                    ? "Try a different search term or filter"
                    : "Start by generating your first quiz"}
                </p>
                <Button>Generate Quiz</Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quiz History & Performance</CardTitle>
              <CardDescription>View your progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Quiz history will be displayed here</h3>
                <p className="text-muted-foreground mb-4">
                  Complete more quizzes to see your performance trends
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Quizzes;
