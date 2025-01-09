import Link from 'next/link'
import { Truck, BarChart2, Map, Box } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DistributorsPage() {
  return (
    <div className="bg-background">
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">For Distributors</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Optimize your distribution network and streamline operations</p>
      </header>

      <main className="py-12 px-4">
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features for Distributors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Route Optimization", icon: <Map className="h-8 w-8 mb-4 text-green-500" />, description: "AI-powered route planning to minimize costs and delivery times" },
              { title: "Real-time Tracking", icon: <Truck className="h-8 w-8 mb-4 text-blue-500" />, description: "Track your fleet and shipments in real-time" },
              { title: "Inventory Management", icon: <Box className="h-8 w-8 mb-4 text-yellow-500" />, description: "Efficient inventory tracking and management" },
              { title: "Demand Forecasting", icon: <BarChart2 className="h-8 w-8 mb-4 text-purple-500" />, description: "Predict demand to optimize stock levels" },
              { title: "Supplier Network", icon: <Truck className="h-8 w-8 mb-4 text-red-500" />, description: "Connect with a network of verified suppliers" },
              { title: "Analytics Dashboard", icon: <BarChart2 className="h-8 w-8 mb-4 text-teal-500" />, description: "Comprehensive analytics to drive business decisions" },
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
          <h2 className="text-3xl font-bold mb-8 text-center">Optimize Your Distribution Network</h2>
          <p className="text-xl mb-8 text-center">Our platform provides powerful tools to streamline your operations and increase efficiency.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Route Optimization Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                <p>See how our AI-powered route optimization can save you time and fuel costs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Real-time Tracking Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                <p>Monitor your entire fleet and shipments in real-time with our intuitive dashboard.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Revolutionize Your Distribution?</h2>
          <p className="text-xl mb-8">Join leading distributors who have increased their efficiency by up to 30% using our platform.</p>
          <Button size="lg" asChild>
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

