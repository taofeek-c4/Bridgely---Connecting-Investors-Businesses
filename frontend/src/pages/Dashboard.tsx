import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Plus, 
  Eye, 
  Star,
  Calendar,
  MapPin,
  Briefcase,
  CreditCard,
  DollarSign,
  Target,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState("investor");

  useEffect(() => {
    const userTypeFromParams = searchParams.get("userType");
    if (userTypeFromParams && ["investor", "business", "banker", "advisor"].includes(userTypeFromParams)) {
      setUserType(userTypeFromParams);
    }
  }, [searchParams]);

  const stats = {
    investor: [
      { label: "Active Investments", value: "12", icon: TrendingUp, change: "+2 this month" },
      { label: "Proposals Reviewed", value: "45", icon: Eye, change: "+8 this week" },
      { label: "Portfolio Value", value: "₹2.5Cr", icon: DollarSign, change: "+12% growth" },
      { label: "Success Rate", value: "78%", icon: Target, change: "+5% improvement" }
    ],
    business: [
      { label: "Ideas Posted", value: "3", icon: Briefcase, change: "+1 this month" },
      { label: "Investor Interest", value: "28", icon: Users, change: "+12 new interests" },
      { label: "Funding Received", value: "₹50L", icon: DollarSign, change: "Latest round" },
      { label: "Milestones", value: "8/10", icon: CheckCircle, change: "80% complete" }
    ],
    banker: [
      { label: "Loan Applications", value: "156", icon: CreditCard, change: "+23 this month" },
      { label: "Approved Loans", value: "89", icon: CheckCircle, change: "57% approval rate" },
      { label: "Total Disbursed", value: "₹15Cr", icon: DollarSign, change: "+18% this quarter" },
      { label: "Active Clients", value: "234", icon: Users, change: "+45 new clients" }
    ],
    advisor: [
      { label: "Active Consultations", value: "18", icon: MessageSquare, change: "+6 this week" },
      { label: "Success Stories", value: "67", icon: Star, change: "+3 completed" },
      { label: "Client Rating", value: "4.8/5", icon: Target, change: "98% satisfaction" },
      { label: "Revenue Generated", value: "₹12L", icon: DollarSign, change: "+25% growth" }
    ]
  };

  const recentActivities = [
    {
      id: 1,
      type: "proposal",
      title: "New proposal from TechStart Solutions",
      description: "AI-powered logistics platform seeking ₹2Cr funding",
      time: "2 hours ago",
      avatar: "/api/placeholder/32/32"
    },
    {
      id: 2,
      type: "meeting",
      title: "Investment meeting scheduled",
      description: "Due diligence meeting with GreenTech Innovations",
      time: "4 hours ago",
      avatar: "/api/placeholder/32/32"
    },
    {
      id: 3,
      type: "update",
      title: "Portfolio company milestone",
      description: "FoodieApp reached 1M+ downloads",
      time: "1 day ago",
      avatar: "/api/placeholder/32/32"
    }
  ];

  const opportunities = [
    {
      id: 1,
      title: "EcoTech Renewable Solutions",
      category: "Clean Energy",
      funding: "₹5Cr",
      stage: "Series A",
      location: "Bangalore",
      description: "Revolutionary solar panel technology with 40% higher efficiency",
      tags: ["CleanTech", "Hardware", "B2B"],
      rating: 4.5
    },
    {
      id: 2,
      title: "HealthAI Diagnostics",
      category: "HealthTech",
      funding: "₹3Cr",
      stage: "Seed",
      location: "Mumbai",
      description: "AI-powered medical diagnostic platform for rural healthcare",
      tags: ["HealthTech", "AI", "Social Impact"],
      rating: 4.7
    },
    {
      id: 3,
      title: "EduSmart Learning",
      category: "EdTech",
      funding: "₹1.5Cr",
      stage: "Pre-Series A",
      location: "Delhi",
      description: "Personalized learning platform for K-12 education",
      tags: ["EdTech", "AI", "B2C"],
      rating: 4.3
    }
  ];

  const currentStats = stats[userType as keyof typeof stats];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">UNIFIED MENTOR</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </Button>
            <Avatar>
              <AvatarImage src="/api/placeholder/32/32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {userType.charAt(0).toUpperCase() + userType.slice(1)}!
            </h1>
            <p className="text-muted-foreground">
              {userType === "investor" && "Discover promising investment opportunities"}
              {userType === "business" && "Manage your business proposals and investor connections"}
              {userType === "banker" && "Review loan applications and manage client portfolios"}
              {userType === "advisor" && "Support entrepreneurs and build your consultancy network"}
            </p>
          </div>
          <Button size="lg">
            <Plus className="w-4 h-4 mr-2" />
            {userType === "investor" && "New Investment"}
            {userType === "business" && "Post Idea"}
            {userType === "banker" && "Add Loan Product"}
            {userType === "advisor" && "Offer Service"}
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Panel */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="opportunities" className="space-y-6">
              <TabsList>
                <TabsTrigger value="opportunities">
                  {userType === "investor" ? "Investment Opportunities" : 
                   userType === "business" ? "Investor Matches" :
                   userType === "banker" ? "Loan Applications" :
                   "Client Queries"}
                </TabsTrigger>
                <TabsTrigger value="portfolio">
                  {userType === "investor" ? "My Portfolio" :
                   userType === "business" ? "My Proposals" :
                   userType === "banker" ? "Active Loans" :
                   "Active Consultations"}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="opportunities" className="space-y-6">
                {opportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                            <Badge variant="secondary">{opportunity.category}</Badge>
                          </div>
                          <CardDescription className="mb-3">
                            {opportunity.description}
                          </CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {opportunity.funding}
                            </div>
                            <div className="flex items-center">
                              <Target className="w-4 h-4 mr-1" />
                              {opportunity.stage}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {opportunity.location}
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                              {opportunity.rating}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {opportunity.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          {userType === "investor" ? "Express Interest" :
                           userType === "business" ? "Connect" :
                           userType === "banker" ? "Review Application" :
                           "Offer Consultation"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Overview</CardTitle>
                    <CardDescription>
                      Your active investments and their performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Portfolio details will be displayed here...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find Connections
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;