import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const output = new URL("../dist/client/", import.meta.url);

test("exports the academic homepage", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /<title>Jiaheng Xiao · Agentic City<\/title>/i);
  assert.match(html, /<span>Agentic<\/span><br\/>City/);
  assert.doesNotMatch(html, /From human intent/);
  assert.match(html, /Cities as evolving multi-agent systems/);
  assert.match(html, /DPIU: Dynamic Pedestrian Intention Understanding/);
  assert.match(html, /University of Nottingham Ningbo China/);
  assert.match(html, /class="profile-photo/);
  assert.match(html, /Supervisor<\/span>(?:<!-- -->)?Zhengbing He/);
  assert.match(html, /Supervisor<\/span>(?:<!-- -->)?Zhaowei Qu/);
  assert.doesNotMatch(html, /Guiding Questions|Three questions shape the work/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("ships the public research files and social card", async () => {
  await Promise.all([
    access(new URL("files/Jiaheng_Xiao_CV.pdf", output)),
    access(new URL("files/DPIU_TNNLS_2026.pdf", output)),
    access(new URL("og-academic.png", output)),
  ]);

  await Promise.all([
    assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", root))),
    assert.rejects(access(new URL("app/_sites-preview/preview.css", root))),
  ]);
});
