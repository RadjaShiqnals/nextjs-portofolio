export default function About() {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl">
            This is the about page. Add your content here.
          </p>
        </div>
      </div>
    );
  }