import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
  { name: 'Research Domain', href: '#domain' },
  { name: 'System Features', href: '#features' },
  { name: 'Project Documents', href: '#documents' },
  { name: 'Our Team', href: '#team' },
];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Project Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Oudra<span className="text-green-500">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              The Decision Support System for Sri Lankan Agarwood Cultivation. 
              Revolutionizing plantation management through IoT, AI, and Blockchain.
            </p>
            <div className="inline-block px-3 py-1 bg-gray-800 text-xs font-semibold text-green-400 rounded-full border border-gray-700">
              Project ID: 25-26J-157
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Affiliation */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Institution</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="font-medium text-gray-300">Sri Lanka Institute of Information Technology (SLIIT)</p>
              <p>Faculty of Computing</p>
              <p>Research Project 2026</p>
              
              {/* Optional: GitHub Repository Link */}
              <div className="pt-4">
                <a 
                  href="https://github.com/your-repo-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>View Source Code</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Oudra Research Team. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <span className="hover:text-gray-300 transition-colors">SLIIT</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors">Research Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
}