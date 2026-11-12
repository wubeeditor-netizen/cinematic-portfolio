import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'projects');
const outFile = path.join(process.cwd(), 'src', 'data', 'projects.json');

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));

const projects = files
  .map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title || 'Untitled',
      category: data.category || 'Uncategorized',
      description: data.description || '',
      thumbnail: data.thumbnail || '',
      videoUrl: data.videoUrl || '',
      software: data.software || [],
      featured: data.featured || false,
      status: data.status || 'draft',
      order: data.order || 0,
    };
  })
  .filter((p) => p.status === 'published')
  .sort((a, b) => a.order - b.order);

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(projects, null, 2));
console.log(`✅ Built ${projects.length} published project(s) → src/data/projects.json`);
