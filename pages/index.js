import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Покупка скинов для "Лёша SkinsBot"</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Телеграм WebApp для бота" />
        <p className="description">
          На будущее: Менять <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
