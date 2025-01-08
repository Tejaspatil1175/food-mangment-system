import Link from 'next/link'
import { Heart, BarChart2, Users, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NGOsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-red-600 to-red-400 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">For NGOs and Organizations</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Efficiently manage food donations and maximize your impact</p>
      </header>

      <main className="py-12 px-4">
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features for NGOs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Donation Management", icon: <Heart className="h-8 w-8 mb-4 text-red-500" />, description: "Efficiently track and manage food donations" },
              { title: "Impact Analytics", icon: <BarChart2 className="h-8 w-8 mb-4 text-blue-500" />, description: "Measure and report on your organization's impact" },
              { title: "Volunteer Coordination", icon: <Users className="h-8 w-8 mb-4 text-green-500" />, description: "Streamline volunteer management and scheduling" },
              { title: "Donor Engagement", icon: <Heart className="h-8 w-8 mb-4 text-purple-500" />, description: "Keep donors informed and engaged with your initiatives" },
              { title: "Resource Allocation", icon: <Globe className="h-8 w-8 mb-4 text-yellow-500" />, description: "Optimize the distribution of resources to those in need" },
              { title: "Collaboration Tools", icon: <Users className="h-8 w-8 mb-4 text-teal-500" />, description: "Connect and collaborate with other organizations" },
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
          <h2 className="text-3xl font-bold mb-8 text-center">How We Support Your Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Efficient Food Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our platform connects you directly with farmers and distributors, ensuring a steady supply of fresh produce for your food drives and programs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data-Driven Decision Making</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access comprehensive analytics to understand the impact of your initiatives and make informed decisions on resource allocation.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Amplify Your Impact?</h2>
          <p className="text-xl mb-8">Join a network of NGOs and organizations working together to combat food insecurity and reduce waste.</p>
          <Button size="lg" asChild>
            <Link href="/ngo-signup">Partner with Us</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 px-4 mt-20">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Food Security Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

