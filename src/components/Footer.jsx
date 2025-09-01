import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap space-x-4 text-sm mb-4">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="#" className="hover:text-white">
            Terms and Conditions
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white">
            Collection Statement
          </Link>
          <Link href="#" className="hover:text-white">
            Help
          </Link>
          <Link href="#" className="hover:text-white">
            Manage Account
          </Link>
        </div>
        <p className="text-xs mb-8">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {/* Aquí puedes usar componentes SVG o de una librería de íconos */}
            <img
              src="/prueba/assets/social/facebook-white.svg"
              alt="Facebook"
              className="h-6 w-6"
            />
            <img
              src="/prueba/assets/social/twitter-white.svg"
              alt="Twitter"
              className="h-6 w-6"
            />
            <img
              src="/prueba/assets/social/instagram-white.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </div>
          {/* App Store Badges */}
          <div className="flex flex-wrap items-center gap-4">
            <img
              src="/prueba/assets/store/app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="/prueba/assets/store/play-store.svg"
              alt="Play Store"
              className="h-10"
            />
            <img
              src="/prueba/assets/store/windows-store.svg"
              alt="Microsoft Store"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
