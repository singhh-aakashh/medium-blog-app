import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  content: string;
  authorName: string;
  publishedDate: string;
  id:string
}

export const BlogCard = ({
  title,
  content,
  publishedDate,
  authorName,
  id
}: BlogCardProps) => {
  return (
    
    <Link to={`/blog/${id}`}>
    <div className="flex w-full justify-center md:mx-auto md:justify-center">
      <div className="w-full md:w-2/3 p-6  bg-white border-b border-gray-300">
        <div className="flex mb-2 gap-4 font-medium items-center">
          <Avatar authorName={authorName} />
          <p>{authorName}</p>
          <p className="text-gray-400">{publishedDate}</p>
        </div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-500 ">{content.slice(0,150)} ....</p>
        <div className="mt-3">
          <p>{`${content.length / 100} mins read`}</p>
        </div>
      </div>
    </div>
    </Link>
    
  );
};
export const Avatar = ({ authorName }: { authorName: string }) => {
  if(!authorName){
    authorName="Anonymous"
  }
  const name: string[] = authorName.split(" ");
  // console.log(name)
  const fname: string = name[0][0];
  const lname: string = name[1] ? name[1][0] : "";
  const avatarName: string = fname + lname;

//   console.log(avatarName);
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden  rounded-full bg-gray-600">
        <span className="font-medium text-gray-300">
          {avatarName}
        </span>
      </div>
    </div>
  );
};
