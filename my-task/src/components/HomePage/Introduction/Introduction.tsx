import Link from "next/link";

const Introduction = () => {
    return (
        <div className={'w-[40%] bg-[#CFDAEC98] h-max rounded p-4'}>
            <aside>
                <h3 className={'font-medium text-[1.5rem]'}>
                    Looking for your next car? <br/>The Car Dealer App is here to help!<br/>
                    Explore a wide selection of new and used vehicles and find your dream car in just a
                    few taps.
                </h3>
                <h4 className={'font-normal'}>
                    <Link
                        href={'/play-market-link'}
                        className={'text-[#094d74]'}
                    >Download&nbsp;</Link>
                     now and drive away with the best deal!
                </h4>
            </aside>
        </div>
    );
};

export {Introduction}