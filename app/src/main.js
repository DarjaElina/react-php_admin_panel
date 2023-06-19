import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/editor';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root')
const root = createRoot(container);
root.render(<Editor/>)

