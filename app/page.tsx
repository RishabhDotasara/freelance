'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, PhoneCall, FileText, BarChart2 } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between w-full ">
          <Link className="flex items-center space-x-2" href="#">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">LoanGuard</span>
          </Link>
          <nav className="flex space-x-4 items-center">
            <Link className="text-sm font-medium hover:text-primary" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#roles">
              User Roles
            </Link>
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 justify-center flex flex-col items-center">
        <section className="w-5/6 py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" px-8 md:px-6">
            <motion.div 
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Streamline Your Loan Management with <span className="text-primary">LoanGuard</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Efficient loan processing, user management, and reporting for financial institutions.
              </p>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="features" className="w-5/6 py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Key Features</h2>
            <motion.div 
              className="grid gap-6 lg:grid-cols-3 lg:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="User Management"
                description="Easily manage employees, control access, and oversee departments."
              />
              <FeatureCard
                icon={<PhoneCall className="h-6 w-6 text-primary" />}
                title="Calling Department Tools"
                description="Create payment links, manage reminders, and update customer statuses."
              />
              <FeatureCard
                icon={<BarChart2 className="h-6 w-6 text-primary" />}
                title="Advanced Reporting"
                description="Generate CIBIL reports, collection reports, and view segregated data."
              />
            </motion.div>
          </div>
        </section>
        <section id="roles" className="w-5/6 py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">User Roles</h2>
            <motion.div 
              className="grid gap-6 lg:grid-cols-2 lg:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <RoleCard
                title="Admin"
                description="Manage users, control access, and oversee all departments."
                features={[
                  "User management",
                  "Access control",
                  "View all user data",
                  "Department oversight"
                ]}
              />
              <RoleCard
                title="Employee"
                description="Handle day-to-day operations in calling and collection departments."
                features={[
                  "Create payment links",
                  "Manage reminders",
                  "Upload documents",
                  "Generate reports"
                ]}
              />
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className=" px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Optimize Your Loan Management?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Join financial institutions already benefiting from our comprehensive system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button className="bg-primary hover:bg-primary/90">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/signin">
                  <Button variant="outline">
                    Sign In
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 LoanGuard. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="p-4 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function RoleCard({ title, description, features }) {
  return (
    <div className="flex flex-col p-6 bg-card text-card-foreground rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FileText className="h-5 w-5 text-primary mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

