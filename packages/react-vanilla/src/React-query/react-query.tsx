import { useQuery } from "@tanstack/react-query";

type PostType = {
  id: number | string;
  title: string;
};

const POSTS: PostType[] = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];

export function RQuery() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      wait(1000).then(() => {
        return [...POSTS];
      }),
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <>
      {postsQuery.data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
}

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}
