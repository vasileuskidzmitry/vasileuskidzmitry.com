import MainLayout from "../components/layout/MainLayout"

export default function Home() {
  return (
    <MainLayout title="Vasileuski Dzmitry" description="Vasileuski Dzmitry personal website">
      <h1 className="text-xl font-bold mb-4">> Description</h1>
      <p className="mb-4">Coming soon...</p>
      <a className="mb-4 flex justify-between" href="https://www.credly.com/badges/85ff3d48-80e7-4dc1-a7f5-4c53531a01b3"
         target="_blank">
        <img src="/adobe-certification-badge.png" width={450} height={165} title="Adobe Certificate"/>
      </a>
    </MainLayout>
  )
}
