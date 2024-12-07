import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", department: "Calling", status: "Active", lastLogin: "2023-05-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", department: "Collection", status: "Inactive", lastLogin: "2023-05-10" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", department: "Calling", status: "Active", lastLogin: "2023-05-14" },
]

export default function UserData() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">User Data</h2>
      <div className="flex items-center space-x-2">
        <Input className="max-w-sm" placeholder="Search users..." />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="calling">Calling</SelectItem>
            <SelectItem value="collection">Collection</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="secondary">Apply Filters</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.lastLogin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

