import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageCircle, Clock, Heart, HelpCircle, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, don't hesitate to reach out.
          </p>
        </div>

        {/* Main Contact Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-12 w-12 text-indigo-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
                <p className="text-gray-600 mt-2">Send us an email anytime</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center space-x-3 text-2xl">
                <Mail className="h-8 w-8 text-indigo-600" />
                <p className="text-indigo-600 font-bold">
                  family@coloringpages.fans
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Contact Us About */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">What Can We Help You With?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Questions & Support</h3>
                    <p className="text-gray-600 text-sm">Technical issues, printing problems, or general questions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Feedback & Suggestions</h3>
                    <p className="text-gray-600 text-sm">Ideas for new coloring pages or website improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Send className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Collaboration Requests</h3>
                    <p className="text-gray-600 text-sm">Partnership opportunities or educational collaborations</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Copyright Issues</h3>
                    <p className="text-gray-600 text-sm">Report copyright concerns or request permission</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Share Your Creations</h3>
                    <p className="text-gray-600 text-sm">Show us your colored masterpieces!</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Just Say Hello</h3>
                    <p className="text-gray-600 text-sm">We love hearing from our community!</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Response Time</h2>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed text-center">
                <strong>We typically respond within 24-48 hours.</strong><br />
                Please be patient during weekends and holidays as our response time may be longer.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tips for Contacting */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tips for Better Communication</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">When Reporting Issues:</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Describe the problem clearly</li>
                  <li>• Include your browser and device type</li>
                  <li>• Mention which coloring page (if applicable)</li>
                  <li>• Attach screenshots if helpful</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">When Making Suggestions:</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Be specific about your ideas</li>
                  <li>• Explain why it would be helpful</li>
                  <li>• Include examples if possible</li>
                  <li>• Tell us about your target age group</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Q: Are all coloring pages really free?</h3>
                <p className="text-gray-600">A: Yes! All our coloring pages are completely free to download and print for personal and educational use.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Q: Can I use these in my classroom?</h3>
                <p className="text-gray-600">A: Absolutely! Teachers and educators are welcome to use our coloring pages in their classrooms and educational activities.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Q: Why won't the PDF download?</h3>
                <p className="text-gray-600">A: Try refreshing the page or using a different browser. If the problem persists, please contact us with details about your device and browser.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Q: Can I request specific coloring page themes?</h3>
                <p className="text-gray-600">A: We love hearing your ideas! Send us your suggestions and we'll consider them for future additions to our collection.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thank You Section */}
        <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We appreciate you being part of the Coloring Pages Fans community. Your feedback, suggestions, and support help us create better content for families around the world. We look forward to hearing from you!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Contact Us - Free Coloring Pages for Kids and Adults',
  description: 'Get in touch with Coloring Pages Fans. We love hearing from our community! Send us questions, suggestions, or just say hello at family@coloringpages.fans',
} 