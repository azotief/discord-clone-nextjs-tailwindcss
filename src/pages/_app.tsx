import '../styles/tailwind.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />;
}
