"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset submit status when user starts typing again after a previous submission
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        toast.success("Message sent successfully!", {
          icon: <CheckCircle2 className="text-green-500" />
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        toast.error(result.error || "Failed to send message. Please try again.", {
          icon: <XCircle className="text-red-500" />
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error("Failed to send message. Please try again.", {
        icon: <XCircle className="text-red-500" />
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <Input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            required
            className={
              submitStatus === 'success' ? 'border-green-500' : 
              submitStatus === 'error' ? 'border-red-500' : ''
            }
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <Input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required
            className={
              submitStatus === 'success' ? 'border-green-500' : 
              submitStatus === 'error' ? 'border-red-500' : ''
            }
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <Textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            rows={4}
            required
            className={
              submitStatus === 'success' ? 'border-green-500' : 
              submitStatus === 'error' ? 'border-red-500' : ''
            }
          />
        </div>
        
        {submitStatus === 'success' && (
          <div className="text-green-600 text-center mb-4">
            Your message was sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="text-red-600 text-center mb-4">
            Oops! There was a problem sending your message. Please try again or contact me through linkedin or email me at ossamaoutmani@gmail.com.
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}