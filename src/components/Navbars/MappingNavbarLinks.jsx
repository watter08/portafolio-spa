import PropTypes from 'prop-types';

const MappingDropLi = ({ Drops = []}) => (
  Drops.map((drop, index) => (
    <li key={`${drop?.Title}_${index}`}>
      <a className="dropdown-item" href={drop.Link || '#'}>{drop?.Title}</a>
    </li>
  ))
);

MappingDropLi.propTypes = {
  Drops: PropTypes.arrayOf(PropTypes.shape({
    Link: PropTypes.string,
    Title: PropTypes.string,
    Key: PropTypes.string,
  })),
};



const MappingNavbarLinks = ({ Links = []}) => (
   Links && Links?.length > 0 ? Links.map(link => (
      link && link.IsDropDown ? (
        <li className="nav-item dropdown" key={`${link}_1`}>
          <a className="nav-link dropdown-toggle"  href={link?.Link} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {link?.Title}
          </a>
          <ul className="dropdown-menu">
            <MappingDropLi Drops={link && link?.Drops ? link.Drops : []} />
          </ul>
        </li>
      ) : (
        <li className="nav-item" key={`${link?.Title}_2`}>
          <a className="nav-link active" aria-current="page" target={String(link?.Link).startsWith("#") ? "" : "_blank"} rel='noreferrer' href={link?.Link}>{link?.Title}</a>
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
  }))
};


export default MappingNavbarLinks;