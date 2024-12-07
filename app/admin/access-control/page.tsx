import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Lock, Unlock } from 'lucide-react'

const users = [
  { id: 1, name: "John Doe", role: "Employee", permissions: ["view_data", "create_links"] },
  { id: 2, name: "Jane Smith", role: "Manager", permissions: ["view_data", "create_links", "upload_documents"] },
  { id: 3, name: "Bob Johnson", role: "Admin", permissions: ["view_data", "create_links", "upload_documents", "manage_users"] },
]

const allPermissions = ["view_data", "create_links", "upload_documents", "manage_users"]

export default function UserAccessControl() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">User Access Control</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            {allPermissions.map((permission) => (
              <TableHead key={permission}>{permission}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              {allPermissions.map((permission) => (
                <TableCell key={permission}>
                  <Switch checked={user.permissions.includes(permission)} />
                </TableCell>
              ))}
              <TableCell>
                <Button variant="outline" size="sm">
                  {user.permissions.length > 0 ? <Lock className="mr-2 h-4 w-4" /> : <Unlock className="mr-2 h-4 w-4" />}
                  {user.permissions.length > 0 ? "Lock" : "Unlock"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

