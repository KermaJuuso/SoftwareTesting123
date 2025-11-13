title Checkout scenario

actor User
participant Frontend
participant Backend

User -> Frontend: Add product to cart
Frontend -> Backend: POST add product to cart
Backend -> Backend: Check product availability and create/update basket
Backend --> Frontend: Respond with availability status and price
Frontend -> Frontend: Sum prices and update cart

User -> Frontend: Go to cart
Frontend -> Frontend: Validate cart and calculate total
Frontend -> User: Display cart items and total sum

User -> Frontend: Fill required details (address etc.)
Frontend -> Frontend: Validate input fields
alt Required fields missing or invalid
Frontend -> User: Show errors
else All fields valid
Frontend -> Frontend: Update basket with filled information
end

Frontend -> Backend: GET paymentmethods
Backend --> Frontend: Return list of paymentmethods

Frontend -> Frontend: Check that there are available payment methods
User -> Frontend: Select payment method and go to payment
Frontend -> Backend: POST pay
Backend -> Backend: Order validation
Backend -> Backend: Handle payment with third-party
alt Success
Backend --> Frontend: Success. Status 200
Frontend -> User: Show payment success
else Fail
Backend --> Frontend: Return error. Status 400
Frontend -> User: Show error message
end
