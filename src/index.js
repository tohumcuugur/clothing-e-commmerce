import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CardProvider } from './contexts/card.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
);


// <UserProvider> içinde yer alan tüm componentler userprovider içindeki tüm componentlere erişim sağlayabilecek.Fakat UserProvider kendi altında yer alan Products provider'a erişim sağlayamaz yani hiyerarşi içten üste doğru gider.
