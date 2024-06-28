import { log } from "console";
import { sign } from "crypto";
import { useEffect, useRef, useState } from "react";

const BASE_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.2.1/data/en_US/champion";

interface Post {
  id: string;
  key: number;
  title: string;
  description: string;
}

export function Demo() {
  const [error, setError] = useState();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchposts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}.json`, {
          method: "GET",
          signal: abortControllerRef.current?.signal,
        });
        const posts = await response.json();
        const data = Object.values(posts.data) as Post[];
        setPosts(data);
      } catch (error: any) {
        if ((error.name = "AbortError")) {
          console.log("aborted");
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }

      console.log(posts);
    };
    fetchposts();
  }, []);

  if (isLoading) {
  }
  if (error) {
    return <div>something went wrong</div>;
  }

  return (
    <div>
      <h1>Data fetching react</h1>
      {isLoading && <div>loading...</div>}
      {!isLoading && (
        <ul>
          {posts.map((post) => (
            <li key={post.key}>
              {post.id}
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
