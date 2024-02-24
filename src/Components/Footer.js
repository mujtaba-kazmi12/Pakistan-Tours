const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-600 mt-[5%]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h5 className="text-xl font-bold mb-4">COMPANY</h5>
              <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">We Are Hiring</li>
              <li className="mb-2">TMI Reviews</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Tour My India Blog</li>
                {/* Add the rest of the company links */}
              </ul>
            </div>
            
            {/* Property Type */}
            <div>
              <h5 className="text-xl font-bold mb-4">PROPERTY TYPE</h5>
              <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">We Are Hiring</li>
              <li className="mb-2">TMI Reviews</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Tour My India Blog</li>
                {/* Add the rest of the company links */}
              </ul>
              {/* Add property type links */}
            </div>
            
            {/* Legal Policy */}
            <div>
              <h5 className="text-xl font-bold mb-4">LEGAL POLICY</h5>
              <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">We Are Hiring</li>
              <li className="mb-2">TMI Reviews</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Tour My India Blog</li>
                {/* Add the rest of the company links */}
              </ul>
              {/* Add legal policy links */}
            </div>
            
            {/* Other Services */}
            <div>
              <h5 className="text-xl font-bold mb-4">OTHER SERVICES</h5>
              <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">We Are Hiring</li>
              <li className="mb-2">TMI Reviews</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Tour My India Blog</li>
                {/* Add the rest of the company links */}
              </ul>
              {/* Add other services links */}
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between">
              {/* Contact Information */}
              <div>
                {/* Add contact information */}
                <p className="">info@tourmyPakistan.com</p>
               
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {/* Add social links */}
                <img src="/images/facebook.svg" className="w-[35px]"/>
                <img src="/images/instagram2.svg" className="w-[35px]"/>
                <img src="/images/twitter.svg" className="w-[35px]"/>
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center mt-4">
              <p>CopyRight©2023, Tour My Pakistan Pvt. Ltd</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;

  
  