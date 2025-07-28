import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    interestedTrek: "",
    message: "",
    preferredDate: "",
    groupSize: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // For now, just show success message
    toast({
      title: "Registration Successful!",
      description: "Thank you for your interest. We'll contact you soon.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      interestedTrek: "",
      message: "",
      preferredDate: "",
      groupSize: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">Register Your Interest</CardTitle>
              <CardDescription className="text-lg">
                Join us for an unforgettable trekking experience in the majestic mountains of Nepal
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      placeholder="Enter your country"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestedTrek">Interested Trek/Expedition</Label>
                  <Select onValueChange={(value) => handleInputChange("interestedTrek", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a trek or expedition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="everest-base-camp">Everest Base Camp Trek</SelectItem>
                      <SelectItem value="annapurna-circuit">Annapurna Circuit Trek</SelectItem>
                      <SelectItem value="langtang-valley">Langtang Valley Trek</SelectItem>
                      <SelectItem value="manaslu-circuit">Manaslu Circuit Trek</SelectItem>
                      <SelectItem value="upper-mustang">Upper Mustang Trek</SelectItem>
                      <SelectItem value="gokyo-lakes">Gokyo Lakes Trek</SelectItem>
                      <SelectItem value="custom">Custom Trek</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="groupSize">Group Size</Label>
                    <Select onValueChange={(value) => handleInputChange("groupSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Solo (1 person)</SelectItem>
                        <SelectItem value="2-4">Small Group (2-4 people)</SelectItem>
                        <SelectItem value="5-8">Medium Group (5-8 people)</SelectItem>
                        <SelectItem value="9+">Large Group (9+ people)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your trekking experience, special requirements, or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Register Interest
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Registration;