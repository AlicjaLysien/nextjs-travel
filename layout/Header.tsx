import Link from 'next/link';

const navItems: object = {
    'Home': '/', 
    'About': '/about'
};

export default function Header() {
  return (
    <header>
        <nav>
            <ul> 
                {Object.entries(navItems).map((item, id) => {
                    const [name, url] = item;
                    return ( <li key={id}>
                        <Link href={url}>{name}</Link>
                    </li>)
                })}
            </ul>
        </nav>
    </header>
  )
}
