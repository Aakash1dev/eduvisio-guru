
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Sparkles, 
  BookOpen, 
  BarChart3, 
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="h-8 w-8 text-brand-600" />
            <span className="text-xl font-bold text-brand-600">EduVisio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-sm font-medium text-gray-600 hover:text-brand-600">Features</Link>
            <Link to="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-brand-600">How It Works</Link>
            <Link to="#testimonials" className="text-sm font-medium text-gray-600 hover:text-brand-600">Testimonials</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gradient">AI-Powered Learning</span> That Adapts to You
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Supercharge your learning with EduVisio. Upload your study materials, generate personalized quizzes, and track your progress.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Create Free Account
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login?guest=true">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Try Demo
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Learning Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              EduVisio combines AI with proven learning techniques to help you master any subject
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-brand-100 p-3 rounded-full w-fit mb-6">
                <BookOpen className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Material Management</h3>
              <p className="text-gray-600">
                Upload PDFs, videos, documents or any learning material. EduVisio organizes everything for easy access.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Multi-format support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Intelligent categorization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Full-text search</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-accent1-100 p-3 rounded-full w-fit mb-6">
                <Sparkles className="h-6 w-6 text-accent1-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Generated Quizzes</h3>
              <p className="text-gray-600">
                Our AI analyzes your materials to create personalized quizzes that test your knowledge and boost retention.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Smart question generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Adaptive difficulty</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Topic-based quizzes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Progress Analytics</h3>
              <p className="text-gray-600">
                Visualize your learning journey with detailed analytics that highlight strengths and areas for improvement.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Performance tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Knowledge gap analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Learning recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-accent1-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are learning smarter, not harder.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              Start Learning Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BrainCircuit className="h-8 w-8 text-white mr-2" />
            <span className="text-xl font-bold text-white">EduVisio</span>
          </div>
          <div className="text-center mb-8">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} EduVisio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
