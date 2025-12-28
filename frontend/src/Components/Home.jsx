import { MapPin, Compass, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="w-full bg-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-bold">Go Quest</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Quests</Link>
                  <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Rewards</Link>
                  <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Community</Link>
                  <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Log in</Link>
                <Link to="#" className="ml-3 px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-500">Sign up</Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            A Gamified Travel Experience
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:text-xl">
            Embark on exciting quests, earn rewards, and create unforgettable memories as you explore the world.
          </p>
          <div className="mt-10 flex justify-center space-x-8 sm:space-x-16">
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 sm:h-16 sm:w-16" />
              <span className="mt-2 text-sm sm:text-base">Discover</span>
            </div>
            <div className="flex flex-col items-center">
              <Compass className="h-12 w-12 sm:h-16 sm:w-16" />
              <span className="mt-2 text-sm sm:text-base">Explore</span>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="h-12 w-12 sm:h-16 sm:w-16" />
              <span className="mt-2 text-sm sm:text-base">Achieve</span>
            </div>
          </div>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link to="/quest-mode" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Start Your Adventure
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link to="/tripplanner" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Plan Your Adventure
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}