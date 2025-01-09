import Link from "next/link";
import css from './Header.module.css'
const Header = () => {
    return (
        <header className={'pt-5 flex justify-between items-center wrapper'}>
            <Link href={'/'} className={'font-medium text-4xl'}>Car Dealer App</Link>
            <nav>
                <ul className={'flex gap-8'}>
                    <Link href={' '} className={'font-normal text-3xl ' + css.underline}>Cars</Link>
                    <Link href={' '} className={'font-normal text-3xl ' + css.underline}>Bicycles</Link>
                    <Link href={' '} className={'font-normal text-3xl ' + css.underline}>Buses</Link>
                </ul>
            </nav>
        </header>
    );
};

export {Header}