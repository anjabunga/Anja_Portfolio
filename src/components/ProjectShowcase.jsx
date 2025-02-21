import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "https://via.placeholder.com/300",
    description: "Deskripsi singkat tentang project 1."
  },
  {
    id: 2,
    title: "Project 2",
    image: "https://via.placeholder.com/300",
    description: "Deskripsi singkat tentang project 2."
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://via.placeholder.com/300",
    description: "Deskripsi singkat tentang project 3."
  }
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Project Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedProject(project)}
          >
            <CardContent className="p-4 flex flex-col items-center">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg" />
            <p className="mt-4">{selectedProject.description}</p>
            <Button onClick={() => setSelectedProject(null)} className="mt-4">Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
