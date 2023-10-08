import Link from "next/link";
import { PostMetadata } from "./postMetaData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Image from 'next/image';


const PostCard = (props: PostMetadata) => {
  
  return (
    <Card>
      <CardHeader>
        <Image className="mt-4 mb-4" src={`/images/${props.img}` } alt="post image" height={300} width={300}/>
        <Link href={`/posts/${props.slug}`}>
          <CardTitle className="hover:underline">{props.title}</CardTitle>
        </Link>
        <CardDescription>{props.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.subtitle}</p>
      </CardContent>
    </Card>
  );
};

export default PostCard;


