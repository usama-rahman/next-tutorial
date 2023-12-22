import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-xl">AboutPage</h1>
      <Link href="/" className="text-2xl">
        Home page
      </Link>
    </div>
  );
};

export default AboutPage;
