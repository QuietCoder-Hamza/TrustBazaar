"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Star, Phone, Mail, Clock, Truck, Shield } from "lucide-react"

const translations = {
  en: {
    verified: "Verified Supplier",
    rating: "Rating",
    reviews: "Reviews",
    contact: "Contact Supplier",
    about: "About",
    products: "Products",
    reviewsTab: "Reviews",
    location: "Location",
    phone: "Phone",
    email: "Email",
    businessHours: "Business Hours",
    deliveryInfo: "Delivery Information",
    certifications: "Certifications",
    writeReview: "Write a Review",
    loadMore: "Load More Products",
  },
  hi: {
    verified: "सत्यापित आपूर्तिकर्ता",
    rating: "रेटिंग",
    reviews: "समीक्षाएं",
    contact: "आपूर्तिकर्ता से संपर्क करें",
    about: "के बारे में",
    products: "उत्पाद",
    reviewsTab: "समीक्षाएं",
    location: "स्थान",
    phone: "फोन",
    email: "ईमेल",
    businessHours: "व्यापारिक घंटे",
    deliveryInfo: "डिलीवरी की जानकारी",
    certifications: "प्रमाणपत्र",
    writeReview: "समीक्षा लिखें",
    loadMore: "और उत्पाद लोड करें",
  },
}

const mockSupplier = {
  id: 1,
  name: "Fresh Vegetables Co.",
  nameHi: "फ्रेश वेजिटेबल्स कंपनी",
  location: "Azadpur Mandi, Delhi",
  rating: 4.8,
  reviewCount: 156,
  phone: "+91 98765 43210",
  email: "contact@freshveggies.com",
  verified: true,
  description:
    "We are a leading supplier of fresh vegetables in Delhi NCR, sourcing directly from farms across North India. Our commitment to quality and freshness has made us a trusted partner for hundreds of street food vendors and restaurants.",
  descriptionHi:
    "हम दिल्ली एनसीआर में ताजी सब्जियों के एक प्रमुख आपूर्तिकर्ता हैं, जो उत्तर भारत के खेतों से सीधे सोर्सिंग करते हैं। गुणवत्ता और ताजगी के प्रति हमारी प्रतिबद्धता ने हमें सैकड़ों स्ट्रीट फूड विक्रेताओं और रेस्टोरेंट के लिए एक विश्वसनीय साझेदार बनाया है।",
  businessHours: "Monday - Saturday: 5:00 AM - 8:00 PM",
  deliveryInfo: "Free delivery for orders above ₹500. Same day delivery available.",
  certifications: ["FSSAI Licensed", "Organic Certified", "ISO 9001:2015"],
}

const mockProducts = [
  { id: 1, name: "Fresh Tomatoes", nameHi: "ताजे टमाटर", price: "₹25/kg", image: "/ripe-tomatoes.png" },
  { id: 2, name: "Green Chilies", nameHi: "हरी मिर्च", price: "₹40/kg", image: "/vibrant-green-chilies.png" },
  { id: 3, name: "Fresh Onions", nameHi: "ताजे प्याज", price: "₹30/kg", image: "/pile-of-onions.png" },
  { id: 4, name: "Potatoes", nameHi: "आलू", price: "₹20/kg", image: "/pile-of-potatoes.png" },
]

const mockReviews = [
  {
    id: 1,
    author: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent quality vegetables. Always fresh and delivered on time.",
    commentHi: "उत्कृष्ट गुणवत्ता की सब्जियां। हमेशा ताजी और समय पर डिलीवर की जाती हैं।",
    date: "2 days ago",
  },
  {
    id: 2,
    author: "Priya Sharma",
    rating: 4,
    comment: "Good supplier, competitive prices. Recommended!",
    commentHi: "अच्छा आपूर्तिकर्ता, प्रतिस्पर्धी कीमतें। सिफारिश की!",
    date: "1 week ago",
  },
]

export default function SupplierProfilePage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation language={language} />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex justify-end mb-8">
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        {/* Supplier Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/generic-supplier-logo.png" />
                <AvatarFallback>FV</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">
                      {language === "en" ? mockSupplier.name : mockSupplier.nameHi}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {mockSupplier.location}
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    {mockSupplier.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        <Shield className="h-3 w-3 mr-1" />
                        {t.verified}
                      </Badge>
                    )}
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{mockSupplier.rating}</span>
                      <span className="ml-1 text-gray-600">
                        ({mockSupplier.reviewCount} {t.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-600" />
                    <span>{mockSupplier.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-600" />
                    <span>{mockSupplier.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-600" />
                    <span className="text-sm">{mockSupplier.businessHours}</span>
                  </div>
                </div>

                <Button className="bg-orange-600 hover:bg-orange-700">{t.contact}</Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">{t.about}</TabsTrigger>
            <TabsTrigger value="products">{t.products}</TabsTrigger>
            <TabsTrigger value="reviews">{t.reviewsTab}</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.about}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {language === "en" ? mockSupplier.description : mockSupplier.descriptionHi}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="h-5 w-5 mr-2" />
                      {t.deliveryInfo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{mockSupplier.deliveryInfo}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t.certifications}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {mockSupplier.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="block w-fit">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>{t.products}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mockProducts.map((product) => (
                    <Card key={product.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-24 object-cover rounded-md mb-3"
                        />
                        <h3 className="font-semibold mb-1">{language === "en" ? product.name : product.nameHi}</h3>
                        <p className="text-orange-600 font-bold">{product.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button variant="outline">{t.loadMore}</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{t.reviewsTab}</CardTitle>
                  <Button variant="outline">{t.writeReview}</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Avatar className="w-8 h-8 mr-3">
                            <AvatarFallback>{review.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{review.author}</p>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{language === "en" ? review.comment : review.commentHi}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
