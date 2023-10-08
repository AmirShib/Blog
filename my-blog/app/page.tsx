import getPostMetadata from '@/components/getPostMetaData';
import Image from 'next/image';
import PostCard from '@/components/postCard';
import { Satisfy } from 'next/font/google';


const text_style = Satisfy({ subsets: ['latin'], weight: "400" });

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostCard key={post.slug} {...post} />
  ));

  return (
    <div>
      <div className='flex items-center justify-center'>
        <Image
        src={"/images/crazy.gif"} 
        alt='Earth' 
        height={600}
        width={600}/>
      </div>
      <div className={text_style.className}>
        <p className=' felx text-center justify-center max-w-3xl text-4xl mx-auto font-thin mb-10'>In the book of life, every experience is a page, and the wise seek to read from the chapters of nature, people, and the world</p>
      </div>
      <div className="grid grid-transparent grid-cols-1 md:grid-cols-2 gap-4 px-10">{postPreviews}</div>
    </div>
    
  );
};

export default HomePage;
