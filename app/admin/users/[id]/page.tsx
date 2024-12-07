'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit } from 'lucide-react'

interface UserDetails {
  id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  company: string
  department: string
  title: string
  manager: string
  employeeType: string
  startDate: string
  endDate: string
  status: string
  salary: number
  payFrequency: string
  payType: string
  currency: string
  bankName: string
  accountNumber: string
  routingNumber: string
  taxId: string
  emergencyContactName: string
  emergencyContactPhone: string
  emergencyContactRelationship: string
  birthdate: string
  gender: string
  ethnicity: string
  maritalStatus: string
  nationality: string
  visaStatus: string
  education: string
  certifications: string
  skills: string
  languages: string
  previousEmployer: string
  notes: string
}

export default function UserDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [user, setUser] = useState<UserDetails | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the user data from an API
    // For this example, we'll use mock data
    const mockUser: UserDetails = {
      id: params.id as string,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "USA",
      company: "ACME Inc.",
      department: "Engineering",
      title: "Senior Developer",
      manager: "Jane Smith",
      employeeType: "Full-time",
      startDate: "2020-01-15",
      endDate: "",
      status: "Active",
      salary: 100000,
      payFrequency: "Bi-weekly",
      payType: "Salary",
      currency: "USD",
      bankName: "First National Bank",
      accountNumber: "****1234",
      routingNumber: "****5678",
      taxId: "***-**-1234",
      emergencyContactName: "Alice Doe",
      emergencyContactPhone: "+1 (555) 987-6543",
      emergencyContactRelationship: "Spouse",
      birthdate: "1985-06-15",
      gender: "Male",
      ethnicity: "Caucasian",
      maritalStatus: "Married",
      nationality: "American",
      visaStatus: "Citizen",
      education: "Bachelor's in Computer Science",
      certifications: "AWS Certified Developer, Scrum Master",
      skills: "JavaScript, React, Node.js, Python",
      languages: "English (Native), Spanish (Intermediate)",
      previousEmployer: "Tech Solutions LLC",
      notes: "High performer, interested in management track"
    }
    setUser(mockUser)
  }, [params.id])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Users
        </Button>
        <Button>
          <Edit className="mr-2 h-4 w-4" /> Edit User
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>User Details: {user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DetailItem label="Email" value={user.email} />
            <DetailItem label="Phone" value={user.phone} />
            <DetailItem label="Address" value={`${user.address}, ${user.city}, ${user.state} ${user.zip}, ${user.country}`} />
            <DetailItem label="Company" value={user.company} />
            <DetailItem label="Department" value={user.department} />
            <DetailItem label="Title" value={user.title} />
            <DetailItem label="Manager" value={user.manager} />
            <DetailItem label="Employee Type" value={user.employeeType} />
            <DetailItem label="Start Date" value={user.startDate} />
            <DetailItem label="End Date" value={user.endDate || "N/A"} />
            <DetailItem label="Status" value={user.status} />
            <DetailItem label="Salary" value={`${user.salary.toLocaleString()} ${user.currency} (${user.payFrequency}, ${user.payType})`} />
            <DetailItem label="Bank Info" value={`${user.bankName}, Acct: ${user.accountNumber}, Routing: ${user.routingNumber}`} />
            <DetailItem label="Tax ID" value={user.taxId} />
            <DetailItem label="Emergency Contact" value={`${user.emergencyContactName} (${user.emergencyContactRelationship}): ${user.emergencyContactPhone}`} />
            <DetailItem label="Birthdate" value={user.birthdate} />
            <DetailItem label="Gender" value={user.gender} />
            <DetailItem label="Ethnicity" value={user.ethnicity} />
            <DetailItem label="Marital Status" value={user.maritalStatus} />
            <DetailItem label="Nationality" value={user.nationality} />
            <DetailItem label="Visa Status" value={user.visaStatus} />
            <DetailItem label="Education" value={user.education} />
            <DetailItem label="Certifications" value={user.certifications} />
            <DetailItem label="Skills" value={user.skills} />
            <DetailItem label="Languages" value={user.languages} />
            <DetailItem label="Previous Employer" value={user.previousEmployer} />
            <DetailItem label="Notes" value={user.notes} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function DetailItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <dt className="font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  )
}

