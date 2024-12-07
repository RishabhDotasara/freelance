'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, FileText, Download } from 'lucide-react'

const initialReports = [
  { id: 1, name: "CIBIL Report - May 2023", type: "CIBIL", region: "North", date: "2023-05-31" },
  { id: 2, name: "Collection Report - Q2 2023", type: "Collection", region: "South", date: "2023-06-30" },
  { id: 3, name: "User Calling Data - June 2023", type: "User Data", region: "East", date: "2023-06-15" },
  { id: 4, name: "CIBIL Report - June 2023", type: "CIBIL", region: "West", date: "2023-06-30" },
  { id: 5, name: "Collection Report - May 2023", type: "Collection", region: "North", date: "2023-05-31" },
]

export default function CollectionDepartment() {
  const [reports, setReports] = useState(initialReports)
  const [searchTerm, setSearchTerm] = useState('')
  const [regionFilter, setRegionFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const reportsPerPage = 5

  const filteredReports = reports.filter(report => 
    report.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (regionFilter === 'all' || report.region.toLowerCase() === regionFilter.toLowerCase())
  )

  const indexOfLastReport = currentPage * reportsPerPage
  const indexOfFirstReport = indexOfLastReport - reportsPerPage
  const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport)

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
  }

  const handleRegionFilter = (value: string) => {
    setRegionFilter(value)
    setCurrentPage(1)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Collection Department</h2>
      <div className="flex items-center space-x-2">
        <Input 
          className="max-w-sm" 
          placeholder="Search reports..." 
          value={searchTerm}
          onChange={handleSearch}
        />
        <Select onValueChange={handleRegionFilter} value={regionFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="north">North</SelectItem>
            <SelectItem value="south">South</SelectItem>
            <SelectItem value="east">East</SelectItem>
            <SelectItem value="west">West</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Report Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentReports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.name}</TableCell>
              <TableCell>{report.type}</TableCell>
              <TableCell>{report.region}</TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <div>
          Showing {indexOfFirstReport + 1}-{Math.min(indexOfLastReport, filteredReports.length)} of {filteredReports.length} reports
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>Page {currentPage} of {totalPages}</div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

