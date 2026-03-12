import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, User, Award, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "../hooks/use-toast";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  age: z.string().min(1, {
    message: "Please select your age.",
  }),
  education: z.string().min(1, {
    message: "Please select your education level.",
  }),
  experience: z.string().min(1, {
    message: "Please select your work experience.",
  }),
  english: z.string().min(1, {
    message: "Please select your English proficiency.",
  }),
  funds: z.string().min(1, {
    message: "Please select your financial status.",
  }),
  country: z.string().min(1, {
    message: "Please select your desired country.",
  }),
});

// Scoring logic
const calculateScore = (data: any) => {
  let score = 0;
  
  // Age scoring
  if (data.age === "below-18") score += 15;
  else if (data.age === "18-30") score += 25;
  else if (data.age === "31-35") score += 20;
  else if (data.age === "36-40") score += 15;
  else if (data.age === "41-45") score += 10;
  else if (data.age === "46+") score += 5;
  
  // Education scoring
  if (data.education === "no-school") score += 5;
  else if (data.education === "primary") score += 8;
  else if (data.education === "secondary") score += 12;
  else if (data.education === "high-school") score += 15;
  else if (data.education === "diploma") score += 18;
  else if (data.education === "bachelor") score += 20;
  else if (data.education === "masters") score += 25;
  else if (data.education === "phd") score += 30;
  
  // Experience scoring
  if (data.experience === "no-exp") score += 0;
  else if (data.experience === "0-1") score += 5;
  else if (data.experience === "1-2") score += 10;
  else if (data.experience === "2-3") score += 15;
  else if (data.experience === "3+") score += 20;
  
  // English scoring
  if (data.english === "not-given") score += 0;
  else if (data.english === "dont-know") score += 5;
  else if (data.english === "5-6") score += 10;
  else if (data.english === "6-7") score += 15;
  else if (data.english === "7+") score += 20;
  
  // Funds scoring
  if (data.funds === "no-upper") score += 15;
  else if (data.funds === "10+") score += 10;
  else if (data.funds === "5-10") score += 5;
  else if (data.funds === "0-5") score += 2;
  
  return score;
};

// Result determination
const getResult = (score: number) => {
  if (score >= 80) return "High Chance";
  if (score >= 60) return "Medium Chance";
  return "Low Chance";
};

