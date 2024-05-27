"use client";
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const session = useSession();

  return (
    <>
      <div className="flex items-center justify-center bg-white">
        <Head>
          <title>{isSignIn ? 'Sign In' : 'Register'}</title>
        </Head>
        <div className="bg-white p-6 rounded-lg border-2 shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {isSignIn ? 'Sign In' : 'Register'}
          </h1>
          <form>
            {!isSignIn && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            {!isSignIn && (
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {isSignIn ? 'Sign In' : 'Register'}
            </button>
          </form>
          <hr className=' mt-3'/>
          <div className="mt-4">
            <button
              onClick={() => signIn('google',{
                callbackUrl : '/home'
              })}
              className="w-full bg-gray-100 text-black py-2 rounded-lg mb-2 flex items-center justify-center"
            >
              <img className="w-6 h-6 mr-2" src='/google.svg' alt='google logo' />
              {isSignIn ? 'Sign in with Google' : 'Sign up with Google'}
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={() => signIn('facebook', {
                callbackUrl: '/home'
              })}
              className="w-full bg-gray-100 text-black py-2 rounded-lg mb-2 flex items-center justify-center"
            >
              <img className="w-6 h-6 mr-2" src='/facebook.svg' alt='facebook logo' />
              {isSignIn ? 'Sign in with facebook' : 'Sign up with facebook'}
            </button>
          </div>
          <p className="text-center">
            {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={toggleForm}
              className="text-blue-600 hover:underline"
            >
              {isSignIn ? 'Register here' : 'Sign In here'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
