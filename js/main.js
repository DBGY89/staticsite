// Function to load and convert Markdown content
async function loadMarkdownContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load content');
        const markdown = await response.text();
        return marked.parse(markdown);
    } catch (error) {
        console.error('Error loading content:', error);
        return '<p>Error loading content. Please try again later.</p>';
    }
}

// Function to update page content
async function updateContent() {
    const contentSection = document.querySelector('.content');
    if (!contentSection) return;

    // Get the current page name from the URL
    const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    // Load the appropriate markdown file
    const markdownUrl = `content/${page}.md`;
    const htmlContent = await loadMarkdownContent(markdownUrl);
    contentSection.innerHTML = htmlContent;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', updateContent); 