import assert from 'node:assert/strict';
import { docify } from '@x12i/docify';
const cases = docify.listUseCases();
assert(cases.length > 0);
const markdown = docify.getUseCaseMarkdown(cases[0].id);
assert.equal(typeof markdown, 'string');
assert(markdown.length > 0);
console.log({ guide: cases[0].id, excerpt: markdown.slice(0, 500) });
