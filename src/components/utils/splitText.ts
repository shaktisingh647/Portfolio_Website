import anime from "animejs";

interface ParaElement extends HTMLElement {
  anim?: anime.AnimeInstance;
  split?: any; // Adjust this type based on your SplitText replacement
}

export default function setSplitText() {
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");



  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.pause();
      para.split?.revert();
    }

    // Replace SplitText functionality with your own logic
    para.split = {
      lines: para.innerHTML.split(" ").map((word) => `<span class="split-line">${word}</span>`).join(" "),
    };
    para.innerHTML = para.split.lines;

    para.anim = anime({
      targets: para.querySelectorAll(".split-line"),
      opacity: [0, 1],
      translateY: [80, 0],
      duration: 1200,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.pause();
      title.split?.revert();
    }

    // Replace SplitText functionality with your own logic
    title.split = {
      lines: title.innerHTML.split("").map((char) => `<span class="split-line">${char}</span>`).join(" "),
    };
    title.innerHTML = title.split.lines;

    title.anim = anime({
      targets: title.querySelectorAll(".split-line"),
      opacity: [0, 1],
      translateY: [80, 0],
      rotate: [10, 0],
      duration: 800,
      easing: "easeOutQuad",
      delay: anime.stagger(50),
    });
  });
}