import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      date: "2025-06-02",
      content:
        "Web development is constantly evolving, with new technologies and techniques emerging all the time. In this blog post, we'll explore some of the key trends shaping the future of web development, including the rise of serverless computing, the increasing importance of accessibility, and the growing popularity of JavaScript frameworks like React and Vue.js.",
      image: "https://images.unsplash.com/photo-1519389950473-47a04ca0052d?ixlib=rb-4.1.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Getting Started with React",
      date: "2025-05-26",
      content:
        "React is a popular JavaScript library for building user interfaces. In this blog post, we'll provide a step-by-step guide to getting started with React, covering topics such as setting up your development environment, creating your first component, and working with state and props.",
      image: "https://images.unsplash.com/photo-1567422274234-aa94065df24a?ixlib=rb-4.1.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "The Importance of Website Accessibility",
      date: "2025-05-19",
      content:
        "Website accessibility is the practice of designing and developing websites that are usable by people with disabilities. In this blog post, we'll discuss the importance of website accessibility, covering topics such as the benefits of accessible design, the different types of disabilities that can affect website use, and the key principles of accessible web design.",
      image: "https://images.unsplash.com/photo-1460668538412-9d6efbca5920?ixlib=rb-4.1.0&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold text-black mb-8">Blog</h1>
        {blogPosts.map((post, index) => (
          <div key={index} className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-black mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{post.date}</p>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export default Blog;