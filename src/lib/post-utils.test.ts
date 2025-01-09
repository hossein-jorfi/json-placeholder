import { describe, expect, test } from "vitest";
import { handlePostLikeLocalStorage, STORAGE_KEY } from "./post-utils";
import { afterEach, beforeEach } from "node:test";

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
});
