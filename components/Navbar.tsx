"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Leaf, Menu, X, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/farmers", label: "Farmers" },
    { href: "/distributors", label: "Distributors" },
    { href: "/consumers", label: "Consumers" },
    { href: "/ngos", label: "NGOs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-green-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6" />
          <span className="font-bold text-lg">Food Security</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`hover:text-green-200 transition-colors ${pathname === item.href ? 'text-green-200' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="secondary" size="sm">Sign In</Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-green-600 text-white">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-2 py-1 text-lg hover:text-green-200 transition-colors ${
                    pathname === item.href ? 'text-green-200' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full bg-white text-green-600 hover:bg-green-100">Sign In</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

