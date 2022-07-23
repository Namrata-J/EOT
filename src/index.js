import "./index.css";
import React from "react";
import { App } from "./App";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./providers/AppThemeProvider";
import {
  AuthProvider,
  SideBarProvider,
  HeaderProvider,
  CreatePostProvider,
  PostCardProvider
} from "./contexts/";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppThemeProvider>
          <AuthProvider>
            <SideBarProvider>
              <HeaderProvider>
                <CreatePostProvider>
                  <PostCardProvider>
                    <App />
                  </PostCardProvider>
                </CreatePostProvider>
              </HeaderProvider>
            </SideBarProvider>
          </AuthProvider>
        </AppThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
