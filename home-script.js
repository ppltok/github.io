document.addEventListener('DOMContentLoaded', function() {
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const featuredArticles = data.articles.slice(0, 3); // Get first 3 articles
            const container = document.getElementById('featured-articles-container');
            
            featuredArticles.forEach(article => {
                const articleCard = document.createElement('div');
                articleCard.className = 'article-card';
                articleCard.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="article.html?id=${article.id}" class="read-more">Read More</a>
                `;
                container.appendChild(articleCard);
            });
        })
        .catch(error => console.error('Error loading articles:', error));
});