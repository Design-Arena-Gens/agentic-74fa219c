'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const features = [
    {
      id: 'business-api',
      title: 'WhatsApp Business API',
      icon: '💬',
      description: 'Send and receive messages at scale with official WhatsApp Business API',
      benefits: [
        'Send notifications, updates, and alerts',
        'Two-way conversations with customers',
        'Automated responses with chatbots',
        'Message templates for compliance',
        '99.9% uptime SLA'
      ],
      pricing: 'Starting at $49/month'
    },
    {
      id: 'automation',
      title: 'Smart Automation',
      icon: '🤖',
      description: 'AI-powered automation for customer service and engagement',
      benefits: [
        'Intelligent chatbot responses',
        'Auto-reply to common queries',
        'Workflow automation',
        'Lead qualification',
        'Integration with CRM systems'
      ],
      pricing: 'Starting at $99/month'
    },
    {
      id: 'broadcasting',
      title: 'Bulk Broadcasting',
      icon: '📢',
      description: 'Send promotional messages and updates to thousands of customers',
      benefits: [
        'Segment your audience',
        'Schedule messages in advance',
        'Rich media support (images, videos, PDFs)',
        'Delivery and read receipts',
        'Compliance with WhatsApp policies'
      ],
      pricing: 'Starting at $79/month'
    },
    {
      id: 'analytics',
      title: 'Analytics & Insights',
      icon: '📊',
      description: 'Track and measure your WhatsApp marketing performance',
      benefits: [
        'Real-time message analytics',
        'Customer engagement metrics',
        'Conversion tracking',
        'Agent performance reports',
        'Custom dashboards'
      ],
      pricing: 'Included in all plans'
    },
    {
      id: 'team-inbox',
      title: 'Team Inbox',
      icon: '👥',
      description: 'Collaborate with your team to manage customer conversations',
      benefits: [
        'Multi-agent support',
        'Assign conversations to team members',
        'Internal notes and comments',
        'Role-based access control',
        'Real-time collaboration'
      ],
      pricing: 'Starting at $39/month per user'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: '🔗',
      description: 'Connect WhatsApp with your favorite business tools',
      benefits: [
        'Salesforce, HubSpot, Zoho CRM',
        'Shopify, WooCommerce',
        'Zapier for custom workflows',
        'Google Sheets & Calendar',
        'Custom API integrations'
      ],
      pricing: 'Available on Pro plans'
    },
    {
      id: 'commerce',
      title: 'WhatsApp Commerce',
      icon: '🛍️',
      description: 'Sell products directly through WhatsApp conversations',
      benefits: [
        'Product catalog integration',
        'Shopping cart in WhatsApp',
        'Payment processing',
        'Order tracking',
        'Abandoned cart recovery'
      ],
      pricing: 'Starting at $149/month'
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      icon: '🔒',
      description: 'Bank-grade security and compliance for your business',
      benefits: [
        'End-to-end encryption',
        'GDPR & SOC 2 compliant',
        'Data residency options',
        'SSO & 2FA authentication',
        'Audit logs and monitoring'
      ],
      pricing: 'Enterprise plans only'
    }
  ]

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Send order confirmations, shipping updates, and handle customer support',
      icon: '🛒'
    },
    {
      title: 'Healthcare',
      description: 'Appointment reminders, test results, and patient communication',
      icon: '🏥'
    },
    {
      title: 'Finance',
      description: 'Transaction alerts, account updates, and secure customer service',
      icon: '💳'
    },
    {
      title: 'Education',
      description: 'Class updates, exam schedules, and parent-teacher communication',
      icon: '🎓'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-whatsapp-dark text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">💚</div>
              <div>
                <h1 className="text-3xl font-bold">WhatsApp SaaS</h1>
                <p className="text-green-200 text-sm">Enterprise Business Messaging</p>
              </div>
            </div>
            <button className="bg-whatsapp-green hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Connect with 2 Billion+ Customers
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          The most powerful WhatsApp Business Platform for customer engagement,
          marketing automation, and sales. Trusted by 50,000+ businesses worldwide.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-whatsapp-green hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Get Started Free
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 transition-all">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-whatsapp-green">2B+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-whatsapp-green">98%</div>
            <div className="text-gray-600">Open Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-whatsapp-green">50K+</div>
            <div className="text-gray-600">Businesses</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-whatsapp-green">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Powerful Features for Your Business
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Everything you need to scale customer communication on WhatsApp
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature.id)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-whatsapp-green"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-whatsapp-green font-semibold">{feature.pricing}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Modal */}
      {selectedFeature && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {features.find(f => f.id === selectedFeature) && (
              <>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">
                      {features.find(f => f.id === selectedFeature)?.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {features.find(f => f.id === selectedFeature)?.title}
                      </h3>
                      <p className="text-whatsapp-green font-semibold text-lg mt-1">
                        {features.find(f => f.id === selectedFeature)?.pricing}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="text-gray-500 hover:text-gray-700 text-3xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-700 text-lg mb-6">
                  {features.find(f => f.id === selectedFeature)?.description}
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h4>
                <ul className="space-y-3 mb-8">
                  {features.find(f => f.id === selectedFeature)?.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-whatsapp-green mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="flex-1 bg-whatsapp-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    Start Free Trial
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all">
                    Learn More
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Use Cases Section */}
      <section className="bg-gradient-to-r from-whatsapp-dark to-whatsapp-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            Perfect for Every Industry
          </h2>
          <p className="text-xl text-center mb-12 text-green-100">
            See how businesses like yours use WhatsApp SaaS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-green-100">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Choose the plan that fits your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$49</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>1,000 conversations/month</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Basic automation</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>2 team members</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all">
              Start Free Trial
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-gradient-to-br from-whatsapp-green to-whatsapp-light text-white rounded-2xl shadow-2xl p-8 transform scale-105 border-4 border-whatsapp-green relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$149</span>
              <span className="text-green-100">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>10,000 conversations/month</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Advanced AI automation</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>10 team members</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>All integrations</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full bg-white text-whatsapp-green hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Unlimited conversations</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Custom AI training</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center">
                <span className="text-whatsapp-green mr-2">✓</span>
                <span>24/7 phone support</span>
              </li>
            </ul>
            <button className="w-full bg-whatsapp-dark hover:bg-whatsapp-light text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-whatsapp-green to-whatsapp-teal text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Customer Communication?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join 50,000+ businesses using WhatsApp SaaS to grow faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-whatsapp-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              Start 14-Day Free Trial
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-whatsapp-green text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Schedule a Demo
            </button>
          </div>
          <p className="mt-6 text-green-100 text-sm">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">WhatsApp SaaS</h3>
              <p className="text-sm">
                The leading enterprise WhatsApp Business Platform for customer engagement.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 WhatsApp SaaS. All rights reserved. Not affiliated with WhatsApp Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
