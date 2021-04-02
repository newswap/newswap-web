import PostListItem from "./PostsListItem";

export default function Posts({ posts }) {
  return (
    <section id="posts">
      <div>
        {posts.map((post) => (
          <PostListItem
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            language={post.language}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
}
