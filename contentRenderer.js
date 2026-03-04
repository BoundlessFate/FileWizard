document.addEventListener('DOMContentLoaded', () => {
    function showSection(id) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => section.style.display = 'none');

        // Remove active class from all links
        document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));

        // Show the selected section
        document.getElementById(id).style.display = 'block';

        // Add active class to clicked link
        document.querySelector(`.sidebar a[href="#${id}"]`).classList.add('active');
    }

    showSection('convertPhotos');

    // Attach click listeners
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent jumping to hash
            const id = link.getAttribute('href').substring(1);
            showSection(id);
        });
    });
});