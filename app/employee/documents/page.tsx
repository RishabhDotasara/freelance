'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from '@/hooks/use-toast'


export default function DocumentUpload() {
  const [file, setFile] = useState<File | null>(null)
  const { toast } = useToast()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    if (file) {
      // Here you would typically upload the file to your server
      console.log('Uploading file:', file.name)
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded successfully.`,
      })
      setFile(null)
    } else {
      toast({
        title: "Error",
        description: "Please select a file to upload.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Document Upload</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="file-upload">Select File</Label>
          <Input 
            id="file-upload" 
            type="file" 
            onChange={handleFileChange}
          />
        </div>
        {file && (
          <div>
            <p>Selected file: {file.name}</p>
          </div>
        )}
        <Button onClick={handleUpload}>Upload Document</Button>
      </div>
    </div>
  )
}

