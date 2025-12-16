function Policy() {
  return (
    <div>
      <p className="flex items-center mb-[20px] xl:mb-0 xl:gap-[10px] text-text-primary xl:text-[40px] text-[20px] font-medium max-xl:m-[20px]">
        Privacy
        <span className="text-accent-primary xl:text-[30px] text-[20px] font-medium">Policy</span>
      </p>

      <p className="text-text-secondary xl:text-[22px] text-[18px] xl:mb-[50px] max-xl:px-[20px]">
        Effective Date: 5th June 2025
      </p>

      <div className="xl:space-y-[30px] space-y-[20px] max-xl:p-[20px] xl:pb-[80px] pb-[45px]">
        <div>
          <h2 className="text-text-primary xl:text-[36px] text-[16px] font-medium mb-[2px]">1. Overview</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] xl:ml-[35px] ml-[20px]">
            These terms govern purchases of digital tokens and credits on our platform.
          </p>

          <ul className="list-disc list-inside xl:space-y-[8px] space-y-[4px] text-text-secondary xl:text-[20px] text-[12px] xl:ml-[50px] ml-[20px] xl:my-[28px] my-[5px]">
            <li>Steam ID</li>
            <li>Email address (if provided)</li>
            <li>Name and phone number (if provided via payment processor)</li>
            <li>Purchase details (amount, currency, transaction IDs)</li>
          </ul>
          <p className="text-text-secondary xl:text-[20px] text-[14px] ml-[35px]">
            We do not store card or payment details directly; payments are handled by Airwallex / PayPal.
          </p>
        </div>

        <div>
          <h2 className="text-text-primary xl:text-[36px] text-[16px] font-medium mb-[2px]">2. Why We Collect It</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] ml-[35px]">
            To fulfill your order, send receipts, prevent fraud, and maintain records.
          </p>
        </div>

        <div>
          <h2 className="text-text-primary xl:text-[36px] text-[16px] font-medium mb-[2px]">3. Retention</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] mb-[10px] ml-[35px]">
            Data is retained as long as necessary for audit and fraud prevention.
          </p>
          <p className="text-text-secondary xl:text-[20px] text-[14px] ml-[35px]">
            You may request deletion of personal info (excluding Steam ID).
          </p>
        </div>

        <div>
          <h2 className="text-text-primary xl:text-[36px] text-[16px] font-medium mb-[2px]">4. Sharing</h2>
          <p className="text-text-secondary xl:text-[20px] text-[14px] mb-[10px] ml-[35px]">We never sell your data.</p>
          <p className="text-text-secondary xl:text-[20px] text-[14px] ml-[35px]">
            Data is only shared with Airwallex or when required by law.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Policy;
