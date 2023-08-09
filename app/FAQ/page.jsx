import React from "react";

const FAQPage = () => {
  return (
    <section className="flex flex-col gap-4 items-start md:w-10/12 w-full md:mx-auto  mx-0">
      <h1 className="text-3xl font-semibold text-zinc-800">
        Frequently Asked Question
      </h1>
      <div className="md:text-xl text-lg text-zinc-800 text-justify">
        <p className="my-4 font-semibold"> How do I place my order?</p>
        <p className="">To place your order, follow these steps</p>
        <p className=" mb-8">
          •Browse through our wide range of products until you find something
          you like. After you’ve chosen what you want, select the relevant size.
          You can check out our size guide for reference. •Once you’re done,
          click the ‘Add To Cart’ button. •After you have added all the
          products, click on the cart icon. You can either choose to continue
          shopping or confirm the order and click ‘Proceed to Checkout’. •From
          there, you can either log in to your existing Jugaadify account or
          simply continue as a 'New User' and create one. Once you’re done,
          proceed to checkout, confirm your shipping address, and select the
          desired payment method to confirm your order by clicking ‘Complete
          Order’.
        </p>
        <p className="my-4 font-semibold">How will I know that my order is placed successfully?</p>
        <p className="mb-8">
          •Once you successfully place your order, you will receive a
          confirmation SMS and email with details of your order and your order
          ID. •You’ll receive another SMS and email once your order is shipped
          out. All you have to do then is, sit back, relax, and wait for your
          awesome product(s) to arrive.
        </p>
        <p className="my-4 font-semibold">How do I receive my order?</p>
        <p className="mb-8">
          •We have tied up with several reputed courier companies, so your
          orders will be delivered right to your doorstep within 2-7 business
          days depending on where you live. •All orders come in fully sealed
          packages to make sure that all your goods reach you in perfect
          condition.
        </p>
        <p className="my-4 font-semibold">Is there any additional charge for Cash On Delivery (COD) orders?</p>
        <p className="mb-8">
          •Yes, we charge a flat fee of ₹30 for Cash On Delivery (COD) orders.
        </p>
        <p className="my-4 font-semibold">Why can’t I see the Cash On Delivery (COD) option?</p>
        <p className="mb-8">
          •If the Cash On Delivery (COD) option is not showing, it’s because
          this facility is unavailable for your postal code. You can either pay
          by Debit Card, Credit Card, or Net Banking, or you can get the
          products delivered to an alternate address (where COD is available).
        </p>
        <p className="my-4 font-semibold">
          Are there any hidden charges? •There are absolutely NO hidden charges
          for any of our products- what you see is what you pay.
        </p>
        <p className="mb-8">
          Does Jugaadify deliver products outside India? •No, Currently we are
          delivering products only in India.
        </p>
        <p className="my-4 font-semibold">
          In case I return the products, will the COD Handling Charges be
          credited back? •No, This is the amount paid to the courier team for
          handling your cash to process your payment through cash on delivery
          mode and is non-refundable.
        </p>
        <p className="mb-8">
          I wish to add a few more products to my order. Will it be possible?
          •Once you have confirmed the order and we have accepted it, you cannot
          add any more products to your order. You will have to place a fresh
          order for the other products.
        </p>
      </div>
    </section>
  );
};

export default FAQPage;
