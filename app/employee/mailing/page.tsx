'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast'

export default function MailingSystem() {
  const [recipient, setRecipient] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [template, setTemplate] = useState('')
  const { toast } = useToast()

  const handleSend = () => {
    // Here you would typically send the email using an API
    console.log('Sending email:', { recipient, subject, message })
    toast({
      title: "Email Sent",
      description: `Email sent to ${recipient}`,
    })
    // Reset form
    setRecipient('')
    setSubject('')
    setMessage('')
    setTemplate('')
  }

  const handleTemplateChange = (value: string) => {
    setTemplate(value)
    // Here you would typically load the template content
    setSubject('Pre-filled subject for ' + value)
    setMessage('Pre-filled message for ' + value)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Mailing System</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">Recipient</label>
          <Input 
            id="recipient" 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            placeholder="recipient@example.com"
          />
        </div>
        <div>
          <label htmlFor="template" className="block text-sm font-medium text-gray-700">Template</label>
          <Select onValueChange={handleTemplateChange} value={template}>
            <SelectTrigger>
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="payment-reminder">Payment Reminder</SelectItem>
              <SelectItem value="late-payment">Late Payment Notice</SelectItem>
              <SelectItem value="thank-you">Thank You</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <Input 
            id="subject" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            placeholder="Email subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <Textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Type your message here"
            rows={6}
          />
        </div>
        <Button onClick={handleSend}>Send Email</Button>
      </div>
    </div>
  )
}

