import Head from "next/head";

export default function Layout({children, title='', description=''}) {
  return (
    <>
    <Head>
        <title>{`GutiarLa - ${title}`}</title>
        <meta name="description" content={description} />
    </Head>
    <h1>Info from layout</h1>
    {children}
    </>
  )
}
