'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


const initialCustomers = [
  { id: 1, name: "John Doe", paymentStatus: "Paid", loanStatus: "Open" },
  { id: 2, name: "Jane Smith", paymentStatus: "Overdue", loanStatus: "Open" },
  { id: 3, name: "Bob Johnson", paymentStatus: "Pending", loanStatus: "Closed" },
  { id: 4, name: "Alice Brown", paymentStatus: "Paid", loanStatus: "Open" },
  { id: 5, name: "Charlie Davis", paymentStatus: "Overdue", loanStatus: "Open" },
]

export default function CustomerManagement() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const customersPerPage = 5
  const { toast } = useToast()

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastCustomer = currentPage * customersPerPage
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer)

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
  }

  const handleStatusChange = (customerId: number, field: 'paymentStatus' | 'loanStatus', value: string) => {
    setCustomers(customers.map(customer => 
      customer.id === customerId ? { ...customer, [field]: value } : customer
    ))
    toast({
      title: "Status Updated",
      description: `Customer ${customerId} ${field} updated to ${value}`,
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
      <div className="flex items-center space-x-2">
        <Input 
          className="max-w-sm" 
          placeholder="Search customers..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Loan Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>
                <Select 
                  onValueChange={(value) => handleStatusChange(customer.id, 'paymentStatus', value)}
                  value={customer.paymentStatus}
                >
                  <SelectTrigger>
                    <SelectValue>{customer.paymentStatus}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Paid">Paid</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Select 
                  onValueChange={(value) => handleStatusChange(customer.id, 'loanStatus', value)}
                  value={customer.loanStatus}
                >
                  <SelectTrigger>
                    <SelectValue>{customer.loanStatus}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View Details</Button>
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

