import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, GraduationCap, BookOpen, Award, Coffee, Mail, Twitter, Github } from "lucide-react"

export default function HomePage() {
  const education = [
    {
      degree: "PhD in Pure Mathematics",
      institution: "University of Mathematical Excellence",
      year: "2022 - Present",
      focus: "Number Theory & Abstract Algebra",
    },
    {
      degree: "Master of Science in Mathematics",
      institution: "State University",
      year: "2020 - 2022",
      focus: "Algebraic Topology",
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Liberal Arts College",
      year: "2016 - 2020",
      focus: "Pure Mathematics, Summa Cum Laude",
    },
  ]

  const research = [
    "Investigating the distribution of prime numbers in arithmetic progressions",
    "Exploring connections between algebraic structures and topological spaces",
    "Developing new approaches to classical problems in number theory",
    "Studying the applications of category theory to algebraic geometry",
  ]

  const publications = [
    {
      title: "On the Distribution of Primes in Quadratic Progressions",
      journal: "Journal of Number Theory",
      year: "2023",
      status: "Under Review",
    },
    {
      title: "Topological Invariants in Abstract Algebra",
      journal: "Proceedings of Mathematical Society",
      year: "2023",
      status: "Published",
    },
  ]

  const recentPosts = [
    {
      title: "The Beauty of Prime Numbers",
      excerpt: "Exploring the infinite mysteries hidden within the building blocks of mathematics...",
      date: "2024-01-15",
      slug: "beauty-of-prime-numbers",
    },
    {
      title: "Topology: When Coffee Cups Equal Donuts",
      excerpt: "A gentle introduction to topological equivalence and why mathematicians see the world differently...",
      date: "2024-01-08",
      slug: "topology-coffee-cups-donuts",
    },
    {
      title: "My Journey Through Abstract Algebra",
      excerpt:
        "Reflections on group theory, rings, and the abstract structures that govern our mathematical universe...",
      date: "2024-01-01",
      slug: "journey-through-abstract-algebra",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Alex Chen</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            ∫ Math + Life <span className="text-blue-600">dx</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            PhD Student in Pure Mathematics | Exploring the infinite beauty of abstract structures
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Number Theory
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Abstract Algebra
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Topology
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Category Theory
            </Badge>
          </div>
        </div>

        {/* Personal Introduction */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                AC
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hello, I'm Alex Chen!</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a PhD student in Pure Mathematics with a passion for number theory, abstract algebra, and the
                  beautiful connections between different areas of mathematics. When I'm not proving theorems or
                  debugging LaTeX, you can find me exploring the local coffee scene or hiking in the mountains.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My research focuses on the distribution of prime numbers and their applications to cryptography. I
                  believe that mathematics is not just about solving problems, but about discovering the elegant
                  patterns that govern our universe.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <span>Education</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600">{edu.year}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.focus}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Interests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span>Research Interests</span>
            </CardTitle>
            <CardDescription>Current areas of investigation and mathematical curiosity</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {research.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Publications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-blue-600" />
              <span>Publications & Research</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1">{pub.title}</h3>
                  <p className="text-blue-600 text-sm mb-1">
                    {pub.journal} ({pub.year})
                  </p>
                  <Badge variant={pub.status === "Published" ? "default" : "secondary"} className="text-xs">
                    {pub.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Blog Posts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span>Recent Thoughts</span>
            </CardTitle>
            <CardDescription>Mathematical musings and research insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <div key={index} className="border-l-4 border-purple-200 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-600 mb-2">{post.excerpt}</p>
                  <Button variant="ghost" asChild className="p-0 h-auto">
                    <Link href={`/blog/${post.slug}`}>Read more →</Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-blue-600" />
              <span>Beyond Mathematics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hobbies</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Coffee brewing and tasting</li>
                  <li>• Mountain hiking and photography</li>
                  <li>• Classical piano</li>
                  <li>• Science fiction novels</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fun Facts</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Can solve a Rubik's cube in under 2 minutes</li>
                  <li>• Speaks 3 languages fluently</li>
                  <li>• Has visited 15 countries</li>
                  <li>• Owns 47 mathematical textbooks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card id="contact" className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect!</h2>
            <p className="text-gray-600 mb-6">
              I'm always excited to discuss mathematics, collaborate on research, or just chat over coffee.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              <Button variant="outline" size="lg">
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Calculator className="h-6 w-6" />
            <span className="text-lg font-semibold">Alex Chen</span>
          </div>
          <p className="text-gray-400">
            © 2024 Alex Chen. Made with <Coffee className="inline h-4 w-4" /> and lots of math.
          </p>
        </div>
      </footer>
    </div>
  )
}
