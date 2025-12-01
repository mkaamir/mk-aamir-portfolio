import { PenTool, Code, Layout, ShoppingCart, TrendingUp, Server } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: PenTool,
      title: "Front-End Development",
      description: "Building responsive and scalable front-end applications using modern technologies like React, Next.js, Tailwind CSS, Bootstrap, and more. Ideal for landing pages, portfolios, business websites, and dashboards.",
    },
    {
      icon: Code,
      title: "Full-Stack Web Application Development",
      description: "Building secure and scalable full-stack web applications using MERN, PHP & MySQL, and Laravel. Ideal for authentication systems, dashboards, admin panels, CRUD operations, and fully custom business applications.",
    },
    {
      icon: Layout,
      title: "WordPress Website Development",
      description: "Creating modern and fully responsive WordPress websites with custom themes, page builders, and plugins. Ideal for business sites, blogs, portfolios, landing pages, and user-friendly content management.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Store Development",
      description: "Building secure and high-performance e-commerce stores using WooCommerce, MERN, or Laravel. Ideal for product management, cart systems, checkout flows, payment gateways, and full online shopping experiences.",
    },
    {
      icon: TrendingUp,
      title: "SEO & Speed Optimization",
      description: "Improving website visibility and performance through technical SEO, on-page optimization, and speed enhancements. Ideal for boosting rankings, increasing traffic, reducing load times, and improving user engagement.",
    },
    {
      icon: Server,
      title: "API Integration & Backend Development",
      description: "Optimizing applications for speed, accessibility, and best practices. Ideal for RESTful APIs, third-party integrations, database management, and server-side logic using Node.js, Express, and MongoDB.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Services</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          I offer a range of services tailored to help your business succeed in the digital landscape
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900 p-8 rounded-lg border-2 border-yellow-400 md:border-opacity-35"
              >
                <div className="mb-6 inline-block p-4 bg-yellow-400 bg-opacity-10 rounded-lg">
                  <IconComponent size={32} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}