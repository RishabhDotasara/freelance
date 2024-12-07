import Link from 'next/link'
import { Phone, FileText, Mail, Upload, Download, Users } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link href="/employee/calling" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Phone className="inline-block mr-2" size={20} />
          Calling Department
        </Link>
        <Link href="/employee/collection" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <FileText className="inline-block mr-2" size={20} />
          Collection Department
        </Link>
        <Link href="/employee/mailing" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Mail className="inline-block mr-2" size={20} />
          Mailing System
        </Link>
        <Link href="/employee/documents" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Upload className="inline-block mr-2" size={20} />
          Upload Documents
        </Link>
        <Link href="/employee/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Download className="inline-block mr-2" size={20} />
          Download Reports
        </Link>
        <Link href="/employee/customers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          Customer Management
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar

