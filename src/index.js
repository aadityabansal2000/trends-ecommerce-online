import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import { CartProvider } from './context/cart_context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-k5ghsteqmc67e863.us.auth0.com"
    clientId="GkUxutqrTMYGFKAGIqXfrObesrteW96B"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <CartProvider>
    <App />
    </CartProvider>
  </Auth0Provider>,
);


