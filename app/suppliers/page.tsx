"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, Phone } from "lucide-react"

const translations = {
  en: {
    title: "Verified Suppliers",
    searchPlaceholder: "Search suppliers...",
    filterLocation: "Filter by location",
    filterCategory: "Filter by category",
    allLocations: "All Locations",
    allCategories: "All Categories",
    vegetables: "Vegetables",
    spices: "Spices",
    grains: "Grains",
    dairy: "Dairy",
    meat: "Meat & Poultry",
    verified: "Verified",
    rating: "Rating",
    contact: "Contact",
    viewProfile: "View Profile",
  },
  hi: {
    title: "सत्यापित आपूर्तिकर्ता",
    searchPlaceholder: "आपूर्तिकर्ता खोजें...",
    filterLocation: "स्थान के अनुसार फ़िल्टर करें",
    filterCategory: "श्रेणी के अनुसार फ़िल्टर करें",
    allLocations: "सभी स्थान",
    allCategories: "सभी श्रेणियां",
    vegetables: "सब्जियां",
    spices: "मसाले",
    grains: "अनाज",
    dairy: "डेयरी",
    meat: "मांस और मुर्गी",
    verified: "सत्यापित",
    rating: "रेटिंग",
    contact: "संपर्क",
    viewProfile: "प्रोफ़ाइल देखें",
  },
}

const mockSuppliers = [
  {
    id: 1,
    name: "Fresh Vegetables Co.",
    nameHi: "फ्रेश वेजिटेबल्स कंपनी",
    location: "Delhi",
    category: "vegetables",
    rating: 4.8,
    reviews: 156,
    phone: "+91 98765 43210",
    verified: true,
    description: "Premium quality vegetables sourced directly from farms",
    descriptionHi: "खेतों से सीधे प्राप्त प्रीमियम गुणवत्ता की सब्जियां",
  },
  {
    id: 2,
    name: "Spice Masters",
    nameHi: "स्पाइस मास्टर्स",
    location: "Mumbai",
    category: "spices",
    rating: 4.9,
    reviews: 203,
    phone: "+91 87654 32109",
    verified: true,
    description: "Authentic Indian spices with guaranteed purity",
    descriptionHi: "गारंटीशुदा शुद्धता के साथ प्रामाणिक भारतीय मसाले",
  },
  {
    id: 3,
    name: "Grain Depot",
    nameHi: "ग्रेन डिपो",
    location: "Bangalore",
    category: "grains",
    rating: 4.7,
    reviews: 89,
    phone: "+91 76543 21098",
    verified: true,
    description: "High-quality grains and pulses at wholesale prices",
    descriptionHi: "थोक मूल्य पर उच्च गुणवत्ता के अनाज और दालें",
  },
  {
    id: 4,
    name: "Dairy Fresh",
    nameHi: "डेयरी फ्रेश",
    location: "Delhi",
    category: "dairy",
    rating: 4.6,
    reviews: 124,
    phone: "+91 65432 10987",
    verified: true,
    description: "Fresh dairy products delivered daily",
    descriptionHi: "दैनिक रूप से वितरित ताजे डेयरी उत्पाद",
  },
]

export default function SuppliersPage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const t = translations[language]

  const filteredSuppliers = mockSuppliers.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) || supplier.nameHi.includes(searchTerm)
    const matchesLocation = locationFilter === "all" || supplier.location.toLowerCase() === locationFilter
    const matchesCategory = categoryFilter === "all" || supplier.category === categoryFilter

    return matchesSearch && matchesLocation && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation language={language} />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger>
              <SelectValue placeholder={t.filterLocation} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.allLocations}</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
            </SelectContent>
          </Select>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder={t.filterCategory} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.allCategories}</SelectItem>
              <SelectItem value="vegetables">{t.vegetables}</SelectItem>
              <SelectItem value="spices">{t.spices}</SelectItem>
              <SelectItem value="grains">{t.grains}</SelectItem>
              <SelectItem value="dairy">{t.dairy}</SelectItem>
              <SelectItem value="meat">{t.meat}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{language === "en" ? supplier.name : supplier.nameHi}</CardTitle>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {supplier.location}
                    </div>
                  </div>
                  {supplier.verified && <Badge className="bg-green-100 text-green-800">{t.verified}</Badge>}
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4">
                  {language === "en" ? supplier.description : supplier.descriptionHi}
                </CardDescription>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{supplier.rating}</span>
                    <span className="ml-1 text-sm text-gray-600">({supplier.reviews})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-1" />
                    {supplier.phone}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button asChild className="flex-1 bg-transparent" variant="outline">
                    <Link href={`/suppliers/${supplier.id}`}>{t.viewProfile}</Link>
                  </Button>
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">{t.contact}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
