import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up | Rest&Vest",
  description: "Create an account with Rest&Vest",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-purple-600 text-white w-12 h-12 rounded-md flex items-center justify-center">
            <TrendingUp className="h-7 w-7" />
          </div>
        </div>
        <h1 className="mt-4 text-center text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
          Rest&Vest
        </h1>
        <h2 className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 sm:rounded-lg sm:px-10">
          <div className="flex justify-center w-full">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-purple-600 hover:bg-purple-700 text-sm normal-case",
                  card: "",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "border-gray-300 dark:border-gray-700",
                  socialButtonsBlockButtonText: "font-normal",
                  formFieldLabel: "text-gray-700 dark:text-gray-300",
                  formFieldInput:
                    "rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
                  footerActionText: "text-gray-600 dark:text-gray-400",
                  footerActionLink: "text-purple-600 hover:text-purple-500",
                  main: "w-full mx-auto",
                  form: "w-full",
                  formFieldInputShowPasswordButton: "text-gray-500",
                  rootBox: "w-full mx-auto",
                },
                layout: {
                  socialButtonsPlacement: "top",
                  socialButtonsVariant: "blockButton",
                  termsPageUrl: "https://clerk.com/terms",
                },
              }}
              path="/sign-up"
              signInUrl="/sign-in"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            ← Return to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
