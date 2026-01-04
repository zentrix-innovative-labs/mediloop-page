import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              Stay updated on Uganda's digital health transformation
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest on universal health access, digital services, and
              citizen data empowerment from Mediloop.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Mediloop */}
          <div className="flex items-start">
            <Link href="/" className="flex items-center mr-4">
              <img
                src="/assets/mediloop.png"
                alt="Mediloop logo"
                className="h-32 w-auto sm:h-32"
              />
            </Link>
            <div>
              <div className="space-y-2 text-gray-400">
                <div>Digitalising healthcare for Uganda</div>
                <div>Universal access • Citizen data control</div>
                <div>EN | SW | LG</div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/products" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Web app
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  iOS app
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Android app
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Chrome extension
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  API
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/support" className="hover:text-white">
                  What's new
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white">
                  Status page
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          <div>
            <h5 className="font-semibold mb-2">Africa HQ</h5>
            <p className="text-gray-400 text-sm">
              Plot 10, Yusuf Lule Road
              <br />
              Kampala, Uganda
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-gray-400 text-sm">
              info@mediloop.co
              <br />
              <Link
                href="https://mediloop.co"
                className="hover:text-white underline"
              >
                mediloop.co
              </Link>
              <br />
              +256 700 000000
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">Mediloop Health • 2025</p>
          <p className="text-gray-400 text-sm">info@mediloop.co</p>
        </div>
      </div>
    </footer>
  );
}
