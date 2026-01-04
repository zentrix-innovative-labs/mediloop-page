"use client";

import { Star } from "lucide-react";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Mediloop is launching soon in Uganda
        </h2>
        <div className="flex items-center justify-center space-x-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-teal-400 text-teal-400" />
          ))}
        </div>
        <p className="text-lg text-gray-700 mb-8">
          Be among the first to experience secure, AI-powered healthcare access
          for all Ugandans. Universal Health ID, instant AI diagnostics, and
          seamless provider connections - coming soon!
        </p>
        <Link
          href="mailto:info@mediloop.co"
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-teal-700 transition"
        >
          Join the waitlist
        </Link>
      </div>
    </section>
  );
}
