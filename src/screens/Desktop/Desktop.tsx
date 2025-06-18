import { HeartIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";
import PageLoader from "../../components/ui/animations/PageLoader";
import PageReveal from "../../components/ui/animations/PageReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Navbar } from "../../components/ui/Navbar";
import { Link } from "react-router-dom";

// Navigation items data
const navItems = [
  { name: "All Products", href: "#" },
  { name: "Serum", href: "#" },
  { name: "Sunscreen", href: "#" },
  { name: "Bundle", href: "#" },
];

// Feature items data
const featureItems = [
  {
    id: "01",
    title: "Bio Ingredients",
    description:
      "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
  },
  {
    id: "02",
    title: "Everything Natural",
    description:
      "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
  },
  {
    id: "03",
    title: "All Handmade",
    description:
      "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
  },
];

// Product data
const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: "https://c.animaapp.com/mc171d2jh6zhlR/img/mask-group.png",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: "https://c.animaapp.com/mc171d2jh6zhlR/img/mask-group-2.png",
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: "https://c.animaapp.com/mc171d2jh6zhlR/img/mask-group-4.png",
  },
];

// Product categories
const productCategories = [
  { name: "NEW ARRIVAL", active: true },
  { name: "CLEANSING", active: false },
  { name: "ACNE FIGHTER", active: false },
  { name: "ANTI AGGING", active: false },
];

// FAQ items
const faqItems = [
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    isOpen: true,
  },
  {
    question: "Are your products safe for sensitive skin?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What's your return policy?",
    answer: "",
    isOpen: false,
  },
  {
    question: "Do you ship internationally?",
    answer: "",
    isOpen: false,
  },
  {
    question: "How do i choose the right product?",
    answer: "",
    isOpen: false,
  },
];

// Footer links
const footerLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pratyush-pandey1/", external: true },
  { name: "Instagram", href: "https://instagram.com/its.pratyush_pandey", external: true },
  { name: "YouTube", href: "https://www.youtube.com/@Codeforfunn", external: true },
];

const footerPolicies = [
  { name: "Terms of Service", href: "/terms-of-service", external: false },
  { name: "Privacy Policy", href: "/privacy-policy", external: false },
  { name: "Cookies Policy", href: "/cookies-policy", external: false },
];

