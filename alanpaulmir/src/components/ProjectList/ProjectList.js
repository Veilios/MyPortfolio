import ProjectCard from '../ProjectCard/ProjectCard.js';
import { products } from "../../data";
import "./ProjectList.scss";

const ProjectList = () => {
    return (
        <div className="pl" >
            <div className="pl-texts" >
                <h1 className="pl-title" >Create & Inspire.</h1>
                <p className="pl-desc" >
                    Of the years I've been a a Software Developer, These are some of my
                    favorite projects to date. Take a look around!
                </p>
            </div>
            <div className="pl-list" >
                {products.map((item) => (
                    <ProjectCard key={item.id} img={item.img} link={item.link} title={item.title}/>
                ))}
            </div>
        </div>
    );
};


export default ProjectList;