import Link from 'next/link'
import { Users, Shield, Database, Building } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link href="/admin/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          User Management
        </Link>
        <Link href="/admin/access-control" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Shield className="inline-block mr-2" size={20} />
          User Access Control
        </Link>
        <Link href="/admin/user-data" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Database className="inline-block mr-2" size={20} />
          View User Data
        </Link>
        <Link href="/admin/departments" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Building className="inline-block mr-2" size={20} />
          Departments
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar

