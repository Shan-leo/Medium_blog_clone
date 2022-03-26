import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Head>
                <title>Medium Blog</title>
                <link rel="icon" href=""/>
            </Head>
            <Header/>

            <div className={'flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'}>
                <div className={'px-10 space-y-5'}>
                    <h1 className={'text-6xl max--xl font-serif'}>
                        <span className={'underline decoration-black decoration-4'}>Medium</span> is a place to write,
                        read and connect
                    </h1>
                    <h2>
                        It's easy and free to post your thinking on any topic and connect with millions of readers.
                    </h2>
                </div>
                <img src="https://i.ibb.co/D9k6YVd/blog-medium-icon-34882.png"
                     className={'hidden md:inline-flex h-32 lg:h-full'}/>
            </div>

            {/* Posts */}
        </div>

    )
}

export default Home
