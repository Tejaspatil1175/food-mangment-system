import Link from 'next/link'
import { Leaf, Truck, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="bg-background">
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Food Security Platform</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Optimizing Food Production, Distribution, and Waste Management for a Sustainable Future</p>
        <Button size="lg" asChild>
          <Link href="#get-started">Get Started</Link>
        </Button>
      </header>

      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "For Farmers", icon: <Leaf className="h-12 w-12 mb-4 text-green-500" />, description: "Access real-time data and connect with buyers", link: "/farmers" },
            { title: "For Distributors", icon: <Truck className="h-12 w-12 mb-4 text-blue-500" />, description: "Optimize routes and track supply chains", link: "/distributors" },
            { title: "For Consumers", icon: <ShoppingCart className="h-12 w-12 mb-4 text-yellow-500" />, description: "Buy fresh, local produce and reduce waste", link: "/consumers" },
            { title: "For NGOs", icon: <Heart className="h-12 w-12 mb-4 text-red-500" />, description: "Manage donations and measure impact", link: "/ngos" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <Button asChild>
                <Link href={item.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section id="get-started" className="bg-green-50 py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Join the Food Security Revolution</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-center">Be part of the solution to global food security challenges. Start using our platform today and make a difference.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/farmers">Join as Farmer</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/ngos">Start Donating Food</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/consumers">Explore the Marketplace</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
