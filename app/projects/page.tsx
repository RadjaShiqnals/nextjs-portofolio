const projects = [
    {
        title: "Project One",
        description: "This is a description for project one.",
        imageUrl: "https://dummyimage.com/600x400/ffffff/0000.jpg&text=Project+One",
    },
    {
        title: "Project Two",
        description: "This is a description for project two.",
        imageUrl: "https://dummyimage.com/600x400/ffffff/0000.jpg&text=Project+Two",
    },
    {
        title: "Project Three",
        description: "This is a description for project three.",
        imageUrl: "https://dummyimage.com/600x400/ffffff/0000.jpg&text=Project+Three",
    },
    {
        title: "Project Four",
        description: "This is a description for project four.",
        imageUrl: "https://dummyimage.com/600x400/ffffff/0000.jpg&text=Project+Four",
    },
];

export default function Projects() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-20">
            <div className="flex flex-col items-center text-center space-y-8">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    My Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold">{project.title}</h2>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}