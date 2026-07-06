const fs = require('fs');

const text = fs.readFileSync('blogs2_utf8.txt', 'utf8');

const posts = [];
let currentPost = null;

const lines = text.split('\n');
let inReferences = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // New post detection: Line 1, or line immediately after references finish
  if (i === 0 || (inReferences && !line.match(/^\[\d+\]/))) {
    if (currentPost) {
      posts.push(currentPost);
    }
    
    inReferences = false;
    let fullTitle = line;
    // Some lines might be prefixed if the format is slightly different, but these look clean.
    const slug = fullTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    currentPost = {
      slug,
      title: fullTitle,
      metaDesc: '',
      category: 'Small Business', // Default category for these
      date: 'July 6, 2026',
      icon: '🚀',
      content: '',
      faqs: [],
      related: []
    };
    continue;
  }

  if (currentPost) {
    if (line.match(/^References/i)) {
      currentPost.content += `\n<h2>References</h2>\n<ul>\n`;
      inReferences = true;
    } else if (inReferences && line.match(/^\[\d+\]/)) {
      currentPost.content += `<li>${line}</li>\n`;
    } else if (inReferences && !line.match(/^\[\d+\]/)) {
        // Wait, the new post check at the top of the loop should catch this. 
        // This block won't be reached if it's a new post, but just in case:
        inReferences = false;
    } else if (line.match(/^[0-9]+\.\s+[A-Z]/) || line.match(/^[A-Z][a-zA-Z\s]+:$/) || (line.length < 60 && !line.includes('.') && line.length > 10)) {
        // Treat as a subheading
        if (line !== 'Benefit' && line !== 'Description' && line !== 'Advantage' && line !== 'Feature') {
           currentPost.content += `\n<h2>${line}</h2>\n`;
        }
    } else {
        // Just a paragraph
        if (!currentPost.metaDesc) {
            currentPost.metaDesc = line.substring(0, 150) + '...';
        }
        currentPost.content += `<p>${line}</p>\n`;
    }
  }
}

if (currentPost) {
    // Close the reference ul if it was open
    if (inReferences) {
        currentPost.content += `</ul>\n`;
    }
    posts.push(currentPost);
}

// Now we need to append these to posts.js
let postsFile = fs.readFileSync('src/app/blog/posts.js', 'utf8');

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
