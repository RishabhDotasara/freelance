'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Link, Bell } from 'lucide-react'

const initialCustomers = [
  { id: 1, name: "John Doe", city: "New York", status: "Active", paymentDue: "2023-06-15" },
  { id: 2, name: "Jane Smith", city: "Los Angeles", status: "Overdue", paymentDue: "2023-05-30" },
  { id: 3, name: "Bob Johnson", city: "Chicago", status: "Paid", paymentDue: "2023-06-01" },
  { id: 4, name: "Alice Brown", city: "Houston", status: "Active", paymentDue: "2023-06-20" },
  { id: 5, name: "Charlie Davis", city: "Phoenix", status: "Overdue", paymentDue: "2023-05-25" },
  { id: 6, name: "Eva White", city: "Philadelphia", status: "Paid", paymentDue: "2023-06-05" },
  { id: 7, name: "Frank Miller", city: "San Antonio", status: "Active", paymentDue: "2023-06-18" },
  { id: 8, name: "Grace Lee", city: "San Diego", status: "Overdue", paymentDue: "2023-05-28" },
  { id: 9, name: "Henry Wilson", city: "Dallas", status: "Paid", paymentDue: "2023-06-03" },
  { id: 10, name: "Ivy Taylor", city: "San Jose", status: "Active", paymentDue: "2023-06-22" },
]

export default function CallingDepartment() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [searchTerm, setSearchTerm] = useState('')
  const [cityFilter, setCityFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const customersPerPage = 5

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (cityFilter === 'all' || customer.city.toLowerCase() === cityFilter.toLowerCase())
  )

  const indexOfLastCustomer = currentPage * customersPerPage
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer)

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
  }

  const handleCityFilter = (value: string) => {
    setCityFilter(value)
    setCurrentPage(1)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Calling Department</h2>
      <div className="flex items-center space-x-2">
        <Input 
          className="max-w-sm" 
          placeholder="Search customers..." 
          value={searchTerm}
          onChange={handleSearch}
        />
        <Select onValueChange={handleCityFilter} value={cityFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by city" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cities</SelectItem>
            <SelectItem value="new york">New York</SelectItem>
            <SelectItem value="los angeles">Los Angeles</SelectItem>
            <SelectItem value="chicago">Chicago</SelectItem>
            <SelectItem value="houston">Houston</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Due</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.city}</TableCell>
              <TableCell>{customer.status}</TableCell>
              <TableCell>{customer.paymentDue
}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Link className="mr-2 h-4 w-4" />
                    Payment Link
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bell className="mr-2 h-4 w-4" />
                    Reminder
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <div>
          Showing {indexOfFirstCustomer + 1}-{Math.min(indexOfLastCustomer, filteredCustomers.length)} of {filteredCustomers.length} customers
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

