import Link from 'next/link'
import { ShoppingCart, Leaf, Recycle, Map } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConsumersPage() {
  return (
    <div className="bg-background">
      <header className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">For Consumers</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Access fresh, local produce and contribute to a sustainable food system</p>
      </header>

      <main className="py-12 px-4">
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits for Consumers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Fresh Local Produce", icon: <Leaf className="h-8 w-8 mb-4 text-green-500" />, description: "Access to fresh, locally grown fruits and vegetables" },
              { title: "Reduce Food Waste", icon: <Recycle className="h-8 w-8 mb-4 text-blue-500" />, description: "Purchase surplus produce at discounted prices" },
              { title: "Track Your Food", icon: <Map className="h-8 w-8 mb-4 text-yellow-500" />, description: "See the journey of your food from farm to table" },
              { title: "Support Local Farmers", icon: <ShoppingCart className="h-8 w-8 mb-4 text-red-500" />, description: "Directly support local farmers and communities" },
              { title: "Seasonal Offerings", icon: <Leaf className="h-8 w-8 mb-4 text-orange-500" />, description: "Discover and enjoy seasonal produce at its peak" },
              { title: "Community Programs", icon: <ShoppingCart className="h-8 w-8 mb-4 text-purple-500" />, description: "Join community-supported agriculture programs" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {feature.icon}
                    <span className="ml-2">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Browse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore a wide variety of fresh, local produce from farmers in your area.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Order</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Select your items and choose a convenient pickup location or delivery option.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Enjoy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Receive your fresh produce and enjoy knowing you&apos;re supporting local farmers and reducing food waste.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Eat Fresh and Local?</h2>
          <p className="text-xl mb-8">Join thousands of consumers who are enjoying fresh, local produce while supporting sustainable farming practices.</p>
          <Button size="lg" asChild>
            <Link href="/marketplace">Explore the Marketplace</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

