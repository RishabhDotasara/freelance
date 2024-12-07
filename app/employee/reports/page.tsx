'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast'


const reportTypes = [
  { value: 'cibil', label: 'CIBIL Report' },
  { value: 'collection', label: 'Collection Report' },
  { value: 'calling', label: 'Calling Data Report' },
]

const regions = [
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
]

export default function ReportsDownload() {
  const [reportType, setReportType] = useState('')
  const [region, setRegion] = useState('')
  const { toast } = useToast()

  const handleDownload = () => {
    if (reportType && region) {
      // Here you would typically generate and download the report
      console.log('Downloading report:', { reportType, region })
      toast({
        title: "Report Downloaded",
        description: `${reportType.toUpperCase()} report for ${region} region has been downloaded.`,
      })
    } else {
      toast({
        title: "Error",
        description: "Please select both report type and region.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Download Reports</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="report-type" className="block text-sm font-medium text-gray-700">Report Type</label>
          <Select onValueChange={setReportType} value={reportType}>
            <SelectTrigger id="report-type">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              {reportTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region</label>
          <Select onValueChange={setRegion} value={region}>
            <SelectTrigger id="region">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((r) => (
                <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleDownload}>Download Report</Button>
      </div>
    </div>
  )
}

