document.getElementById('searchButton').addEventListener('click', function() {
    var searchValue = document.getElementById('searchInput').value.trim(); // Trim whitespace from the input

    if (searchValue === '') {
        alert('Please enter a search term.'); // Show alert if search term is empty
    } else {
        console.log('Search for:', searchValue);
        // Example: redirect to a search results page
        // window.location.href = 'search_results.html?query=' + encodeURIComponent(searchValue);
    }
});