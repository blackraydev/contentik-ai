import ReactDOM from 'react-dom/client';
import App from './App.tsx';

if (!Object.hasOwn) {
  Object.hasOwn = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
