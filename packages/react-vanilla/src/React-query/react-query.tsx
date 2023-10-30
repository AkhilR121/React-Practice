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
  async function apiCall() {
    return await fetch("https://fakestoreapi.com/products").then(res =>
      res.json()
    );
  }
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => apiCall(),
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <>
      {postsQuery.data.map((post: any) => (
        <>
          <div key={post.id}>{post.title}</div>
          <img src={post.image} alt="" />
        </>
      ))}
    </>
  );
}

function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}
