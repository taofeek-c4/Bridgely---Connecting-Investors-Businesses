import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, TrendingUp, Shield, Handshake, Building, Briefcase, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const userTypes = [
    {
      title: "Investors",
      description: "Connect with promising business opportunities and entrepreneurs",
      icon: TrendingUp,
      features: ["View Business Proposals", "Post Investment Offers", "Portfolio Management"],
      color: "bg-blue-500"
    },
    {
      title: "Business People",
      description: "Showcase your ideas and connect with potential investors",
      icon: Briefcase,
      features: ["Post Business Ideas", "Connect with Investors", "Business Growth Support"],
      color: "bg-green-500"
    },
    {
      title: "Bankers",
      description: "Provide financing solutions and loan opportunities",
      icon: CreditCard,
      features: ["Post Loan Details", "Financial Services", "Risk Assessment"],
      color: "bg-purple-500"
    },
    {
      title: "Business Advisors",
      description: "Share expertise and guide entrepreneurs to success",
      icon: Users,
      features: ["Provide Consultancy", "Answer Queries", "Strategic Guidance"],
      color: "bg-orange-500"
    }
  ];

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
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Bridging Investment & Innovation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Bridge Between Investor And Business People
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect investors with entrepreneurs, facilitate business growth, and build a thriving ecosystem 
            where innovative ideas meet capital investment in India's growing market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connecting Four Pillars of Business Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform brings together investors, entrepreneurs, bankers, and advisors to create 
              a comprehensive business ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple steps to connect and grow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register & Verify</h3>
              <p className="text-muted-foreground">Create your profile as an investor, entrepreneur, banker, or advisor</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Explore</h3>
              <p className="text-muted-foreground">Browse opportunities, post proposals, and find the right matches</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Together</h3>
              <p className="text-muted-foreground">Build partnerships, secure funding, and scale your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-foreground/80">Business Ideas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50Cr+</div>
              <div className="text-primary-foreground/80">Funding Facilitated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-foreground/80">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of investors and entrepreneurs who are already building the future together.
          </p>
          <Link to="/register">
            <Button size="lg" className="group">
              Join UNIFIED MENTOR Today
              <Handshake className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Building className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">UNIFIED MENTOR</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Bridging the gap between investors and entrepreneurs for a prosperous business ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Investors</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Browse Opportunities</li>
                <li>Due Diligence Tools</li>
                <li>Portfolio Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Entrepreneurs</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pitch Your Idea</li>
                <li>Find Funding</li>
                <li>Business Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 UNIFIED MENTOR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
