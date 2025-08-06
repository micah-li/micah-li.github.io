import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, ArrowLeft, Clock, Calendar } from "lucide-react"

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  // In a real app, you'd fetch this data based on the slug
  const post = {
    title: "The Beauty of Prime Numbers",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Number Theory", "Primes", "History"],
    content: `
# The Infinite Dance of Prime Numbers

Prime numbers have captivated mathematicians for over two millennia. These seemingly simple numbers—divisible only by 1 and themselves—hide profound mysteries that continue to challenge our understanding of mathematics.

## What Makes Primes Special?

Consider the number 17. It stands alone, indivisible except by itself and 1. Yet this simple property gives rise to extraordinary complexity when we consider primes as a whole.

The **Fundamental Theorem of Arithmetic** tells us that every integer greater than 1 can be expressed uniquely as a product of primes. In essence, primes are the "atoms" of the integers.

## The Prime Number Theorem

One of the most beautiful results in number theory is the Prime Number Theorem, which describes the asymptotic distribution of prime numbers:

$$\\pi(x) \\sim \\frac{x}{\\ln(x)}$$

This elegant formula, proven independently by Hadamard and de la Vallée Poussin in 1896, shows that primes become rarer as numbers get larger, but in a predictable way.

## Modern Applications

What the ancient Greeks saw as pure mathematical beauty now powers our digital world:

- **RSA Cryptography**: The security of online transactions relies on the difficulty of factoring large numbers into their prime components
- **Hash Functions**: Prime numbers help create efficient hash tables and random number generators
- **Error Correction**: Prime-based codes help ensure data integrity in everything from CDs to space communications

## The Riemann Hypothesis Connection

The distribution of primes is intimately connected to the Riemann zeta function:

$$\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}$$

The famous Riemann Hypothesis conjectures that all non-trivial zeros of this function have real part 1/2. If true, it would give us unprecedented insight into the distribution of primes.

## Personal Reflection

As I work through my PhD research, I'm constantly amazed by how these "simple" numbers continue to reveal new secrets. Each theorem we prove opens doors to deeper questions, reminding us that mathematics is truly infinite in its beauty and complexity.

The next time you encounter a prime number, take a moment to appreciate its uniqueness. In a world of composite numbers that can be broken down and factored, primes stand as indivisible monuments to mathematical purity.

---

*What are your thoughts on prime numbers? Have you encountered them in unexpected places? I'd love to hear from you!*
    `,
  }

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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-blue max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">${line.substring(2)}</h1>`
                    } else if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">${line.substring(3)}</h2>`
                    } else if (line.startsWith("**") && line.endsWith("**")) {
                      return `<p class="mb-4"><strong>${line.substring(2, line.length - 2)}</strong></p>`
                    } else if (line.startsWith("- ")) {
                      return `<li class="mb-2">${line.substring(2)}</li>`
                    } else if (line.includes("$$")) {
                      return `<div class="text-center my-8 text-2xl font-mono bg-gray-50 p-4 rounded">${line.replace(/\$\$/g, "")}</div>`
                    } else if (line.trim() === "---") {
                      return '<hr class="my-8 border-gray-200">'
                    } else if (line.startsWith("*") && line.endsWith("*")) {
                      return `<p class="italic text-gray-600 mb-4">${line.substring(1, line.length - 1)}</p>`
                    } else if (line.trim() !== "") {
                      return `<p class="mb-4 leading-relaxed text-gray-700">${line}</p>`
                    }
                    return ""
                  })
                  .join(""),
              }}
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoyed this post?</h3>
              <p className="text-gray-600">Share your thoughts or questions with me!</p>
            </div>
            <Button asChild>
              <Link href="mailto:alex@example.com">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
