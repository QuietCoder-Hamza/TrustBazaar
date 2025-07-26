"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ThumbsUp, Clock, Search, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const translations = {
  en: {
    title: "Community Forum",
    subtitle: "Connect with fellow vendors and share experiences",
    searchPlaceholder: "Search discussions...",
    newPost: "New Post",
    replies: "replies",
    likes: "likes",
    ago: "ago",
    createPost: "Create New Post",
    postTitle: "Post Title",
    postContent: "What would you like to discuss?",
    publish: "Publish Post",
    cancel: "Cancel",
    popular: "Popular",
    recent: "Recent",
    answered: "Answered",
  },
  hi: {
    title: "समुदायिक मंच",
    subtitle: "साथी विक्रेताओं से जुड़ें और अनुभव साझा करें",
    searchPlaceholder: "चर्चा खोजें...",
    newPost: "नई पोस्ट",
    replies: "उत्तर",
    likes: "पसंद",
    ago: "पहले",
    createPost: "नई पोस्ट बनाएं",
    postTitle: "पोस्ट शीर्षक",
    postContent: "आप क्या चर्चा करना चाहते हैं?",
    publish: "पोस्ट प्रकाशित करें",
    cancel: "रद्द करें",
    popular: "लोकप्रिय",
    recent: "हाल की",
    answered: "उत्तर दिया गया",
  },
}

const mockPosts = [
  {
    id: 1,
    title: "Best supplier for spices in Delhi?",
    titleHi: "दिल्ली में मसालों के लिए सबसे अच्छा आपूर्तिकर्ता?",
    content:
      "I'm looking for a reliable spice supplier in Delhi. Quality is very important for my chaat stall. Any recommendations?",
    contentHi:
      "मैं दिल्ली में एक विश्वसनीय मसाला आपूर्तिकर्ता की तलाश में हूं। मेरे चाट स्टॉल के लिए गुणवत्ता बहुत महत्वपूर्ण है। कोई सिफारिश?",
    author: "Rajesh Kumar",
    avatar: "RK",
    replies: 12,
    likes: 8,
    timeAgo: "2 hours",
    category: "suppliers",
    answered: true,
  },
  {
    id: 2,
    title: "How to negotiate better prices with suppliers?",
    titleHi: "आपूर्तिकर्ताओं के साथ बेहतर कीमतों पर बातचीत कैसे करें?",
    content:
      "I'm a new vendor and struggling with high supplier costs. What are some tips for negotiating better deals?",
    contentHi: "मैं एक नया विक्रेता हूं और उच्च आपूर्तिकर्ता लागत से जूझ रहा हूं। बेहतर सौदों के लिए बातचीत करने के लिए कुछ सुझाव क्या हैं?",
    author: "Priya Sharma",
    avatar: "PS",
    replies: 18,
    likes: 15,
    timeAgo: "5 hours",
    category: "business",
    answered: false,
  },
  {
    id: 3,
    title: "Warning: Avoid XYZ Vegetables - Poor Quality",
    titleHi: "चेतावनी: XYZ वेजिटेबल्स से बचें - खराब गुणवत्ता",
    content: "Had a bad experience with XYZ Vegetables. Delivered rotten tomatoes twice. Be careful!",
    contentHi: "XYZ वेजिटेबल्स के साथ बुरा अनुभव था। दो बार सड़े हुए टमाटर दिए। सावधान रहें!",
    author: "Amit Singh",
    avatar: "AS",
    replies: 6,
    likes: 22,
    timeAgo: "1 day",
    category: "warning",
    answered: false,
  },
  {
    id: 4,
    title: "Bulk buying group for oil - Join us!",
    titleHi: "तेल के लिए बल्क खरीदारी समूह - हमसे जुड़ें!",
    content:
      "Starting a bulk buying group for cooking oil to get better rates. Looking for 10 more vendors in Mumbai area.",
    contentHi:
      "बेहतर दरें पाने के लिए खाना पकाने के तेल के लिए एक बल्क खरीदारी समूह शुरू कर रहे हैं। मुंबई क्षेत्र में 10 और विक्रेताओं की तलाश है।",
    author: "Deepak Patel",
    avatar: "DP",
    replies: 9,
    likes: 11,
    timeAgo: "3 days",
    category: "collaboration",
    answered: false,
  },
]

export default function ForumPage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const t = translations[language]

  const filteredPosts = mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.titleHi.includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.contentHi.includes(searchTerm),
  )

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "suppliers":
        return "bg-blue-100 text-blue-800"
      case "business":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-red-100 text-red-800"
      case "collaboration":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
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

        {/* Search and New Post */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Plus className="h-4 w-4 mr-2" />
                {t.newPost}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>{t.createPost}</DialogTitle>
                <DialogDescription>Share your question or experience with the community</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">{t.postTitle}</Label>
                  <Input id="title" placeholder="Enter your post title..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">{t.postContent}</Label>
                  <Textarea id="content" placeholder="Share your thoughts, questions, or experiences..." rows={4} />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    {t.cancel}
                  </Button>
                  <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => setIsDialogOpen(false)}>
                    {t.publish}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Forum Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={`/abstract-geometric-shapes.png?height=40&width=40&query=${post.author}`} />
                      <AvatarFallback>{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{language === "en" ? post.title : post.titleHi}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>
                          {post.timeAgo} {t.ago}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                    {post.answered && <Badge className="bg-green-100 text-green-800">{t.answered}</Badge>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {language === "en" ? post.content : post.contentHi}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <MessageSquare className="h-4 w-4" />
                      <span>
                        {post.replies} {t.replies}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <ThumbsUp className="h-4 w-4" />
                      <span>
                        {post.likes} {t.likes}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Forum Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600 mb-2">{mockPosts.length}</div>
              <p className="text-sm text-gray-600">Total Discussions</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                {mockPosts.reduce((sum, post) => sum + post.replies, 0)}
              </div>
              <p className="text-sm text-gray-600">Total Replies</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                {mockPosts.filter((post) => post.answered).length}
              </div>
              <p className="text-sm text-gray-600">Solved Questions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
