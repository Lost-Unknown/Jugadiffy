import React from "react";

const ShippingPolicyPage = () => {
  return (
    <section className="flex flex-col gap-4 items-start md:w-10/12 w-full md:mx-auto mx-0">
      <h1 className="text-3xl font-semibold text-zinc-800">Shipping Policy</h1>
      <div className="md:text-xl text-lg text-justify text-zinc-800">
        <p className="my-4 font-semibold">Shipping Rates</p>
        <p className="mb-8">
          •We offer free shipping across India for all prepaid orders above
          499/-, For COD orders an additional fee is applicable towards "cash
          handling" by the carrier partner.
        </p>
        <p className="my-4 font-semibold">Order Processing</p>
        <p className="mb-8">
          •We strive to fulfill orders as soon as you place them. In most cases,
          your order will be expected to be dispatched within 2-4 business days.
          Our business days are Monday-Saturday.
        </p>
        <p className="my-4 font-semibold">Shipping Time</p>
        <p className="mb-8">
          •For most serviceable pin codes, we try to deliver within 7 days.
          There could be a possible delay of 2-3 business days in delivery.
          However, you will be able to track your package using a unique
          tracking link that we will email/SMS you after your order is sent to
          our delivery partner.
        </p>
        <p className="my-4 font-semibold">ORDER TRACKING</p>
        <p className="mb-8">
          •You'll receive a tracking number from us in your inbox as soon as it
          ships! Orders can be tracked in real-time via that link.
        </p>
      </div>
    </section>
  );
};

export default ShippingPolicyPage;
