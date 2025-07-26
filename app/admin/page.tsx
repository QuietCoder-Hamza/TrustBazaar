"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, Users, Store, MessageSquare, TrendingUp, Search } from "lucide-react"

const translations = {
  en: {
    title: "Admin Dashboard",
    subtitle: "Manage suppliers, reviews, and platform operations",
    pendingApprovals: "Pending Approvals",
    reviewModeration: "Review Moderation",
    analytics: "Analytics",
    searchPlaceholder: "Search...",
    filterStatus: "Filter by status",
    allStatuses: "All Statuses",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    approve: "Approve",
    reject: "Reject",
    viewDetails: "View Details",
    totalSuppliers: "Total Suppliers",
    totalVendors: "Total Vendors",
    totalReviews: "Total Reviews",
    monthlyGrowth: "Monthly Growth",
    supplierName: "Supplier Name",
    businessType: "Business Type",
    location: "Location",
    submittedOn: "Submitted On",
    status: "Status",
    actions: "Actions",
  },
  hi: {
    title: "एडमिन डैशबोर्ड",
    subtitle: "आपूर्तिकर्ताओं, समीक्षाओं और प्लेटफॉर्म संचालन का प्रबंधन करें",
    pendingApprovals: "लंबित अनुमोदन",
    reviewModeration: "समीक्षा मॉडरेशन",
    analytics: "एनालिटिक्स",
    searchPlaceholder: "खोजें...",
    filterStatus: "स्थिति के अनुसार फ़िल्टर करें",
    allStatuses: "सभी स्थितियां",
    pending: "लंबित",
    approved: "अनुमोदित",
    rejected: "अस्वीकृत",
    approve: "अनुमोदित करें",
    reject: "अस्वीकार करें",
    viewDetails: "विवरण देखें",
    totalSuppliers: "कुल आपूर्तिकर्ता",
    totalVendors: "कुल विक्रेता",
    totalReviews: "कुल समीक्षाएं",
    monthlyGrowth: "मासिक वृद्धि",
    supplierName: "आपूर्तिकर्ता का नाम",
    businessType: "व्यापार का प्रकार",
    location: "स्थान",
    submittedOn: "प्रस्तुत किया गया",
    status: "स्थिति",
    actions: "कार्य",
  },
}

const mockPendingSuppliers = [
  {
    id: 1,
    name: "Green Valley Farms",
    nameHi: "ग्रीन वैली फार्म्स",
    businessType: "Vegetables",
    location: "Delhi",
    submittedOn: "2024-01-15",
    status: "pending",
    phone: "+91 98765 43210",
    email: "contact@greenvalley.com",
  },
  {
    id: 2,
    name: "Spice Kingdom",
    nameHi: "स्पाइस किंगडम",
    businessType: "Spices",
    location: "Mumbai",
    submittedOn: "2024-01-14",
    status: "pending",
    phone: "+91 87654 32109",
    email: "info@spicekingdom.com",
  },
  {
    id: 3,
    name: "Fresh Dairy Co.",
    nameHi: "फ्रेश डेयरी कंपनी",
    businessType: "Dairy",
    location: "Bangalore",
    submittedOn: "2024-01-13",
    status: "pending",
    phone: "+91 76543 21098",
    email: "sales@freshdairy.com",
  },
]

const mockPendingReviews = [
  {
    id: 1,
    reviewer: "Rajesh Kumar",
    supplier: "Fresh Vegetables Co.",
    rating: 4,
    comment: "Good quality vegetables, but delivery was delayed.",
    submittedOn: "2024-01-15",
    status: "pending",
  },
  {
    id: 2,
    reviewer: "Priya Sharma",
    supplier: "Spice Masters",
    rating: 5,
    comment: "Excellent spices! Very satisfied with the quality.",
    submittedOn: "2024-01-14",
    status: "pending",
  },
]

export default function AdminPage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const t = translations[language]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">{t.pending}</Badge>
      case "approved":
        return <Badge className="bg-green-100 text-green-800">{t.approved}</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">{t.rejected}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
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

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{t.totalSuppliers}</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <Store className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{t.totalVendors}</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
                <Users className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{t.totalReviews}</p>
                  <p className="text-2xl font-bold">3,892</p>
                </div>
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{t.monthlyGrowth}</p>
                  <p className="text-2xl font-bold">+12%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="approvals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="approvals">{t.pendingApprovals}</TabsTrigger>
            <TabsTrigger value="reviews">{t.reviewModeration}</TabsTrigger>
            <TabsTrigger value="analytics">{t.analytics}</TabsTrigger>
          </TabsList>

          <TabsContent value="approvals">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <CardTitle>{t.pendingApprovals}</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder={t.searchPlaceholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full sm:w-64"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder={t.filterStatus} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t.allStatuses}</SelectItem>
                        <SelectItem value="pending">{t.pending}</SelectItem>
                        <SelectItem value="approved">{t.approved}</SelectItem>
                        <SelectItem value="rejected">{t.rejected}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPendingSuppliers.map((supplier) => (
                    <Card key={supplier.id} className="border-l-4 border-l-orange-500">
                      <CardContent className="pt-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-start space-x-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage
                                src={`/abstract-geometric-shapes.png?height=48&width=48&query=${supplier.name}`}
                              />
                              <AvatarFallback>{supplier.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">
                                {language === "en" ? supplier.name : supplier.nameHi}
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-sm text-gray-600">
                                <div>
                                  <span className="font-medium">{t.businessType}:</span> {supplier.businessType}
                                </div>
                                <div>
                                  <span className="font-medium">{t.location}:</span> {supplier.location}
                                </div>
                                <div>
                                  <span className="font-medium">{t.submittedOn}:</span> {supplier.submittedOn}
                                </div>
                              </div>
                              <div className="mt-2">{getStatusBadge(supplier.status)}</div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button variant="outline" size="sm">
                              {t.viewDetails}
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              {t.approve}
                            </Button>
                            <Button variant="destructive" size="sm">
                              <XCircle className="h-4 w-4 mr-1" />
                              {t.reject}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>{t.reviewModeration}</CardTitle>
                <CardDescription>Review and moderate user-submitted reviews before they go live</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPendingReviews.map((review) => (
                    <Card key={review.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold">{review.reviewer}</h3>
                            <p className="text-sm text-gray-600">Review for: {review.supplier}</p>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          {getStatusBadge(review.status)}
                        </div>

                        <p className="text-gray-700 mb-4">{review.comment}</p>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Submitted on {review.submittedOn}</span>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              {t.approve}
                            </Button>
                            <Button variant="destructive" size="sm">
                              <XCircle className="h-4 w-4 mr-1" />
                              {t.reject}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    [Chart: User Registration Over Time]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Supplier Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    [Chart: Supplier Distribution by Category]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Review Ratings Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    [Chart: Rating Distribution]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    [Map: Vendor/Supplier Locations]
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
