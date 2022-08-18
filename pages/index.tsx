import Link from 'next/link';
import Layout from './layout/Layout';

export default function Home() {
  return (
    <Layout title="Main page">
      <Link href="/monument">Click</Link>
    </Layout>
  )
}

