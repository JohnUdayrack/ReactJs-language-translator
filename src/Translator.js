import React, { useEffect } from 'react';
import './index.css'

const Translate = () => {
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      return new Promise((resolve, reject) => {
        if (document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=translateElementInit"]')) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=translateElementInit';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initGoogleTranslate = () => {
      window.translateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'translate_element'
        );
      };
    };

    loadGoogleTranslateScript()
      .then(() => {
        initGoogleTranslate();
      })
      .catch((error) => {
        console.error('Error loading Google Translate script:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <h1 style={{ fontSize: '2.5em', color: '#4CAF50' }}>🎉 Welcome to JohnbatHub! 🎉</h1>
        <div id="translate_element"></div>
        <p style={{ fontSize: '1.2em' }}>Hello, everyone!</p>
        
        <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            We’re thrilled to have you here at <span style={{ color: '#2196F3' }}>JohnbatHub</span>—your go-to space for discovery and connection! 🌟
        </p>
        
        <h2 style={{ fontSize: '1.5em', color: '#FF9800' }}>🌍 Want to explore in your own language?</h2>
        <p style={{ fontSize: '1.1em' }}>
            No problem! Choose your preferred language from the dropdown menu below, and let’s make this experience uniquely yours! ✨
        </p>

        <h2 style={{ fontSize: '1.5em', color: '#FF5722' }}>Let’s embark on this translation journey together!</h2>
        <p style={{ fontSize: '1.1em' }}>
            Your experience matters, and we’re here to make it as accessible as possible.
        </p>
        
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Enjoy your stay and happy exploring!</p>
    </div>
  );
};

export default Translate;

