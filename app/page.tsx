import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src="https://dummyimage.com/600x600/ffffff/0000.jpg&text=Profile"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-gradient">
          Welcome to My Portfolio
        </h1>
        <p className="text-gray-400 max-w-2xl">
          I'm a passionate developer who loves creating beautiful and functional web experiences.
          Let's build something amazing together.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-white/[.06] rounded-lg hover:bg-white/[.1] transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-white/[.06] rounded-lg hover:bg-white/[.1] transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}