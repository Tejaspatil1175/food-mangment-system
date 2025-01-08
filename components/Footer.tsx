import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AlertBell } from "@/components/AlertBell"
import { ProfileDropdown } from "@/components/ProfileDropdown"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Food Security Platform</h3>
            <p className="text-sm">Optimizing food systems for a sustainable future</p>
          </div>
          <div className="flex items-center space-x-4">
            <AlertBell />
            <ProfileDropdown />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/farmers" className="hover:underline">For Farmers</Link></li>
              <li><Link href="/distributors" className="hover:underline">For Distributors</Link></li>
              <li><Link href="/consumers" className="hover:underline">For Consumers</Link></li>
              <li><Link href="/ngos" className="hover:underline">For NGOs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest news and features.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" 
              />
              <Button type="submit" className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p>&copy; 2023 Food Security Platform. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

