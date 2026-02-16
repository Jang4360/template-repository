import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const skillsRoot = path.join(repoRoot, 'skills');
const skillsAiPath = path.join(skillsRoot, '.ai.md');

const MAX_SKILL_MD_CHARS = 1200;
const violations = [];

function fileExists(p) {
  return fs.existsSync(p) && fs.statSync(p).isFile();
}

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

if (!fs.existsSync(skillsRoot)) {
  violations.push('Missing directory: skills/');
} else {
  const entries = fs.readdirSync(skillsRoot, { withFileTypes: true });
  const skillDirs = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  if (skillDirs.length === 0) {
    violations.push('No skill directories found under skills/.');
  }

  for (const skillName of skillDirs) {
    const skillDir = path.join(skillsRoot, skillName);
    const skillMd = path.join(skillDir, 'SKILL.md');
    const referenceMd = path.join(skillDir, 'reference.md');
    const validationMd = path.join(skillDir, 'validation.md');

    if (!fileExists(skillMd)) {
      violations.push(`Missing file: skills/${skillName}/SKILL.md`);
      continue;
    }

    if (!fileExists(referenceMd)) {
      violations.push(`Missing file: skills/${skillName}/reference.md`);
    }

    if (!fileExists(validationMd)) {
      violations.push(`Missing file: skills/${skillName}/validation.md`);
    }

    const skillContent = readFile(skillMd);

    if (skillContent.length > MAX_SKILL_MD_CHARS) {
      violations.push(`skills/${skillName}/SKILL.md exceeds ${MAX_SKILL_MD_CHARS} characters`);
    }

    const hasReferenceMention =
      skillContent.includes('reference.md') ||
      skillContent.includes(`skills/${skillName}/reference.md`);

    const hasValidationMention =
      skillContent.includes('validation.md') ||
      skillContent.includes(`skills/${skillName}/validation.md`);

    if (!hasReferenceMention) {
      violations.push(`skills/${skillName}/SKILL.md must mention reference.md`);
    }

    if (!hasValidationMention) {
      violations.push(`skills/${skillName}/SKILL.md must mention validation.md`);
    }
  }
}

if (!fileExists(skillsAiPath)) {
  violations.push('Missing file: skills/.ai.md');
} else {
  const skillsAiContent = readFile(skillsAiPath);
  const hasReadOrder = /READ_ORDER:/.test(skillsAiContent);
  const hasSkillPriority =
    skillsAiContent.includes('skills/<skill>/SKILL.md') ||
    skillsAiContent.includes('SKILL.md');

  if (!hasReadOrder) {
    violations.push('skills/.ai.md must define READ_ORDER');
  }

  if (!hasSkillPriority) {
    violations.push('skills/.ai.md READ_ORDER must prioritize SKILL.md');
  }
}

if (violations.length > 0) {
  console.error('[validate:skills] failed');
  for (const v of violations) {
    console.error(`- ${v}`);
  }
  process.exit(1);
}

console.log('[validate:skills] passed');
