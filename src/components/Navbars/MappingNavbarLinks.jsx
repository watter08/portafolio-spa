import PropTypes from 'prop-types';

const MappingDropLi = ({ Drops = [], currentLenguaje = 'Title' }) => (
  Drops.map(drop => (
    <li key={`${drop[currentLenguaje]}_1`}>
      <a className="dropdown-item" href={drop.Link || '#'}>{drop[currentLenguaje]}</a>
    </li>
  ))
);

MappingDropLi.propTypes = {
  Drops: PropTypes.arrayOf(PropTypes.shape({
    Link: PropTypes.string,
    Title: PropTypes.string,
    Key: PropTypes.string,
  })),
  currentLenguaje: PropTypes.string,
};

MappingDropLi.defaultProps = {
  Drops: [],
  currentLenguaje: 'Title',
};

const MappingNavbarLinks = ({ Links = [], currentLenguaje = 'Title' }) => (
   Links && Links?.length > 0 ? Links.map(link => (
      link && link.IsDropDown ? (
        <li className="nav-item dropdown" key={`${link[currentLenguaje]}_1`}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {link[currentLenguaje]}
          </a>
          <ul className="dropdown-menu">
            <MappingDropLi Drops={link && link?.Drops ? link.Drops : []} currentLenguaje={currentLenguaje} />
          </ul>
        </li>
      ) : (
        <li className="nav-item" key={`${link[currentLenguaje]}_2`}>
          <a className="nav-link active" aria-current="page" href="#">{link[currentLenguaje]}</a>
        </li>
      )
    )) : ''
);

MappingNavbarLinks.propTypes = {
  Links: PropTypes.arrayOf(PropTypes.shape({
    Key: PropTypes.string,
    Title: PropTypes.string,
    IsDropDown: PropTypes.bool,
    Drops: PropTypes.arrayOf(PropTypes.shape({
      Link: PropTypes.string,
      Title: PropTypes.string,
      Key: PropTypes.string,
    })),
  })),
  currentLenguaje: PropTypes.string,
};

MappingNavbarLinks.defaultProps = {
  Links: [],
  currentLenguaje: 'Title',
};

export default MappingNavbarLinks;