import Link from "next/link";
import { PostMetadata } from "./postMetaData";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-400 p-4 rounded-md shadow-sm
      bg-transparent max-w-2xl mt-10"
    >
      <p className="text-sm mb-3">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" hover:underline mb-4 font-semibold">{props.title}</h2>
      </Link>
      <p className="text-slate-500">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
