import "./ProjectCard.scss";

const ProjectCard = ({ img, link, title }) => {
    return (
        <div className="pc" >
            <div className="pc-browser" >
                <div className="pc-circle one" ></div>
                <div className="pc-circle two" ></div>
                <div className="pc-circle three" ></div>

                <p>{title}</p>
            </div>

            <a href={link} target="_blank" rel="noreferrer" >
                <img src={img} alt="Animation of my project" className="pc-img" />
            </a>
        </div>
    );
};


export default ProjectCard;