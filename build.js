const fs = require('fs');
const path = require('path');
const marked = require('marked');

// Add this at the top of the file, after the requires
const processedFiles = new Set();

// Configure marked options
marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert line breaks to <br>
    headerIds: true, // Add IDs to headers
    mangle: false // Don't escape HTML
});

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Function to read template
function readTemplate(templatePath) {
    try {
        console.log(`Reading template: ${templatePath}`);
        return fs.readFileSync(templatePath, 'utf8');
    } catch (error) {
        console.error(`Error reading template ${templatePath}:`, error);
        process.exit(1);
    }
}

// Function to fix links in HTML
function fixLinks(html, currentPath) {
    console.log(`Fixing links for path: ${currentPath}`);
    // Convert .md links to .html
    html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"');
    
    // Fix absolute paths
    const depth = currentPath.split(path.sep).length - 2; // -2 because we don't count 'dist' and the file itself
    const relativePath = depth > 0 ? '../'.repeat(depth) : './';
    html = html.replace(/href="\/([^"]+)"/g, `href="${relativePath}$1"`);
    
    return html;
}

// Function to process a markdown file
function processMarkdownFile(markdownPath, outputPath, template) {
    // Skip if we've already processed this file
    if (processedFiles.has(markdownPath)) {
        return;
    }
    processedFiles.add(markdownPath);

    try {
        console.log(`\nProcessing markdown file: ${markdownPath}`);
        console.log(`Output path: ${outputPath}`);
        
        const markdown = fs.readFileSync(markdownPath, 'utf8');
        console.log('Markdown content read successfully');
        
        const html = marked.parse(markdown);
        console.log('Markdown converted to HTML');
        
        const fixedHtml = fixLinks(html, outputPath);
        console.log('Links fixed in HTML');
        
        const finalHtml = template.replace('<!-- Content will be loaded here -->', fixedHtml);
        console.log('Template content replaced');
        
        ensureDirectoryExists(path.dirname(outputPath));
        fs.writeFileSync(outputPath, finalHtml);
        console.log(`File generated successfully: ${outputPath}\n`);
    } catch (error) {
        console.error(`Error processing ${markdownPath}:`, error);
        throw error;
    }
}

// Function to process all markdown files in a directory
function processDirectory(inputDir, outputDir, template) {
    // Normalize paths to prevent duplicate processing
    inputDir = path.normalize(inputDir);
    outputDir = path.normalize(outputDir);
    
    if (!fs.existsSync(inputDir)) {
        console.warn(`Warning: Directory ${inputDir} does not exist`);
        return;
    }

    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const stat = fs.statSync(inputPath);
        
        if (stat.isDirectory()) {
            // Recursively process subdirectories
            const newOutputDir = path.join(outputDir, file);
            processDirectory(inputPath, newOutputDir, template);
        } else if (file.endsWith('.md') && file !== 'index.md') {
            // Process markdown files, but skip index.md
            const outputPath = path.join(
                outputDir,
                file.replace('.md', '.html')
            );
            processMarkdownFile(inputPath, outputPath, template);
        }
    }
}

// Clean dist directory
function cleanDist() {
    console.log('\nCleaning dist directory...');
    if (fs.existsSync('dist')) {
        fs.rmSync('dist', { recursive: true });
        console.log('Dist directory removed');
    }
    ensureDirectoryExists('dist');
    console.log('Dist directory created\n');
}

// Function to copy static assets
function copyStaticAssets() {
    console.log('\nCopying static assets...');
    const assets = ['css', 'js', 'img'];
    
    for (const asset of assets) {
        if (fs.existsSync(asset)) {
            const dest = path.join('dist', asset);
            ensureDirectoryExists(dest);
            
            // Copy files recursively
            const copyRecursive = (src, dest) => {
                const exists = fs.existsSync(src);
                const stats = exists && fs.statSync(src);
                const isDirectory = exists && stats.isDirectory();
                
                if (isDirectory) {
                    ensureDirectoryExists(dest);
                    fs.readdirSync(src).forEach(childItemName => {
                        copyRecursive(
                            path.join(src, childItemName),
                            path.join(dest, childItemName)
                        );
                    });
                } else {
                    fs.copyFileSync(src, dest);
                }
            };
            
            copyRecursive(asset, dest);
            console.log(`Copied: ${asset} -> ${dest}`);
        }
    }

    // Copy index.html directly if it exists
    if (fs.existsSync('index.html')) {
        fs.copyFileSync('index.html', path.join('dist', 'index.html'));
        console.log('Copied: index.html -> dist/index.html');
    }
    
    console.log('Static assets copied\n');
}

// Main build function
function build() {
    console.log('Starting build process...');
    
    try {
        // Clean dist directory
        cleanDist();
        
        // Clear the processed files cache
        processedFiles.clear();
        
        // Read templates
        const pageTemplate = readTemplate('templates/page.html');
        const blogTemplate = readTemplate('templates/blog.html');
        
        // Process regular pages
        processDirectory('content', 'dist', pageTemplate);
        
        // Process blog posts (only once)
        processDirectory(path.join('content', 'blog'), path.join('dist', 'blog'), blogTemplate);
        
        // Copy static assets
        copyStaticAssets();
        
        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

// Run the build
build(); 