import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerSections = [
  {
    title: "For Patients",
    links: [
      {
        label: "Patient Portal",
        href: "https://app.mediloop.co",
        external: true,
      },
      {
        label: "WhatsApp Consultation",
        href: "https://wa.me/256775035244",
        external: true,
      },
      {
        label: "Get Your Health ID",
        href: "/support",
      },
      {
        label: "Book Appointment",
        href: "/support",
      },
      {
        label: "FAQ",
        href: "/support",
      },
    ],
  },
  {
    title: "For Providers",
    links: [
      {
        label: "Provider Portal",
        href: "https://providers.mediloop.co",
        external: true,
      },
      {
        label: "Register Facility",
        href: "/providers",
      },
      {
        label: "Integration Guide",
        href: "/providers",
      },
    ],
  },
  {
    title: "For Developers",
    links: [
      {
        label: "Developer Portal",
        href: "https://developers.mediloop.co",
        external: true,
      },
      {
        label: "API Documentation",
        href: "https://docs.mediloop.co",
        external: true,
      },
      {
        label: "Build on Mediloop",
        href: "https://developers.mediloop.co",
        external: true,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Mediloop */}
          <div className="flex items-start">
            <Link href="/" className="flex items-center mr-4">
              <Image
                src="/assets/mediloop.png"
                alt="Mediloop logo"
                height={240}
                width={320}
                className="h-32 w-auto sm:h-32"
              />
            </Link>
            <div>
              <div className="space-y-2 text-gray-400">
                <div>Digitalising healthcare for Uganda</div>
                <div>Universal access • Citizen data control</div>
              </div>
            </div>
          </div>

          {footerSections.map((footer, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-4">{footer.title}</h4>
              {footer.links.map((link, idx) => (
                <ul key={idx} className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          <div>
            <h5 className="font-semibold mb-2">Office Location</h5>
            <p className="text-gray-400 text-sm">
              Plot 19-21 PortBell Road
              <br />
              Nakawa, Kampala
              <br />
              Uganda
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-gray-400 text-sm">
              Email: info@mediloop.co
              <br />
              WhatsApp:{" "}
              <Link
                href="https://wa.me/256775035244"
                className="hover:text-white underline"
              >
                +256 775 035244
              </Link>
              <br />
              Phone: +256 775 035244
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">Mediloop Health • 2026</p>
          <p className="text-gray-400 text-sm">info@mediloop.co</p>
        </div>
      </div>
    </footer>
  );
}
