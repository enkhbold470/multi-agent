"use client";

import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import {
  ArrowRight,
  BarChart2,
  Search,
  Zap,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/restnvest-logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
              Rest&Vest
            </h1>
          </Link>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#cta"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              >
                Get Started
              </a>
            </nav>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-md text-sm font-medium hover:from-purple-700 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg"
            >
              Dashboard
            </Link>
            <div className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="px-4 py-2 text-sm text-gray-700 hover:text-purple-600 font-medium rounded-md"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Sign Up
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-purple-50">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
            <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-teal-100 opacity-40 blur-3xl"></div>
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                AI-Powered Investment Matching
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 text-transparent bg-clip-text">
                Find Your Perfect Startup Investment Match
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl md:mx-0 mx-auto">
                Rest&Vest connects investors with startups that perfectly align
                with their investment criteria using advanced AI algorithms,
                helping you discover opportunities others might miss.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link
                  href="/dashboard"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-md font-medium hover:from-purple-700 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Get Matched Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="#features"
                  className="px-8 py-3 bg-white text-purple-600 border border-purple-200 rounded-md font-medium hover:bg-purple-50 transition-colors flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center md:justify-start">
                <div className="text-gray-500 text-sm flex items-center mr-6 mb-4">
                  <Users className="h-4 w-4 mr-2 text-purple-500" />
                  <span>10,000+ investors</span>
                </div>
                <div className="text-gray-500 text-sm flex items-center mr-6 mb-4">
                  <Star className="h-4 w-4 mr-2 text-purple-500" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="text-gray-500 text-sm flex items-center mb-4">
                  <div className="h-4 w-4 mr-2 text-purple-500 overflow-hidden flex items-center justify-center">
                    <Image
                      src="/restnvest-logo.png"
                      alt="Logo"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>$500M+ invested</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white p-2 rounded-2xl shadow-2xl transform rotate-2 md:scale-110">
                <div className="rounded-xl overflow-hidden border border-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Startup investment dashboard"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/restnvest-logo.png"
                      alt="Logo"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Investment Match</p>
                    <p className="text-teal-600 font-bold">94% Compatible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Rest&Vest Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our AI-powered platform makes finding the perfect startup
                investment as easy as 1-2-3.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Define Your Criteria
                </h3>
                <p className="text-gray-600 mb-4">
                  Specify your investment preferences including industry, stage,
                  region, and expected returns to find your ideal matches.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-purple-600 font-medium text-sm flex items-center">
                    Step 1 <ArrowRight className="ml-2 h-3 w-3" />
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  AI-Powered Matching
                </h3>
                <p className="text-gray-600 mb-4">
                  Our advanced algorithms analyze thousands of startups to find
                  the perfect matches based on your unique investment criteria.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-indigo-600 font-medium text-sm flex items-center">
                    Step 2 <ArrowRight className="ml-2 h-3 w-3" />
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart2 className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Access detailed analytics and insights about potential
                  investments to make informed decisions backed by data.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-teal-600 font-medium text-sm flex items-center">
                    Step 3 <ArrowRight className="ml-2 h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="py-24 bg-gradient-to-b from-purple-50 to-white"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Investors Love Rest&Vest
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of successful investors who found their perfect
                match.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Davidson</h4>
                    <p className="text-sm text-gray-500">Angel Investor</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Rest&Vest helped me find two unicorn startups in my
                  portfolio. The AI matching is incredibly accurate and saved me
                  countless hours of research."
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">SL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Liu</h4>
                    <p className="text-sm text-gray-500">VC Partner</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Our firm has dramatically increased our deal flow quality
                  using Rest&Vest. The platform consistently surfaces
                  opportunities that align with our thesis."
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">MJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Johnson</h4>
                    <p className="text-sm text-gray-500">Family Office</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  "The data-driven insights provided by Rest&Vest have been
                  invaluable for our investment decisions. We've seen a 3x
                  improvement in our portfolio performance."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
              Ready to Find Your Next Investment Opportunity?
            </h2>
            <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
              Join thousands of investors who have found their perfect startup
              matches through our platform.
            </p>
            <Link
              href="/dashboard"
              className="px-10 py-4 bg-white text-purple-600 rounded-md font-medium hover:bg-purple-50 transition-colors inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="mt-6 opacity-70 text-sm">
              No credit card required • Free starter plan available
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/restnvest-logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
                  Rest&Vest
                </h2>
              </Link>
              <p className="text-gray-600 mb-6">
                Connecting investors with the perfect startups using AI-powered
                matching.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Rest&Vest. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-purple-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
