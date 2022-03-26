import Link from "next/link"

const Header = () => {
    return (
        <header className={'flex justify-between max-w-7xl mx-auto py-3'}>
            <div className={'flex items-center space-x-3'}>
                <div>
                    <Link href={'/'}>
                        <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt={''}
                             className={'w-44 object-contain cursor-pointer'}/>
                    </Link>
                </div>
                <div className={'hidden md:inline-flex items-center space-x-5  '}>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className={'rounded-full text-white bg-green-600 px-4 py-1'}>Follow</h3>
                </div>
            </div>
            <div className={'flex space-x-5 items-center text-green-600'}>
                <h3>Sign In</h3>
                <h3 className={'border px-4 py-1 rounded-full border-green-600 '}>Get Started</h3>
            </div>
        </header>
    )
}

export default Header