import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="bg-gray-900 rounded-lg shadow-sm m-4 dark:bg-gray-900">

    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">Binomy</a>. Tous les droits sont reservés.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/about"><a href="#" className="hover:underline me-4 md:me-6">A propos</a></Link>
        </li>
        <li>
        <Link to="/contact"><a href="#" className="hover:underline me-4 md:me-6">Contact</a></Link>
        </li>
        <li>
        <Link to="/actualites"> <a href="#" className="hover:underline me-4 md:me-6">Actualités</a></Link>
        </li>
        <li>
        <Link to="register"> <a href="#" className="hover:underline">S'inscrire</a></Link>
        </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer