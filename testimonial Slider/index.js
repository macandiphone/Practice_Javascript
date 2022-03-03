const testimonials = [
  {
    name: "Alexine A",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    text: `Not able to tell you how happy I am with apple. I would be lost without
        apple. I like apple more and more each day because it makes my life a
        lot easier. You've saved our business!`,
  },
  {
    name: "Hannah Busing",
    photoUrl:
      "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    text: `I STRONGLY recommend apple to EVERYONE interested in running a successful online business! The very best. Apple was worth a fortune to my company.`,
  },
  {
    name: "Alexander Hipp",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    text: `You've saved our business! Buy this now. I would like to personally thank you for your outstanding product. It's just amazing.`,
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEL = document.querySelector(".username");

let index = 0;
updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[index];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEL.innerText = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
