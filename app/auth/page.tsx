"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const translations = {
  en: {
    login: "Login",
    register: "Register",
    loginTitle: "Welcome Back",
    loginDesc: "Sign in to your TrustBazaar account",
    registerTitle: "Join TrustBazaar",
    registerDesc: "Create your vendor account to get started",
    phone: "Phone Number",
    password: "Password",
    name: "Full Name",
    businessName: "Business Name",
    location: "Location",
    businessType: "Business Type",
    description: "Business Description",
    signIn: "Sign In",
    createAccount: "Create Account",
    selectLocation: "Select your city",
    selectBusinessType: "Select business type",
    streetFood: "Street Food Vendor",
    restaurant: "Restaurant",
    catering: "Catering Service",
    other: "Other",
  },
  hi: {
    login: "लॉगिन",
    register: "पंजीकरण",
    loginTitle: "वापस स्वागत है",
    loginDesc: "अपने ट्रस्टबाज़ार खाते में साइन इन करें",
    registerTitle: "ट्रस्टबाज़ार में शामिल हों",
    registerDesc: "शुरू करने के लिए अपना विक्रेता खाता बनाएं",
    phone: "फोन नंबर",
    password: "पासवर्ड",
    name: "पूरा नाम",
    businessName: "व्यापार का नाम",
    location: "स्थान",
    businessType: "व्यापार का प्रकार",
    description: "व्यापार का विवरण",
    signIn: "साइन इन करें",
    createAccount: "खाता बनाएं",
    selectLocation: "अपना शहर चुनें",
    selectBusinessType: "व्यापार का प्रकार चुनें",
    streetFood: "स्ट्रीट फूड विक्रेता",
    restaurant: "रेस्टोरेंट",
    catering: "कैटरिंग सेवा",
    other: "अन्य",
  },
}

export default function AuthPage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation language={language} />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex justify-end mb-8">
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">{t.login}</TabsTrigger>
              <TabsTrigger value="register">{t.register}</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>{t.loginTitle}</CardTitle>
                  <CardDescription>{t.loginDesc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">{t.password}</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">{t.signIn}</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>{t.registerTitle}</CardTitle>
                  <CardDescription>{t.registerDesc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input id="name" placeholder="राम कुमार / Ram Kumar" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone-reg">{t.phone}</Label>
                    <Input id="phone-reg" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-name">{t.businessName}</Label>
                    <Input id="business-name" placeholder="राम का ढाबा / Ram's Dhaba" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">{t.location}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.selectLocation} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-type">{t.businessType}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.selectBusinessType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="street-food">{t.streetFood}</SelectItem>
                        <SelectItem value="restaurant">{t.restaurant}</SelectItem>
                        <SelectItem value="catering">{t.catering}</SelectItem>
                        <SelectItem value="other">{t.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">{t.description}</Label>
                    <Textarea id="description" placeholder="Tell us about your business..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-reg">{t.password}</Label>
                    <Input id="password-reg" type="password" />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">{t.createAccount}</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
