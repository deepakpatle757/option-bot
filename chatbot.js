function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'block';
    } else {
        chatbox.style.display = 'none';
    }
}

function minimizeChat(event) {
    event.stopPropagation(); // Prevent toggleChat from firing
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = 'none'; // Hide chatbox completely
}

function clearUserMessages(event) {
    event.stopPropagation(); // Prevent toggleChat from firing
    const messagesContainer = document.getElementById('messages');
    const userMessages = messagesContainer.querySelectorAll('.message.user, .message.bot');
    userMessages.forEach(msg => msg.remove()); // Remove only user and bot messages

    // Clear all dropdown selections
    const dropdowns = messagesContainer.querySelectorAll('select');
    dropdowns.forEach(dropdown => dropdown.selectedIndex = 0);
}

function handleQuestionSelection(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const selectedValue = dropdown.value;
    const messagesContainer = document.getElementById('messages');

    if (selectedValue) {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = selectedValue;
        messagesContainer.appendChild(userMessage);
        
        // Simulating bot response based on the selected question
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';

        // Providing answers to the questions
        switch (selectedValue) {
            case "How can I apply to the college?":
                botMessage.textContent = "Check the admissions page: https://indsearch.org/admissions.php";
                break;
            case "What is the application deadline?":
                botMessage.textContent = "The application dates will be posted on our website.";
                break;
            case "What are the admission requirements?":
                botMessage.textContent = "Check the admissions page: https://indsearch.org/admissions.php";
                break;
            case "What programs does the college offer?":
                botMessage.textContent = "We offer BMS, BBA-IB, MBA, and PG Diplomas. Check program brochure: https://indsearch.org/admissions.php";
                break;
            case "Where can I find the course catalog?":
                botMessage.textContent = "Check admissions page: https://indsearch.org/admissions.php";
                break;
            case "What are the years of respective course?":
                botMessage.textContent = "The BMS and BBA programs are of 3 years, MBA program is 2 years, and PG Diploma programs are of 1 year.";
                break;
            case "Fees Structure of respective courses?":
                botMessage.textContent = "Please contact the Institute for information about fee structure. Contact information available on the website: https://indsearch.org/contact_us.php";
                break;
            case "Are there scholarships available?":
                botMessage.textContent = "Yes, we offer several scholarships based on merit and financial need.";
                break;
            case "How can I contact the admissions office?":
                botMessage.textContent = "Contact details: https://indsearch.org/contact_us.php";
                break;
            case "Where is the college located?":
                botMessage.textContent = "Contact details: https://indsearch.org/contact_us.php";
                break;
            case "Is on-campus hostel facility available?":
                botMessage.textContent = "Yes, we have on-campus hostels available for students by March 2025.";
                break;
            case "What are the campus facilities like?":
                botMessage.textContent = "The Institute has two campuses for academic activities - one at Bavdhan and another at Law College Road. The Institute also has a Biodiversity campus.";
                break;
            case "What is the placement rate?":
                botMessage.textContent = "Our placement rate is around 85% for the last academic year.";
                break;
            case "Which companies visit the campus for placements?":
                botMessage.textContent = "Companies like XYZ Corp, ABC Ltd., and Tech Solutions frequently visit for placements.";
                break;
            case "What is the average salary package offered to MBA graduates?":
                botMessage.textContent = "The average salary package of our MBA graduates is Rs. 3.5 lakhs.";
                break;
            case "Does the college provide placement assistance?":
                botMessage.textContent = "Yes, we provide extensive placement assistance to our students.";
                break;
            case "What kind of internship opportunities are available?":
                botMessage.textContent = "We offer various internships in collaboration with leading companies.";
                break;
            case "What extracurricular activities are available for MBA students?":
                botMessage.textContent = "MBA students can participate in clubs, sports, and various events throughout the year.";
                break;
            case "Does the college offer additional certification courses?":
                botMessage.textContent = "Yes, we offer additional certification courses in various fields.";
                break;
            case "What specializations are offered in the MBA program?":
                botMessage.textContent = "We offer specializations in Finance, Marketing, Human Resources, Operations, BA & IT.";
                break;
            case "Can I choose more than one specialization?":
                botMessage.textContent = "The MBA student is required to select one major and one minor specialization.";
                break;
            case "Is there an option for an executive MBA or part-time MBA?":
                botMessage.textContent = "Indsearch does not offer part-time MBA, however, lateral admissions are available for graduates of certain specializations.";
                break;
            default:
                botMessage.textContent = "I'm sorry, I don't have an answer for that.";
        }

        messagesContainer.appendChild(botMessage);

        // Clear the dropdown
        dropdown.selectedIndex = 0;

        // Scroll to the bottom of messages
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
