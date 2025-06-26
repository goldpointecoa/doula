import { useState, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="py-8 lg:py-12 woodsy-texture nature-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-lora text-3xl lg:text-4xl font-semibold text-ebony-800 mb-6 leaf-decoration">
            Let's Connect
          </h2>
          <p className="text-xl text-ebony-700 max-w-3xl mx-auto leading-relaxed">
            Let’s grab coffee and see if I’m the right fit for your birth!
          </p>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <Card className="bg-white rounded-2xl shadow-lg fade-in border-none">
            <CardHeader>
              <h3 className="font-lora text-2xl font-semibold text-ebony-800">Send a Message</h3>
            </CardHeader>
            <CardContent>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                action="/success.html"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-ebony-700 mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-ash-gray-300 rounded-lg focus:ring-2 focus:ring-copper-400 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-ebony-700 mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-ash-gray-300 rounded-lg focus:ring-2 focus:ring-copper-400 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-ebony-700 mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 border border-ash-gray-300 rounded-lg focus:ring-2 focus:ring-copper-400 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="dueDate" className="block text-sm font-medium text-ebony-700 mb-2">
                    Due Date (if applicable)
                  </Label>
                  <Input
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    className="w-full px-4 py-3 border border-ash-gray-300 rounded-lg focus:ring-2 focus:ring-copper-400 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-ebony-700 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-ash-gray-300 rounded-lg focus:ring-2 focus:ring-copper-400 focus:border-transparent transition-all duration-200"
                    placeholder="Have any questions? Feel free to ask."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-copper-400 hover:bg-copper-600 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
