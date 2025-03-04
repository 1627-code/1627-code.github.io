import markdown
import os
import json
from datetime import datetime

# Paths
blog_folder = "blog"
posts_json = "posts.json"
md_folder = "markdown_posts"  # Folder to store markdown files

# Ensure folders exist
os.makedirs(blog_folder, exist_ok=True)
os.makedirs(md_folder, exist_ok=True)

def convert_markdown_to_html(md_filename):
    """Convert a Markdown file to an HTML file and update posts.json"""
    md_path = os.path.join(md_folder, md_filename)
    
    # Read Markdown content
    with open(md_path, "r", encoding="utf-8") as md_file:
        md_content = md_file.read()

    # Convert Markdown to HTML
    html_content = markdown.markdown(md_content)
    
    # Extract title from first heading
    title = md_content.split("\n")[0].replace("#", "").strip()

    # Generate HTML file name
    base_name = os.path.splitext(md_filename)[0]
    html_filename = f"{base_name}.html"
    html_path = os.path.join(blog_folder, html_filename)

    # Write the HTML content
    with open(html_path, "w", encoding="utf-8") as html_file:
        html_file.write(f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <h1>{title}</h1>
    </header>
    <article>
        {html_content}
    </article>
</body>
</html>""")

    # Update posts.json
    update_posts_json(title, base_name, datetime.today().strftime("%Y-%m-%d"))

    print(f"✅ Converted {md_filename} to {html_filename} and updated posts.json.")

def update_posts_json(title, base_name, date):
    """Add the new blog post entry to posts.json"""
    posts_path = os.path.join(posts_json)
    
    # Load existing posts
    if os.path.exists(posts_path):
        with open(posts_path, "r", encoding="utf-8") as f:
            posts = json.load(f)
    else:
        posts = []

    # New post entry
    new_post = {
        "title": title,
        "summary": f"A new post about {title}.",
        "date": date,
        "link": f"blog/{base_name}.html"
    }

    # Avoid duplicate entries
    if not any(post["link"] == new_post["link"] for post in posts):
        posts.insert(0, new_post)  # Add newest post at the top

    # Save updated posts.json
    with open(posts_path, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=4)

    print(f"✅ Updated {posts_json} with new post: {title}")

# Run the script for all Markdown files in the folder
if __name__ == "__main__":
    for md_file in os.listdir(md_folder):
        if md_file.endswith(".md"):
            convert_markdown_to_html(md_file)