export const Desktop = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <PageLoader onFinish={() => setLoading(false)} />}
      <PageReveal>
        <div
          className="bg-background flex flex-row justify-center w-full min-h-screen text-foreground transition-colors duration-300"
          data-model-id="2001:5"
        >
          <div className="bg-background overflow-hidden w-full max-w-[1920px] relative">
            {/* Premium Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative px-[100px] mt-[100px]">
              <div className="flex flex-row justify-between">
                <div className="max-w-[335px]">
                  <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#2d3b36] text-[100px] tracking-[-3.00px] leading-[90px] mt-[-83px]">
                    GLOW
                    <br />
                    NATUR-ALLY
                  </h1>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal mt-8">
                    Transform your skincare routine with premium products that
                    restore, protect, and enhance your nautural glow every day.
                  </p>
                  <Button className="mt-8 bg-[#2d3b36] text-[#eff5e1] rounded-[100px] h-[60px] w-[180px]">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-xl">
                      Shop Now
                    </span>
                  </Button>
                </div>

                <img
                  className="w-[223px] h-[220px] object-cover"
                  alt="Skin care beauty"
                  src="https://c.animaapp.com/mc171d2jh6zhlR/img/skin-care-beauty-cosmetic-packaging-design-agency-mumbai-delhi-b-1.png"
                />
              </div>

              <div className="relative mt-[100px]">
                <div className="absolute w-full h-[685px] left-0 top-0">
                  <h2 className="absolute top-[410px] left-0 font-extrabold text-[#2d3b36] text-[378px] [font-family:'Inter',Helvetica] tracking-[0] leading-normal whitespace-nowrap">
                    SKINCARE
                  </h2>

                  <img
                    className="absolute w-[610px] h-[676px] top-0 left-[673px] object-cover"
                    alt="Chatgpt image"
                    src="https://c.animaapp.com/mc171d2jh6zhlR/img/chatgpt-image-jun-15--2025--10-24-47-pm-2.png"
                  />

                  <div className="absolute w-[476px] h-[100px] top-[546px] left-[740px] bg-[#eff5e1] rounded-[200px] flex items-center">
                    <div className="absolute w-[90px] h-[90px] left-[5px] bg-[#eff5e1] rounded-[50px] border border-dashed border-[#2d3b36] flex items-center justify-center">
                      <img
                        className="w-20 h-20 object-cover"
                        alt="Skin care beauty"
                        src="https://c.animaapp.com/mc171d2jh6zhlR/img/skin-care-beauty-cosmetic-packaging-design-agency-mumbai-delhi-b-1.png"
                      />
                    </div>
                    <p className="absolute left-[132px] [font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal">
                      While giving you an invigorating cleansing experience.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <main className="mt-[1257px] bg-[#fefff4] w-full">
              {/* Introduction Section */}
              <section className="px-[100px] pt-[99px]">
                <p className="[font-family:'Inter',Helvetica] font-normal text-[53px] tracking-[-1.86px] leading-[78px]">
                  <span className="text-[#2d3b36] tracking-[-0.98px]">
                    Experience the ultimate in skincare with our expertly formulated
                    products,
                    <br />
                    crafted to nourish, protect, and rejuvenate your skin. Combining
                    the finest
                    <br />
                    natural ingredients with{" "}
                  </span>
                  <span className="text-[#2d3b364c] tracking-[-0.98px]">
                    advanced science, our collection ensures every
                    <br />
                    skin type can achieve a radiant, healthy glow. Embrace your
                    beauty with
                    <br />
                    confidence every day. Experience the ultimate in skincare with
                    our <br />
                    expertly formulated products, crafted to nourish, protect, and
                    rejuvenate
                    <br />
                    your skin.
                  </span>
                </p>

                <h2 className="mt-[100px] [font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px] leading-normal">
                  YOUR SKIN DESERVES <br />
                  THE BEST CARE.
                </h2>

                <p className="mt-[30px] [font-family:'Inter',Helvetica] font-normal text-[#525349] text-lg tracking-[-0.36px] leading-6">
                  Discover a curated collection of skincare products designed to
                  rejuvenate,
                  <br />
                  protect, and pamper your skin. Explore our rage crafted with love
                  backed
                  <br />
                  by science, and inspired by nature.
                </p>

                <Badge className="mt-[50px] w-[260px] h-[60px] bg-[#fefff4] rounded-[100px] border border-solid border-[#2d3b36] flex items-center justify-start px-[18px] py-5 hover:bg-[#fefff4]">
                  <div className="w-5 h-5 rounded-[10px] bg-[#2d3b36] mr-[20px]"></div>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal whitespace-nowrap">
                    Why Our Products
                  </span>
                </Badge>
              </section>

              {/* Features Section */}
              <section className="px-[100px] mt-[50px]">
                {featureItems.map((item, index) => (
                  <div key={index} className="mb-[50px]">
                    <div className="flex items-start gap-[50px]">
                      <span className="bg-[linear-gradient(180deg,rgba(41,51,48,1)_0%,rgba(254,255,244,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] leading-normal whitespace-nowrap">
                        {item.id}
                      </span>
                      <div>
                        <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px] leading-normal whitespace-nowrap">
                          {item.title}
                        </h3>
                        <p className="mt-[20px] [font-family:'Inter',Helvetica] font-normal text-[#525349] text-lg tracking-[-0.36px] leading-6">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              {/* Image Section */}
              <section className="relative mt-[50px] ml-[971px] w-[849px] h-[1081px]">
                <div className="absolute w-full h-full bg-[url(https://c.animaapp.com/mc171d2jh6zhlR/img/chatgpt-image-jun-15--2025--11-52-20-pm-1.png)] bg-cover bg-[50%_50%]">
                  <div className="absolute bottom-[81px] left-[56px] flex items-center">
                    <div className="relative">
                      <div className="w-[90px] h-[90px] rounded-[50px] border border-dashed border-[#2d3b36]"></div>
                      <div className="absolute w-20 h-20 top-[5px] left-[5px] bg-[#2d3b36] rounded-[200px] flex items-center justify-center">
                        <img
                          className="w-[50px] h-[50px]"
                          alt="Award svgrepo com"
                          src="https://c.animaapp.com/mc171d2jh6zhlR/img/award-svgrepo-com-1.svg"
                        />
                      </div>
                    </div>
                    <div className="ml-[26px] w-[400px] h-[100px] bg-[#eff5e1] rounded-[200px] flex items-center pl-[65px]">
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal">
                        Best Skin Care Product
                        <br />
                        Award Wining
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Selling Products Section */}
              <section className="px-[100px] mt-[100px]">
                <div className="flex justify-between items-center">
                  <Badge className="w-[290px] h-[60px] bg-[#fefff4] rounded-[100px] border border-solid border-[#2d3b36] flex items-center justify-start px-[19px] py-5 hover:bg-[#fefff4]">
                    <div className="w-5 h-5 rounded-[10px] bg-[#2d3b36] mr-[20px]"></div>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal whitespace-nowrap">
                      Best Selling Products
                    </span>
                  </Badge>

                  <div className="flex items-center gap-[20px]">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-0.40px] leading-normal whitespace-nowrap">
                      SINCE 2001
                    </span>
                    <div className="flex items-center gap-[20px]">
                      <button className="w-20 h-20 rounded-[40px] border border-solid border-[#2d3b36] flex items-center justify-center">
                        <img
                          className="w-[41px] h-[15px]"
                          alt="Arrow"
                          src="https://c.animaapp.com/mc171d2jh6zhlR/img/arrow-2.svg"
                        />
                      </button>
                      <button className="w-20 h-20 rounded-[40px] bg-[#2d3b36] flex items-center justify-center">
                        <img
                          className="w-[42px] h-[15px]"
                          alt="Arrow"
                          src="https://c.animaapp.com/mc171d2jh6zhlR/img/arrow-1.svg"
                        />
                      </button>
                    </div>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-0.40px] leading-normal whitespace-nowrap">
                      LEARN MORE
                    </span>
                  </div>
                </div>

                <h2 className="mt-[30px] text-center [font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px] leading-normal">
                  Skincare That Brings Out
                  <br />
                  Your Natural Radiance
                </h2>

                <div className="flex gap-[25px] mt-[50px]">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      className="w-[560px] h-[770px] bg-cover bg-center rounded-none"
                      style={{ backgroundImage: `url(${product.image})` }}
                    >
                      <CardContent className="p-0">
                        <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                          <div className="w-full h-[100px] bg-[#fefff4] rounded-[10px] flex items-center justify-between px-[20px]">
                            <div>
                              <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-1.00px] leading-normal whitespace-nowrap">
                                {product.name}
                              </h3>
                              <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b3680] text-base tracking-[-0.80px] leading-normal whitespace-nowrap mt-[10px]">
                                {product.price}
                              </p>
                            </div>
                            <button className="w-20 h-20 bg-[#2d3b361a] rounded-[10px] flex items-center justify-center">
                              <img
                                className="w-[30px] h-[30px]"
                                alt="Cart large svgrepo"
                                src="https://c.animaapp.com/mc171d2jh6zhlR/img/cart-large-2-svgrepo-com-4.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Full Width Image Section */}
              <section className="mt-[100px] px-[100px]">
                <div className="relative w-full h-[1146px]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Model"
                    src="https://c.animaapp.com/mc171d2jh6zhlR/img/model.png"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[400px] rounded-[30px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(41,51,48,1)_100%)] flex flex-col items-center justify-end pb-[70px]">
                    <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#fefff4] text-[80px] text-center tracking-[-1.60px] leading-normal">
                      Feel Beautiful Inside and Out
                      <br />
                      with Every Product.
                    </h2>
                    <Button className="mt-[40px] w-[180px] h-[60px] bg-[#fefff4] rounded-[100px] text-[#2d3b36]">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-xl tracking-[0] leading-normal whitespace-nowrap">
                        Shop Now
                      </span>
                    </Button>
                  </div>
                </div>
              </section>

              {/* Product Categories Section */}
              <section className="px-[100px] mt-[100px]">
                <h2 className="text-center [font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px] leading-normal">
                  Feel Beautiful Inside and Out
                  <br />
                  with Every Product.
                </h2>

                <div className="flex gap-[20px] justify-center mt-[50px]">
                  {productCategories.map((category, index) => (
                    <Button
                      key={index}
                      variant={category.active ? "default" : "outline"}
                      className={`h-[60px] px-[30px] rounded-[100px] ${
                        category.active
                          ? "bg-[#2d3b36] text-[#fefff4]"
                          : "bg-[#fefff4] text-[#2d3b36] border-[#2d3b36]"
                      }`}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-normal text-xl tracking-[0] leading-normal whitespace-nowrap">
                        {category.name}
                      </span>
                    </Button>
                  ))}
                </div>

                <div className="flex gap-[25px] mt-[50px]">
                  {products.map((product, index) => (
                    <Card
                      key={`second-${product.id}`}
                      className="w-[560px] h-[770px] bg-cover bg-center rounded-none"
                      style={{
                        backgroundImage: `url(${product.image.replace(
                          ".png",
                          index === 1
                            ? "-3.png"
                            : index === 2
                            ? "-5.png"
                            : "-1.png"
                        )})`,
                      }}
                    >
                      <CardContent className="p-0">
                        <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                          <div className="w-full h-[100px] bg-[#fefff4] rounded-[10px] flex items-center justify-between px-[20px]">
                            <div>
                              <h3 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[-1.00px] leading-normal whitespace-nowrap">
                                {product.name}
                              </h3>
                              <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b3680] text-base tracking-[-0.80px] leading-normal whitespace-nowrap mt-[10px]">
                                {product.price}
                              </p>
                            </div>
                            <button
                              className={`w-20 h-20 rounded-[10px] flex items-center justify-center ${
                                index === 1 ? "bg-[#2d3b36]" : "bg-[#2d3b361a]"
                              }`}
                            >
                              <img
                                className="w-[30px] h-[30px]"
                                alt="Cart large svgrepo"
                                src="https://c.animaapp.com/mc171d2jh6zhlR/img/cart-large-2-svgrepo-com-4.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="px-[100px] mt-[100px] flex gap-[150px]">
                <div className="w-[850px] h-[900px] relative bg-[url(https://c.animaapp.com/mc171d2jh6zhlR/img/mask-group-6.png)] bg-cover">
                  <div className="absolute bottom-[39px] left-[225px] flex items-center">
                    <div className="relative">
                      <div className="w-[90px] h-[90px] rounded-[50px] border border-dashed border-[#2d3b36]"></div>
                      <div className="absolute w-20 h-20 top-[5px] left-[5px] bg-[#2d3b36] rounded-[200px] flex items-center justify-center">
                        <div className="w-10 h-10 bg-[url(https://c.animaapp.com/mc171d2jh6zhlR/img/headphone-fill.png)] bg-[100%_100%]"></div>
                      </div>
                    </div>
                    <div className="ml-[26px] w-[306px] h-[100px] bg-[#eff5e1] rounded-[200px] flex items-center pl-[65px]">
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal">
                        24/7 We're Here
                        <br />
                        to Help You
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-6xl tracking-[-1.20px] leading-normal">
                    Answers to Your
                    <br />
                    Skincare Questions, All
                    <br />
                    in One Place.
                  </h2>

                  <Badge className="mt-[50px] w-[341px] h-[60px] bg-[#fefff4] rounded-[100px] border border-solid border-[#2d3b36] flex items-center justify-start px-[18px] py-5 hover:bg-[#fefff4]">
                    <div className="w-5 h-5 rounded-[10px] bg-[#2d3b36] mr-[20px]"></div>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal whitespace-nowrap">
                      Frequently Asked Question
                    </span>
                  </Badge>

                  <Accordion
                    type="single"
                    collapsible
                    className="mt-[40px] w-[600px]"
                  >
                    {faqItems.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="mb-[10px] border border-solid border-[#2d3b36] rounded-[5px]"
                      >
                        <AccordionTrigger className="px-[29px] py-[25px] [font-family:'Inter',Helvetica] font-normal text-[#2d3b36] text-xl tracking-[0] leading-normal">
                          {item.question}
                        </AccordionTrigger>
                        {item.answer && (
                          <AccordionContent className="px-[29px] pb-[25px] [font-family:'Inter',Helvetica] font-normal text-[#525349] text-sm tracking-[-0.70px] leading-normal">
                            {item.answer}
                          </AccordionContent>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="mt-[100px] bg-[#2d3b36] text-[#e7e8e0] py-[100px] px-[100px] relative overflow-hidden shadow-2xl border-t border-[#e7e8e0]/10">
              {/* Brand and Social Section */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 z-10 relative">
                {/* Brand Logo/Name */}
                <div className="flex flex-col items-center md:items-start gap-4">
                  <span className="text-4xl font-extrabold tracking-tight text-[#fefff4] mb-2 select-none">SKINCARE</span>
                  <span className="text-base text-[#e7e8e0]/70 font-medium">Premium Natural Beauty</span>
                  {/* Social Icons */}
                  <div className="flex gap-4 mt-4">
                    {footerLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="hover:text-pink-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-full p-2 bg-[#e7e8e0]/10 hover:bg-[#e7e8e0]/20"
                        aria-label={link.name}
                      >
                        {/* Use icons for social links if available, fallback to name */}
                        {link.name === 'LinkedIn' && (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.87 0-2.156 1.46-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/></svg>
                        )}
                        {link.name === 'Instagram' && (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                        )}
                        {link.name === 'YouTube' && (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.163 3.5 12 3.5 12 3.5s-7.163 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.414 0 12 0 12s0 3.586.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.837 20.5 12 20.5 12 20.5s7.163 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.586 24 12 24 12s0-3.586-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        )}
                        {/* Fallback to text if no icon */}
                        {link.name !== 'LinkedIn' && link.name !== 'Instagram' && link.name !== 'YouTube' && link.name}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Policy Links */}
                <div className="flex flex-col items-center md:items-end gap-4">
                  <div className="flex gap-6 text-base font-semibold">
                    {footerPolicies.map((policy) =>
                      policy.external ? (
                        <a
                          key={policy.name}
                          href={policy.href}
                          className="hover:text-pink-400 transition-colors duration-200 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-lg px-2 py-1 premium-shadow"
                        >
                          {policy.name}
                        </a>
                      ) : (
                        <Link
                          key={policy.name}
                          to={policy.href}
                          className="hover:text-pink-400 transition-colors duration-200 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-lg px-2 py-1 premium-shadow"
                        >
                          {policy.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
              {/* Divider */}
              <div className="my-10 border-t border-[#e7e8e0]/20"></div>
              {/* Copyright */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 z-10 relative">
                <span className="text-sm text-[#e7e8e0]/60">&copy; {new Date().getFullYear()} SKINCARE. All rights reserved.</span>
                <span className="text-xs text-[#e7e8e0]/40">Designed by Pratyush Pandey</span>
              </div>
              {/* Large background text for premium feel */}
              <div className="absolute bottom-0 left-0 right-0 font-bold text-[#3d4b4680] text-[420px] [font-family:'Inter',Helvetica] tracking-[0] leading-normal whitespace-nowrap pointer-events-none select-none z-0">
                SKINCARE
              </div>
            </footer>
          </div>
        </div>
      </PageReveal>
    </>
  );
};

// --- Policy Pages (Premium Placeholder) ---
export const TermsOfService = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-fuchsia-50 text-[#2d3b36]">
    <h1 className="text-5xl font-extrabold mb-6">Terms of Service</h1>
    <p className="max-w-2xl text-lg text-center">
      This is a premium placeholder for the Terms of Service page. Please update
      with your content.
    </p>
  </div>
);

export const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-fuchsia-50 text-[#2d3b36]">
    <h1 className="text-5xl font-extrabold mb-6">Privacy Policy</h1>
    <p className="max-w-2xl text-lg text-center">
      This is a premium placeholder for the Privacy Policy page. Please update
      with your content.
    </p>
  </div>
);

export const CookiesPolicy = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-fuchsia-50 text-[#2d3b36]">
    <h1 className="text-5xl font-extrabold mb-6">Cookies Policy</h1>
    <p className="max-w-2xl text-lg text-center">
      This is a premium placeholder for the Cookies Policy page. Please update
      with your content.
    </p>
  </div>
);
