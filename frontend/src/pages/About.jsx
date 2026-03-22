import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At LuxeCart, we are a modern e-commerce platform dedicated to
            delivering high-quality products with a seamless and enjoyable
            shopping experience. Our goal is to make online shopping simple,
            reliable, and accessible for everyone. We carefully curate our
            collection to ensure you get the best value, combining quality,
            affordability, and the latest trends. From secure payments to fast
            delivery, every step is designed with your convenience in mind.
          </p>
          <p>
            At the heart of everything we do is our commitment to customer
            satisfaction. We believe shopping should feel easy and personal, not
            complicated. That’s why we focus on building trust, offering
            responsive support, and continuously improving our services. Whether
            you're exploring new products or making your next purchase, we’re
            here to make your experience smooth, friendly, and worth coming back
            for.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At LuxeCart, our mission is to make online shopping simple,
            reliable, and enjoyable for everyone. We aim to provide high-quality
            products at affordable prices while ensuring a smooth and secure
            shopping experience. By focusing on customer satisfaction,
            innovation, and trust, we strive to build a platform that people can
            rely on for their everyday needs.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We ensure every product meets high quality standards before reaching
            you. By working with trusted suppliers, we deliver reliable products
            you can shop with confidence.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We make shopping easy and convenient with a smooth browsing
            experience, secure payments, and fast delivery, so you can shop
            anytime, anywhere without hassle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We provide exceptional customer service with quick support, clear
            communication, and a friendly approach, ensuring a smooth and
            satisfying experience every time you shop with us.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
