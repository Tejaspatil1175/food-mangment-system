"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Leaf, Truck, ShoppingCart, Heart, BarChart2, Brain, Store, Recycle, Facebook, Twitter, Instagram, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/Navbar"
import { ImageWidgetAnalytics } from "@/components/ImageWidgetAnalytics"

export default function FoodSecurityPlatform() {
  const [activeTab, setActiveTab] = useState("farmers")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-12 md:py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Food Security Platform</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Optimizing Food Production, Distribution, and Waste Management for a Sustainable Future</p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">Get Started</Button>
      </header>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
        <Tabs defaultValue="farmers" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="farmers">Farmers</TabsTrigger>
            <TabsTrigger value="distributors">Distributors</TabsTrigger>
            <TabsTrigger value="consumers">Consumers</TabsTrigger>
            <TabsTrigger value="ngos">NGOs</TabsTrigger>
          </TabsList>
          <TabsContent value="farmers">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl text-green-600">
                  <Leaf className="h-8 w-8 mr-2" />
                  For Farmers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access real-time weather data and crop health monitoring</li>
                  <li>Receive AI-powered predictions for crop demand and optimal planting times</li>
                  <li>Connect directly with consumers and distributors through our marketplace</li>
                  <li>Get insights on sustainable farming practices and resource management</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="distributors">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl text-blue-600">
                  <Truck className="h-8 w-8 mr-2" />
                  For Distributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Track food supply chains in real-time with IoT integration</li>
                  <li>Optimize transportation routes for cost and time efficiency</li>
                  <li>Access a network of verified farmers and consumers</li>
                  <li>Implement blockchain technology for transparent and secure transactions</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="consumers">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl text-yellow-600">
                  <ShoppingCart className="h-8 w-8 mr-2" />
                  For Consumers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Purchase fresh, locally grown produce directly from farmers</li>
                  <li>Access discounted surplus food to reduce waste</li>
                  <li>Track the journey of your food from farm to table</li>
                  <li>Join community-supported agriculture programs</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ngos">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl md:text-2xl text-red-600">
                  <Heart className="h-8 w-8 mr-2" />
                  For NGOs and Organizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Efficiently manage and distribute food donations</li>
                  <li>Connect with local farmers and distributors for food drives</li>
                  <li>Access data analytics to measure and report on impact</li>
                  <li>Collaborate with other organizations to maximize reach</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Key Features Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-500 py-12 md:py-20 px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Key Features</h2>
        <div className="grid gap-8 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Real-time Monitoring", icon: <BarChart2 className="h-10 w-10 md:h-12 md:w-12 mb-4" />, description: "Track crop health, weather, and market trends in real-time." },
            { title: "AI Predictions", icon: <Brain className="h-10 w-10 md:h-12 md:w-12 mb-4" />, description: "Get insights on food demand and optimal planting strategies." },
            { title: "Marketplace", icon: <Store className="h-10 w-10 md:h-12 md:w-12 mb-4" />, description: "Connect farmers, distributors, and consumers directly." },
            { title: "Food Waste Reduction", icon: <Recycle className="h-10 w-10 md:h-12 md:w-12 mb-4" />, description: "Optimize surplus management and donation systems." },
          ].map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-xl md:text-2xl">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-white/80">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* User Dashboard Preview */}
      <section className="py-12 md:py-20 px-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">User Dashboard Preview</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 bg-gray-200 p-4">
              <h3 className="font-bold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li><Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>Overview</Button></li>
                <li><Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("marketplace")}>Marketplace</Button></li>
                <li><Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("analytics")}>Analytics</Button></li>
                <li><Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("settings")}>Settings</Button></li>
              </ul>
            </div>
            <div className="w-full md:w-3/4 p-4">
              {activeTab === "overview" && (
                <div>
                  <h3 className="font-bold text-xl mb-4">Welcome, John Doe</h3>
                  <p className="mb-4">Here's your food security overview:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Current crop health: Excellent</li>
                    <li>Predicted harvest date: August 15, 2023</li>
                    <li>Market demand: High for corn and soybeans</li>
                    <li>Recent transactions: 3 completed, 2 pending</li>
                  </ul>
                </div>
              )}
              {activeTab === "marketplace" && (
                <div>
                  <h3 className="font-bold text-xl mb-4">Marketplace</h3>
                  <p className="mb-4">Browse available products or list your own:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Organic Tomatoes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Price: $2.99/lb</p>
                        <p>Quantity: 100 lbs</p>
                        <Button className="mt-2 w-full sm:w-auto">Purchase</Button>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Fresh Corn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Price: $0.50/ear</p>
                        <p>Quantity: 500 ears</p>
                        <Button className="mt-2 w-full sm:w-auto">Purchase</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              {activeTab === "analytics" && (
                <div>
                  <h3 className="font-bold text-xl mb-4">Analytics</h3>
                  <p className="mb-4">Your farm's performance metrics:</p>
                  <Image 
                    src="/placeholder.svg?height=200&width=400" 
                    height={200} 
                    width={400} 
                    alt="Analytics Graph" 
                    className="mb-4 w-full h-auto" 
                  />
                  <ul className="list-disc list-inside space-y-2">
                    <li>Total yield: 15,000 lbs</li>
                    <li>Revenue: $45,000</li>
                    <li>Sustainability score: 92/100</li>
                    <li>Water usage: 20% below average</li>
                  </ul>
                </div>
              )}
              {activeTab === "settings" && (
                <div>
                  <h3 className="font-bold text-xl mb-4">Settings</h3>
                  <p className="mb-4">Manage your account and preferences:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Update profile information</li>
                    <li>Change password</li>
                    <li>Notification preferences</li>
                    <li>Connected devices</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Widget and Analytics Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Crop Image Analysis</h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          Upload an image of your crop to get instant analysis on crop health, pest risk, and water status.
        </p>
        <ImageWidgetAnalytics />
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 md:py-20 px-4 text-center bg-green-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Food Security Revolution</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Be part of the solution to global food security challenges. Start using our platform today and make a difference.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">Join as Farmer</Button>
          <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white w-full sm:w-auto">Start Donating Food</Button>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto">Explore the Marketplace</Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "John Smith", role: "Farmer", quote: "This platform has revolutionized how I manage my farm and connect with buyers." },
            { name: "Sarah Johnson", role: "Distributor", quote: "The real-time tracking and analytics have greatly improved our efficiency." },
            { name: "Michael Brown", role: "NGO Director", quote: "We've been able to reach more people in need thanks to the donation management system." },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Food Security Platform</h3>
            <p className="mb-4">Optimizing food systems for a sustainable future</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6" /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/features" className="hover:underline">Features</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest news and features.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" />
              <Button type="submit" className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Food Security Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