const VisaEligibilityPage = () => {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      education: "",
      experience: "",
      english: "",
      funds: "",
      country: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const calculatedScore = calculateScore(data);
    const resultText = getResult(calculatedScore);
    
    // Send data to team via email
    try {
      const response = await fetch("https://smot-pro-backend-visa.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          score: calculatedScore,
          result: resultText,
          type: "visa-eligibility-check",
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your visa eligibility check has been sent. We'll get back to you soon.",
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send your visa eligibility check. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending visa eligibility check:", error);
      toast({
        title: "Error",
        description: "Failed to send your visa eligibility check. Please check your internet connection.",
        variant: "destructive",
      });
    }
    
    setScore(calculatedScore);
    setResult(resultText);
    setShowResult(true);
    setIsLoading(false);

    // In a real app, you would send this data to a backend for storage
    console.log("Form data:", data);
    console.log("Score:", calculatedScore);
    console.log("Result:", resultText);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-secondary font-body font-semibold uppercase tracking-widest mb-3">
            <Calculator className="h-4 w-4" /> Visa Eligibility Checker
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Check Your Visa Eligibility
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Get instant feedback on your visa eligibility with our advanced scoring system. Answer a few simple questions to see your chances.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!showResult ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" /> Personal Information
                      </CardTitle>
                      <CardDescription>
                        Please provide your basic information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+91-9876543210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" /> Visa Information
                      </CardTitle>
                      <CardDescription>
                        Please provide details about your visa application
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Desired Country</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="canada">Canada</SelectItem>
                                <SelectItem value="australia">Australia</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="usa">United States</SelectItem>
                                <SelectItem value="uae">UAE</SelectItem>
                                <SelectItem value="schengen">Schengen Area</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select age" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="below-18">Below 18</SelectItem>
                                  <SelectItem value="18-30">18-30</SelectItem>
                                  <SelectItem value="31-35">31-35</SelectItem>
                                  <SelectItem value="36-40">36-40</SelectItem>
                                  <SelectItem value="41-45">41-45</SelectItem>
                                  <SelectItem value="46+">46+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="education"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Education</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select education" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="no-school">No Schooling</SelectItem>
                                  <SelectItem value="primary">Primary School</SelectItem>
                                  <SelectItem value="secondary">Secondary School</SelectItem>
                                  <SelectItem value="high-school">High School</SelectItem>
                                  <SelectItem value="diploma">Diploma</SelectItem>
                                  <SelectItem value="bachelor">Bachelor's</SelectItem>
                                  <SelectItem value="masters">Master's</SelectItem>
                                  <SelectItem value="phd">PhD</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Work Experience (years)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select years" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="no-exp">No Work Experience</SelectItem>
                                  <SelectItem value="0-1">0-1 year</SelectItem>
                                  <SelectItem value="1-2">1-2 years</SelectItem>
                                  <SelectItem value="2-3">2-3 years</SelectItem>
                                  <SelectItem value="3+">3+ years</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="english"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>English Proficiency (IELTS)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select score" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="not-given">Not Given</SelectItem>
                                  <SelectItem value="dont-know">I don't know</SelectItem>
                                  <SelectItem value="5-6">5-6 band</SelectItem>
                                  <SelectItem value="6-7">6-7 band</SelectItem>
                                  <SelectItem value="7+">7+ band</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="funds"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Financial Resources (Lakh INR)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select amount" />
                                </SelectTrigger>
                              </FormControl>
                                <SelectContent>
                                  <SelectItem value="no-upper">No Upper Budget</SelectItem>
                                  <SelectItem value="10+">10+ lakh</SelectItem>
                                  <SelectItem value="5-10">5-10 lakh</SelectItem>
                                  <SelectItem value="0-5">Less than 5 lakh</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Checking Eligibility...
                          </div>
                        ) : (
                          "Check Eligibility"
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </Form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-6 w-6" /> Your Eligibility Result
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Based on your responses, here's your visa eligibility score
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl font-display font-bold mb-2">{score}</div>
                      <div className="text-2xl font-body font-semibold mb-4">{result}</div>
                      <div className="w-full bg-primary-foreground/20 rounded-full h-3 mb-2">
                        <div
                          className="bg-secondary text-secondary-foreground h-3 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((score / 100) * 100, 100)}%` }}
                        />
                      </div>
                      <div className="text-sm text-primary-foreground/60">
                        Eligibility Score (out of 100)
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-lg">What This Means:</h3>
                      {result === "High Chance" && (
                        <p className="text-primary-foreground/80 font-body leading-relaxed">
                          Great! You have a high chance of visa approval. Your profile matches well with the requirements. We recommend proceeding with your application.
                        </p>
                      )}
                      {result === "Medium Chance" && (
                        <p className="text-primary-foreground/80 font-body leading-relaxed">
                          You have a moderate chance of visa approval. Your profile is strong but there's room for improvement. We suggest consulting with our experts.
                        </p>
                      )}
                      {result === "Low Chance" && (
                        <p className="text-primary-foreground/80 font-body leading-relaxed">
                          Your visa eligibility is lower. We recommend improving your profile before applying. Our consultants can help you understand the requirements better.
                        </p>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button
                      onClick={() => setShowResult(false)}
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Reset Form
                    </Button>
                    <Button
                      onClick={() => window.location.href = "/contact"}
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      Consult with Experts
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>
                  Our eligibility checker uses a scoring system to evaluate your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-display font-bold">Scoring Factors</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Age:</span>
                      <span className="font-medium">5-25 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Education:</span>
                      <span className="font-medium">5-30 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Experience:</span>
                      <span className="font-medium">0-20 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>English:</span>
                      <span className="font-medium">0-20 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Financial:</span>
                      <span className="font-medium">2-15 points</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us</CardTitle>
                <CardDescription>
                  Benefits of using our visa eligibility checker
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-secondary mt-0.5">✓</div>
                    <div>
                      <h4 className="font-body font-bold">Instant Results</h4>
                      <p className="text-sm text-muted-foreground">Get your eligibility score immediately after completing the form</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-secondary mt-0.5">✓</div>
                    <div>
                      <h4 className="font-body font-bold">Expert System</h4>
                      <p className="text-sm text-muted-foreground">Our scoring system is based on real visa requirements and success patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-secondary mt-0.5">✓</div>
                    <div>
                      <h4 className="font-body font-bold">Free to Use</h4>
                      <p className="text-sm text-muted-foreground">Our eligibility checker is completely free to use with no hidden costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 text-secondary mt-0.5">✓</div>
                    <div>
                      <h4 className="font-body font-bold">Privacy Assured</h4>
                      <p className="text-sm text-muted-foreground">Your information is securely handled and used only for eligibility assessment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisaEligibilityPage;