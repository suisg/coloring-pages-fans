import { Card, CardContent } from '@/components/ui/card'
import { Shield, Eye, Cookie, Mail, BarChart3, Globe } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you visit our website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Information We Collect Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                We collect minimal information to improve your experience on our website:
              </p>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-2">Automatically Collected Information:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Website usage data through Google Analytics</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Browser type and device information</li>
                  <li>IP address (anonymized)</li>
                  <li>Referring website information</li>
                </ul>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-2">Information You Provide:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Email address (only if you contact us)</li>
                  <li>Messages sent through our contact form</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Google Analytics Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Google Analytics</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                We use Google Analytics to understand how visitors interact with our website. This helps us improve our content and user experience.
              </p>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-2">Google Analytics collects:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Number of visitors and page views</li>
                  <li>How long visitors stay on our site</li>
                  <li>Which pages are most popular</li>
                  <li>General geographic location (country/city level)</li>
                  <li>Device and browser information</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                Google Analytics uses cookies to track this information. The data is anonymized and we cannot identify individual users. You can opt-out of Google Analytics tracking by installing the 
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-1">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookies Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Cookie className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Our website uses cookies to enhance your browsing experience and analyze website traffic.
              </p>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-2">Types of cookies we use:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Analytics Cookies:</strong> Google Analytics cookies to understand website usage</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect some website functionality.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Improve our website content and user experience</li>
                <li>Understand which coloring pages are most popular</li>
                <li>Analyze website traffic and performance</li>
                <li>Respond to your emails and inquiries</li>
                <li>Ensure our website functions properly</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>We do NOT:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sell or share your personal information with third parties</li>
                <li>Use your information for marketing purposes</li>
                <li>Collect sensitive personal information</li>
                <li>Require registration or personal details to access our content</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Third-Party Services</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Our website uses the following third-party services:
              </p>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-2">Google Analytics:</h3>
                <p className="leading-relaxed">
                  For website analytics and performance monitoring. Please review 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    Google's Privacy Policy
                  </a> for more information.
                </p>
              </div>
              <p className="leading-relaxed">
                These services may collect information as described in their respective privacy policies. We do not control how third-party services use your information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Children's Privacy Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our website is designed for families and children. We do not knowingly collect personal information from children under 13. We do not require any personal information to access or download our coloring pages.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you are a parent or guardian and believe your child has provided personal information, please contact us at family@coloringpages.fans and we will delete such information.
            </p>
          </CardContent>
        </Card>

        {/* Data Security Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since we collect minimal personal information and do not require user accounts, your privacy risk is significantly reduced when using our website.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
  title: 'Privacy Policy - Free Coloring Pages for Kids and Adults',
  description: 'Read our Privacy Policy for Coloring Pages Fans. Learn how we protect your privacy and use Google Analytics to improve our free coloring pages website.',
} 