export const MappingNavbarLinks = (Links = []) => (
    Links.map(link => {
        return link && link?.IsDropDown ? 
            <li className="nav-item dropdown" key={`${link?.Title}_1`}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {link?.Title}
                </a>
                <ul className="dropdown-menu">
                    {MappingDropLi(link?.Drops)}
                </ul>
            </li>
        : 
        <li className="nav-item" key={`${link?.Title}_2`}>
            <a className="nav-link active" aria-current="page" href="#">{link?.Title}</a>
        </li>
    })
)

const MappingDropLi = (Drops = []) => (
     Drops.map(drop => (
        <li key={`${drop?.Title}_1`}>
            <a key={`${drop?.Title}_2`} className="dropdown-item" href={drop?.Link}>{drop?.Title}</a>
        </li>
    ))
  );