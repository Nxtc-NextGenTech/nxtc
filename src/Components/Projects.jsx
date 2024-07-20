import React from "react";
import website from "../Assets/website.svg";
import mobile from "../Assets/mobile.svg";
import software from "../Assets/software.svg";
import social from "../Assets/social.jpg";

function Projects() {
  return (
    <div
      className="w-full bg-white py-16 px-4 transition-transform transform-gpu duration-500 ease-in-out"
      id="projects"
    >
      <div className="container max-w-[1240px] mx-auto grid md:grid-cols-2 md:mb-54 mb-36">
        <img
          className="w-[500px] mx-auto my-4 animate-slideInRight"
          src={website}
          alt="/"
        />
        <div className="flex flex-col justify-center animate-slideInLeft ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Website <br />
            Development
          </h1>
          <div className="w-[75px] h-[3px] bg-[#00df9a]"></div>
          <p className="mt-5">
            In today's digital age, having a robust online presence is essential
            for any business or organization. Our website development services
            are designed to create visually stunning, user-friendly, and highly
            functional websites that perfectly align with your brand identity
            and business goals. We specialize in building responsive websites
            that provide an optimal viewing experience across all devices, from
            desktops to smartphones. Our team of experienced web developers
            utilizes the latest technologies and best practices to ensure your
            website is fast, secure, and easy to navigate. Whether you need a
            simple informational site or a complex e-commerce platform, we are
            committed to delivering a web solution that drives traffic, engages
            visitors, and converts leads into customers.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="container max-w-[1240px] mx-auto grid md:grid-cols-2 md:mb-54 mb-36">
        <img
          className="w-[500px] mx-auto my-4 animate-slideInRight"
          src={mobile}
          alt="/"
        />
        <div className="flex flex-col justify-center  animate-slideInLeft">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Mobile App <br />
            Development
          </h1>
          <div className="w-[75px] h-[3px] bg-[#00df9a]"></div>
          <p className="mt-5">
            In an era where mobile devices dominate the tech landscape, having a
            dedicated mobile app can significantly enhance your customer
            engagement and business growth. Our mobile app development services
            cater to both Android and iOS platforms, offering custom solutions
            that meet your specific requirements. From conceptualization and
            design to development and deployment, our expert team is with you
            every step of the way. We create intuitive and feature-rich mobile
            applications that provide seamless user experiences and help you
            stay connected with your audience on the go. By leveraging
            cutting-edge technologies and agile methodologies, we deliver mobile
            apps that are not only aesthetically pleasing but also highly
            functional and scalable.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="container max-w-[1240px] mx-auto grid md:grid-cols-2 md:mb-54 mb-36">
        <img
          className="w-[500px] mx-auto my-4 animate-slideInRight"
          src={software}
          alt="/"
        />
        <div className="flex flex-col justify-center animate-slideInLeft ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Software <br />
            Development
          </h1>
          <div className="w-[75px] h-[3px] bg-[#00df9a]"></div>
          <p className="mt-5">
            Custom software development is at the heart of our services, aimed
            at addressing the unique challenges and needs of your business. Our
            comprehensive software development solutions cover everything from
            initial consulting and system architecture design to development,
            testing, and maintenance. We employ a collaborative approach,
            working closely with you to understand your objectives and deliver
            tailor-made software that enhances your operational efficiency and
            drives innovation. Our team of skilled developers is proficient in
            various programming languages and platforms, ensuring the final
            product is robust, scalable, and integrates seamlessly with your
            existing systems. Whether it's a desktop application, a web-based
            tool, or a complex enterprise solution, we are dedicated to turning
            your vision into reality.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="container max-w-[1240px] mx-auto grid md:grid-cols-2 md:mb-54 mb-36">
        <img
          className="w-[500px] mx-auto my-4 animate-slideInRight"
          src={social}
          alt="/"
        />
        <div className="flex flex-col justify-center animate-slideInLeft ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Social Media <br />
            Campaign
          </h1>
          <div className="w-[75px] h-[3px] bg-[#00df9a]"></div>
          <p className="mt-5">
            We are thrilled to launch our new social media campaign, and we want
            YOU to be a part of it! This campaign celebrates our amazing
            community by featuring personalized posters with your photos. It's
            time to shine and show the world your unique style and personality!
            How does it work? Simply share your favorite photo with us, and our
            team will create a stunning poster that incorporates your image
            using innovative photo masking techniques. Each poster is a work of
            art, designed to highlight the best moments and memories you
            cherish. Once your personalized poster is ready, we’ll share it
            across our social media channels. Don’t forget to tag us and use the
            campaign hashtag when you post it on your profile. Together, let’s
            create a vibrant gallery of beautiful, unique posters that showcase
            the diversity and creativity of our community. Join us in this
            exciting journey, and let’s make social media a more colorful and
            inspiring place! Share your photo today and be part of something
            truly special.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
