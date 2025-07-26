"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { CheckCircle, Users, Shield, TrendingUp, Search, MessageSquare } from "lucide-react"

const translations = {
  en: {
    title: "TrustBazaar",
    subtitle: "Trusted Supply Chain for Street Food Vendors",
    description: "Connect with verified suppliers, get fair prices, and build trust in your supply chain",
    getStarted: "Get Started",
    learnMore: "Learn More",
    howItWorks: "How It Works",
    step1Title: "Register & Verify",
    step1Desc: "Create your vendor account and get verified by our team",
    step2Title: "Find Suppliers",
    step2Desc: "Search and filter verified suppliers by location and products",
    step3Title: "Connect & Trade",
    step3Desc: "Contact suppliers, check prices, and build lasting relationships",
    features: "Features",
    verifiedSuppliers: "Verified Suppliers",
    verifiedSuppliersDesc: "All suppliers are background-checked and verified",
    dailyPrices: "Daily Price Updates",
    dailyPricesDesc: "Get real-time pricing for common raw materials",
    community: "Community Forum",
    communityDesc: "Share experiences and get advice from fellow vendors",
    trustedBy: "Trusted by 1000+ Street Food Vendors",
  },
  hi: {
    title: "ट्रस्टबाज़ार",
    subtitle: "स्ट्रीट फूड विक्रेताओं के लिए विश्वसनीय आपूर्ति श्रृंखला",
    description: "सत्यापित आपूर्तिकर्ताओं से जुड़ें, उचित मूल्य प्राप्त करें, और अपनी आपूर्ति श्रृंखला में विश्वास बनाएं",
    getStarted: "शुरू करें",
    learnMore: "और जानें",
    howItWorks: "यह कैसे काम करता है",
    step1Title: "पंजीकरण और सत्यापन",
    step1Desc: "अपना विक्रेता खाता बनाएं और हमारी टीम द्वारा सत्यापित हों",
    step2Title: "आपूर्तिकर्ता खोजें",
    step2Desc: "स्थान और उत्पादों के आधार पर सत्यापित आपूर्तिकर्ताओं को खोजें",
    step3Title: "जुड़ें और व्यापार करें",
    step3Desc: "आपूर्तिकर्ताओं से संपर्क करें, कीमतें जांचें, और स्थायी रिश्ते बनाएं",
    features: "विशेषताएं",
    verifiedSuppliers: "सत्यापित आपूर्तिकर्ता",
    verifiedSuppliersDesc: "सभी आपूर्तिकर्ता पृष्ठभूमि-जांचे और सत्यापित हैं",
    dailyPrices: "दैनिक मूल्य अपडेट",
    dailyPricesDesc: "सामान्य कच्चे माल के लिए वास्तविक समय मूल्य निर्धारण प्राप्त करें",
    community: "समुदायिक मंच",
    communityDesc: "अनुभव साझा करें और साथी विक्रेताओं से सलाह लें",
    trustedBy: "1000+ स्ट्रीट फूड विक्रेताओं द्वारा भरोसा किया गया",
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation language={language} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex justify-end mb-8">
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl md:text-2xl text-orange-600 mb-4">{t.subtitle}</p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/auth">{t.getStarted}</Link>
            </Button>
            <Button variant="outline" size="lg">
              {t.learnMore}
            </Button>
          </div>

          <div className="mt-12">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              {t.trustedBy}
            </Badge>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.howItWorks}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>{t.step1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.step1Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>{t.step2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.step2Desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>{t.step3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.step3Desc}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>{t.verifiedSuppliers}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.verifiedSuppliersDesc}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>{t.dailyPrices}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.dailyPricesDesc}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>{t.community}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.communityDesc}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
