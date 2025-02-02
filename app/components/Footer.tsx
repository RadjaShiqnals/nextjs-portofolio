export default function Footer() {
    return (
      <footer className="w-full border-t border-gray-800 bg-black/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }