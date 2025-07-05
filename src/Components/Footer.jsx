import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-12 px-6 text-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">For Savers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">For Investors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Our Story</a></li>
            </ul>
          </div>

      
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-4">Apply Now</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Open a New Savings Account</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Become a Certified Partner</a></li>
            </ul>
          </div>

      
          <div className="text-center">
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Our Basics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Terms of Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Copyright</a></li>
            </ul>
          </div>

     
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <p>Unit 2, 1 Lime Street, 17 Honey House</p>
              <p>103 Southwark Road, London</p>
              <p>SW1Y 4UE</p>
              <p className="mt-3">Telephone: +44 20 3745 7845</p>
              <p>Fax: +44 20 3745 7846</p>
              <p className="mt-3">Email: info@example.co.uk</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-200">
       
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            Insta
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
           Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
            Twitter
            </a>
          </div>

       
          <div className="text-center text-sm text-gray-500">
            <p>
              Sample Financial Ltd (FRN 123456) is an Appointed Representative of Cyber-Strong Finance Group Ltd which is authorised and regulated by the Financial Conduct Authority (FRN 456789). Sample Strong Finance Group Ltd is a credit broker and not a lender. Finance is provided through a panel of lenders. This site shows example APR and acceptance rates. Actual rates may vary and are subject to your financial circumstances.
            </p>
            <p className="mt-2 font-semibold">
              YOUR INVESTMENT MAY BE UNSUCCESSFUL SO YOU MUST NOT RELY ON ANY STATEMENTS AS A SUBSTITUTE OR WAY OTHER PAST BUSINESS AIMS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;