'use client';

import { useEffect, useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

type RazorpayCheckoutProps = {
  amount: number; // in paise (₹999 = 99900 paise)
  currency?: string;
  name: string;
  description?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  onSuccess: (response: any) => void;
  onFailure: (error: any) => void;
  buttonText?: string;
  buttonClassName?: string;
};

export function RazorpayCheckout({
  amount,
  currency = 'INR',
  name,
  description = 'Online Consultation Fee',
  prefill,
  notes,
  onSuccess,
  onFailure,
  buttonText = 'Pay Now',
  buttonClassName = 'bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2',
}: RazorpayCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const createOrder = async () => {
    try {
      const response = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const handlePayment = async () => {
    if (!isScriptLoaded || !window.Razorpay) {
      alert('Payment system is loading. Please try again in a moment.');
      return;
    }

    setIsLoading(true);

    try {
      const orderId = await createOrder();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: 'Arthoscenter',
        description,
        order_id: orderId,
        prefill: prefill || {},
        notes: notes || {},
        theme: {
          color: '#2563eb', // blue-600
        },
        handler: function (response: any) {
          onSuccess({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          });
          setIsLoading(false);
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on('payment.failed', function (response: any) {
        onFailure({
          code: response.error.code,
          description: response.error.description,
          source: response.error.source,
          step: response.error.step,
          reason: response.error.reason,
          metadata: response.error.metadata,
        });
        setIsLoading(false);
      });

      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      onFailure(error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading || !isScriptLoaded}
      className={buttonClassName}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="h-5 w-5" />
          {buttonText}
        </>
      )}
    </button>
  );
}
