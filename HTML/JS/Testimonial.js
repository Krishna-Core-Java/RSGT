// Testimonials slider
const testimonials = [
    {
        text: "The teachers at Raising Sun Group didn't just teach me subjects, they taught me how to think critically and approach problems systematically. The small batch size meant I could ask questions freely and get personalized attention. Thanks to their guidance, I scored 97.2% and got admission to my dream college.",
        name: "Aarav Sharma",
        grade: "HSC Science Graduate"
    },
    {
        text: "I was struggling with Mathematics and Science in Grade 9. The faculty here identified my weak areas and provided extra support. Their teaching methodology made complex concepts easy to understand. I'm grateful for their patience and dedication.",
        name: "Priya Patel",
        grade: "SSC Graduate"
    },
    {
        text: "As a parent, I was impressed by the regular communication from teachers about my son's progress. The parent-teacher meetings were very informative, and the teachers genuinely cared about each student's success. Highly recommended!",
        name: "Mrs. Sharma",
        grade: "Parent of Rohit Gupta"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    document.getElementById('testimonial-text').textContent = testimonials[currentTestimonial].text;
    document.getElementById('testimonial-name').textContent = testimonials[currentTestimonial].name;
    document.getElementById('testimonial-grade').textContent = testimonials[currentTestimonial].grade;

    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-soft-teal');
        } else {
            dot.classList.remove('bg-soft-teal');
            dot.classList.add('bg-gray-300');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function setTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial();
}

// Auto-advance testimonials
setInterval(nextTestimonial, 5000);

// Initialize testimonials
updateTestimonial();