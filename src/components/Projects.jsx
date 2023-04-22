import "./Projects.css";

export default function Project(props) {
  return (
    <div class="projects">
      <h3 class="projectSkills">{props.projectHeader}</h3>
      <ul>
        {Object.keys(props.projects).map((key) => (
          <li class="projectSkills" key={key}>
            <a href={props.projects[key].github} class="live-link">
              {props.projects[key].name}
            </a>
            <p class="usedCode">Languages: {props.projects[key].languages}</p>
            <p class="projectText">
              Project Info: {props.projects[key].projectInfo}
            </p>
            <img
              src={props.projects[key].image} class="projectImage"
              alt={props.projects[key].name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
