// Course filtering
function filterCourses(category) {
    const courseCards = document.querySelectorAll('.course-card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Update button states
    filterBtns.forEach(btn => {
        btn.classList.remove('active', 'bg-soft-teal', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });

    event.target.classList.add('active', 'bg-soft-teal', 'text-white');
    event.target.classList.remove('bg-gray-200', 'text-gray-700');

    // Filter courses
    courseCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}