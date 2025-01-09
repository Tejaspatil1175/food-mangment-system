import Link from 'next/link'
import { Leaf, BarChart2, CloudRain, Sprout } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageWidgetAnalytics } from "@/components/ImageWidgetAnalytics"

export default function FarmersPage() {
  return (
    <div className="bg-background">
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">For Farmers</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Empower your farming with cutting-edge technology and data-driven insights</p>
      </header>

      <main className="py-12 px-4">
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features for Farmers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Crop Monitoring", icon: <Leaf className="h-8 w-8 mb-4 text-green-500" />, description: "Real-time monitoring of crop health and growth stages" },
              { title: "Weather Insights", icon: <CloudRain className="h-8 w-8 mb-4 text-blue-500" />, description: "Accurate weather forecasts and alerts for your specific location" },
              { title: "Yield Predictions", icon: <BarChart2 className="h-8 w-8 mb-4 text-yellow-500" />, description: "AI-powered yield predictions to optimize harvesting" },
              { title: "Soil Analysis", icon: <Sprout className="h-8 w-8 mb-4 text-brown-500" />, description: "Detailed soil health analysis and fertilizer recommendations" },
              { title: "Market Insights", icon: <BarChart2 className="h-8 w-8 mb-4 text-purple-500" />, description: "Real-time market data to help you make informed decisions" },
              { title: "Resource Management", icon: <Leaf className="h-8 w-8 mb-4 text-teal-500" />, description: "Tools to optimize water usage and reduce waste" },
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
          <h2 className="text-3xl font-bold mb-8 text-center">Crop Image Analysis</h2>
          <ImageWidgetAnalytics />
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8">Join thousands of farmers who are already benefiting from our platform.</p>
          <Button size="lg" asChild>
            <Link href="/signup">Sign Up Now</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

