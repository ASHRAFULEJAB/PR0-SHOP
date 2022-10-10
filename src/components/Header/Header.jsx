import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      
              <div class="bg-gray-900">
                <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                  <div class="relative  grid items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ul class="flex items-center md:space-x-3  lg:space-x-8 lg:flex">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 lg:text-3xl lg:mr-2 md:mr-3"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/orders"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 lg:text-3xl lg:mr-2 md:mr-3"
                        >
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/carts"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 lg:text-3xl lg:mr-2  md:mr-3"
                        >
                          Cart
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 lg:text-3xl lg:mr-2 md:mr-3"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center lg:mr-3 lg:mx-auto "
                    >
                      <svg
                        class="w-8 text-teal-accent-400 "
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span class="ml-2 lg:text-3xl font-bold tracking-wide text-gray-100 uppercase">
                        PRO SHOP
                      </span>
                    </Link>
                    
                      
                    
                  </div>
                </div>
              </div>
            );
          };


export default Header;