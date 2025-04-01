
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or need help with an order? 
            We're here to help and would love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 h-full">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-brand-blue w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600 mt-1">
                      123 Tumbler Street<br />
                      Drinkville, CA 90210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-brand-blue w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600 mt-1">
                      <a 
                        href="mailto:support@tumblertales.com" 
                        className="text-brand-blue hover:underline"
                      >
                        support@tumblertales.com
                      </a><br />
                      <a 
                        href="mailto:sales@tumblertales.com" 
                        className="text-brand-blue hover:underline"
                      >
                        sales@tumblertales.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-brand-blue w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600 mt-1">
                      <a 
                        href="tel:+15551234567" 
                        className="text-brand-blue hover:underline"
                      >
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-brand-blue w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 00-3.16.5 6.3 6.3 0 00-2.24 1.46 6.3 6.3 0 00-1.46 2.24 10 10 0 00-.5 3.16c0 1.1.18 2.1.5 3.16a6.3 6.3 0 001.46 2.24 6.3 6.3 0 002.24 1.46c1.06.32 2.16.5 3.16.5s2.1-.18 3.16-.5a6.3 6.3 0 002.24-1.46 6.3 6.3 0 001.46-2.24c.32-1.06.5-2.06.5-3.16s-.18-2.1-.5-3.16a6.3 6.3 0 00-1.46-2.24 6.3 6.3 0 00-2.24-1.46A10 10 0 0012 2zm0 2.67c1.06 0 2 .2 2.82.61.82.4 1.48.94 1.98 1.65.5.7.8 1.48.92 2.33.12.85.08 1.7-.1 2.54-.2.84-.5 1.6-.92 2.3a5.01 5.01 0 01-1.98 1.65c-.82.4-1.76.6-2.82.6s-2-.2-2.82-.6a5.01 5.01 0 01-1.98-1.65 5.24 5.24 0 01-.91-2.3 6.7 6.7 0 01-.1-2.54c.1-.85.4-1.64.9-2.33a5.01 5.01 0 011.99-1.65c.82-.4 1.76-.6 2.82-.6zM17.34 5c-.38 0-.7.12-.96.38-.26.25-.39.58-.39.95 0 .36.13.68.39.94.26.26.58.39.96.39.38 0 .7-.13.96-.39.26-.26.39-.58.39-.94 0-.37-.13-.7-.39-.95-.26-.26-.58-.38-.96-.38zM12 6.33a3.32 3.32 0 00-1.81.52c-.56.35-1 .82-1.3 1.39a3.8 3.8 0 00-.47 1.86c0 .65.16 1.26.47 1.83.3.57.74 1.03 1.3 1.38.55.35 1.16.52 1.81.52s1.26-.17 1.81-.52c.56-.35 1-.8 1.3-1.38.31-.57.47-1.18.47-1.83s-.16-1.29-.47-1.86c-.3-.57-.74-1.04-1.3-1.39a3.32 3.32 0 00-1.81-.52z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                      <SelectItem value="order-status">Order Status</SelectItem>
                      <SelectItem value="returns">Returns & Exchanges</SelectItem>
                      <SelectItem value="product-feedback">Product Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required className="mt-1" rows={6} />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center"
                >
                  <Send size={16} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Find Us</h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-center p-8">
                <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
                <p>Map Placeholder</p>
                <p className="text-sm mt-2">In a real application, a Google Maps or similar component would be rendered here</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">What is your return policy?</h3>
                <p className="text-gray-600 mt-1">
                  We offer a 30-day return policy for unused items in original packaging. 
                  Visit our <a href="/returns" className="text-brand-blue hover:underline">Returns page</a> for more details.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">How long does shipping take?</h3>
                <p className="text-gray-600 mt-1">
                  Standard shipping takes 3-5 business days. Express shipping options are available at checkout.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Do you offer international shipping?</h3>
                <p className="text-gray-600 mt-1">
                  Yes, we ship to select international destinations. Shipping rates and delivery times vary by location.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">How do I track my order?</h3>
                <p className="text-gray-600 mt-1">
                  Once your order ships, you'll receive a confirmation email with tracking information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
