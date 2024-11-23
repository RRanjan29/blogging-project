// Add Blog Posts Dynamically
const postList = document.getElementById('postList');

// Sample blog posts
const posts = [
  { title: 'My First Blog Post', content: 'This is my first blog post. Welcome to my blog!' },
  { title: 'Why I Love Coding', content: 'Coding is not just a skill, it’s a passion.' },
  { title: 'Travel Tips for Beginners', content: 'Planning a trip? Here are some tips to get started.' },
];

// Render posts
posts.forEach(post => {
  const li = document.createElement('li');
  li.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
  postList.appendChild(li);
});

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    document.getElementById('successMessage').textContent = 'Thank you for reaching out!';
    document.getElementById('contactForm').reset();
  } else {
    document.getElementById('successMessage').textContent = 'Please fill out all fields.';
  }
});
