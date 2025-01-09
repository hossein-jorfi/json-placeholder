import { describe, expect, test } from "vitest";
import { handlePostLikeLocalStorage, STORAGE_KEY } from "./post-utils";
import { afterEach, beforeEach } from "vitest";

describe("Like Posts", () => {
  const POST_ID = 1;

  afterEach(() => {
    localStorage.clear();
  });
  beforeEach(() => {
    localStorage.clear();
  });

  test("if STORAGE_KEY not exist in localstorage create it first", () => {
    handlePostLikeLocalStorage(POST_ID);
    const result = localStorage.getItem(STORAGE_KEY);
    expect(result).toBeTruthy();
  });

  test("push given id to liked-post array", () => {
    handlePostLikeLocalStorage(POST_ID);
    const result: number[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || ""
    );
    expect(result).toContain(POST_ID);
  });

  test("remove given id from liked-post array if its already there", () => {
    // first time add it to array, second time shuld remove it
    handlePostLikeLocalStorage(POST_ID);
    handlePostLikeLocalStorage(POST_ID);
    const result: number[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || ""
    );
    expect(result).not.toContain(POST_ID);
  });
});
