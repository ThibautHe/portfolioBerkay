export default function useNextProject(projects, id) {
  const projectIndex = projects.findIndex(
    (project) => project.id === parseInt(id)
  );
  let nextProject = projectIndex;

  console.log(projectIndex, projects.length);
  if (projectIndex + 1 >= projects.length) {
    nextProject = projects[0];
  } else {
    nextProject = projects[projectIndex + 1];
  }
  console.log(nextProject);
  return { nextProject };
}
