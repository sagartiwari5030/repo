import React, { useState } from 'react';


export default function Premium({ elementId }) {
  
  return (
      <>
      <div id={elementId}>
      <div class="text-center mb-8">
      <h2 class="text-4xl font-bold text-indigo-600	 underline decoration-red-500">Pricing & Plans</h2>
  </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
      {/* <!-- Price Card 1 --> */}
      {/*bg */}
     
  {/* 1st card */}
  <div class="mx-auto w-full max-w-sm p-4 bg-white rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-sky-900 	 ... dark:border-gray-700">
  <h5 class="mb-4 text-2xl font-medium text-white  decoration-pink-500">Mini plan</h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
  <span class="text-3xl font-semibold">Rs.</span>
  <span class="text-5xl font-extrabold tracking-tight">7</span>
  <span class="ms-1 text-xl font-normal text-white">/Day</span>
  </div>
  <ul role="list" class="space-y-5 my-7">
  <li class="flex items-center">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
   <span class="text-base font-normal leading-tight text-white  ms-3 ml-2">1 mobile-only Premium account</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Offline listening of up to 30 songs on 1 device</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Basic audio quality</span>
  </li>
  <li class="flex  decoration-gray-500">
  <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">One-time payment</span>
  </li>
  </ul>
  <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get Premium Mini</button>
  </div>
  {/* 2nd card */}
  <div class="mx-auto w-full max-w-sm p-4 bg-white rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-sky-900  ... dark:border-gray-700">
  <h5 class="mb-4 text-2xl font-medium text-white  decoration-pink-500 ">Individual</h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
  <span class="text-3xl font-semibold">Rs.</span>
  <span class="text-5xl font-extrabold tracking-tight">119</span>
  <span class="ms-1 text-xl font-normal text-white">For 2month</span>
  </div>
  <ul role="list" class="space-y-5 my-7">
  <li class="flex items-center">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white  ms-3 ml-2">1 Premium account</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Cancel anytime</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Subscribe or one-time payment</span>
  </li>
  <li class="flex line-through decoration-gray-500">
  <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">₹119/month after</span>
  </li>
 
  </ul>
  <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get Premium Individual</button>
  </div>
  
  {/* 3rd card */}
  <div class="mx-auto w-full max-w-sm p-4 bg-white rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-sky-900  ... dark:border-gray-700">
  <h5 class="mb-4 text-2xl font-medium text-white  decoration-pink-500 ">Student</h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
  <span class="text-3xl font-semibold">Rs.</span>
  <span class="text-5xl font-extrabold tracking-tight">59</span>
  <span class="ms-1 text-xl font-normal text-white">For 2month</span>
  </div>
  <ul role="list" class="space-y-5 my-7">
  <li class="flex items-center">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white  ms-3 ml-2">1 verified Premium account</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Discount for eligible students</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Cancel anytime</span>
  </li>
  <li class="flex line-through decoration-gray-500">
  <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">₹59/month after</span>
  </li>
 
  </ul>
  <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get Premium Student</button>
  </div>
  
  {/* 4th card */}
  <div class="mx-auto w-full max-w-sm p-4 bg-white rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-sky-900  ... dark:border-gray-700">
  <h5 class="mb-4 text-2xl font-medium text-white  decoration-pink-500 ">Duo</h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
  <span class="text-3xl font-semibold">Rs.</span>
  <span class="text-5xl font-extrabold tracking-tight">149</span>
  <span class="ms-1 text-xl font-normal text-white">For 2month</span>
  </div>
  <ul role="list" class="space-y-5 my-7">
  <li class="flex items-center">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white  ms-3 ml-2">2 Premium accounts</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Subscribe or one-time payment</span>
  </li>
  <li class="flex">
  <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">Cancel anytime</span>
  </li>
  <li class="flex line-through decoration-gray-500">
  <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
  <span class="text-base font-normal leading-tight text-white ms-3 ml-2">₹149/month after</span>
  </li>
 
  </ul>
  <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get Premium Duo</button>
  </div>
  
  {/* 5th */}
  
  
  </div>
  
      </>
    )
  }
  