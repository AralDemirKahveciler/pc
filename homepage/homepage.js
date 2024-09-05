// JavaScript for toggling the visibility of content sections

document.addEventListener('DOMContentLoaded', () => {
    // Select all headers with the class 'toggle-header'
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    // Iterate over each header and add click event listener
    toggleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle the visibility of the corresponding content
            const content = header.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
