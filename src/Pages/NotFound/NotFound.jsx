import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <section class="min-h-screen bg-white">
        <div class="py-10 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-8 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
              404
            </h1>
            <p class="mb-6 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              Something's missing.
            </p>
            <p class="mb-10 text-lg font-md text-gray-700 ">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to="/"
              class="inline-flex text-gray-300 bg-gray-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
