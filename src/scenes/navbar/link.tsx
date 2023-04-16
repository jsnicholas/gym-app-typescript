import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    // change page name to lowercase and remove spaces
const lowerCasePage = page.toLowerCase().replace(/ /g, "")

  return (
    // create class for navbar links
    <AnchorLink 
    className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300
    `}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link