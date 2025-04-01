
import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Returns = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Returns & Exchanges</h1>
          <p className="text-gray-600">
            We want you to be completely satisfied with your purchase.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-3">
                <RotateCcw size={24} className="text-brand-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">30-Day Returns</h3>
              <p className="text-gray-600 text-sm">
                Return any unused product within 30 days for a full refund.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck size={24} className="text-brand-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600 text-sm">
                All products come with a lifetime warranty against manufacturing defects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-3">
                <HelpCircle size={24} className="text-brand-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Process</h3>
              <p className="text-gray-600 text-sm">
                Our hassle-free return process makes it easy to send items back.
              </p>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Return Policy</h2>
              <p className="text-gray-600 mb-3">
                We stand behind our products and want you to be completely satisfied with your purchase. 
                If for any reason you're not happy with your order, you may return it within 30 days of 
                delivery for a full refund or exchange.
              </p>
              <p className="text-gray-600">
                To be eligible for a return, your item must be unused and in the same condition that you received it. 
                It must also be in the original packaging with all tags and labels intact.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">How to Initiate a Return</h2>
              <ol className="list-decimal text-gray-600 pl-5 space-y-2">
                <li>
                  <span className="font-medium text-gray-800">Contact Customer Service</span>: 
                  Email us at returns@tumblertales.com or call (555) 123-4567 to request a return authorization.
                </li>
                <li>
                  <span className="font-medium text-gray-800">Package Your Item</span>: 
                  Securely pack the item in its original packaging with all components and accessories.
                </li>
                <li>
                  <span className="font-medium text-gray-800">Include Return Form</span>: 
                  Include the return form that was sent to your email after initiating the return process.
                </li>
                <li>
                  <span className="font-medium text-gray-800">Ship Your Return</span>: 
                  Send your package using a trackable shipping method to the address provided in the return instructions.
                </li>
              </ol>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Refunds</h2>
              <p className="text-gray-600 mb-3">
                Once your return is received and inspected, we will send you an email to notify you that we have 
                received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p className="text-gray-600 mb-3">
                If approved, your refund will be processed, and a credit will automatically be applied to your 
                original method of payment within 5-10 business days.
              </p>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800 text-sm mt-4">
                <p className="font-medium">Please note:</p>
                <p>
                  Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will 
                  be deducted from your refund unless the return is due to our error.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Exchanges</h2>
              <p className="text-gray-600 mb-3">
                If you need to exchange an item for a different size or color, please follow the same return process 
                and indicate your exchange preference on the return form. We'll process your exchange as quickly as possible.
              </p>
              <p className="text-gray-600">
                For faster service, you may prefer to place a new order for the desired item and return the original 
                purchase for a refund.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Lifetime Warranty</h2>
              <p className="text-gray-600 mb-3">
                All Tumbler Tales products come with a lifetime warranty against manufacturing defects. If your product 
                develops a defect during normal use, we will repair or replace it at no charge.
              </p>
              <p className="text-gray-600">
                The warranty does not cover damage caused by accidents, improper care, or normal wear and tear. 
                To claim a warranty replacement, please contact our customer service team with photos of the defect 
                and your order information.
              </p>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Our customer service team is ready to assist you with any questions about returns or exchanges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button asChild>
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-light rounded-lg p-6 text-center">
          <h3 className="font-semibold text-lg mb-2">Need Help With Your Order?</h3>
          <p className="text-gray-600 mb-4">
            We're here to assist you with any questions about your purchase.
          </p>
          <Link 
            to="/contact"
            className="text-brand-blue hover:text-brand-blue/80 flex items-center justify-center"
          >
            Get in touch <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Returns;
