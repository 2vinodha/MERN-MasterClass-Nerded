document.addEventListener('DOMContentLoaded', function() {
    const customerForm = document.getElementById('customerForm');
    const customerList = document.getElementById('customerList');

    customerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const customerName = document.getElementById('customerName').value;
        const contactInfo = document.getElementById('contactInfo').value;
        const membershipType = document.getElementById('membershipType').value;

        const customerItem = document.createElement('div');
        customerItem.classList.add('customer-item');
        customerItem.innerHTML = `
            <strong>Name:</strong> ${customerName}<br>
            <strong>Contact Info:</strong> ${contactInfo}<br>
            <strong>Membership Type:</strong> ${membershipType}
            <button class="delete-btn">Delete</button>
        `;

        customerList.appendChild(customerItem);

        // Clear form fields
        customerForm.reset();

        // Add event listener to the delete button
        const deleteButton = customerItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            customerList.removeChild(customerItem);
        });
    });
});
