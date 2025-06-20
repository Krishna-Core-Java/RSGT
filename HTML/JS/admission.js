// Admission modal functions
function openAdmissionModal() {
    document.getElementById('admission-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeAdmissionModal() {
    document.getElementById('admission-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    // Reset form
    document.getElementById('admission-form').reset();
    document.getElementById('form-container').classList.remove('hidden');
    document.getElementById('success-message').classList.add('hidden');
}

// Form submission
document.getElementById('admission-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show success message
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');

    // Auto close after 5 seconds
    setTimeout(() => {
        closeAdmissionModal();
    }, 5000);
});

// Close modal when clicking outside
document.getElementById('admission-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeAdmissionModal();
    }
});
