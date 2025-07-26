"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const translations = {
  en: {
    title: "Daily Price Board",
    subtitle: "Real-time prices for common raw materials",
    lastUpdated: "Last updated",
    filterLocation: "Filter by location",
    allLocations: "All Locations",
    priceChange: "Price Change",
    up: "Up",
    down: "Down",
    stable: "Stable",
    refresh: "Refresh Prices",
    perKg: "per kg",
    perLiter: "per liter",
    perPiece: "per piece",
  },
  hi: {
    title: "दैनिक मूल्य बोर्ड",
    subtitle: "सामान्य कच्चे माल के लिए वास्तविक समय की कीमतें",
    lastUpdated: "अंतिम अपडेट",
    filterLocation: "स्थान के अनुसार फ़िल्टर करें",
    allLocations: "सभी स्थान",
    priceChange: "मूल्य परिवर्तन",
    up: "ऊपर",
    down: "नीचे",
    stable: "स्थिर",
    refresh: "कीमतें रीफ्रेश करें",
    perKg: "प्रति किलो",
    perLiter: "प्रति लीटर",
    perPiece: "प्रति पीस",
  },
}

const mockPrices = [
  {
    id: 1,
    name: "Tomatoes",
    nameHi: "टमाटर",
    price: 25,
    unit: "kg",
    change: 2,
    location: "Delhi",
    category: "vegetables",
  },
  {
    id: 2,
    name: "Onions",
    nameHi: "प्याज",
    price: 30,
    unit: "kg",
    change: -3,
    location: "Delhi",
    category: "vegetables",
  },
  {
    id: 3,
    name: "Potatoes",
    nameHi: "आलू",
    price: 20,
    unit: "kg",
    change: 0,
    location: "Delhi",
    category: "vegetables",
  },
  {
    id: 4,
    name: "Green Chilies",
    nameHi: "हरी मिर्च",
    price: 40,
    unit: "kg",
    change: 5,
    location: "Delhi",
    category: "vegetables",
  },
  {
    id: 5,
    name: "Cooking Oil",
    nameHi: "खाना पकाने का तेल",
    price: 120,
    unit: "liter",
    change: -2,
    location: "Delhi",
    category: "oil",
  },
  {
    id: 6,
    name: "Basmati Rice",
    nameHi: "बासमती चावल",
    price: 80,
    unit: "kg",
    change: 1,
    location: "Delhi",
    category: "grains",
  },
  {
    id: 7,
    name: "Wheat Flour",
    nameHi: "गेहूं का आटा",
    price: 35,
    unit: "kg",
    change: 0,
    location: "Delhi",
    category: "grains",
  },
  {
    id: 8,
    name: "Milk",
    nameHi: "दूध",
    price: 55,
    unit: "liter",
    change: 2,
    location: "Delhi",
    category: "dairy",
  },
]

export default function PricesPage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [locationFilter, setLocationFilter] = useState("all")
  const t = translations[language]

  const filteredPrices = mockPrices.filter(
    (item) => locationFilter === "all" || item.location.toLowerCase() === locationFilter,
  )

  const getPriceChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-red-500" />
    if (change < 0) return <TrendingDown className="h-4 w-4 text-green-500" />
    return <Minus className="h-4 w-4 text-gray-500" />
  }

  const getPriceChangeColor = (change: number) => {
    if (change > 0) return "text-red-500"
    if (change < 0) return "text-green-500"
    return "text-gray-500"
  }

  const getUnitText = (unit: string) => {
    switch (unit) {
      case "kg":
        return language === "en" ? t.perKg : t.perKg
      case "liter":
        return language === "en" ? t.perLiter : t.perLiter
      case "piece":
        return language === "en" ? t.perPiece : t.perPiece
      default:
        return `per ${unit}`
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation language={language} />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder={t.filterLocation} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.allLocations}</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <RefreshCw className="h-4 w-4" />
            {t.refresh}
          </Button>
        </div>

        {/* Last Updated */}
        <div className="mb-6">
          <Badge variant="outline" className="text-sm">
            {t.lastUpdated}: {new Date().toLocaleString(language === "hi" ? "hi-IN" : "en-IN")}
          </Badge>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPrices.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{language === "en" ? item.name : item.nameHi}</CardTitle>
                  {getPriceChangeIcon(item.change)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                  <span className="text-sm text-gray-600">{getUnitText(item.unit)}</span>
                </div>

                {item.change !== 0 && (
                  <div className={`flex items-center text-sm ${getPriceChangeColor(item.change)}`}>
                    <span>
                      {item.change > 0 ? "+" : ""}₹{item.change} from yesterday
                    </span>
                  </div>
                )}

                <div className="mt-3 pt-3 border-t">
                  <span className="text-xs text-gray-500">{item.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Change Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-red-500">
                {filteredPrices.filter((item) => item.change > 0).length}
              </div>
              <p className="text-sm text-gray-600">Prices {t.up}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-2">
                <TrendingDown className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-500">
                {filteredPrices.filter((item) => item.change < 0).length}
              </div>
              <p className="text-sm text-gray-600">Prices {t.down}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-2">
                <Minus className="h-8 w-8 text-gray-500" />
              </div>
              <div className="text-2xl font-bold text-gray-500">
                {filteredPrices.filter((item) => item.change === 0).length}
              </div>
              <p className="text-sm text-gray-600">Prices {t.stable}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
