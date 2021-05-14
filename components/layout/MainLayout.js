import Head from "../page/Head"
import Header from "../page/Header"
import Footer from "../page/Footer"

export default function MainLayout({title, description, children}) {
  return (
    <>
      <Head title={title} description={description}/>
      <main className="flex flex-col max-w-screen-lg h-screen m-auto pl-4 pr-4 font-mono">
        <Header/>
        <section className="flex-grow text-justify">{children}</section>
        <Footer/>
      </main>
    </>
  )
}
