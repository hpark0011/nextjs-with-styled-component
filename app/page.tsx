import ButtonComponent from '@/components/button-component.server';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js App with Styled Components</title>
      </Head>
      <main>
        <h1>Welcome to My Next.js App</h1>
        <ButtonComponent />
      </main>
    </div>
  );
}
