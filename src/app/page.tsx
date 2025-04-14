"use client";

import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Home() {

  return (
    <HomePageContent />
  )

}

function HomePageContent() {
  return (
    <>
      <div className="-z-10 mx-auto max-w-[1500px] pt-10">
        <section className=" relative min-h-[90vh] flex items-center overflow-hidden -mt-10 ">
          <div className="absolute inset-0 bg-gradient-to-br from-blog-50/30 to-transparent -z-10"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-full max-w-3xl -z-10 opacity-10">
            <div className="w-full h-full bg-blog-200 rounded-l-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  Discover stories that inspire and ignite curiosity
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                  A modern platform for thoughtful articles, personal stories, and insights that matter.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="">
                    Start Reading
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Become a Writer
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block relative animate-fade-in animate-delay-300">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Person writing on a laptop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <span className="text-xs text-white/80 font-medium bg-blog-600/80 px-3 py-1 rounded-full">Featured</span>
                    <h3 className="mt-3 text-2xl font-serif font-bold text-white">The Art of Meaningful Content Creation</h3>
                    <p className="mt-2 text-white/80">How to craft stories that resonate and inspire action</p>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blog-100 rounded-full blur-2xl -z-10 opacity-70"></div>
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-blog-200 rounded-full blur-2xl -z-10 opacity-70"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blog-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold">Stay updated with the latest stories</h2>
                  <p className="mt-4 text-muted-foreground">
                    Join our newsletter and receive handpicked articles, tips, and insights directly to your inbox.
                  </p>

                  <form className="mt-8 space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-12 bg-gray-50 border-gray-200 focus:border-blog-300"
                        required
                      />
                    </div>
                    <Button className="w-full h-12 bg-blog-600 hover:bg-blog-700">
                      Subscribe Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      By subscribing, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </form>
                </div>

                <div className="relative hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Person reading on laptop"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blog-600/70 to-black/50 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </section>




        <footer className="mx-auto py-12 px-4 sm:px-6 lg:px-8 border-t">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="col-span-1 md:col-span-2">
                <a href="/" className="text-xl font-serif font-bold">
                  Modern<span className="text-blog-600">Blog</span>
                </a>
                <p className="mt-4 text-muted-foreground max-w-md">
                  A modern platform for thoughtful articles, personal stories, and insights that matter. We believe in the power of words to inspire and transform.
                </p>
                <div className="flex mt-6 space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blog-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blog-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blog-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blog-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blog-600 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Technology</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Design</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Business</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Lifestyle</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Productivity</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Health</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">About</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Careers</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blog-600 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} ModernBlog. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div >
    </>
  )
}

