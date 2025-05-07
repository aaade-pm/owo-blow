import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";
import { Helmet } from "react-helmet";

const HomePage = lazy(() => import("./pages/Homepage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
// const BlogPage = lazy(() => import("./pages/BlogPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/Services"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
    title: "Your trusted partner in financial solutions - Owo Blow",
    description:
      "Welcome to Owo Blow, your trusted partner in financial solutions.",
  },
  {
    path: "careers",
    element: <CareerPage />,
    title: "Careers - Owo Blow",
    description: "Join Owo Blow and be part of our growing team.",
  },
  // {
  //   path: "blog",
  //   element: <BlogPage />,
  //   title: "Blog - Latest Insights | Owo Blow",
  //   description: "Read the latest insights and updates from Owo Blow's experts.",
  // },
  {
    path: "about",
    element: <AboutPage />,
    title: "About Us - Owo Blow",
    description:
      "Learn more about Owo Blow and our mission to provide excellent financial services.",
  },
  {
    path: "our-services/:serviceId",
    element: <ServicesPage />,
    title: "Discover the range of financial services we offer - Owo Blow",
    description:
      "Discover the range of financial services we offer at Owo Blow",
  },
  // {
  //   path: "contact",
  //   element: <ContactPage />,
  //   title: "Contact Us - Owo Blow",
  //   description: "Get in touch with Owo Blow for inquiries and financial consultation.",
  // },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map(({ path, element, title, description }) => ({
      path,
      element: (
        // <Suspense fallback={<div>Loading...</div>}>
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          {element}
        </>
        // </Suspense>
      ),
    })),
  },
]);

export default router;
