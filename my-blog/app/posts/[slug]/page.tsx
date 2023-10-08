import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetaData";
import { ThemeProvider } from "@/components/theme-provider";


const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      <div className="my-10 text-center">
        <h1 className="text-3xl font-semibold">{post.data.title}</h1>
        <p className="mt-2">{post.data.date}</p>
      </div>

      <article className="prose lg:prose-xl dark:prose-invert mx-auto max-w-4xl prose-code:text-purple-400">
        {   
            <Markdown>{post.content}</Markdown>
            }
      </article>
    </div>
  );
};

export default PostPage;