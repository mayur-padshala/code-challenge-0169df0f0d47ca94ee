import { ApolloProvider } from "@apollo/client";
import Link from 'next/link'
import client from "../apollo-client";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ul>
        <li>
          <Link href="/best-hello-ever">
            <a title={'Best Hello Ever'}>Best Hello Ever</a>
          </Link>
        </li>
        <li>
          <Link href="/best-hello-world-ever">
            <a title={'Best Hello World Ever'}>Best Hello World Ever</a>
          </Link>
        </li>
        <li>
          <Link href="/best-world-ever">
            <a title={'Best World Ever'}>Best World Ever</a>
          </Link>
        </li>

        <li>
          <Link href="/best-world-never">
            <a title={'Best World Never'}>Best World Never - This will give an error message</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
