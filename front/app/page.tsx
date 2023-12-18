import LandingTop from "./components/landing/LandingTop"
import LandingMiddle from "./components/landing/LandingMiddle"
import { useSelector } from "./utils/redux/store"

export default function Home() {
  
  return (
    <>
    <main className="flex flex-col items-center gap-32 p-24 overflow-hidden">
      <LandingTop />
      <LandingMiddle />
    </main>
    </>
  )
}
