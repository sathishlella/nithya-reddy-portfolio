"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function registerGSAP() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export function animateFadeUp(selector: string, stagger = 0.15) {
  gsap.fromTo(
    selector,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}

export function animateCounter(element: HTMLElement, target: number, suffix = "") {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    onUpdate() {
      element.textContent = Math.round(obj.value).toLocaleString() + suffix;
    },
  });
}

export function animateSkillTags(containerSelector: string) {
  gsap.fromTo(
    `${containerSelector} .skill-tag`,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      stagger: 0.06,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: containerSelector,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    }
  );
}

export function animateTimeline(containerSelector: string) {
  const items = document.querySelectorAll(`${containerSelector} .timeline-item`);
  items.forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

export function animateHeroName(element: HTMLElement) {
  const text = element.textContent || "";
  element.textContent = "";
  element.style.opacity = "1";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? " " : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    element.appendChild(span);
    return span;
  });

  gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration: 0.06,
    stagger: 0.05,
    ease: "power2.out",
    delay: 0.5,
  });
}
