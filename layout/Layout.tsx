import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
    title: string,
    keywords: string,
    description: string,
    children: JSX.Element,
  };

export default function Layout(
    { title, keywords, description, children }: Props) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <Header />
        <main className="m-auto p-5 sm:w-5/6 md:w-4/5 lg:w-3/4 bg-emerald-100">
            {children}
        </main>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: 'Travel app',
    description: 'Travel app for practice nextjs',
    keywords: 'travel, monuments, tourism'
}
