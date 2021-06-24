import fs from "fs";
import { join } from "path";

const resumeFile = join(process.cwd(), "_markdown/resume/index.md");

export function getResumeMarkdown() {
  return fs.readFileSync(resumeFile, "utf8");
}
