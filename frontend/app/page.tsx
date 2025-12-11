import Link from "next/link";

const HomePage = () => {
  return (
    <main className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-linear-to-b from-sky-50 to-sky-100 text-gray-800 px-6 py-12">
      <section className="text-center max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-500 font-semibold">Arash Ticket</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-blue-500">
          Fly with confidence
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Discover, book, and manage flights effortlessly. No wait times, just fast search and smooth checkouts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/tickets"
            className="flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span aria-hidden>✈️</span>
            Browse tickets
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 justify-center border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-transform hover:-translate-y-1"
          >
            <span aria-hidden>🧭</span>
            Learn more
          </Link>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
        <FeatureCard title="Search flights" description="Instant search with reliable schedules and pricing." />
        <FeatureCard title="Manage trips" description="Track bookings, passengers, and updates in one place." />
        <FeatureCard title="Explore routes" description="Discover destinations tailored to your preferences." />
      </section>

      <div className="mt-16">
        <Link
          href="/tickets"
          className="bg-linear-to-r from-sky-600 to-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
        >
          Get started now
        </Link>
      </div>
    </main>
  );
};

export default HomePage;

// ---------------------- Feature Card ---------------------- //
interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 text-lg" aria-hidden>
      ✈️
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);
