const storageName = "liked-post"

export const handlePostLikeLocalStorage = (postId: number) => {
  if (!localStorage?.getItem(storageName)) {
    localStorage.setItem(storageName, JSON.stringify([]));
  }
  const likedPosts = JSON?.parse(localStorage?.getItem(storageName) || "");

  const isLiked = likedPosts.find((id: number) => id == postId);
  if (isLiked) {
    localStorage.setItem(
      storageName,
      JSON.stringify(likedPosts?.filter((id: number) => id != postId))
    );
  } else {
    localStorage.setItem(storageName, JSON.stringify([...likedPosts, postId]));
  }
};

export const isPostLiked = (postId: number) => {
  if (!localStorage?.getItem(storageName)) {
    return false;
  } else {
    const likedPosts = JSON?.parse(localStorage?.getItem(storageName) || "");
    if (likedPosts?.find((i: number) => i == postId) == undefined) {
      return false;
    } else {
      return true;
    }
  }
};
