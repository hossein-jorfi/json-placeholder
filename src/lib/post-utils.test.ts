import { describe, expect, test } from "vitest";
import { handlePostLikeLocalStorage, STORAGE_KEY } from "./post-utils";
import { afterEach, beforeEach } from "vitest";

describe("Like Posts", () => {
  afterEach(() => {
    localStorage.clear();
  });
  beforeEach(() => {
    localStorage.clear();
  });

  test("if STORAGE_KEY not exist in localstorage create it first", () => {
    handlePostLikeLocalStorage(1);
    const result = localStorage.getItem(STORAGE_KEY);
    expect(result).toBeTruthy();
  });

  test("push given id to liked-post array", () => {
    const POST_ID = 1
    handlePostLikeLocalStorage(POST_ID);
    const result = JSON.parse(localStorage.getItem(STORAGE_KEY) || "");
    expect(result).toBeTruthy();
  });
});
