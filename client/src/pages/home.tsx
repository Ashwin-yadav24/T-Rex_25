import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Brain, 
  Zap, 
  Heart, 
  TrendingUp, 
  Trophy, 
  Dumbbell, 
  Activity,
  Settings,
  Smartphone,
  Check,
  X,
  Twitter,
  Linkedin,
  Youtube,
  Instagram
} from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-gradient" data-testid="logo">T-REX</div>
              <div className="text-xs text-muted-foreground">AI Training System</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-technology"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-pricing"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
            <Button 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm" data-testid="hero-badge">
                  <Zap className="w-4 h-4" />
                  <span>Revolutionary AI Training Technology</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight" data-testid="hero-title">
                  Train Like a
                  <span className="text-gradient"> Champion</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed" data-testid="hero-description">
                  T-REX uses advanced laser tracking and machine learning to enhance reaction time, endurance, reflexes, and stamina. Bring sports science technology into your hands.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-affordable">10x</div>
                  <div className="text-sm text-muted-foreground">More Affordable</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary" data-testid="stat-ai">AI</div>
                  <div className="text-sm text-muted-foreground">Powered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-tracking">360°</div>
                  <div className="text-sm text-muted-foreground">Tracking</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all laser-glow"
                  data-testid="button-start-training"
                >
                  Start Training Now
                </Button>
                <Button 
                  variant="outline"
                  className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all"
                  data-testid="button-watch-demo"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="cyber-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm animated-float">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center pulse-glow">
                      <Target className="w-16 h-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold" data-testid="device-title">T-REX Device</h3>
                      <p className="text-sm text-muted-foreground">Laser Tracking System</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-muted/30 rounded-lg p-3">
                        <div className="text-primary font-semibold">LASER</div>
                        <div className="text-muted-foreground">Active</div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3">
                        <div className="text-secondary font-semibold">AI</div>
                        <div className="text-muted-foreground">Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="how-it-works-title">How T-REX Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced laser tracking meets machine learning to create the ultimate training experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="space-y-6 cyber-border rounded-2xl p-8 bg-card/50" data-testid="card-laser-projection">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Laser Projection</h3>
              <p className="text-muted-foreground">
                High-beam laser module with pan-and-tilt mechanism projects points in random directions within a defined range while you stand at the center.
              </p>
            </Card>

            <Card className="space-y-6 cyber-border rounded-2xl p-8 bg-card/50" data-testid="card-real-time-tracking">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Custom Python software tracks your hand and foot movements in real-time via laptop camera, recording precise coordinate data.
              </p>
            </Card>

            <Card className="space-y-6 cyber-border rounded-2xl p-8 bg-card/50" data-testid="card-ai-analysis">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Machine learning algorithms analyze reaction speed, distance moved, and timing to provide insights on reflexes, stamina, and calories burned.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="features-title">Advanced Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to take your athletic performance to the next level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all" data-testid="feature-reaction-time">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reaction Time</h3>
              <p className="text-muted-foreground text-sm">Measure and improve your response speed with precision timing down to milliseconds.</p>
            </Card>

            <Card className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all" data-testid="feature-endurance">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Endurance Training</h3>
              <p className="text-muted-foreground text-sm">Build stamina through progressive difficulty levels and extended training sessions.</p>
            </Card>

            <Card className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all" data-testid="feature-reflexes">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reflex Enhancement</h3>
              <p className="text-muted-foreground text-sm">Sharpen your reflexes with unpredictable laser patterns and multi-directional targets.</p>
            </Card>

            <Card className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all" data-testid="feature-analytics">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
              <p className="text-muted-foreground text-sm">Track progress with detailed metrics, insights, and personalized training recommendations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold" data-testid="technology-title">Cutting-Edge Technology</h2>
                <p className="text-xl text-muted-foreground">
                  T-REX combines hardware precision with software intelligence to deliver unmatched training capabilities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pan-and-Tilt Mechanism</h3>
                    <p className="text-muted-foreground">Precision servo motors enable 360-degree laser positioning for comprehensive training coverage.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">High-Beam Laser Module</h3>
                    <p className="text-muted-foreground">Safe, visible laser system that creates precise targeting points for optimal training effectiveness.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="text-primary text-xs font-bold">Py</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Python-Based Software</h3>
                    <p className="text-muted-foreground">Advanced computer vision and machine learning algorithms process movement data in real-time.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Web & Mobile Control</h3>
                    <p className="text-muted-foreground">Seamless integration with dedicated web dashboard and Android application for easy control.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Card className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 cyber-border" data-testid="control-system-demo">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">T-REX Control System</h3>
                      <p className="text-sm text-muted-foreground">Real-time monitoring interface</p>
                    </div>
                    
                    <div className="bg-background/50 rounded-xl p-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Laser Status</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">ACTIVE</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Tracking Mode</span>
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">HANDS + FEET</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Reaction Time</span>
                        <span className="text-xs text-foreground font-mono">0.24s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Accuracy</span>
                        <span className="text-xs text-foreground font-mono">94.2%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button className="bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm hover:bg-primary/30 transition-colors">
                        Start Session
                      </Button>
                      <Button variant="outline" className="bg-muted/50 text-foreground px-4 py-2 rounded-lg text-sm hover:bg-muted transition-colors">
                        View Analytics
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="pricing-title">Revolutionary Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get professional-grade training technology at a fraction of the cost
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Competitor Pricing */}
            <Card className="bg-card border border-border rounded-2xl p-8 relative" data-testid="pricing-competitors">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-muted-foreground">Competitors</h3>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-muted-foreground">₹1.1L - 1.2L</div>
                  <p className="text-muted-foreground">Similar market products</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span>Limited tracking accuracy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span>High maintenance costs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span>Complex setup</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* T-REX Pricing (Featured) */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary rounded-2xl p-8 relative laser-glow" data-testid="pricing-trex">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">T-REX System</h3>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-gradient">₹10K - 15K</div>
                  <p className="text-muted-foreground">Complete AI training system</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Advanced laser tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>AI-powered analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Web & mobile control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Portable & adaptable</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Real-time feedback</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid="button-pre-order">
                  Pre-Order Now
                </Button>
              </div>
            </Card>

            {/* Savings Highlight */}
            <Card className="bg-card border border-border rounded-2xl p-8" data-testid="pricing-savings">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Your Savings</h3>
                <div className="space-y-4">
                  <div className="text-6xl font-black text-secondary">10x</div>
                  <p className="text-xl">More Affordable</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Typical Cost:</span>
                    <span className="line-through text-muted-foreground">₹1,20,000</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>T-REX Price:</span>
                    <span className="text-primary">₹15,000</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-border pt-2">
                    <span>You Save:</span>
                    <span className="text-secondary">₹1,05,000</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="audience-title">Perfect For Everyone</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From elite athletes to rehabilitation patients, T-REX adapts to your training needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center space-y-6 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all" data-testid="audience-athletes">
              <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Trophy className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Professional Athletes</h3>
              <p className="text-muted-foreground">
                Enhance performance with data-driven training. Perfect for sports requiring quick reactions like tennis, boxing, basketball, and martial arts.
              </p>
              <ul className="text-sm space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Competitive edge training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </Card>

            <Card className="text-center space-y-6 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all" data-testid="audience-enthusiasts">
              <div className="w-24 h-24 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                <Dumbbell className="w-12 h-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Fitness Enthusiasts</h3>
              <p className="text-muted-foreground">
                Make your workouts more engaging and effective. Track improvements and challenge yourself with progressive training sessions.
              </p>
              <ul className="text-sm space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-secondary" />
                  <span>Fun, gamified training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-secondary" />
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-secondary" />
                  <span>Home gym integration</span>
                </li>
              </ul>
            </Card>

            <Card className="text-center space-y-6 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all" data-testid="audience-patients">
              <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Activity className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Rehabilitation Patients</h3>
              <p className="text-muted-foreground">
                Support recovery with controlled, measurable exercises. Ideal for physical therapy and motor skill rehabilitation programs.
              </p>
              <ul className="text-sm space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Controlled difficulty levels</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Recovery tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Therapeutic applications</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold" data-testid="cta-title">Ready to Transform Your Training?</h2>
          <p className="text-xl text-muted-foreground">
            Join the revolution in athletic performance. Get your T-REX system and start training like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all laser-glow text-lg" data-testid="button-pre-order-cta">
              Pre-Order T-REX System
            </Button>
            <Button variant="outline" className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all text-lg" data-testid="button-schedule-demo">
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">₹10K-15K</div>
              <div className="text-sm text-muted-foreground">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">10x</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">AI</div>
              <div className="text-sm text-muted-foreground">Powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gradient" data-testid="footer-logo">T-REX</div>
              <p className="text-muted-foreground">
                Revolutionary AI-powered training system bringing sports science technology to everyone.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-foreground transition-colors text-left">Features</button></li>
                <li><button onClick={() => scrollToSection('technology')} className="hover:text-foreground transition-colors text-left">Technology</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-foreground transition-colors text-left">Pricing</button></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Demo</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-youtube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 T-REX Systems. All rights reserved. Revolutionizing athletic training through AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
