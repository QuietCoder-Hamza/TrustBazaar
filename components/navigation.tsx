"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Users, TrendingUp, MessageSquare, Settings } from "lucide-react"

const translations = {
  en: {
    home: "Home",
    suppliers: "Suppliers",
    prices: "Prices",
    forum: "Forum",
    admin: "Admin",
    login: "Login",
  },
  hi: {
    home: "होम",
    suppliers: "आपूर्तिकर्ता",
    prices: "मूल्य",
    forum: "मंच",
    admin: "एडमिन",
    login: "लॉगिन",
  },
}

interface NavigationProps {
  language: "en" | "hi"
}

export function Navigation({ language }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[language]

  const navItems = [
    { href: "/", label: t.home, icon: Home },
    { href: "/suppliers", label: t.suppliers, icon: Users },
    { href: "/prices", label: t.prices, icon: TrendingUp },
    { href: "/forum", label: t.forum, icon: MessageSquare },
    { href: "/admin", label: t.admin, icon: Settings },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-orange-600">
            TrustBazaar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-600 hover:text-orange-600 transition-colors">
                {item.label}
              </Link>
            ))}
            <Button asChild variant="outline">
              <Link href="/auth">{t.login}</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-600 hover:text-orange-600 transition-colors p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/auth" onClick={() => setIsOpen(false)}>
                    {t.login}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
