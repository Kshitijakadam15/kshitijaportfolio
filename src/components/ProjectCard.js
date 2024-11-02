import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={12} md={6}>
  <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none',color:"white" }}>
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </a>
</Col>

  );
};
