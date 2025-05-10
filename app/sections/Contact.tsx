import React from 'react';

const Contact = React.forwardRef<HTMLElement>((props, ref) => (
  <section ref={ref} id="contacts" className="bg-gradient-to-b from-green-950 to-green-700 text-white py-8 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img src="/images/ozmialogo.png" alt="Ozmia Logo" className="h-16 mb-2" />
        
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <div className="flex items-center gap-2 mb-1">
            <i className="fab fa-whatsapp"></i>
            <span>0483 2760 916</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-whatsapp"></i>
            <span>+91 9495434916</span>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-2">About us</h4>
          <p className="mb-1 hover:underline cursor-pointer">Blog</p>
          <p className="hover:underline cursor-pointer">About ozmia</p>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <div className="flex gap-3">
            <a href="#"><i className="fab fa-instagram bg-green-900 p-2 rounded-full"></i></a>
            <a href="#"><i className="fab fa-facebook-f bg-green-900 p-2 rounded-full"></i></a>
            <a href="#"><i className="fas fa-times bg-green-900 p-2 rounded-full"></i></a>
          </div>
        </div>
      </div>
  </section>
));
export default Contact;