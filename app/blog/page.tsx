import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, ArrowLeft } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "The Beauty of Prime Numbers",
      excerpt:
        "Exploring the infinite mysteries hidden within the building blocks of mathematics. From the ancient Greeks to modern cryptography, primes continue to fascinate and challenge us.",
      date: "2024-01-15",
      slug: "beauty-of-prime-numbers",
      tags: ["Number Theory", "Primes", "History"],
    },
    {
      title: "Topology: When Coffee Cups Equal Donuts",
      excerpt:
        "A gentle introduction to topological equivalence and why mathematicians see the world differently. Understanding continuous deformations and invariant properties.",
      date: "2024-01-08",
      slug: "topology-coffee-cups-donuts",
      tags: ["Topology", "Geometry", "Beginner-Friendly"],
    },
    {
      title: "My Journey Through Abstract Algebra",
      excerpt:
        "Reflections on group theory, rings, and the abstract structures that govern our mathematical universe. Personal insights from years of study.",
      date: "2024-01-01",
      slug: "journey-through-abstract-algebra",
      tags: ["Abstract Algebra", "Groups", "Personal"],
    },
    {
      title: "Category Theory: The Mathematics of Mathematics",
      excerpt:
        "An introduction to the language that unifies all of mathematics. How category theory provides a bird's eye view of mathematical structures.",
      date: "2023-12-20",
      slug: "category-theory-mathematics",
      tags: ["Category Theory", "Foundations", "Advanced"],
    },
    {
      title: "The Riemann Hypothesis: A Million Dollar Question",
      excerpt:
        "Diving deep into one of the most famous unsolved problems in mathematics. What makes this conjecture so important and so difficult?",
      date: "2023-12-10",
      slug: "riemann-hypothesis",
      tags: ["Number Theory", "Unsolved Problems", "Analysis"],
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
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-blue-600 font-medium">
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
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mathematical Musings</h1>
          <p className="text-xl text-gray-600">
            Thoughts on pure mathematics, research insights, and the beauty of abstract thinking
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-base">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <Button variant="ghost" asChild className="p-0">
                  <Link href={`/blog/${post.slug}`}>Read full post →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to discuss mathematics?</h2>
            <p className="text-gray-600 mb-6">
              I love connecting with fellow math enthusiasts, students, and researchers.
            </p>
            <Button asChild>
              <Link href="mailto:alex@example.com">Get in Touch</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
