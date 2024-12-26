export const handlePostLikeLocalStorage = (postId: number) => {
  if (!localStorage?.getItem("liked-post")) {
    localStorage.setItem("liked-post", JSON.stringify([]));
  }
  const likedPosts = JSON?.parse(localStorage?.getItem("liked-post") || "");

  const isLiked = likedPosts.find((id: number) => id == postId);
  if (isLiked) {
    localStorage.setItem(
      "liked-post",
      JSON.stringify(likedPosts?.filter((id: number) => id != postId))
    );
  } else {
    localStorage.setItem("liked-post", JSON.stringify([...likedPosts, postId]));
  }
};

export const isPostLiked = (postId: number) => {
  if (!localStorage?.getItem("liked-post")) {
    return false;
  } else {
    const likedPosts = JSON?.parse(localStorage?.getItem("liked-post") || "");
    if (likedPosts?.find((i: number) => i == postId) == undefined) {
      return false;
    } else {
      return true;
    }
  }
};
