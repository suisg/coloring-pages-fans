import { Card, CardContent } from '@/components/ui/card'
import { FileText, Shield, Download, Users } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our website and downloading our coloring pages.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Acceptance Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using Coloring Pages Fans website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </CardContent>
        </Card>

        {/* Free Use Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Download className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Free Personal Use</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                All coloring pages on this website are provided free of charge for personal, non-commercial use. You may:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Download and print coloring pages for personal use</li>
                <li>Use them in your home, classroom, or educational setting</li>
                <li>Share printed copies with family and friends</li>
                <li>Use them for therapeutic or recreational purposes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Restrictions Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Restrictions</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                You may NOT:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sell, redistribute, or profit from our coloring pages</li>
                <li>Claim ownership or copyright of our designs</li>
                <li>Modify our coloring pages and redistribute them</li>
                <li>Use our content for commercial purposes without permission</li>
                <li>Share digital files on other websites or platforms</li>
                <li>Create derivative works for commercial distribution</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Educational Use Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Educational Use</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Teachers and educators are welcome to use our coloring pages in their classrooms and educational activities. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Printing pages for classroom activities</li>
                <li>Using them in lesson plans and educational materials</li>
                <li>Sharing with students and parents for homework</li>
                <li>Including in educational newsletters (with attribution)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Copyright Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Copyright and Ownership</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All coloring pages, designs, and content on this website are owned by Coloring Pages Fans or used with permission. We respect intellectual property rights and expect our users to do the same.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you believe any content infringes on your copyright, please contact us at family@coloringpages.fans with details of the alleged infringement.
            </p>
          </CardContent>
        </Card>

        {/* Disclaimer Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The information on this website is provided on an "as is" basis. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information contained on it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are not responsible for any errors or omissions in the content, or for any actions taken based on the information provided on this website.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes indicates your acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <p className="text-indigo-600 font-semibold">
              family@coloringpages.fans
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Terms of Use - Free Coloring Pages for Kids and Adults',
  description: 'Read our Terms of Use for Coloring Pages Fans. Learn about proper usage of our free printable coloring pages for personal and educational purposes.',
} 