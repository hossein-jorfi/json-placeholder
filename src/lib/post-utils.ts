export const STORAGE_KEY = "liked-post"

export const handlePostLikeLocalStorage = (postId: number) => {
  if (!localStorage?.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
  const likedPosts = JSON?.parse(localStorage?.getItem(STORAGE_KEY) || "");

  const isLiked = likedPosts.find((id: number) => id == postId);
  if (isLiked) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(likedPosts?.filter((id: number) => id != postId))
    );
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...likedPosts, postId]));
  }
};

export const isPostLiked = (postId: number) => {
  if (!localStorage?.getItem(STORAGE_KEY)) {
    return false;
  } else {
    const likedPosts = JSON?.parse(localStorage?.getItem(STORAGE_KEY) || "");
    if (likedPosts?.find((i: number) => i == postId) == undefined) {
      return false;
    } else {
      return true;
    }
  }
};
