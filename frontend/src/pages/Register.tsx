import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building, ArrowLeft, Users, TrendingUp, Briefcase, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    description: "",
    location: "",
    experience: "",
    specialization: ""
  });

  const userTypes = [
    {
      value: "investor",
      label: "Investor",
      icon: TrendingUp,
      description: "Looking to invest in promising businesses",
      color: "bg-blue-500"
    },
    {
      value: "business",
      label: "Business Person",
      icon: Briefcase,
      description: "Seeking investment for your business idea",
      color: "bg-green-500"
    },
    {
      value: "banker",
      label: "Banker",
      icon: CreditCard,
      description: "Providing loan and financial services",
      color: "bg-purple-500"
    },
    {
      value: "advisor",
      label: "Business Advisor",
      icon: Users,
      description: "Offering business consultation and guidance",
      color: "bg-orange-500"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", { userType, ...formData });
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">UNIFIED MENTOR</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Join Our Platform</h1>
          <p className="text-muted-foreground">Choose your role and start your journey</p>
        </div>

        {!userType ? (
          /* User Type Selection */
          <div className="grid md:grid-cols-2 gap-6">
            {userTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Card 
                  key={type.value}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 group"
                  onClick={() => setUserType(type.value)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{type.label}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Select {type.label}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Registration Form */
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Create Your Account</CardTitle>
                  <CardDescription>
                    Registering as: 
                    <Badge variant="secondary" className="ml-2">
                      {userTypes.find(t => t.value === userType)?.label}
                    </Badge>
                  </CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setUserType("")}
                >
                  Change Role
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        placeholder="Create a strong password"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="City, State, Country"
                      required
                    />
                  </div>
                </div>

                {/* Role-specific fields */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Professional Information</h3>
                  
                  {userType === "investor" && (
                    <>
                      <div>
                        <Label htmlFor="company">Investment Firm/Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your investment firm or company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialization">Investment Focus</Label>
                        <Select onValueChange={(value) => handleInputChange("specialization", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your investment focus" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="fintech">FinTech</SelectItem>
                            <SelectItem value="retail">Retail & E-commerce</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="agriculture">Agriculture</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  {userType === "business" && (
                    <>
                      <div>
                        <Label htmlFor="company">Company/Startup Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company or startup name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialization">Industry</Label>
                        <Select onValueChange={(value) => handleInputChange("specialization", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="fintech">FinTech</SelectItem>
                            <SelectItem value="retail">Retail & E-commerce</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="agriculture">Agriculture</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  {(userType === "banker" || userType === "advisor") && (
                    <>
                      <div>
                        <Label htmlFor="company">Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your bank/consulting firm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="description">
                      {userType === "investor" ? "Investment Philosophy" : 
                       userType === "business" ? "Business Description" :
                       "Professional Summary"}
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder={
                        userType === "investor" ? "Describe your investment approach and criteria..." :
                        userType === "business" ? "Describe your business idea or company..." :
                        "Describe your expertise and services..."
                      }
                      rows={4}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Button type="submit" className="w-full" size="lg">
                    Create Account
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Register;