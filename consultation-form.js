// Consultation Form Functions

function openConsultationForm() {
    const modal = document.getElementById('consultationFormModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeConsultationForm() {
    const modal = document.getElementById('consultationFormModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        // ניקוי הטופס
        const form = document.getElementById('consultationForm');
        if (form) {
            form.reset();
        }
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('consultationFormModal');
    if (event.target === modal) {
        closeConsultationForm();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeConsultationForm();
    }
});

// Handle form submission and customer radio buttons
document.addEventListener('DOMContentLoaded', function() {
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        // Handle customer radio buttons - show/hide agent name field
        const customerRadios = consultationForm.querySelectorAll('input[name="is_customer"]');
        const agentNameField = document.getElementById('agentNameField');
        
        customerRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'כן' && agentNameField) {
                    agentNameField.style.display = 'block';
                } else if (agentNameField) {
                    agentNameField.style.display = 'none';
                    document.getElementById('current_agent_text').value = '';
                }
            });
        });
        
        // Handle form submission
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // איסוף הנתונים מהטופס
            const formData = {
                firstname: document.getElementById('firstname')?.value,
                lastname: document.getElementById('lastname')?.value,
                phone: document.getElementById('phone')?.value,
                email: document.getElementById('email')?.value,
                messageType: document.getElementById('message-type')?.value,
                isCustomer: consultationForm.querySelector('input[name="is_customer"]:checked')?.value,
                agentName: document.getElementById('current_agent_text')?.value,
                ppAgree: document.getElementById('pp-agree')?.checked
            };
            
            // כאן תוכל להוסיף קוד לשליחת הנתונים לשרת
            console.log('Form submitted:', formData);
            
            // הצגת הודעת הצלחה
            alert('תודה! פנייתך נקלטה בהצלחה. ניצור איתך קשר בהקדם.');
            
            // סגירת המודאל
            closeConsultationForm();
        });
    }
});

