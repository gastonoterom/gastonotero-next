import fs from "fs";
import { join } from "path";
import { Article, ArticlePath } from "@interfaces/Article";
import matter from "gray-matter";

/** Returns a list of all the files of a given folder in the project directory.
 *
 * @param directory Name of the directory to be listed.
 * @returns List of files from a given directory.
 */
export const getFiles = (dir: string): string[] => {
  return fs.readdirSync(join(process.cwd(), dir), "utf-8");
};

/** Calling this function with a directory allows to easily fetch files from it later
 * usage exampe: getFile(dir)(fileName)
 *
 * @param dir name of the directory where files will be fetched
 * @returns Function that when called will return the file content of the file from the directory
 */
export const getFile = (dir) => {
  return (file) => {
    return fs.readFileSync(join(process.cwd(), dir, file), "utf-8");
  };
};

/** Returns an object that implements the article interface from an mdx file.
 * @param file File to be parsed.
 * @returns Article.
 */
export const getArticle = (file: string): Article => {
  let { data, content }: { data: any; content: string } = matter(file);
  return { ...data, content };
};

/** Get all articles from a given folder in the project directory.
 *
 * @param dir Directory where articles will be fetched.
 * @returns Articles array.
 */
export const getArticles = (dir: string): Article[] => {
  return getFiles(dir).map((fileName) => getArticle(getFile(dir)(fileName)));
};

/** Get all blog posts.
 *
 * @returns Posts array.
 */
export const getPosts = (): Article[] => {
  return getArticles("_markdown/blog");
};

/** Get all projects.
 *
 * @returns Projects array.
 */
export const getProjects = (): Article[] => {
  return getArticles("_markdown/projects");
};

/** Get all posts ids for static generation.
 *
 * @returns Posts id array.
 */
export const getPostsPaths = (): ArticlePath[] => {
  return getPosts().map((post) => ({
    params: {
      id: post.id,
    },
  }));
};

/** Get all project ids for static generation.
 *
 * @returns Projects id array.
 */
export const getProjectsPaths = (): ArticlePath[] => {
  return getProjects().map((project) => ({
    params: {
      id: project.id,
    },
  }));
};

/** Get resume for static generation.
 *
 * @returns resume file content
 */
export const getResume = (): string => {
  return getFile("_markdown/resume")("index.md");
};