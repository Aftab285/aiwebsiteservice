const fs = require('fs');

const text = fs.readFileSync('blogs_utf8.txt', 'utf8');

const posts = [];
let currentPost = null;

const lines = text.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Match title like "1. AI Website Development Services: Revolutionizing Digital Presence"
  const titleMatch = line.match(/^(\d+)\.\s+(.*)/);
  if (titleMatch) {
    if (currentPost) {
      posts.push(currentPost);
    }
    const fullTitle = titleMatch[2];
    const slug = fullTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    currentPost = {
      slug,
      title: fullTitle,
      metaDesc: '',
      category: 'AI Website Development', // Default
      date: 'July 5, 2026',
      icon: '📝',
      content: '',
      faqs: [],
      related: []
    };
    // The next paragraph is usually the meta description or intro
    continue;
  }

  if (currentPost) {
    // Basic formatting for content
    if (line.match(/^References/i)) {
      currentPost.content += `\n<h2>References</h2>\n<ul>\n`;
      let j = i + 1;
      while (j < lines.length && lines[j].trim().match(/^\[\d+\]/)) {
        currentPost.content += `<li>${lines[j].trim()}</li>\n`;
        j++;
      }
      currentPost.content += `</ul>\n`;
      i = j - 1;
    } else if (line.match(/^[A-Z][a-zA-Z\s]+:$/) || (line.length < 60 && !line.includes('.') && line.length > 10)) {
        // Treat as a subheading if it's short and no periods, or ends in colon
        if (line !== 'Benefit' && line !== 'Description' && line !== 'Advantage' && line !== 'Feature') {
           currentPost.content += `\n<h2>${line}</h2>\n`;
        }
    } else {
        // Just a paragraph
        if (!line.match(/^\[\d+\]/)) {
            // Populate metaDesc if empty
            if (!currentPost.metaDesc) {
                currentPost.metaDesc = line.substring(0, 150) + '...';
            }
            currentPost.content += `<p>${line}</p>\n`;
        }
    }
  }
}
if (currentPost) {
  posts.push(currentPost);
}

// Now we need to append these to posts.js
let postsFile = fs.readFileSync('src/app/blog/posts.js', 'utf8');

// The file exports blogPosts array. We can just splice it before the last "];"
const insertPos = postsFile.lastIndexOf('];');

let newPostsStr = '';
for (const post of posts) {
  newPostsStr += `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    metaDesc: ${JSON.stringify(post.metaDesc)},
    category: ${JSON.stringify(post.category)},
    date: ${JSON.stringify(post.date)},
    icon: ${JSON.stringify(post.icon)},
    content: \`${post.content.replace(/`/g, '\\`')}\`,
    faqs: [],
    related: []
  },
`;
}

const finalFile = postsFile.substring(0, insertPos) + newPostsStr + postsFile.substring(insertPos);
fs.writeFileSync('src/app/blog/posts.js', finalFile);
console.log('Successfully appended', posts.length, 'posts to posts.js');
