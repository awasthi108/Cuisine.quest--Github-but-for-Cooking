"use client"

import React, { useState } from "react"

const explanationImages = [
  "/explanation1.jpg", // SimplyCook, Gousto, HelloFresh
  "/explanation2.jpg", // Table with various dishes
  "/explanation3.jpg", // Healthy lunchboxes
]

export default function SubscriptionPage() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState("month")

  // Carousel navigation
  const handleDotClick = (idx: number) => setCarouselIndex(idx)

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-orange-50 to-orange-100 p-4">
      {/* Header */}
      <div className="w-full max-w-md mx-auto mt-4">
        <button className="flex items-center text-orange-600 font-semibold mb-4">
          <span className="mr-2">&#8592;</span> Subscription plans
        </button>
      </div>

      {/* Feature Explanation Carousel */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <div className="w-full h-56 bg-white rounded-2xl shadow-md flex items-center justify-center text-gray-400 text-lg font-semibold mb-4 overflow-hidden relative">
          <img
            src={explanationImages[carouselIndex]}
            alt={`explanation-${carouselIndex}`}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {explanationImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-1.5 rounded-full transition-all duration-200 ${carouselIndex === idx ? "bg-orange-400" : "bg-orange-200"}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="w-full max-w-md mx-auto">
        <p className="text-green-700 font-semibold mb-3">Pick a plan</p>
        <div className="flex gap-4 mb-8">
          {/* Monthly Plan */}
          <button
            type="button"
            onClick={() => setSelectedPlan("month")}
            className={`flex-1 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl p-4 text-white relative shadow-md transition-all duration-200 outline-none focus:ring-2 focus:ring-orange-400 ${selectedPlan === "month" ? "glass border-2 border-orange-400" : ""}`}
          >
            <span className="absolute -top-3 right-3 bg-white text-orange-500 text-xs font-bold px-2 py-0.5 rounded-full shadow">Save 50%</span>
            <div className="text-sm line-through opacity-70">₹ 99.00</div>
            <div className="text-2xl font-bold">₹ 49.00</div>
            <div className="text-xs mt-1">per month</div>
          </button>
          {/* Yearly Plan */}
          <button
            type="button"
            onClick={() => setSelectedPlan("year")}
            className={`flex-1 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl p-4 text-white relative shadow-md transition-all duration-200 outline-none focus:ring-2 focus:ring-orange-400 ${selectedPlan === "year" ? "glass border-2 border-orange-400" : ""}`}
          >
            <span className="absolute -top-3 right-3 bg-white text-orange-500 text-xs font-bold px-2 py-0.5 rounded-full shadow">Save 58%</span>
            <div className="text-sm line-through opacity-70">₹ 1199.00</div>
            <div className="text-2xl font-bold">₹ 499.00</div>
            <div className="text-xs mt-1">per year</div>
          </button>
        </div>
        {/* Subscribe Button */}
        <button className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
          Subscribe Now
        </button>
      </div>
    </div>
  )
} 