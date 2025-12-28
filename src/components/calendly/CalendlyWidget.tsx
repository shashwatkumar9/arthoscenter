'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
        utm?: Record<string, string>;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CalendlyWidgetProps = {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  utm?: Record<string, string>;
  styles?: {
    height?: string;
  };
};

export function CalendlyWidget({
  url,
  prefill,
  utm,
  styles = { height: '700px' },
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    script.onload = () => {
      const calendlyDiv = document.getElementById('calendly-inline-widget');
      if (calendlyDiv && window.Calendly) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: calendlyDiv,
          prefill,
          utm,
        });
      }
    };

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [url, prefill, utm]);

  return (
    <div
      id="calendly-inline-widget"
      style={{
        minWidth: '320px',
        height: styles.height,
      }}
    />
  );
}

type CalendlyPopupButtonProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
};

export function CalendlyPopupButton({
  url,
  children,
  className,
  prefill,
}: CalendlyPopupButtonProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
